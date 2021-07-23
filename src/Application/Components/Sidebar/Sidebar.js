import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import style from './Sidebar.module.css';
import {withRouter} from 'react-router-dom';

const Sidebar = (props) => {
    const HandleLink = (e,ln) => {
        e.preventDefault();
        props.history.push(ln);
    };
    return (
        <Aux>
            <div id={style.mySidenav}>
                <a href="placeholder" onClick={(e)=>HandleLink(e,'/dashboard/notice')} id={style.notice}>Notice</a>
                <a href="placeholder" onClick={(e)=>HandleLink(e,'/dashboard/class')} id={style.class}>Class</a>
                <a href="placeholder" onClick={(e)=>HandleLink(e,'/dashboard/live')} id={style.live}>Live</a>
                <a href="placeholder" onClick={(e)=>HandleLink(e,'/dashboard/result')} id={style.result}>Result</a>
                <a href="placeholder" onClick={(e)=>HandleLink(e,'/dashboard/help')} id={style.help}>Help</a>
            </div>
        </Aux>
    );
};

export default withRouter(Sidebar);