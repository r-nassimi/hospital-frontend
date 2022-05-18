import React from 'react';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert'

const Snackbars = ({snackText, snackOpen, setSnackOpen}) => {
  const handleClose = (value, type) => {
    setSnackOpen(false);
  };
  return (
    <div>
      <Snackbar open={snackOpen} onClose={handleClose} message={snackText}>
      </Snackbar>
    </div>
  );
};

export default Snackbars;
