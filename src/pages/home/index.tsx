import HomeMain from '@components/home/HomeMain';
import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';

function Home() {
  return (
    <MainLayout>
      <HeadTitle title="Positive Thinking - Home" />
      <HomeMain />
    </MainLayout>
  );
}

export default Home;
