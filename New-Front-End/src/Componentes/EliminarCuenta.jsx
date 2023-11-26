import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EliminarCuenta() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" startIcon={<DeleteIcon/>} color="error" onClick={handleClickOpen}>
        Eliminar Perfil
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Eliminar Cuenta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Seguro que quieres eliminar tu cuenta?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ingrese Contraseña y Confirme"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}