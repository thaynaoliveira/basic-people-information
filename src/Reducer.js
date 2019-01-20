import { PEOPLE,
		 LOADING } from './Actions';

const initialState = {
    loading: false,
    people: []
};


export default function config(state=initialState, action){

	switch(action.type){
        case PEOPLE:
			return Object.assign({}, state, {people: action.data});
        case LOADING:
            return Object.assign({}, state, {loading: action.data});
	}

    return state;
}