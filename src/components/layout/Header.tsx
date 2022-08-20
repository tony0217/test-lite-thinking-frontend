import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

import Logo from '@assets/icons/Logo_Lite_Thinking.png';
import CardMedia from '@mui/material/CardMedia';
import { log } from 'console';

const Container = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.default.main,
  boxShadow: 'none',
  height: 78,
  justifyContent: 'center',
  padding: theme.spacing(0, 32 / 6, 0, 68 / 6),
  zIndex: 1
}));

function Header() {
  return (
    <Container>
      <Toolbar>
        <Link href="/home" passHref>
          <Button variant="text">
            <CardMedia
              component="img"
              height="60"
              width="120"
              image={Logo.src}
              alt="lite-thinking-icon"
            />
          </Button>
        </Link>
      </Toolbar>
    </Container>
  );
}

export default Header;
