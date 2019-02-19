import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts-liquidfill';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import './js/china';

class ChinaMap extends Component {

  componentDidMount(){
    this.getChinaMap();
  }

  componentDidUpdate() {
    this.getChinaMap();
  }

  getChinaMap = () => {
    const {id, theme, title, visualMap, yAxis, series} = this.props;
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById(id));

    const option = {
      textStyle: {
        color: theme.color
      },
      title: [
        {
          text: title[0].text,
          subtext: title[0].subtext,
          left: 'left',
          textStyle: {
            color: title.color
          }
        },
        {
          text: title[1].text,
          subtext: title[1].subtext,
          right:500,
          top: 10,
          textStyle: {
            color: title.color,
            fontSize: 10
          }
        }
      ],
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        type: 'continuous',
        showLabel: true,
        min: visualMap.min,
        max: visualMap.max,
        left: 'left',
        bottom: 47,
        text: ['高', '低'],
        calculable: true,
        inRange: {
          color: visualMap.inRange.color
        },
        dimension: 0,
        splitNumber: 0,
        textStyle: {
          color: theme.color
        }
      },
      grid: {
        right: '30%',
        width: '30%'
      },
      xAxis: [{
        position: 'top',
        type: 'value',
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
      }],
      yAxis: [{
        type: 'category',
        data: yAxis.data,
        axisTick: {
          alignWithLabel: true
        }
      }],
      series: [{
        z: 1,
        name: series.name,
        type: 'map',
        map: 'china',
        left: 'left',
        top: 20,
        width: '40%',
        zoom: series.zoom,
        label: {
          emphasis: {
            show: true
          },
        },
        // roam: true,
        data: series.data
      }, {
        name: series.name,
        z: 2,
        type: 'bar',
        barWidth: 18,
        label: {
          normal: {
            show: true,
            position: 'right'
          },
          emphasis: {
            show: true
          },
        },
        data: series.topData
      }]
    };
    myChart.setOption(option);
  }

  render() {
    const {id, theme} = this.props;
    return (
      <div id={id} style={{width: theme.width, height: theme.height}} />
    );
  }
}

export default ChinaMap;
