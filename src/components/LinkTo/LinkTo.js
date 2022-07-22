import React from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';


const LinkTo = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={match ? "active__link" : ""}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default LinkTo;