import * as ActionTypes from './ActionTypes';

const InitialFeedback = {
 isLoading:true,
 errMess:null,
 feedback:[]
};


export const Feedback = (state = InitialFeedback, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        feedback: [],
      };

    default:
      return state;
  }
};