import React from 'react';
import {Form, Input, Button, Popover} from 'antd';
import HighForm from './HighForm';

const FormItem = Form.Item;

// 数据高级过滤组件（高级搜索组件）
class HighFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.highSearchText = <span>高级搜索</span>;
  }

  // 隐藏或者显示高级搜索
  handleVisibleChange = visible => {
    if (this.state.visible === true) {
      this.setState({
        visible: false,
      });
    } else {
      this.setState({
        visible: true,
      });
    }
  };

  render() {
    return (
      // Popover 如果content里面需要表单，则需要以组件的方式<HighForm/>
      <Popover
        placement="rightTop"
        title={this.highSearchText}
        content={<HighForm/>}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}>
        <Button type="primary" icon="search">
          高级搜索
        </Button>
      </Popover>
    );
  }
}

export default HighFilter;
