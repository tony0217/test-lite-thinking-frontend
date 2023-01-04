import React, { SyntheticEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';
import BottomNavigation, { BottomNavigationProps } from '@mui/material/BottomNavigation';
import BottomNavigationAction, { BottomNavigationActionProps } from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BusinessIcon from '@mui/icons-material/Business';
import Paper, { PaperProps } from '@mui/material/Paper';

const FooterStyled = styled(Paper)<PaperProps>(({ theme }) => ({
  backgroundColor: theme.palette.default.main,
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0
}));

const FooterNavigation = styled(
  BottomNavigation
)<BottomNavigationProps>(({ theme }) => ({
  backgroundColor: theme.palette.default.light,
}));

const FooterNavigationAction = styled(
  BottomNavigationAction
)<BottomNavigationActionProps>(({ theme }) => ({
  backgroundColor: theme.palette.default.light,
  color: theme.palette.text.primary,
}));

const navigation = [
  {
    pathname: '/home',
    label: 'Home',
    icon: <HomeIcon />
  },

  {
    pathname: '/register',
    label: 'Register Company',
    icon: <AddBusinessIcon />
  },

  {
    pathname: '/list',
    label: 'List Companies',
    icon: <BusinessIcon />
  },
];

function Footer() {
  const router = useRouter();
  const [value, setValue] = useState(router.pathname);

  const handleChange = useCallback((event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  }, []);

  return (
    <FooterStyled elevation={3}>
      <FooterNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        {navigation.map(({ pathname, label, icon }) => (
          <FooterNavigationAction key={pathname} label={label} icon={icon} value={pathname} />
        ))}
      </FooterNavigation>
    </FooterStyled>
  );
}

export default Footer;