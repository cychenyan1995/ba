import React, {Component} from 'react';
import Table from './components/Table';
import {connect} from 'dva';
import Detail from './components/Detail';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({userList}) => ({
  userList
}))
class UserList extends Component{
  constructor (props){
    super(props);
    const { dispatch } = props;

    dispatch({
      type: 'userList/fetchList',
      payload:{
        pageSize:10
      }
    });
  }

  toDetail = (text, e) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'userList/showDetail',
      payload: {
        showDetail:true,
        id:text
      }
    });
  }

  goBack = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'userList/showDetail',
      payload: {
        showDetail:false,
        id:''
      }
    });
  }

  render(){
    const {userList} = this.props;
    let view = '';
    if (!userList.showDetail) {
      view = (
        <div>
          <Table toDetail={this.toDetail} />
        </div>
      )
    } else {
      view = (
        <div>
          <Detail id={userList.id} goBack={this.goBack} />
        </div>
      );
    }

    return(
      <PageHeaderWrapper>
        {view}
      </PageHeaderWrapper>
    );
  }
}
export default UserList;
