import React, { useContext, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { AlertProps, styled } from '@mui/material';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import Button, { ButtonProps } from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Icon, { IconProps } from '@mui/material/Icon';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Company, SuccessResponse } from '@core/interfaces/company.interface';
import CompanyApiContext from '@core/contexts/CompanyApiContext';
import useToggleSnackBar from '@core/hooks/useToggleSnackBar';
import SnackBarMessages from '@components/shared/SnackBarMessages';
import useTogglePopover from '@core/hooks/useTogglePopover';

import ListDeatail from './ListDeatail';

const ContentItem = styled(ListItem,
  { shouldForwardProp: (prop) => prop !== 'index' }
)<ContentItemProps>(({ theme, index }) => ({
  backgroundColor: (index === 0) ? theme.palette.neutrals.session : '',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: theme.spacing(0),

  width: 'auto',
  '& .MuiTypography-root:hover': {
    textDecoration: 'underline',
  },
}));

const EditButton = styled(Button)<ButtonProps>(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  width: 138,
  height: 36,
  textTransform: 'capitalize',
  fontWeight: theme.typography.fontWeightBold,
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

const RemoveButton = styled(LoadingButton)<LoadingButtonProps>(({ theme }) => ({
  ...theme.typography.body2,
  borderRadius: theme.spacing(5),
  color: theme.palette.error.main,
  fontWeight: theme.typography.fontWeightBold,
  width: 138,
  height: 36,
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
}));

const IconButton = styled(
  Icon,
  { shouldForwardProp: (prop) => prop !== 'action' }
)<IconButtonProps>(({ theme, action }) => ({
  color: (action)
    ? theme.palette.text.primary
    : theme.palette.error.main,
  fontSize: 20,
  paddingRight: (action)
    ? theme.spacing(16 / 6)
    : theme.spacing(8.5 / 6),
  position: 'relative',
}));

function ListCompanyItem({ company, index }: ListCompanyItemProps) {
  const { pathname } = useRouter();
  const { _id: companyId, name } = company;
  const { remove } = useContext(CompanyApiContext);
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [severity, setSeverity] = useState<AlertProps['severity']>('error')
  const { open, handleClickOpen, handleClose } = useToggleSnackBar(false)
  const [anchorEl, popoverId, openPop, clickOpen, clickClose] =
    useTogglePopover();


  const removeCompany = async (id: string) => {

    try {
      setLoading(true)
      const response: SuccessResponse | null = await remove(id);

      if (response?.status === 'success') {
        handleClickOpen()
        setSeverity('success');
        setSnackbarMessage(response?.message);
        setLoading(false)
      }

    } catch (error: any) {
      if (error.response) {
        handleClickOpen()
        setSeverity('error');
        setSnackbarMessage(error.response.data.message);
        setLoading(false)
      }
      window.console.error(error.message);
    }
  };

  return (
    <>
      <Fade in timeout={350} >
        <ContentItem index={index} sx={{ borderRadius: '6px' }}>
          <Stack direction="row" spacing={2} sx={{ my: 1 }}>
            <ListItemText
              onMouseEnter={clickOpen as any}
              onMouseLeave={clickClose}
              sx={{ my: 0, ml: 2, cursor: 'pointer' }}
              primary={name}
            />
            <Popover
              key={popoverId}
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={openPop}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={clickClose}
              disableRestoreFocus
            >
              <ListDeatail company={company}/>
            </Popover>
          </Stack>
          <Stack direction="row" sx={{ my: -1 }}>
            <Link href={{
              pathname: `${pathname}/${companyId}`,
            }}>
              <EditButton variant="text">
                <IconButton action className="uil uil-edit" />
                Editar
              </EditButton>
            </Link>
            <RemoveButton
              onClick={() => removeCompany(companyId)}
              loading={loading}
              variant="text">
              <IconButton className="uil uil-trash-alt" />
              Eliminar
            </RemoveButton>
          </Stack>

        </ContentItem>
      </Fade>
      <SnackBarMessages
        open={open}
        handleClose={handleClose}
        snackbarMessage={snackbarMessage}
        severity={severity}
      />
    </>

  )
}

export interface ListCompanyItemProps {
  company: Company;
  index: number;
}
interface IconButtonProps extends IconProps {
  action?: boolean;
}
interface ContentItemProps extends ListItemProps {
  index?: number;
}

export default ListCompanyItem;
