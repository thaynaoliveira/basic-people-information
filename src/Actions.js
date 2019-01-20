import request from 'axios';

export const PEOPLE = 'PEOPLE';
export const LOADING = 'LOADING';

const url = 'http://www.mocky.io/v2/';

export function getPeople(){
    return dispatch => { 
        dispatch(setReducer(LOADING, true));
        return request.get( url + '5c44d7683200005500af15d4')
        .then( response =>
            { 
                dispatch(setReducer(PEOPLE, response.data)); 
                dispatch(setReducer(LOADING, false));
                return response.data
            }
        );
    }
}

export function setReducer(type, data){
	return{
		type: type,
		data: data
	}
}