import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class LineChart extends Component{
  componentDidMount(){
    this.getLineChart();
  }

  componentDidUpdate(){
    this.getLineChart();
  }

  getLineChart = () => {
    const myChart = echarts.init(document.getElementById('lineChart'));
    const {data} = this.props;
    const option ={
      title: {
        text: data.title,
        x: 'left'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: data.xValue
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data.yValue,
        type: 'line',
        showSymbol: false,
      }],
      color : data.color
    };
    myChart.setOption(option);
    return null;
  }

  render(){
    return(
      <div id="lineChart" style={{width:'100%',height:'350px'}}></div>
    )
  }
}

export default LineChart
