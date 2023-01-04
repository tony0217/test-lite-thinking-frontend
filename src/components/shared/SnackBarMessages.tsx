import React, { useState } from 'react';

import Alert, { AlertProps} from '@mui/material/Alert';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Snackbar from '@mui/material/Snackbar';

function SnackBarMessages({
  open,
  handleClose,
  snackbarMessage,
  severity
}: SnackBarMessagesProps) {

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={500}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      action={action}
      sx={{ mt: 15}}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  )
}

interface SnackBarMessagesProps {
  open: boolean;
  handleClose: (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => void;
  snackbarMessage: string;
  severity: AlertProps['severity'];
}

export default SnackBarMessages