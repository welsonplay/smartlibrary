import { PageHeaderWrapper } from '@ant-design/pro-components';
import { Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';

const Search: React.FC = () => {
  const intl = useIntl();
  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin',
      })}
    >
      <Typography.Title editable level={1} style={{ margin: 0 }}>
        h1. Ant Design
      </Typography.Title>
    </PageHeaderWrapper>
  );
};

export default Search;
