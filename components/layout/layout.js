import { Fragment } from 'react';

function Layout(props) {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default Layout;