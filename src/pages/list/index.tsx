import ListMain from '@components/list/ListMain';
import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';

function List() {
  return (
    <MainLayout>
      <HeadTitle title="Positive Thinking - List" />
      <ListMain />
    </MainLayout>
  );
}

export default List;
