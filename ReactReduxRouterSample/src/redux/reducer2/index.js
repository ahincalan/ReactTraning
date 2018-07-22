
var initialState = {
    appTitle: 'Default Title', 
};

export default function reducer2(state = initialState, action) {
    switch (action.type) {
        case 'UpdateAppTitle':
            return Object.assign({}, state, { appTitle: action.payload.appTitle });
       
        default:
            return state;
    }
}