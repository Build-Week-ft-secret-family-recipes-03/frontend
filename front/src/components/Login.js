import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = (e) => {
        e.preventDefault();
        // console.log('credentials =>', this.state.credentials);
        axios.post('https://ft-secret-family-recipes.herokuapp.com/auth/login', this.state.credentials)
            .then(resp => {
                console.log('resp =>',resp);
                localStorage.setItem('token', resp.data.token);
                // localStorage.setItem('role', resp.data.token);
                // localStorage.setItem('username', resp.data.token);
                // this.props.history.push('/friends');
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }

}

export default Login;