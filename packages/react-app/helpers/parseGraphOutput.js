export const parseGraphOutput = graph => {
  const gridData = [];
  const { data } = graph;
  console.log(graph);
  const dataPoints = Object.keys(data);
  dataPoints.forEach(dataPoint => {
    const value = data[dataPoint];
    if (Array.isArray(value) && value.length > 0) {
      gridData.push({
        title: dataPoint,
        dataList: value,
      });
    }
  });
  return gridData;
};
