import React from 'react';

const ChartBar = (props: any) => {
  let barFillHeight: string = '0%';
  if (props.value > 0) {
    barFillHeight =
      Math.round((props.value / props.maxValue) * 100).toString() + '%';
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight, backgroundColor: 'red' }}>
          {props.value}
        </div>
      </div>
      <div className='chart-bar__label'> {props.label}</div>
    </div>
  );
};

export default ChartBar;
