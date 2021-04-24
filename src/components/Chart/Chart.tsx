import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props: any) => {
  // calc maxValue for chartBar height

  const dataItemsValue = props.dataItems.map((dataItem: any) => dataItem.value);
  const totalMaximum = Math.max(...dataItemsValue);

  console.log('max value', totalMaximum);
  return (
    <div className='chart'>
      {props.dataItems.map((dataItem: any) => (
        <ChartBar
          key={dataItem.label}
          value={dataItem.value}
          maxValue={totalMaximum}
          label={dataItem.label}
        />
      ))}
    </div>
  );
};

export default Chart;
