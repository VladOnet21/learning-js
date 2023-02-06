const monitorCount = (rows, columns) => rows * columns;
const costOfMonitors = (rows, columns) => monitorCount(rows, columns) * 200;

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
