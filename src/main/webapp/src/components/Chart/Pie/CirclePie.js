import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

class Circle extends Component{
  componentDidMount(){
    this.getCircle();
  }

  componentDidUpdate(){
    this.getCircle();
  }

  getCircle = () => {
    const myChart = echarts.init(document.getElementById('circle'));
    const {data} = this.props;
    const option ={
      title : {
        text: data.title,
        /* subtext: '纯属虚构', */
        x:'left'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        data: data.legendData
      },
      series: [
        {
          name:data.title,
          type:'pie',
          radius: ['50%', '60%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              // position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data:data.data
        }
      ],
      color :data.color
    };
    myChart.setOption(option);
  }

  render(){
    return(
      <div id="circle" style={{width:'100%',height:'350px'}}></div>
    )
  }
}

export default Circle
