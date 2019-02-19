import React from 'react';
import { Col, Table, Button ,Popconfirm} from 'antd';
import { connect } from 'dva';
import Edit from './Edit';
import Del from './Del';

import styles from '../TableList.less';

function mapStateToProps({ demoUser, loading }) {
  return {
    demoUser,
    loading: loading.models.demoUser,
  };
}

// 数据列表组件
@connect(mapStateToProps,null,null,{withRef: true})
class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      batchRemoveBtn: true,
      sels: []
    };

    // 表格字段标题
    this.columns = [
      { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
      { title: '年龄', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
      { title: '生日', width: 100, dataIndex: 'birth', key: 'birth' },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        key: 'sex',
        filters: [{ text: '男', value: '1' }, { text: '女', value: '0' }],
        render: text => (
          // 性别显示转换
          <div>{text === 1 ? '男' : text === 0 ? '女' : '未知'}</div>
        ),
      },
      { title: '地址', dataIndex: 'addr', key: 'addr' },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 200,
        render: (text, record, index) => (
          <div>
            <Edit record={record} onOk={this.handleEdit.bind(null, record.key)}>
              <Button size="small" icon="edit">
                编辑
              </Button>
            </Edit>
            &nbsp;
            <Popconfirm
              title="您是否确认要删除这些内容?"
              onConfirm={this.handleRemove.bind(this, record)}>
              <Button
                type="danger"
                size="small"
                icon="close-circle">
                删除
              </Button>
            </Popconfirm>
          </div>
        ),
      },
    ];
  }

  // 变更页数
  handleTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'demoUser/fetch',
      payload: params,
    });
  };

  // 获取数据
  handleFetch = (params = {}) => {
    console.log('params:', params);
    const { dispatch } = this.props;
    dispatch({
      type: 'demoUser/fetch',
      payload: params,
    });
  };

  // 编辑页面
  handleEdit = (key, values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'demoUser/update',
      payload: { key, values },
    });
  };

  // 单行数据删除
  handleRemove = record => {
    this.refs.delForm.handleRemove(record);
  };

  // 批量数据删除
  handleBatchRemove = records => {
    this.refs.delForm.handleBatchRemove(records);
  };

  // 列表 rowSelection 方法（选复选框执行）
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      if (selected) {
        this.setState({ batchRemoveBtn: false });
        this.setState({ sels: selectedRows });
      } else if (selectedRows.length === 0) {
        this.setState({ batchRemoveBtn: true });
      }
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      if (selected) {
        this.setState({ batchRemoveBtn: false });
        this.setState({ sels: selectedRows });
      } else {
        this.setState({ batchRemoveBtn: true });
      }
      // console.log(selected, selectedRows, changeRows);
    },
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const params = {
      current: 1,
      pageSize: 20,
      name: '',
    };
    dispatch({
      type: 'demoUser/fetch',
      payload: params,
    });
  }

  render() {
    // console.log(this.props);
    const { dispatch } = this.props;
    const { demoUser: { data }, loading } = this.props;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...data.pagination,
    };

    return (
      <div>
        <Col span={24}>
          <Table
            size="small"
            rowSelection={this.rowSelection}
            bordered
            pagination={paginationProps}
            columns={this.columns}
            dataSource={data.list}
            scroll={{ x: 1300, y: 320 }}
            loading={loading}
            onChange={this.handleTableChange}
          />
        </Col>
        <Col span={2} className={styles.contentBatchRemove}>
          <Del
            isBatch="true"
            batchRemoveBtn={this.state.batchRemoveBtn}
            dispatch={dispatch}
            sels={this.state.sels}
            ref="delForm"
          />
        </Col>
      </div>
    );
  }
}

export default List;
