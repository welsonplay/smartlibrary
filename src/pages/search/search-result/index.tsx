import { PageContainer } from '@ant-design/pro-layout';
import { Input } from 'antd';
import type { FC } from 'react';
import { useIntl } from 'umi';
import AzureSearchList from './components/azure-search-list';

type SearchProps = {
  match: {
    url: string;
    path: string;
  };
  location: {
    pathname: string;
    query: {
      q: string;
    };
  };
};

const Search: FC<SearchProps> = (props) => {
  const intl = useIntl();
  const { q } = props.location.query;

  const handleFormSubmit = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <PageContainer
      title={false}
      content={
        <>
          <div style={{ textAlign: 'center' }}>
            <Input.Search
              enterButton={intl.formatMessage({
                id: 'pages.search.form.search',
              })}
              size="large"
              defaultValue={q}
              onSearch={handleFormSubmit}
              style={{ maxWidth: 522, width: '100%' }}
            />
          </div>
        </>
      }
    >
      <AzureSearchList />
    </PageContainer>
  );
};

export default Search;
