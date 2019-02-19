import React, {Component} from 'react';
import {Row, Col, Button, Form, Input, Select, DatePicker} from 'antd';

class FormCustom extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {form,handleSubmit} = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        handleSubmit(values);
      }
    });
  }

  handleReset = () => {
    const {form} = this.props;
    form.resetFields();
  }

  filter = (inputValue, path) => (
    path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
  );


  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const dateFormat = 'YYYY-MM-DD';

    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSubmit}
      >
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item label='姓名'>
              {getFieldDecorator('name', {
                rules: []
              })(
                <Input placeholder="请输入姓名" />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='身份证号'>
              {getFieldDecorator('idNumber', {
                rules: []
              })(
                <Input placeholder="请输入身份证号" />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item label='手机号码'>
              {getFieldDecorator('mobileNo', {
                rules: []
              })(
                <Input placeholder="请输入手机号码" />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='性别'>
              {getFieldDecorator('gender', {
                rules: []
              })(
                <Select
                  showSearch
                  placeholder="请选择"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Select.Option value="M">男</Select.Option>
                  <Select.Option value="F">女</Select.Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={24}>
            <Form.Item label='注册时间'>
              {getFieldDecorator('registerTime', {
                rules: [],
              })(
                <DatePicker.RangePicker format={dateFormat} />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item label='省份'>
              {getFieldDecorator('province', {
                rules: []
              })(
                <Input placeholder="请输入省份" />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='城市'>
              {getFieldDecorator('city', {
                rules: []
              })(
                <Input placeholder="请输入城市" />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">搜索</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                重置
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(FormCustom);
