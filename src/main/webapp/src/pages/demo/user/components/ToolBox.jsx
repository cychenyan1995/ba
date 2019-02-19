import React from 'react';
import { connect } from 'dva';
import Add from './Add';
import { Button } from 'antd';
import styles from '../TableList.less';

const ButtonGroup = Button.Group;

// 工具箱组件
@connect(null,null,null,{withRef: true})
class ToolBox extends React.Component {
  constructor(props) {
    super(props);
  }

  // 新增页面
  createHandler = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'demoUser/add',
      payload: values,
    });
  };

  render() {
    return (
      <ButtonGroup className={styles.toolbarRight}>
        <ButtonGroup>
          <Button icon="arrow-up">上传</Button>
          <Button icon="arrow-down">下载</Button>
          <Button icon="arrow-left">导入</Button>
          <Button icon="arrow-right">导出</Button>
          <Add record={{}} onOk={this.createHandler}>
            <Button icon="plus-circle">
              新增
            </Button>
          </Add>
        </ButtonGroup>
      </ButtonGroup>
    );
  }
}

export default ToolBox;
