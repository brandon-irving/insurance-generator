import React from 'react'
import { DialogContentText, DialogContent, DialogTitle, Dialog, DialogActions, Button } from '@material-ui/core';
import { useContextState } from 'dynamic-context-provider'
import PrintInsurance from './PrintInsurance';

const CoreDialog = () => {
    const { updateContextState, dialog: { style, title, open, content } } = useContextState()
    function handleClose() {
        updateContextState({ dialog: { open: false, title: '' } })
    }
    console.log('log: content', content)

    return (
        <Dialog
           
            open={open}
            maxWidth={'xl'}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{typeof title === 'string' || !title ? title : title() }</DialogTitle>
            <DialogContent  style={style}>
                {content && content()}
            </DialogContent>
        </Dialog>
    )
}

export default CoreDialog
