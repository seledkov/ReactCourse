import React from 'react';
import Chart from '../Chart/Chart';
const ExpenseChart = (props: any) => {
  //const dataItems for chart
  const dataItems = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Marh', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'June', value: 0 },
    { label: 'Jule', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sept', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // get mounth for dataItem

  for (const item of props.expenses) {
    const index = item.date.getMonth()!;
    console.log(index);
    dataItems[index].value = item.amount;
  }

  // calc maxValue for chartBar height

  const dataItemsValue = props.expenses.map((dataItem: any) => dataItem.amount);
  const maxValue = Math.max(...dataItemsValue);

  //   return <Chart />;
  return <Chart dataItems={dataItems} maxValue={maxValue} />;
};

export default ExpenseChart;
