export const groupByProject = (data) => {
  return data
    .map((val) => val["projectId"])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(data[i]);
      return acc;
    }, {});
};
