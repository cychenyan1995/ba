import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class Ratio extends Component{
  componentDidMount(){
    this.getRatio();
  }

  componentDidUpdate(){
    this.getRatio();
  }

  getRatio = () => {
    const myChart = echarts.init(document.getElementById('ratio'));
    // 数组从后往前取
    const grayBar = [1, 1, 1, 1, 1];
    const {baifenbi, age, title,color} = this.props.data;
    const option = {
      title: {
        text: title,
        left: 'left'
      },
      color : color, // 进度条颜色
      xAxis: [{
        show: false,
      },
        // 由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
          show: false,
        }
      ],
      yAxis: {
        type: 'category',
        axisLabel: {
          show: true, // 让Y轴数据不显示
          color: '#00C5CD',
          fontSize: 20,
          padding: [5, 5, 5, 5]
        },
        itemStyle: {

        },
        axisTick: {
          show: false, // 隐藏Y轴刻度
        },
        axisLine: {
          show: false, // 隐藏Y轴线段
        },
      },
      series: [
        // 背景色--------------------我是分割线君------------------------------//
        {
          show: true,
          type: 'bar',
          barGap: '-100%',
          barWidth: '25%', // 统计条宽度
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              color: '#e4e4e4'
            },
          },
          z: 1,
          data: grayBar,
        },
        // 蓝条--------------------我是分割线君------------------------------//
        {
          show: true,
          type: 'bar',
          barGap: '-100%',
          barWidth: '25%', // 统计条宽度
          itemStyle: {
            normal: {
              barBorderRadius: 20, // 统计条弧度
              color: {

                colorStops: [{
                  offset: 0,
                  color : color // 0% 处的颜色
                }, {
                  offset: 1,
                  color : color // 100% 处的颜色
                }],
                globalCoord: false, // 缺省为 false

              }
            },
          },
          max: 1,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff', // 百分比颜色
              },
              position: 'inside',
              // 百分比格式
              formatter: function(data) {
                return (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
              },
            }
          },
          labelLine: {
            show: false,
          },
          z: 2,
          data: baifenbi,
        },
        // 数据条--------------------我是分割线君------------------------------//
        {
          show: true,
          type: 'bar',
          xAxisIndex: 1, // 代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
          barGap: '-100%',
          barWidth: '30%', // 统计条宽度
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              color: 'rgba(22,203,115,0.05)'
            },
          },
          label: {
            normal: {
              show: true,
              // label 的position位置可以是top bottom left,right,也可以是固定值
              // 在这里需要上下统一对齐,所以用固定值
              position: [0, '-100%'],
              rich: { // 富文本
                black: { // 自定义颜色
                  color: '#000',
                },
                green: {
                  color: '#70DDA7',
                },
                yellow: {
                  color: '#FEC735',
                },
              },
              formatter: function(data) {
                // 富文本固定格式{colorName|这里填你想要写的内容}
                // return paiming[data.dataIndex] == 1 ? '{start1|}{yellow|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|    总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}' : ' {start2|}{black|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}';
                return '{black|'+age[data.dataIndex]+'}'
              },
            }
          },
          data: grayBar
        }

      ]
    };
    myChart.setOption(option);
  }

  render(){
    return(

      <div id="ratio" style={{width:'100%',height:'350px'}}></div>
    )
  }
}
export default Ratio
