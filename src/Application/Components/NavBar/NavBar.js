import React from 'react';
import { Navbar, Image, Dropdown } from 'react-bootstrap';
import style from './NavBar.module.css'
import Aux from '../../../hoc/Aux/Aux'
import { Link, withRouter } from 'react-router-dom'

const NavBar = (props) => {
    const HandlePage = (e,l) => {
        e.preventDefault();
        props.history.push(l);
    };
    return (
        <Navbar bg="dark" fixed='top' variant="dark">
            <Navbar.Brand href='placeholder' onClick={(e)=>HandlePage(e,'/dashboard/notice')} className={style.marginleft}>
                <img
                    alt="https://react-bootstrap.github.io/logo.svg"
                    src="https://react-bootstrap.github.io/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' Optimus Dashboard'}</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                {props.authenticated ? <Aux>
                    <Dropdown id={style.custommargin}>
                        <Dropdown.Toggle id={style.removepad} variant='link'>
                            <Image className={style.resize} src="https://images.unsplash.com/photo-1549201440-34391ce5ffd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" roundedCircle />
                            <Dropdown.Menu id={style.resize2}>
                                <Link id={style.link} to='/dashboard/profile'>Profile</Link>
                                <Dropdown.Divider />
                                <Link id={style.link} to='/dashboard/logout'>Logout</Link>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>
                </Aux> : <Aux>
                    <Navbar.Text className={style.marginright}>
                        <Link id={style.linkoutside} to='/login'>Login</Link>
                    </Navbar.Text>
                    <Navbar.Text className={style.marginright}>
                        <Link id={style.linkoutside} to='/register'>Register</Link>
                    </Navbar.Text>
                </Aux>}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(NavBar);