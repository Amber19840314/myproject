import store from './store'
import axios from 'axios'

function getUsersStart(){
    return {
        type: 'USERS_FETCH_START'
    };
}

function getUsersSuccess(response){
    return {
        type: 'USERS_FETCH_SUCCESS',
        todos: response.data
    };
}

function getUsersFail(error) {
    return {
        type: 'USERS_FETCH_FAIL',
        error
    };
}

function getUsers(){
    console.log('in getUsers')
    store.dispatch(getUsersStart());
    axios
        .get('/api/users')
        .then(response => {
            console.log(response.data)
            store.dispatch(getUsersSuccess(response));
        })
        .catch(err => {
            store.dispatch(getUsersFail(err));
        });
}

export default getUsers; 

