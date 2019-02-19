import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import Filter from './components/Filter';
import HighFilter from './components/HighFilter';
import ToolBox from './components/ToolBox';
import List from './components/List';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './TableList.less';

class TableTest extends React.Component {

  // 数据过滤
  filter = params => {
    this.filterForm.setKeyWork(params.name);
  };

  // 兄弟组件之间的通信,Filter组件里面需要调用
  handleFetch = (params = {}) => {
    this.refs.list.getWrappedInstance().handleFetch(params);
  };

  render() {
    return (
      <PageHeaderWrapper title="表格例子">
        <Card bordered={false}>
          <Row className={styles.toolbar} justify="space-between" align="bottom">
            <Col span={12}>
              <Row type="flex">
                <div>
                  <Col span={18}>
                    <Filter
                      handleFetch={this.handleFetch.bind(this)}
                      wrappedComponentRef={inst => (this.filterForm = inst)}
                    />
                  </Col>
                  <Col span={6} className={styles.toolbarLeftHighbtn}>
                    <HighFilter/>
                  </Col>
                </div>
              </Row>
            </Col>
            <Col span={12} style={{ height: '35px' }}>
              <ToolBox ref="toolBox"/>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row>
                <List ref="list"/>
              </Row>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TableTest;
