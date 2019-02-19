import React from 'react';
import { Modal, Form, Input, Radio, InputNumber, DatePicker } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;

// 新增数据组件
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.dateFormat = 'YYYY-MM-DD';
  }

  showModelHandler = e => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        for(var key in values){
          console.log(key + ' value:' + values[key]);
        }
        values['birth'] = values['birth'].format(this.dateFormat);
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>{children}</span>
        <Modal
          title="新增用户"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form layout="horizontal">
            <FormItem label="姓名" {...formItemLayout}>
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    min: 2,
                    message: '用户名至少为 2 个字符!',
                  },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator('sex', {
                rules: [
                  {
                    required: true,
                    type: 'number',
                    message: '性别必填!',
                  },
                ],
              })(
                <Radio.Group>
                  <Radio value={1}>男</Radio>
                  <Radio value={0}>女</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator('age', {
                rules: [
                  {
                    required: true,
                    type: 'number',
                    message: '年龄必填!',
                  },
                ],
              })(<InputNumber min={18} max={100} />)}
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator('birth', {
                rules: [
                  {
                    required: true,
                    type: 'object',
                    message: '生日必填!',
                  },
                ],
              })(<DatePicker format={this.dateFormat}/>)}
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {getFieldDecorator('addr', {
                rules: [
                  {
                    required: true,
                    message: '地址必填!',
                  },
                ],
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

// 这里必须 Form.create() 使用
const AddForm = Form.create()(Add);
export default AddForm;
