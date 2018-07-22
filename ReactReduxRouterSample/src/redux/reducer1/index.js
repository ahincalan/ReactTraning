
var initialState = {
    username: 'defaultuser',
    password: '123456'
};

export default function reducer1(state = initialState, action) {
    switch (action.type) {
        case 'UpdateUser':
            return Object.assign({}, state, { username: action.payload.username });
        case 'UpdatePassword':
            return Object.assign({}, state, { password: action.payload.password });
        case 'UpdateUserAndPassword':
            return Object.assign({}, state, {
                username: action.payload.username,
                password: action.payload.password
            });
        case 'ClearLoginInfo':
            return Object.assign({}, state, {
                username: '',
                password: ''
            });
        default:
            return state;
    }
}