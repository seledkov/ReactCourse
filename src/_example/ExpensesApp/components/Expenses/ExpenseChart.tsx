import React from 'react';
import Chart from '../Chart/Chart';
const ExpenseChart = (props: any) => {
  //const dataItems for chart
  const dataItems = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // get mounth for dataItem

  for (const item of props.filteredExtenses) {
    const index = item.date.getMonth();
    console.log('month', index);
    dataItems[index].value += item.amount;
  }

  return <Chart dataItems={dataItems} />;
};

export default ExpenseChart;
