import React, {Component} from 'react';
// import Pie from '@/components/Chart/Pie/NormalPie';
import { connect } from 'dva';
import TableCustom from "../../../components/Table/Table";
import FormCustom from "./Form";

@connect(({ userListTable }) => ({
  userListTable,// namespace action
}))
class UserListTable extends Component{
  constructor(props){
    super(props);
    const {dispatch} = this.props;
    const filters = [];
    filters.currentPage = 1;
    filters.pageSize = 10;
    dispatch({
      type : 'userListTable/fetchList',
      payload: filters
    });
    dispatch({
      type: 'userListTable/getFilters',
      payload: filters
    });
  }

  onChange = (page, pageSize,current) => {
    const {dispatch, userListTable} = this.props;
    const filters = userListTable.filters;
    filters.currentPage = page;
    filters.pageSize =pageSize;
    dispatch({
      type: 'userListTable/fetchList',
      payload: filters,
    });
  };

  onShowSizeChange = (current, size) => {
    const { dispatch ,userListTable} = this.props;
    const filters = userListTable.filters;
    filters.currentPage = current;
    filters.pageSize = size;
    dispatch({
      type: 'userListTable/fetchList',
      payload: filters,
    });
  };

  onVisibleChange = (visible) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'userListTable/showSearch',
      payload: visible,
    });
  };


  handleSubmit = (form,closed) => {
    console.log(form);
    const param = form;
    const format = 'YYYY-MM-DD';

    if (param.registerTime) {
      const startTime1 =(form.registerTime[0]).format(format);
      const endTime1 =(form.registerTime[1]).format(format);
      param.startTime1 =startTime1;
      param.endTime1 =endTime1;
      param.registerTime="";
    }else{
      param.startTime1 ="";
      param.endTime1 ="";
      param.registerTime="";
    }

    param.pageSize = 10;
    const { dispatch,userListTable } = this.props;
    const filters = userListTable.filters;
    param.pageSize = filters.pageSize;
    dispatch({
      type: 'userListTable/fetchList',
      payload: param
    });
    dispatch({
      type: 'userListTable/getFilters',
      payload: param
    });
    dispatch({
      type: 'userListTable/search',
      payload: form,
    });
    dispatch({
      type: 'userListTable/showSearch',
      payload: closed,
    });
  };

  handleConfirmSubmit = (rule, value, callback) => {
    const { handleConfirmSubmit } = this.props
    handleConfirmSubmit(rule, value, callback);
  };

  toDetail = (text, e) => {
    const {toDetail} = this.props;
    toDetail(text);
  };

  render(){
    const {userListTable} = this.props;

    const columns = [
      { title: 'ID',
        width: 120,
        dataIndex: 'account',
        key: 'account',
        fixed: 'left',
        render: text => <a onClick={this.toDetail.bind(this,text)}>{text}</a>
      },
      { title: '手机号码', width: 130, dataIndex: 'mobile', key: 'mobile'},
      {
        title: '注册时间',
        width: 130,
        key: 'registerTime',
        dataIndex: 'registerTime'
      },
      { title: '姓名', width: 120, dataIndex: 'name', key: 'name'},
      { title: '身份证号', width: 175, dataIndex: 'idCardNo', key: 'idCardNo'},
      { title: '性别', width: 80, key: 'gender', dataIndex: 'gender',
        render(text) { // 0:男 1:女
          if (text == 'M'){
            return <div>男</div>
          }if(text == 'F'){
            return <div>女</div>
          }
        }
      },
      { title: '省份', width: 100, key: 'province', dataIndex: 'province'},
      { title: '城市', width: 100, dataIndex: 'city', key: 'city' },
      { title: '车牌号码', width: 100, dataIndex: 'carNum', key: 'carNum' },
      { title: '车型', width: 100, dataIndex: 'carBrand', key: 'carBrand' },
      { title: '小程序使用时长', width: 130, dataIndex: 'miniProgramTime', key: 'miniProgramTime' },
      { title: '终端使用时长', width: 120, dataIndex: 'termUsedTime', key: 'termUsedTime' },
      { title: '终端累计流量', width: 120, dataIndex: 'totalFlow', key: 'totalFlow' },
      { title: '终端日均流量', width: 120, dataIndex: 'perDayFlow', key: 'perDayFlow' },
      {
        title: '套餐有效期',
        width: 130,
        key: 'pkEndTime',
        dataIndex: 'pkEndTime'
      }
    ];

    return (
      <TableCustom
        columns={columns}
        dataSource={userListTable.list}
        total={userListTable.total}
        scroll={{x: 1710,y: 450}}
        onChange={this.onChange}
        onShowSizeChange={this.onShowSizeChange}
        onVisibleChange={this.onVisibleChange}
        showSearch={userListTable.showSearch}
        searchForm={<FormCustom
          handleSubmit={this.handleSubmit}
          handleConfirmSubmit={this.handleConfirmSubmit}
        />}
      />
    );
  }
}

export default UserListTable
