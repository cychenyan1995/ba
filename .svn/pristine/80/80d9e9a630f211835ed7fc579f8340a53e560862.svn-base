import React, { Component } from 'react';
import LineChart from '@/components/Chart/LineChart/LineChart';
import { connect } from 'dva';

// {lineChartDetail}
@connect(({ lineChartDetail }) => ({
  lineChartDetail
}))
class LineChartDetail extends Component {

  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch({
      type: 'lineChartDetail/fetchOutTimeData',
      payload: {}
    })
  }

  render() {
    const { lineChartDetail } = this.props;
    return (
      <div>
        <LineChart data={lineChartDetail} />
      </div>
    )
  }
}

export default LineChartDetail
