export const whichCategory = (category, memData) => {
  const dataArray = Object.entries(memData);
  switch (category) {
    case 'HOT':
      return dataArray.filter(
        (item) => item[1].upvotes - item[1].downvotes > 5
      );
    case 'REGULAR':
      return dataArray.filter(
        (item) => item[1].upvotes - item[1].downvotes <= 5
      );
    case 'DEFAULT':
      return dataArray;
    default:
      return dataArray;
  }
};
