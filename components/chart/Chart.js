import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const Chart = () => {
  const data = [
    {
      type: 'January',
      sales: 3,
    },
    {
      type: 'Febuary',
      sales: 1,
    },
    {
      type: 'March',
      sales: 6,
    },
    {
      type: 'April',
      sales: 7,
    },
    {
      type: 'May',
      sales: 8,
    },
    {
      type: 'June',
      sales: 9,
    },
    {
      type: 'July',
      sales: 8,
    },
    {
      type: 'August',
      sales: 2,
    },
    {
      type: 'September',
      sales: 0,
    },
    {
      type: 'October',
      sales: 0,
    },
    {
      type: 'November',
      sales: 0,
    },
    {
      type: 'December',
      sales: 0,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color:'	#03d3b5',
    // tooltip: {
    //   customContent: () => {
    //     return <h1>hii</h1>
    //   }
    // },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#ffffff',
        opacity: 0.8,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'year',
      },
      sales: {
        alias: 'sales Per-Month',
      },
    },
  };
  return <Column {...config} />;
};

export default Chart


