import { CHANGE_USER } from '../constants';

export const changeUser = ( username ) => {

    return {
        type: CHANGE_USER,
        payload: username
    };

};