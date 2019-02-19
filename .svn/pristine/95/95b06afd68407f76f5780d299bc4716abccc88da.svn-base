import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import styles from '../TableList.less';

const FormItem = Form.Item;

function mapStateToProps({ demoUser }) {
  return {
    demoUser
  };
}

// 数据过滤组件（搜索组件）
@connect(mapStateToProps,null,null,{withRef: true})
class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  // 丢失焦点
  inputOnBlur = () => {
    let text = this.props.form.getFieldValue('text');
    if (text === '') {
      if(typeof(this.props.demoUser.data.filters) !== 'undefined'){
        if(this.props.demoUser.data.filters.text !== '') {

          this.props.form.resetFields();
          let params = {
            page: 1,
            name: text
          };

          let data = {
            filters: {
              ...params
            }
          }

          const { dispatch } = this.props;
          dispatch({
            type: 'demoUser/setFilter',
            payload: data,
          });

          dispatch({
            type: 'demoUser/fetch',
            payload: params,
          });
        }
      }
    }
  };

  // 执行搜索
  handleSearch = e => {
    e.preventDefault();
    // console.log('收到表单值：', this.props.form.getFieldsValue());
    let text = this.props.form.getFieldValue('text');
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('values of form: ', values);
        this.props.form.resetFields();

        let params = {
          page: 1,
          text: text,
          name: text
        };

        let data = {
          filters: {
            ...params
          }
        }

        // console.log("filter handleSearch "+ JSON.stringify(params));

        const { dispatch } = this.props;

        dispatch({
          type: 'demoUser/setFilter',
          payload: data,
        });
        dispatch({
          type: 'demoUser/fetch',
          payload: params,
        });

      } else {
        // console.log('字段值存在错误 values of form: ', values);
      }
    });
  }


  render() {
    const { getFieldDecorator,getFieldValue } = this.props.form;
    // console.log("filter render "+ JSON.stringify(this.props.demoUser.data.filters));

    return (
      <Form layout="inline" onSubmit={this.handleSearch}>
        <FormItem>
          {getFieldDecorator('text', {
            initialValue: this.props.demoUser.data.filters.text,
            rules: [
              {
                required: true,
                min: 2,
                message: '至少为 2 个字符!',
              },
            ],
          })(
            <Input
              placeholder="请输入搜索内容必填"
              onBlur={this.inputOnBlur}
              style={{ width: '100%', marginRight: '3%' }}
            />
          )}
        </FormItem>
        <FormItem className={styles.toolbarLeftBtn}>
          <Button type="primary" htmlType="submit" icon="search">
            搜索
          </Button>
        </FormItem>
      </Form>
    );
  }
}

// 这里必须 Form.create() 使用
const FilterForm = Form.create()(Filter);
export default FilterForm;
