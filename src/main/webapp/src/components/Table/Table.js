import React, {Component} from 'react';
import {Row, Col, Button, Card, Table, Pagination, Popover} from 'antd';

class TableCustom extends Component {

  onChange = (page, pageSize) => {
    const {onChange} = this.props;
    onChange(page, pageSize);
  }

  onShowSizeChange = (current, size) => {
    const {onShowSizeChange} = this.props;
    onShowSizeChange(current, size);
  }

  onVisibleChange = (visible) => {
    const {onVisibleChange} = this.props;
    onVisibleChange(visible);
  };

  render() {
    const {columns, scroll, dataSource, total, searchForm, showSearch} = this.props;

    let searchView = '';
    if (searchForm) {
      searchView = (
        <Row>
          <Col span={24}>
            <div style={{paddingBottom: '10px'}}>
              <Popover
                placement="rightTop"
                content={searchForm}
                trigger="click"
                visible={showSearch}
                onVisibleChange={this.onVisibleChange}
              >
                <Button type="primary" icon="search">高级搜索</Button>
              </Popover>
            </div>
          </Col>
        </Row>
      )
    }
    return (
      <Card bordered={false}>
        {
          searchView
        }
        <Row>
          <Col span={24}>
            <div>
              <Table
                pagination={false}
                size="small"
                bordered
                columns={columns}
                dataSource={dataSource}
                scroll={scroll}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{float: 'right', paddingTop: '10px'}}>
              <Pagination
                size="small"
                showSizeChanger
                showQuickJumper
                total={total}
                showTotal={total => `total: ${total}`}
                onChange={this.onChange}
                onShowSizeChange={this.onShowSizeChange}
              />
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default TableCustom;
