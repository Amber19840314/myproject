import store from './store'
import axios from 'axios'

import getUsers from './actions_getusers';

function addUserStart(){
    return {
        type: 'ADDUSER_START'
    };
}

function addUserSuccess(response){
    return {
        type: 'ADDUSER_SUCCESS',
        user: response.data
    };
}

function addUserFail(error){
    return{
        type: 'ADDUSER_FAIL',
        error
    };
}

function addUser(user) {
    console.log('in addUser', user)
    store.dispatch(addUserStart());
    axios
        .post('/api/users', {user:user})
        .then(response => {
            getUsers()
            store.dispatch(addUserSuccess(response));
        })
        .catch(err=>{
            store.dispatch(addUserFail(err));
        });
}

export default addUser