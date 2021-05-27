import { useDispatch } from 'react-redux';
import React from 'react';
import { Title, Wrapper } from 'components/mem/mem.styles';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  media: {
    height: 300,
  },
});

const Mem = ({ data, mem }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { title, upvotes, downvotes } = data;
  return (
    <Wrapper className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mem}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Title>{title}</Title>
          <CardActions>
            <Fab
              variant="extended"
              onClick={() =>
                dispatch({ type: 'UPVOTE_ACTION', payload: title })
              }
            >
              <FavoriteIcon />
              {upvotes}
            </Fab>
            <Fab
              variant="extended"
              onClick={() =>
                dispatch({ type: 'DOWNVOTE_ACTION', payload: title })
              }
            >
              <ThumbDownAltIcon />
              {downvotes}
            </Fab>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Wrapper>
  );
};

export default Mem;
