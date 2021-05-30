import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Wrapper, useStyles } from 'components/mem/mem.styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

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
            <Fab
              variant="extended"
              onClick={() =>
                dispatch({ type: 'FAVOURITE_ACTION', payload: title })
              }
            >
              {data.fav ? <FavoriteRoundedIcon /> : <FavoriteBorderIcon />}
            </Fab>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Wrapper>
  );
};

export default Mem;
