import { LoadingOutlined } from '@ant-design/icons';
import { Button, Card, List, Tag } from 'antd';
import type { FC } from 'react';
import { useRequest } from 'umi';
import type { AzureSearchResultItem } from '../../data';
import { getAzureSearch } from '../../service';
import styles from './style.less';

const AzureSearchList: FC = () => {
  const x = useRequest(
    () => {
      return getAzureSearch({ search: '*' });
    },
    {
      loadMore: true,
    },
  );

  const { data, loading, loadMore, loadingMore } = x;

  const list = data?.value || [];

  const loadMoreDom = list.length > 0 && (
    <div style={{ textAlign: 'center', marginTop: 16 }}>
      <Button onClick={loadMore} style={{ paddingLeft: 48, paddingRight: 48 }}>
        {loadingMore ? (
          <span>
            <LoadingOutlined /> 加载中...
          </span>
        ) : null}
      </Button>
    </div>
  );

  return (
    <>
      <Card
        style={{ marginTop: 24 }}
        bordered={false}
        bodyStyle={{ padding: '8px 32px 32px 32px' }}
      >
        <List<AzureSearchResultItem>
          size="large"
          loading={loading}
          rowKey="metadata_storage_path"
          itemLayout="vertical"
          loadMore={loadMoreDom}
          dataSource={list}
          renderItem={(item) => {
            debugger;
            return (
              <List.Item
                key={item.metadata_storage_path}
                extra={<div className={styles.listItemExtra} />}
              >
                <List.Item.Meta
                  title={
                    <a className={styles.listItemMetaTitle} href={item.metadata_storage_path}>
                      {item.abc ? item.abc() : null}
                    </a>
                  }
                  description={
                    <span>
                      {item.imageTags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </span>
                  }
                />
              </List.Item>
            );
          }}
        />
      </Card>
    </>
  );
};

export default AzureSearchList;
