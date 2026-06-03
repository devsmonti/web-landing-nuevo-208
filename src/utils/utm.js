const BLOCKED_UTM_SOURCE = "Diario Castellanos Agosto2023";
const BLOCKED_UTM_MEDIUM = "208 Convencional 240x200";

export function normalizeUtm(value) {
  if (value == null || value === "") return null;
  try {
    return decodeURIComponent(String(value).replace(/\+/g, " ")).trim();
  } catch {
    return String(value).replace(/\+/g, " ").trim();
  }
}

export function isBlockedUtm(source, medium) {
  return (
    normalizeUtm(source) === BLOCKED_UTM_SOURCE &&
    normalizeUtm(medium) === BLOCKED_UTM_MEDIUM
  );
}

export function purgeBlockedUtmFromStorage() {
  const storedSource = sessionStorage.getItem("utm_source");
  const storedMedium = sessionStorage.getItem("utm_medium");
  if (isBlockedUtm(storedSource, storedMedium)) {
    sessionStorage.removeItem("utm_source");
    sessionStorage.removeItem("utm_medium");
  }
}

export function stripBlockedUtmFromUrl() {
  purgeBlockedUtmFromStorage();
  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source");
  const utm_medium = params.get("utm_medium");

  if (!isBlockedUtm(utm_source, utm_medium)) {
    return false;
  }

  purgeBlockedUtmFromStorage();
  params.delete("utm_source");
  params.delete("utm_medium");

  const query = params.toString();
  const path = window.location.pathname.replace(/\/?$/, "/");
  const newUrl = `${path}${query ? `?${query}` : ""}${window.location.hash}`;

  window.history.replaceState(null, "", newUrl);
  return true;
}

export function persistUtmFromParams(params) {
  if (!params) return;
  const utm_source = params.get("utm_source");
  const utm_medium = params.get("utm_medium");
  if (isBlockedUtm(utm_source, utm_medium)) {
    purgeBlockedUtmFromStorage();
    return;
  }
  if (utm_source) {
    sessionStorage.setItem("utm_source", utm_source);
  }
  if (utm_medium) {
    sessionStorage.setItem("utm_medium", utm_medium);
  }
}

export function getUtmFromUrlOrStorage() {
  stripBlockedUtmFromUrl();
  purgeBlockedUtmFromStorage();
  const query = new URLSearchParams(window.location.search);
  const utm_source = query.get("utm_source") || sessionStorage.getItem("utm_source");
  const utm_medium = query.get("utm_medium") || sessionStorage.getItem("utm_medium");
  if (isBlockedUtm(utm_source, utm_medium)) {
    purgeBlockedUtmFromStorage();
    return { utm_source: null, utm_medium: null };
  }
  return { utm_source, utm_medium };
}
