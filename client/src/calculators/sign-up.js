import axios from 'axios';

class SignupForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        
        console.log(`signup form, username: ${this.state.username}`);
    
        axios.post('/', {
            username: this.state.username,
            password: this.state.password
        }).then (response => {
            console.log(response);
            if (response.data) {
                console.log('Successful signup!');
                this.setState({
                    redirectTo: '/login'
                });
            } else {
                console.log('Signup error.');
            }
        }).catch(error => {
            console.log(`Signup server error: ${error}`)
        });
    }

    render() {
        <form onSubmit={this.handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            </label>
            <label>
                Password:
                <input type="text" name="password" value={this.state.password} onchange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    }
}