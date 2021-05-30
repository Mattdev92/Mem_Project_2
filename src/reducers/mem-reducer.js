import { memTab } from 'components/panel/panel-helpers';

const initialState = {
  memData: {
    'Mem 1': {
      id: 1,
      title: 'Mem 1',
      upvotes: 6,
      downvotes: 0,
      fav: false,
    },
    'Mem 2': {
      id: 2,
      title: 'Mem 2',
      upvotes: 1,
      downvotes: 0,
      fav: false,
    },
    'Mem 3': {
      id: 3,
      title: 'Mem 3',
      upvotes: 8,
      downvotes: 0,
      fav: false,
    },
    'Mem 4': {
      id: 4,
      title: 'Mem 4',
      upvotes: 8,
      downvotes: 0,
      fav: false,
    },
    'Mem 5': {
      id: 5,
      title: 'Mem 5',
      upvotes: 4,
      downvotes: 0,
      fav: false,
    },
    'Mem 6': {
      id: 6,
      title: 'Mem 6',
      upvotes: 6,
      downvotes: 0,
      fav: false,
    },
    'Mem 7': {
      id: 7,
      title: 'Mem 7',
      upvotes: 2,
      downvotes: 0,
      fav: false,
    },
    'Mem 8': {
      id: 8,
      title: 'Mem 8',
      upvotes: 1,
      downvotes: 0,
      fav: false,
    },
    'Mem 9': {
      id: 9,
      title: 'Mem 9',
      upvotes: 9,
      downvotes: 0,
      fav: false,
    },
  },
  memTab,
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
    case 'FAVOURITE_ACTION':
      return {
        ...state,
        memData: {
          ...state.memData,
          [action.payload]: {
            ...state.memData[action.payload],
            fav: !state.memData[action.payload].fav,
          },
        },
      };
    case 'ADD_ACTION':
      return {
        ...state,
        memData: {
          ...state.memData,
          [`Mem ${action.payload.lastId + 1}`]: {
            id: action.payload.lastId + 1,
            title: `Mem ${action.payload.lastId + 1}`,
            upvotes: action.payload.upvotes,
            downvotes: action.payload.downvotes,
            fav: false,
          },
        },
      };
    case 'ADD_IMAGE':
      return {
        ...state,
        memTab: [...state.memTab, action.payload.image],
      };
    default:
      return state;
  }
}
