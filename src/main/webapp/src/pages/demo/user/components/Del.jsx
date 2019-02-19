import React from 'react';
import { connect } from 'dva';
import { Modal, Button, Popconfirm } from 'antd';

// 删除数据组件
class Del extends React.Component {
  constructor(props) {
    super(props);
  }

  // 单行数据删除
  handleRemove = record => {
    console.log('删除:' + record.key);
    const { dispatch } = this.props;
    dispatch({
      type: 'demoUser/remove',
      payload: record.key,
    });
  };

  // 批量删除
  handleBatchRemove = sels => {
    console.log('删除行数:' + sels);
    var keys = sels.map(item => item.key).toString();
    const { dispatch } = this.props;
    dispatch({
      type: 'demoUser/remove',
      payload: keys,
    });
  };

  render() {
    if (this.props.isBatch) {
      return (
        <Popconfirm
          title="您是否确认要删除这些内容?"
          onConfirm={this.handleBatchRemove.bind(this, this.props.sels)}>
          <Button
            type="danger"
            ref="batchRemoveBtn"
            disabled={this.props.batchRemoveBtn}>
            批量删除
          </Button>
        </Popconfirm>
      );
    } else {
      return null;
    }
  }
}

export default Del;
