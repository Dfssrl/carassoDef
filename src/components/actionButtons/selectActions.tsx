'use client';

import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface MenuChooseActionsProps {
  value: 'light' | 'dark';
  setValue: (value: 'light' | 'dark') => void;
  logout: () => void;
};

const MenuChooseActions = ({ value, setValue, logout }: MenuChooseActionsProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="dropdown-menu"
        onClick={handleClick}
        sx={{
          backgroundColor: 'grey.700',
          color: 'grey.300',
          '&:hover': {
            backgroundColor: 'grey.800',
          },
          width: '2.25rem',
          height: '2.25rem',
          border: '1px solid transparent',
        }}
      >
        <ExpandMoreIcon />
      </IconButton>

      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'dropdown-button',
          }
        }}
      >
        <MenuItem onClick={
          () => {
            setValue(value === 'light' ? 'dark' : 'light');
            handleClose();
          }
        }>{value === 'light' ? 'dark' : 'light'}</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MenuChooseActions;