export const isEmpty = (text, upvotes, downvotes) => {
  if (text === '' || upvotes === '' || downvotes === '') {
    return false;
  }
  return true;
};
