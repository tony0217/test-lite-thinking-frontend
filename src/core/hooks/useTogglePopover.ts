import { useState } from 'react';

const useTogglePopover = (): TogglePopoverHookProps => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;
  
  const handleClickOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget as any );
  const handleClose = () => setAnchorEl(null);

  return [
    anchorEl,
    popoverId,
    open,
    handleClickOpen,
    handleClose
  ];
}

type TogglePopoverHookProps = [
  anchorEl: HTMLButtonElement | null,
  popoverId: string | undefined,
  open: boolean,
  handleClickOpen: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleClose: () => void
];

export default useTogglePopover;