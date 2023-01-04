import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';

const Main = styled(Container)(() => ({
  paddingTop: 24,
  paddingLeft: '132px !important',
  paddingRight: '32px !important',
}));

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Main disableGutters maxWidth={false}>
      <Header />
      {children}
      <Footer />
    </Main>
  );
}
export interface MainLayoutProps {
  children: ReactNode;
}

export default MainLayout;
