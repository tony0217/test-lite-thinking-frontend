import { useRouter } from 'next/router';

import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';
import RegisterFomInputsDetail from '@components/register/RegisterFomInputsDetail';

function ListDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout>
      <HeadTitle title={`Positive Thinking - details ${id}`} />
      <RegisterFomInputsDetail />
    </MainLayout>
  );
}

export default ListDetail;
