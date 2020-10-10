import React from 'react';
import { Snackbar } from '@material-ui/core';
import { useContextState } from 'dynamic-context-provider'

const Toaster = ({initialError=false}) => {
    const {
        toaster={
            isOpen: false,
            autoHideDuration: 3000,
            severity: "success",
            message: ''
        }, 
        updateContextState
    } = useContextState()  
    console.log('log: ', useContextState())
    const handleClose = (_, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      updateContextState({toaster: false});
    };
  
    return (
        <Snackbar 
        open={toaster.isOpen || initialError ? true : false} 
        message={toaster.message || initialError.e}
        autoHideDuration={toaster.autoHideDuration} 
        onClose={handleClose}
        />
        )
}

export default Toaster
/**
 * <Alert onClose={handleClose} severity={toaster.severity}>
          This is a success message!
        </Alert>
 * 
 */