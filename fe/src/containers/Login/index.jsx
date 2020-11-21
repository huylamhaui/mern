import api from '../../utils/api';
import './style.css';

function Login({ path, setUserInfo }) {

    api.get('/api/test');

    console.log(path);

    function login() {
        setUserInfo({ username: 'lamph', age: 22 })
    }

    return (
        <div>
            <h1>Login form</h1>
            <form>
                <button type="button" onClick={() => login()}>Login</button>
            </form>
        </div>
    )
}

export default Login;