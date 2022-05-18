import { ADD_MOVIE, MOVIES_DATA } from "../constants";
// import {moviesData} from "./actions"

const initialValues = {
  movieGoods: [],
};

const cartReducer = (state = initialValues, action) => {
  switch (action.type) {
    case MOVIES_DATA:
      console.log(action.payload);
      return { ...state, movieGoods: action.payload };
    // case DELETE_MOVIE:
    //   return {
    //     ...state,
    //     movieGoods: state.movieGoods.filter(
    //       (good) => good.id !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
};

export default cartReducer;
