import React, {Component} from 'react';
import Ratio from '@/components/Chart/Ratio/VerticalRatio';
import { connect } from 'dva';

@connect(({ ratioDetail }) => ({
  ratioDetail,// namespace action
}))
class RatioDetail extends Component{
  constructor(props){
    super(props);
    const {dispatch} = this.props;
    dispatch({
      type : 'ratioDetail/fetchAgeData',
      payload : {}
    })
  }

  render(){
    const {ratioDetail} = this.props;
    return(
      <div>
        <Ratio data={ratioDetail} />
      </div>
    )
  }
}

export default RatioDetail
