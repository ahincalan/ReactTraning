
import { store } from '../../index';

export function UpdateUsername(newUsername) {
    store.dispatch({
        type: 'UpdateUser',
        payload: {
            username: newUsername
        }
    });
}

export function UpdatePassword(newPassword) {
    store.dispatch({
        type: 'UpdatePassword',
        payload: {
            password: newPassword
        }
    });
}

export function UpdateUserAndPassword(user, pass) {
    store.dispatch({
        type: 'UpdateUserAndPassword',
        payload: {
            username: user,
            password: pass
        }
    });
}

export function ClearLoginInfo() {
    store.dispatch({
        type: 'ClearLoginInfo' 
    });
}