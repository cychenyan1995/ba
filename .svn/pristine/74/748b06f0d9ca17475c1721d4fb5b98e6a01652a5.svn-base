import React, {Component} from 'react';
import Pie from '@/components/Chart/Pie/NormalPie';
import { connect } from 'dva';

@connect(({ pieDetail }) => ({
  pieDetail,// namespace action
}))
class PieDetail extends Component{
  constructor(props){
    super(props);
    const {dispatch} = this.props;
    dispatch({
      type : 'pieDetail/fetchSexData',
      payload : {}
    })
  }

  render(){
    const {pieDetail} = this.props;  
    return(
      <Pie data={pieDetail} />
    )
  }
}

export default PieDetail
