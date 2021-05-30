export const upvoteAction = (title) => ({
  type: 'UPVOTE_ACTION',
  payload: title,
});

export const downvoteAction = (title) => ({
  type: 'DOWNVOTE_ACTION',
  payload: title,
});

export const favouriteAction = (title) => ({
  type: 'FAVOURITE_ACTION',
  payload: title,
});
