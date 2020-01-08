import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const options = ['Merge', 'Auto-Merge'];

const styles = makeStyles(theme => ({
    root: {
        margin: 0,
        border: 0,
        padding: 0,

    },
    bottomPad: {
        marginBottom: 20,
        borderBottom: 0,
        padding: 0
    },
    popperMenu: {
        zIndex: 999
    },
    dialogTitle: {
        backgroundColor: theme.palette.primary.main
    },
    cancelButton: {
        color: theme.palette.primary.main
    },
    mergeAcceptButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.main
    },
    mergeButton: {
        textTransform: "capitalize",
        size: "small",
        backgroundColor: theme.palette.text.light,
        color: theme.palette.background.main
    }
}));

export default function MergeButton() {
    const classes = styles();

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setMenuOpen(false);
    };

    const handleToggle = () => {
        setMenuOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setMenuOpen(false);
    };

    const handleClickMergeOpen = () => {
        setDialogOpen(true);
      };
    
      const handleMergeClose = () => {
        setDialogOpen(false);
      };
  
    return (
      <div>
        <ButtonGroup variant="contained" color="background" ref={anchorRef} aria-label="split button">
          <Button className={classes.mergeButton} onClick={handleClickMergeOpen}>{options[selectedIndex]}</Button>
          <Button
            color="background"
            size="small"
            aria-controls={menuOpen ? 'split-button-menu' : undefined}
            aria-expanded={menuOpen ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper className={classes.popperMenu} open={menuOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <Dialog open={dialogOpen} onClose={handleMergeClose} aria-labelledby="form-dialog-title" disableBackdropClick fullWidth maxWidth="sm">
            <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
                Data Definition
            </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.root}>
              Label Name
            </DialogContentText>
            <TextField
              className={classes.bottomPad}
              autoFocus
              margin="dense"
              id="label"
              type="email"
              fullWidth
              required
              variant='outlined'
            />
            <DialogContentText className={classes.root}>
              Data Definition
            </DialogContentText>
            <TextField
              margin="dense"
              id="definition"
              type="email"
              fullWidth
              multiline
              rows="3"
              variant='outlined'
            />
          </DialogContent>
          <DialogActions>
            <Button variant='outlined' onClick={handleMergeClose} className={classes.cancelButton}>
              Cancel
            </Button>
            <Button variant='contained' onClick={handleMergeClose} className={classes.mergeAcceptButton}>
              Merge
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }