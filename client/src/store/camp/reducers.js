import actionTypes from "../types";


const initState = {
  groups: [],
  group: {},
  isLoading: true,
  error: false,
};

export const campReducer = (state = initState, action) => {
  switch (action.type) {

    case actionTypes.SET_GROUPS:
      return { ...state, groups: action.payload.groups };

    case actionTypes.SET_GROUP:
      return { ...state, group: action.payload.group };

    case actionTypes.ADD_GROUP:
      return { ...state, groups: [...state.groups, action.payload.group] };

    case actionTypes.DEL_GROUP:
      const groups = state.groups.filter((group) => (group._id !== action.payload.id));
      return { ...state, groups };

    case actionTypes.SET_CAMP_LOADING:
      return { ...state, isLoading: action.payload.isLoading };


    case actionTypes.ERROR:
      return { ...state, error: action.payload.msg };

    default:
      return state;
  }
};
