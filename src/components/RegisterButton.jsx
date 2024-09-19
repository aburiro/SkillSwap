// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterButton() {
    return (
        <Link to="/register" className="btn btn-primary btn-lg me-2">
            Join Now
        </Link>
    );
}

export default RegisterButton;  