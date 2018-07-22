import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route, Switch, HashRouter } from 'react-router-dom'
import  Page1  from './components/page1'
import Page2 from './components/page2'
import NotFound from './components/notfound'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './redux';

export const store = createStore(reducers);

export class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div style={{ backgroundColor:'cyan', padding:'10px'}}>
            <div style={{ backgroundColor:'red', padding:'10px'}}>ÜST BANNER ALANI</div>
            <div style={{ backgroundColor:'white', padding:'10px', height:'400px'}}>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Page1} />
                    <Route path='/page2' component={Page2} />
                    <Route path='/page1' component={Page1} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </HashRouter>
            </div>
            <div style={{ backgroundColor:'black', color:'white', padding:'10px'}}>ALT BANNER ALANI</div>
        </div>
    }
}

if (module.hot) {
    module.hot.accept();
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("container"));