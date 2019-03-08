import axios from "axios";
import {
  GET_POST,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
  GET_ERRORS,
  ADD_POST
} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
}
