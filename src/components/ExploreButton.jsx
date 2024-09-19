// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExploreButton() {
    return (
        <Link to="/explore" className="btn btn-secondary btn-lg">
            Explore Skills
        </Link>
    );
}

export default ExploreButton;