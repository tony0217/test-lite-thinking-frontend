import { useState } from 'react';

const useToggleSnackBar = (status: boolean): ToggleSnackBarHookProps => {
  
  const [open, setOpen] = useState(status);

  const handleClickOpen = () => setOpen(true);
  
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    window.location.reload();
  };

  return {
    open,
    handleClickOpen,
    handleClose,
  };
};

interface ToggleSnackBarHookProps {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => void;
}

export default useToggleSnackBar;
