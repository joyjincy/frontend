import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserList  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: [],
        };
    }

    callApiFromNode(){
        fetch("http://localhost:9000/users")
        .then(res => res.text())
        .then(res =>
            this.setState({response : JSON.parse(res)})
        );
    }

    componentWillMount(){
        this.callApiFromNode();
    }

    renderUserList(response){
        return (
            response.map(function(user) {
                if(user) {
                    return (
                        <tr>
                            <td className="width_150">{user.id}</td>
                            <td><Link to={'/user/'+user.id} className="nav-item nav-link">{user.name}</Link></td>
                        </tr>
                    );
                } 
            }.bind(this))
        )
    };

    render(){
        return(
            <div>
                <table className="table table-bordered position_table">
                    <tbody>
                        <tr>
                            <td className="width_150">ID</td>
                            <td className="width_150">Name</td>
                        </tr>
                        {this.renderUserList(this.state.response)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserList;