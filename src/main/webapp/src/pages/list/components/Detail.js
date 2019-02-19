import React, {Component} from 'react';
import {Card, Col, List, Row, Button, Icon, Avatar, Tag, DatePicker,Divider,Tabs} from 'antd';
import {connect} from "dva/index";
import moment from 'moment';
import TableCustom from "../../../components/Table/Table";
import UserDetailLineChart from './UserDetailLineChart';

const TabPane = Tabs.TabPane;

@connect(({userListDetail}) => ({
  userListDetail
}))
class Detail extends Component {
  constructor(props) {
    super(props);
    const {dispatch,id,userListDetail} = props;
    const filters = [];
    filters.currentPage = 1;
    filters.pageSize = 10;
    filters.account = id;
    filters.startTime1 = new Date(new Date()-7*24*3600*1000);
    filters.endTime1 = new Date();

    dispatch({
      type: 'userListDetail/fetchDetail',
      payload: {
        account: id
      }
    });
    dispatch({
      type : 'userListDetail/fetchDeviceList',
      payload : {
        currentPage:1,
        pageSize:10,
        account:id,
        startTime1:new Date(new Date()-7*24*3600*1000),
        endTime1:new Date(),
      }
    });
    dispatch({
      type: 'userListDetail/getFilters',
      payload: filters
    });
  }

  onChange = (page, pageSize,current) => {
    const {dispatch, userListDetail,id} = this.props;
    const filters = userListDetail.filters;
    filters.currentPage = page;
    filters.pageSize =pageSize;
    filters.account = id;
    dispatch({
      type: 'userListDetail/fetchDeviceList',
      payload: filters,
    });
  };

  onChangeDeviceDate = (date, dateString) => {
    const {dispatch, userListDetail,id} = this.props;
    const filters = userListDetail.filters;
    filters.account = id;
    const startTime1 =dateString[0];
    const endTime1 =dateString[1];
    filters.startTime1 = startTime1;
    filters.endTime1 = endTime1;
    dispatch({
      type: 'userListDetail/fetchDeviceList',
      payload: filters
    });
    dispatch({
      type: 'userListDetail/getFilters',
      payload: filters
    });
  };

  onChangeProgramDate = (date, dateString) => {
    const {dispatch, userListDetail,id} = this.props;
    const filters = userListDetail.filters;
    filters.account = id;
    filters.currentPage = userListDetail.currentPage;
    filters.pageSize =userListDetail.pageSize;
    const startTime1 =dateString[0];
    const endTime1 =dateString[1];
    filters.startTime1 = startTime1;
    filters.endTime1 = endTime1;
    dispatch({
      type: 'userListDetail/fetchProgramList',
      payload: filters
    });
    dispatch({
      type: 'userListDetail/getFilters',
      payload: filters
    });
  };

  onShowSizeChange = (current, size) => {
    console.log(current);
    console.log(size);
    const { dispatch ,userListDetail,id} = this.props;
    const filters = userListDetail.filters;
    filters.currentPage = current;
    filters.pageSize = size;
    filters.account = id;
    dispatch({
      type: 'userListDetail/fetchDeviceList',
      payload: filters,
    });
  };

  onVisibleChange = (visible) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'userListDetail/showSearch',
      payload: visible,
    });
  };

  goBack = () => {
    const {goBack} = this.props;
    goBack();
  };

  // tab的转换
  changeTab = (activeKey) => {
    console.log('activeKey:');
    console.log(activeKey);
    const { dispatch ,userListDetail,id} = this.props;
    const filters = userListDetail.filters;
    const startTime1 = new Date(new Date()-7*24*3600*1000);
    const endTime1 = new Date();
    filters.activeKey = activeKey;
    filters.account = id;
    filters.currentPage = userListDetail.currentPage;
    filters.pageSize =userListDetail.pageSize;
    filters.startTime1 = startTime1;
    filters.endTime1 = endTime1;
    if(activeKey === "1"){
      dispatch({
        type: 'userListDetail/fetchDeviceList',
        payload: filters,
      });
    }else if(activeKey === "2"){
      dispatch({
        type: 'userListDetail/fetchProgramList',
        payload: filters,
      });
    }
  };

  // 列表：程序
  onProgramChange = (page, pageSize,current) => {
    const {dispatch, userListDetail,id} = this.props;
    const filters = userListDetail.filters;
    filters.currentPage = page;
    filters.pageSize =pageSize;
    filters.account = id;
    dispatch({
      type: 'userListDetail/fetchProgramList',
      payload: filters,
    });
  };

  onProgramShowSizeChange = (current, size) => {
    console.log(current);
    console.log(size);
    const { dispatch ,userListDetail,id} = this.props;
    const filters = userListDetail.filters;
    filters.currentPage = current;
    filters.pageSize = size;
    filters.account = id;
    dispatch({
      type: 'userListDetail/fetchProgramList',
      payload: filters,
    });
  };

  onProgramVisibleChange = (visible) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'userListDetail/showSearch',
      payload: visible,
    });
  };

  render() {
    const {userListDetail} = this.props;
    const {userList,detail} = userListDetail;

    const {RangePicker } = DatePicker;

    const dateFormat = 'YYYY-MM-DD';
    const NowTime = new Date();
    const startTime = new Date(NowTime-7*24*3600*1000);

    const dataSource3 = [
      `设备信息：虎哥大屏  sn：65465232446  /  行车记录仪  sn：6546546872`,
      `常驻地：北京  朝阳区  工人体育馆  /  北京  通州区  通州西站`
    ];

    const columns = [
      { title: '日期', width: 100, key: 'day', dataIndex: 'day' },
      { title: '时间', width: 100, key: 'time', dataIndex: 'time' },
      { title: '行为', width: 400, key: 'eventParam', dataIndex: 'eventParam' }
    ];

    let data = '';
    let data1 = '';
    let data2 = '';
    let avatar;
    if(detail){

      /* 添加 通过用户性别判断图标的代码 */
      if( detail.gender === "M" ){
        avatar =(<Icon type="man" style={{ fontSize: '35px', color: '#08c',position:'absolute',left:'110px',top:'110px' }} />)
      }else{
        avatar =(<Icon type="woman" style={{ fontSize: '35px', color: '#cc4b7d',position:'absolute',left:'110px',top:'110px' }} />)
      }

      data = [
        `ID：${detail.account}`,
        `手机号：${detail.mobile}`,
        `车牌信息：${detail.carNum}`
      ];

      data1 = [
        `注册时间：${detail.registerTime}`,
        `手机型号：${detail.registerTime}`,
        `车型信息：${detail.carBrand}`
      ];

      data2 = [
        `实名信息：${detail.name} ${detail.idCardNo}`
      ];
    }

    return (
      <div>
        <Button onClick={this.goBack}>
          <Icon type="left-circle" style={{fontSize:'20px'}}>返回</Icon>
        </Button>
        <Divider orientation="left">
          <strong>用户详情</strong>
        </Divider>
        <Card bordered={false}>
          <Row>
            <Col span={4}>
              <Avatar shape="square" size={150} icon="user" />
              {avatar}
            </Col>
            <Col span={8}>
              <List
                split={false}
                dataSource={data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
            </Col>
            <Col span={12}>
              <List
                split={false}
                dataSource={data1}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p1>{data2} <Tag color="red">未实名认证</Tag></p1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <List
                split={false}
                dataSource={dataSource3}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
            </Col>
            <Col span={24}>
              标签：
              <Tag color="green">活跃车主</Tag>
              <Tag color="green">上班族</Tag>
              <Tag color="green">套餐三月内到期</Tag>
            </Col>
          </Row>
        </Card>
        <Divider orientation="left">
          <strong>活跃时间分布</strong>
        </Divider>
        <Card>
          <div>
            <UserDetailLineChart />
          </div>
        </Card>
        <Divider orientation="left">
          <strong>行为轨迹</strong>
        </Divider>

        <Tabs defaultActiveKey="1" onChange={this.changeTab}>
          <TabPane tab="设备" key="1">
            <Card>
              <RangePicker
                defaultValue={[moment(startTime, dateFormat), moment(NowTime, dateFormat)]}
                format={dateFormat}
                onChange={this.onChangeDeviceDate}
              />
              <TableCustom
                columns={columns}
                scroll={{x: 900}}
                dataSource={userListDetail.list}
                total={userListDetail.total}
                onChange={this.onChange}
                onShowSizeChange={this.onShowSizeChange}
                onVisibleChange={this.onVisibleChange}
              />
            </Card>
          </TabPane>
          <TabPane tab="程序" key="2">
            <Card>
              <RangePicker
                defaultValue={[moment(startTime, dateFormat), moment(NowTime, dateFormat)]}
                format={dateFormat}
                onChange={this.onChangeProgramDate}
              />
              <TableCustom
                columns={columns}
                scroll={{x: 900}}
                dataSource={userListDetail.list}
                total={userListDetail.total}
                onChange={this.onProgramChange}
                onShowSizeChange={this.onProgramShowSizeChange}
                onVisibleChange={this.onProgramVisibleChange}
              />
            </Card>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Detail;
