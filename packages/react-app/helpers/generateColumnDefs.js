import flatten from "flat";

export const generateColumnDefs = dataList => {
  const columnSet = new Set();
  const typeMap = {};
  if (dataList.length > 0) {
    dataList.forEach(data => {
      const flattenedData = flatten(data);
      Object.keys(flattenedData).forEach(key => {
        columnSet.add(key);
        if (typeof flattenedData[key] === "number") {
          typeMap[key] = "agNumberColumnFilter";
        }
      });
    });
  }
  const columnDefs = [...columnSet].map((columnKey, index) => {
    let columnDef = { field: columnKey, filter: typeMap[columnKey], sortingOrder: ["asc", "desc"] };
    if (index === 0) {
      columnDef = {
        ...columnDef,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
      };
    }
    return columnDef;
  });
  return columnDefs;
};
