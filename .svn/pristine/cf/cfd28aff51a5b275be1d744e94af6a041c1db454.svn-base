import React, {Component} from 'react';
import PieDetail from './components/PieDetail';
import LineChartDetail from './components/LineChartDetail';
import RatioDetail from './components/RatioDetail';
import CircleDetail from "./components/CircleDetail";
import ColorMap from "./components/MapDetail";
import {Row, Col, Card} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


class UserPortrait extends Component{
  constructor (props){
    super(props);
  }

  render(){

    // 区域分布
  //   const citydata=[
  //     {name: "天津", value: 22}        ,
  //     {name: "陕西", value: 51}        ,
  //     {name: "青海", value: 53}        ,
  //     {name: "四川", value: 76}        ,
  //     {name: "内蒙古", value: 83}      ,
  //     {name: "西藏", value: 92}        ,
  //     {name: "湖南", value: 92}        ,
  //     {name: "山东", value: 95}        ,
  //     {name: "香港", value: 178}       ,
  //     {name: "江西", value: 185}       ,
  //     {name: "重庆", value: 211}      ,
  //     {name: "台湾", value: 220}      ,
  //     {name: "黑龙江", value: 270}    ,
  //     {name: "贵州", value: 298}      ,
  //     {name: "广东", value: 304}      ,
  //     {name: "甘肃", value: 417}      ,
  //     {name: "宁夏", value: 419}      ,
  //     {name: "海南", value: 420}      ,
  //     {name: "河北", value: 437}      ,
  //     {name: "安徽", value: 488}      ,
  //     {name: "山西", value: 496}      ,
  //     {name: "澳门", value: 522}      ,
  //     {name: "云南", value: 613}      ,
  //     {name: "福建", value: 627}      ,
  //     {name: "广西", value: 737}      ,
  //     {name: "新疆", value: 825}      ,
  //     {name: "吉林", value: 829}      ,
  //     {name: "北京", value: 834}      ,
  //     {name: "辽宁", value: 846}      ,
  //     {name: "湖北", value: 886}      ,
  //     {name: "上海", value: 888}      ,
  //     {name: "浙江", value: 951}      ,
  //     {name: "江苏", value: 972}      ,
  //     {name: "河南", value: 995}      ,
  //   ];
  //   const titledata = [];
  //   const bartop10 = [];
  //   function NumDescSort(a,b){
  //     return b.value-a.value;
  //   }
  //   function NumAsceSort(a,b){
  //     return a.value-b.value;
  //   }

  //   // 先进行一次降序排序，找出最大的前十个
  //   citydata.sort(NumDescSort);

  //   for (let i = 0; i < 10; i ++) {
  //     const top10 = {
  //       name: citydata[i].name,
  //       value: citydata[i].value
  //     };
  //     bartop10.push(top10);
  //     // dataShadow.push(yMax);
  //   }

  //   bartop10.sort(NumAsceSort);
  //   for (let i = 0; i < bartop10.length; i ++) {
  //     titledata.push(bartop10[i].name);
  //   }

  //   const mapDetail = {
  //     id : 'colorMap',
  //     theme : {
  //       color:"black",
  //       width:window.innerWidth,
  //       height:550
  //   },

  //   title :[{
  //         text: '区域分布',
  //         color:'black'
  //       }, {
  //         show: true,
  //         text: 'TOP 10 排行榜',
  //         color:'#666666',
  //         right:'40',
  //         textStyle: {
  //           color: '#666666',
  //           fontSize: 14
  //         }
  //   }],
  //       visualMap:{
  //           min:0,
  //           max:1000,
  //           inRange:{
  //           color:['#67e0e3', '#b7d6f3', '#467E90', '#37a2da']// , '#425769'
  //         }
  //       },
  //     yAxis : {
  //       data:titledata
  //     },
  //   series : {name:'',data:citydata,topData : bartop10,zoom: 0.85}
  // };


    return(
      <PageHeaderWrapper>
        <Card>
          <Row>

            <Col span={10} border="false">
              <div>
                <PieDetail />
                {/* <Pie data={pieData}/> */}
              </div>
            </Col>

            <Col span={2}>
              <div />
            </Col>

            <Col span={10} border="false">
              <div>
                <RatioDetail />
              </div>
            </Col>
          </Row>
        </Card>

        <Card>
          <Row>
            <Col span={4}>
              <div />
            </Col>

            <Col border="false">
              <div>
                <ColorMap style={{height:'600px'}} />
              </div>
            </Col>
          </Row>
        </Card>

        <Card>
          <Row>

            <Col span={10} border="false">
              <div>
                <CircleDetail />
              </div>
            </Col>

            <Col span={2}>
              <div />
            </Col>

            <Col span={10} border="false">
              <div>
                <LineChartDetail />
              </div>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default UserPortrait;
