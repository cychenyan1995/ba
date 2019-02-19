import React, {Component} from 'react';
import LineChart from '@/components/Chart/LineChart/LineChart';
import { connect } from 'dva';

// {userDetailLineChart}
@connect(({userDetailLineChart}) => ({
  userDetailLineChart
}))
class UserDetailLineChart extends Component{

  constructor(props){
    super(props);
    const {dispatch} = this.props;
    dispatch({
      type : 'userDetailLineChart/fetchOutTimeData',
      payload : {}
    })
  }

  render(){
    const {userDetailLineChart} = this.props;
    return(
      <div>
        <LineChart data={userDetailLineChart} />
      </div>
    )
  }
}

export default UserDetailLineChart
