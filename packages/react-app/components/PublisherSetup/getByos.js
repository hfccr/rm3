export const getByos = field => {
  if (typeof field !== "string") {
    field = "";
  }
  try {
    const byosMatch = field.match(/byos-.*-byos/i);
    if (Array.isArray(byosMatch) && byosMatch.length > 0) {
      const byosFormat = byosMatch[0];
      const byos = byosFormat.replace("byos-", "").replace("-byos", "");
      const decodedByos = byos;
      return JSON.parse(decodedByos);
    }
  } catch (e) {
    return;
  }
};
