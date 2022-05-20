import { SAVE_IN_LIST, DELETE_MOVIE } from "../constants";

export const saveInListAction = (payload) => ({ type: SAVE_IN_LIST, payload, });
export const deleteMovieFromList= (payload)=>({
	type:DELETE_MOVIE,
	payload,
})