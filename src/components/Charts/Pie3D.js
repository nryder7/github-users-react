import React from 'react';

import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        numberSuffix: 'K',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',

        // change font size per axis
        // xAxisNameFontSize: '24px',
        // yAxisNameFontSize: '24px',

        // hide percent values
        // showPercentValues:0;

        // provide color options
        // paletteColors: '#fff',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
