import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import style from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <Fragment>
            <header className={ style.header }>
                <NavLink to="/" >
                    <div className={style.logo}>CRUD</div>
                </NavLink>  
                <nav className={style.nav}>
                    <ul>
                        <li>
                            <NavLink to="/" >
                                Create User
                            </NavLink>  
                        </li>
                        <li>
                            <NavLink to="/user/list" >
                                List User
                            </NavLink>  
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
        // activeClassName={style.active}
    );
};

export default MainNavigation;
