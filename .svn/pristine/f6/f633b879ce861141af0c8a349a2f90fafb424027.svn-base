import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Popover } from 'antd';
import styles from '../TableList.less';

const FormItem = Form.Item;

function mapStateToProps({ demoUser }) {
  return {
    demoUser,
  };
}

// 数据高级过滤组件（高级搜索组件）
@connect(
  mapStateToProps,
  null,
  null,
  { withRef: true }
)
class High extends React.Component {
  constructor(props) {
    super(props);

    // 排版属性
    this.formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
  }

  // 取消高级搜索
  onCancel = e => {
    e.preventDefault();
    this.props.form.resetFields();

    if (typeof this.props.demoUser.data.filters !== 'undefined') {
      if (this.props.demoUser.data.filters.name !== '') {
        this.props.form.resetFields();

        const params = {
          name: '',
          age: '',
          addr: '',
        };

        const data = {
          filters: {
            ...params,
          },
        };

        const { dispatch } = this.props;
        dispatch({
          type: 'demoUser/setHighfilter',
          payload: data,
        });
        dispatch({
          type: 'demoUser/fetch',
          payload: params,
        });
      }
    }
  };

  // 提交高级搜索表单
  handleHighSearch = e => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    const params = {
      page: 1,
      ...values
    };

    const data = {
      filters: {
        ...params,
      },
    };

    console.log(`filter handleHighSearch ${JSON.stringify(params)}`);

    const { dispatch } = this.props;
    dispatch({
      type: 'demoUser/setHighfilter',
      payload: data,
    });
    dispatch({
      type: 'demoUser/fetch',
      payload: params,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        layout="horizontal"
        onSubmit={this.handleHighSearch}
        className={styles.advancedSearchFormItem}
      >
        <FormItem {...this.formItemLayout} label="姓名">
          {getFieldDecorator('name', {
            initialValue: this.props.demoUser.data.filters.name,
          })(<Input type="text" size="small" />)}
        </FormItem>
        <FormItem {...this.formItemLayout} label="年龄">
          {getFieldDecorator('age', {
            initialValue: this.props.demoUser.data.filters.age,
          })(<Input type="text" size="small" />)}
        </FormItem>
        <FormItem {...this.formItemLayout} label="地址">
          {getFieldDecorator('addr', {
            initialValue: this.props.demoUser.data.filters.addr,
          })(<Input type="text" size="small" />)}
        </FormItem>
        <FormItem>
          <div className={styles.advancedSearchBtn}>
            <Button type="dashed" onClick={this.onCancel}>
              取消
            </Button>
            &nbsp;
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </div>
        </FormItem>
      </Form>
    );
  }
}

// 这里必须 Form.create() 使用
const HighForm = Form.create()(High);
export default HighForm;
