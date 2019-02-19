import React, {Component} from 'react';
import Map from '@/components/Chart/Map/ChinaMap';
import { connect } from 'dva';

@connect(({ mapDetail }) => ({
  mapDetail,// namespace action
}))
class MapDetail extends Component{
  constructor(props){
    super(props)
    const {dispatch} = this.props;
    dispatch({
      type : 'mapDetail/fetchCityData',
      payload : {}
    })
  }

  render(){
    const {mapDetail} = this.props;
    return(
      <div>
        <Map id={mapDetail.id} theme={mapDetail.theme} title={mapDetail.title} visualMap={mapDetail.visualMap} yAxis={mapDetail.yAxis} series={mapDetail.series}/>
      </div>
    )
  }
}

export default MapDetail
