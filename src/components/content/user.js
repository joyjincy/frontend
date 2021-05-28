import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserView  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetail: {},
        };
    }

    callApiFromNode(userId){
        fetch("http://localhost:9000/users/"+userId)
        .then(res => res.text())
        .then(res =>
            this.setState({userDetail : JSON.parse(res)})
        );
    }

    componentWillMount(){
        let userId = window.location.href.split('/').pop();
        this.callApiFromNode(userId);
    }

    render(){
        return(
            <div>
                {this.state.userDetail.name} is the most {this.state.userDetail.chara} on Earth.
                <button type="submit">
                    <Link to="/user">
                        Back
                    </Link>
                </button>
            </div>
        )
    }
}

export default UserView;