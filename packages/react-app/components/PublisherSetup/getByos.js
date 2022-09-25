export const getByos = field => {
  if (typeof field !== "string") {
    field = "";
  }
  try {
    const byosMatch = field.match(/rm3-byos-.*-rm3-byos/i);
    if (Array.isArray(byosMatch) && byosMatch.length > 0) {
      const byosFormat = byosMatch[0];
      const byos = byosFormat.replace("rm3-byos-", "").replace("-rm3-byos", "");
      const decodedByos = atob(byos);
      return JSON.parse(decodedByos);
    }
  } catch (e) {
    return;
  }
};
