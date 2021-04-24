import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props: any) => {
  const maxValue = props.maxValue;
  console.log(maxValue);
  return (
    <div className='char'>
      {props.dataItems.map((dataItem: any) => {
        console.log(dataItem);
        return (
          <ChartBar
            value={dataItem.value}
            key={dataItem.label}
            label={dataItem.label}
            maxValue={maxValue}
          />
        );
      })}
      <ChartBar />
    </div>
  );
};

export default Chart;
