import React, {Component} from 'react';
import Circle from '@/components/Chart/Pie/CirclePie';
import { connect } from 'dva';

@connect(({ circleDetail }) => ({
  circleDetail,// namespace action
}))
class CircleDetail extends Component{

  constructor(props){
    super(props);
    const {dispatch} = this.props;
    dispatch({
      type : 'circleDetail/fetchDeviceTypeData',
      payload : {}
    })
  }

  render(){
    const {circleDetail} = this.props;
    return(
      <div>
        <Circle data={circleDetail} />
      </div>
    )
  }
}

export default CircleDetail

