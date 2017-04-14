import React from 'react';
import { BrowserRouter as Link, Route, NavLink } from 'react-router-dom';
import SidebarNav from "./SidebarNav";
import LogoIcon from "../../svg/paymo.svg"
import MenuShowIcon from "../../svg/menu.svg"
import MenuHideIcon from "../../svg/menu-close.svg"

export default class MainLayout extends React.Component {
    constructor(props) {
        super(props);

        this.handleShowMenu = this.handleShowMenu.bind(this);
        this.handleHideMenu = this.handleHideMenu.bind(this);
    };

    handleShowMenu(e) {
        e.preventDefault();

        document.querySelector('.b-menu').className += " b-menu--active"
    };

    handleHideMenu(e) {
        e.preventDefault();

        document.querySelector('.b-menu').className = "b-menu"
    };

    render() {
        return (
            <div className="layout">
                <div className="b-menu">
                    <div className="menu-close menu-close--indentation">
                        <img src={MenuHideIcon} className="menu-close__image" onClick={this.handleHideMenu}/>
                    </div>
                    <NavLink to="/" className="menu__logo menu__logo--indentation"><img src={LogoIcon}/></NavLink>
                    <SidebarNav />
                </div>
                <div className="b-content">
                    <div className="b-header-mobile b-header-mobile--indentation">
                        <div className="b-header-mobile__left"><img src={MenuShowIcon} className="b-burger" onClick={this.handleShowMenu}/></div>
                        <div className="b-header-mobile__right"><NavLink to="/" className="menu__logo"><img src={LogoIcon} className="menu__logo-image--small" /></NavLink></div>
                    </div>
                    {this.props.children}
                    <div className="b-footer b-footer--indentation">
                        <div className="b-title-h3 b-title-h3--indentation">
                            <h3 className="b-title-h3__elem b-title-h3__elem--medium">Как с нами связаться</h3>
                        </div>
                        <p className="b-text b-text--indentation">Если у вас есть вопросы и вы не нашли на них ответы в документации,<br/> пишите на <a href="mailto:support@paymo.ru" className="b-text__support">support@paymo.ru</a> или звоните нам по номеру <a className="b-text__tel" href="tel:7 (495) 369-60-67">+7 (495) 369-60-67</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
}
