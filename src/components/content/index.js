import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import UserList from './user_list';
import UserView from './user';
 
function Content() {

    return(
        <Switch>
            <Route path="/user/:id" component={UserView}/>
            <Route path="/user" component={UserList}/>
            <Route path="/" exact component={Home}/>
        </Switch>
        
    )

}

export default Content;