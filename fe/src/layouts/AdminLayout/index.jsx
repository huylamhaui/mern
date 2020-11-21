import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';
import './style.css';

const AdminLayout = ({ path, component }) => {
    if (isAuthenticated())
        return (
            <div>
                <h1>Admin layout</h1>
                <Route path={path} component={component} />
            </div>
        );
    else return (
        <Redirect to='/login' />
    )
}

export default AdminLayout;