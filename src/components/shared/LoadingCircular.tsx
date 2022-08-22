import { styled } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Icon, { IconProps } from '@mui/material/Icon';

const ContentLabel = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(2, 0),
  textAlign: 'center',
  wordWrap: 'break-word',
  width: theme.spacing(1)
}));

const LoadingCircularContent = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(2, 0)
}));

const LoadingIcon = styled(Icon)<IconProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(-12, 0, 0, 0),
  padding: theme.spacing(5, 5),
  '& .icon::before': {
    animation: 'animate infinite 5s',
    content: '\'🔎\'',
  },
  '@keyframes animate': {
    '30%': {
      content: '\'🔎\'',
    },
    '60%': {
      content: '\'👀\'',
    },
    '100%': {
      content: '\'❤️\'',
    }
  }
}));

function LoadingCircular({ label, icon = false, size = 60 }: LoadingCircularProps) {

  return (
    <LoadingCircularContent>
      <CircularProgress size={size} />
      <LoadingIcon>
        {icon && <span className="icon" />}
      </LoadingIcon>
      <ContentLabel>{label}</ContentLabel>
    </LoadingCircularContent>
  );
}
export interface LoadingCircularProps {
  label?: string;
  icon?: boolean;
  size?: number;
}

export default LoadingCircular;
