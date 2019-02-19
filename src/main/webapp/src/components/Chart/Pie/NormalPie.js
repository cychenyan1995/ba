import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

class Pie extends Component{
  componentDidMount(){
    this.getPie();
  }

  componentDidUpdate(){
   this.getPie();
  }

  getPie = () => {
    const {data} = this.props;// 接受父组件的传值
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('pie'));

    const option = {
      title : {
        text: data.title,
        /* subtext: '纯属虚构', */
        x:'left'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        data: data.legendData
      },
      series : [
        {
          name: data.title,
          type: 'pie',
          radius : '55%',
          center: ['40%', '50%'],
          data: data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      color: data.color
    };
    myChart.setOption(option);
  }

  render(){
    const {data} = this.props;
    console.log(data);
    return(
      <div id="pie" style={{width:'100%',height:'350px'}} />
    )
  }
}

export default Pie
