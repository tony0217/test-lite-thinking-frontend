import RegisterMain from '@components/register/RegisterMain';
import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';

function Register() {
  return (
    <MainLayout>
      <HeadTitle title="Lite Thinking - Register" />
      <RegisterMain />
    </MainLayout>
  );
}

export default Register;
