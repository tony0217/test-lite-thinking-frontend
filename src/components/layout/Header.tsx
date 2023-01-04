import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

import Logo from '@assets/icons/logomark.svg';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Container = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.default.light,
  boxShadow: 'none',
  height: 78,
  justifyContent: 'center',
  padding: theme.spacing(0, 32 / 6, 0, 110 / 6),
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
              alt="positive-thinking-icon"
            />
          </Button>

        </Link>
        <Typography variant="h3" color="primary">
          Positive
          Thinking
          Company
        </Typography>
      </Toolbar>
    </Container>
  );
}

export default Header;
