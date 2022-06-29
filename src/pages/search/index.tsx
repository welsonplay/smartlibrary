import { AudioOutlined } from '@ant-design/icons';
import { Col, Input, Row, Typography } from 'antd';
import React from 'react';
import { history, useIntl } from 'umi';
import styles from './index.less';

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const { Search } = Input;

const PageSearch: React.FC = () => {
  const intl = useIntl();
  return (
    <div className={styles.content}>
      <>
        <Row>
          <Col span={12} offset={6}>
            <Typography.Title level={1} style={{ margin: 0, textAlign: 'center' }}>
              {intl.formatMessage({
                id: 'pages.search.title',
              })}
            </Typography.Title>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} offset={6}>
            <Search
              enterButton={intl.formatMessage({
                id: 'pages.search.form.search',
              })}
              size="large"
              suffix={suffix}
              onSearch={(value) => {
                history.push({
                  pathname: '/search/result',
                  query: {
                    q: value,
                  },
                });
              }}
            />
          </Col>
        </Row>
      </>
    </div>
  );
};

export default PageSearch;
