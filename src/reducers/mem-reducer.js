const initialState = {
  memData: {
    'Mem 1': { title: 'Mem 1', upvotes: 6, downvotes: 0, img: '' },
    'Mem 2': { title: 'Mem 2', upvotes: 1, downvotes: 0, img: '' },
    'Mem 3': { title: 'Mem 3', upvotes: 8, downvotes: 0, img: '' },
    'Mem 4': { title: 'Mem 4', upvotes: 8, downvotes: 0, img: '' },
    'Mem 5': { title: 'Mem 5', upvotes: 4, downvotes: 0, img: '' },
    'Mem 6': { title: 'Mem 6', upvotes: 6, downvotes: 0, img: '' },
    'Mem 7': { title: 'Mem 7', upvotes: 2, downvotes: 0, img: '' },
    'Mem 8': { title: 'Mem 8', upvotes: 1, downvotes: 0, img: '' },
    'Mem 9': { title: 'Mem 9', upvotes: 9, downvotes: 0, img: '' },
    'Mem 10': { title: 'Mem 10', upvotes: 0, downvotes: 0, img: '' },
    'Mem 11': { title: 'Mem 11', upvotes: 1, downvotes: 0, img: '' },
  },
};

export default function memReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPVOTE_ACTION':
      return {
        ...state,
        memData: {
          ...state.memData,
          [action.payload]: {
            ...state.memData[action.payload],
            upvotes: state.memData[action.payload].upvotes + 1,
          },
        },
      };
    case 'DOWNVOTE_ACTION':
      return {
        ...state,
        memData: {
          ...state.memData,
          [action.payload]: {
            ...state.memData[action.payload],
            downvotes: state.memData[action.payload].downvotes + 1,
          },
        },
      };
    default:
      return state;
  }
}
