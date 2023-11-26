import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PasswordIcon from '@mui/icons-material/Password';
import ContraseñaNueva from './ContraseñaNueva';


export default function CambiarContraseña() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <React.Fragment>
      <Button variant="outlined" startIcon={<PasswordIcon/>} onClick={handleClickOpen}>
        Cambiar Contraseña
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Ingrese Contraseña Actual</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="oldpassword"
            label="Contraseña"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <React.Fragment>
                <Button onClick={handleClose}>Confirmar</Button>
                <ContraseñaNueva/>
            </React.Fragment>
            
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}