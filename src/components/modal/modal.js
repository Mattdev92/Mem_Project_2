import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { Wrapper, Title, useStyles } from 'components/modal/modal.styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'components/modal/modal-helpers';
import Default from 'assets/default.jpg';

export default function TransitionsModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const lastId = Object.keys(
    useSelector(({ memReducer: { memData } }) => memData)
  ).length;
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const [title, setTitle] = useState('');
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownVotes] = useState(0);
  const [image, setImage] = useState(Default);
  const [error, setError] = useState(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Wrapper className={classes.paper}>
          <Title id="transition-modal-title">Add new MEM</Title>
          <form className={classes.root} autoComplete="off">
            <TextField
              error={error}
              helperText="Fill all the filds"
              type="text"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              error={error}
              helperText="Fill all the filds"
              type="number"
              id="outlined-basic"
              label="Upvotes"
              variant="outlined"
              onChange={(e) => setUpvotes(e.target.value)}
            />
            <TextField
              error={error}
              helperText="Fill all the filds"
              type="number"
              id="outlined-basic"
              label="Downvotes"
              variant="outlined"
              onChange={(e) => setDownVotes(e.target.value)}
            />
            <TextField
              type="file"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
          </form>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() => {
              if (isEmpty(title, upvotes, downvotes)) {
                setError(false);
                handleClose();
                dispatch({
                  type: 'ADD_ACTION',
                  payload: { title, upvotes, downvotes, lastId },
                });
                dispatch({
                  type: 'ADD_IMAGE',
                  payload: { image },
                });
              } else {
                setError(true);
              }
            }}
          >
            SAVE
          </Button>
        </Wrapper>
      </Fade>
    </Modal>
  );
}
