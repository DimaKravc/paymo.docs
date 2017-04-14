import React from 'react';
import { BrowserRouter as Link, Route, NavLink } from 'react-router-dom';

export default class SidebarNav extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div className="navigation navigation--indentation">
                <ul className="navigation__first-wrap">
                    <li className="navigation__first">
                        <NavLink to="/payments" className="navigation__first-link">Проведение платежей</NavLink>
                        <ul className="navigation__second-wrap">
                            <li className="navigation__second">
                                <NavLink to="/payments/pay24"  className="navigation__second-link">PAY24</NavLink>
                                <ul className="navigation__third-wrap">
                                    <li className="navigation__third"><NavLink to="/payments/pay24/qr-get-started" className="navigation__third-link" onClick={()=>window.scrollTo(0, 0)}>Описание</NavLink>
                                        <ul className="navigation__forth-wrap">
                                            <li className="navigation__third"><a href="#qr-connect-request" className="navigation__forth-link">Подключение</a></li>
                                        </ul>
                                    </li>
                                    <li className="navigation__third"><NavLink to="/payments/pay24/qr-connect" className="navigation__third-link" onClick={()=>window.scrollTo(0, 0)}>Проведение платежа</NavLink>
                                        <ul className="navigation__forth-wrap">
                                            <li className="navigation__forth"><a href="#qr-connect-request" className="navigation__forth-link">Тело запроса</a></li>
                                            <li className="navigation__forth"><a href="#qr-connect-response" className="navigation__forth-link">Ответ</a></li>
                                        </ul>
                                    </li>
                                    <li className="navigation__third"><NavLink to="/payments/pay24/qr-status" className="navigation__third-link" onClick={()=>window.scrollTo(0, 0)}>Возможности платежного метода</NavLink>
                                        <ul className="navigation__forth-wrap">
                                            <li className="navigation__forth"><a href="#qr-status-signature" className="navigation__forth-link">Подпись</a></li>
                                            <li className="navigation__forth"><a href="#qr-status-body" className="navigation__forth-link">Тело запроса</a></li>
                                            <li className="navigation__forth"><a href="#qr-status-example" className="navigation__forth-link">Пример запроса</a></li>
                                            <li className="navigation__forth"><a href="#qr-status-response" className="navigation__forth-link">Ответ</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="navigation__second">
                                <NavLink to="/payments/cards" className="navigation__second-link">БАНКОВСКИЕ КАРТЫ</NavLink>
                                <ul className="navigation__third-wrap">
                                    <li className="navigation__third"><NavLink to="/payments/cards/cards-get-started" className="navigation__third-link" onClick={()=>window.scrollTo(0, 0)}>Описание</NavLink>
                                        <ul className="navigation__forth-wrap">
                                            <li className="navigation__third"><a href="#cards-connect-request" className="navigation__forth-link">Подключение</a></li>
                                        </ul>
                                    </li>
                                    <li className="navigation__third"><NavLink to="/payments/cards/cards-connect" className="navigation__third-link" onClick={()=>window.scrollTo(0, 0)}>Проведение платежа</NavLink>
                                        <ul className="navigation__forth-wrap">
                                            <li className="navigation__forth"><a href="#cards-connect-formation" className="navigation__forth-link">Формирование запроса</a></li>
                                            <li className="navigation__forth"><a href="#cards-connect-request" className="navigation__forth-link">Запрос</a></li>
                                            <li className="navigation__forth"><a href="html#cards-connect-response" className="navigation__forth-link">Ответ</a></li>
                                            <li className="navigation__forth"><a href="#cards-connect-3ds" className="navigation__forth-link">3DS авторизация</a></li>
                                            <li className="navigation__forth"><a href="#cards-connect-submit" className="navigation__forth-link">Отправка данных о 3DS в эквайер</a></li>
                                        </ul>
                                    </li>
                                    <li className="navigation__third"><NavLink to="/payments/cards/cards-cancel" className="navigation__third-link" onClick={()=>window.scrollTo(0, 0)}>Отмена подписки</NavLink>
                                        <ul className="navigation__forth-wrap">
                                            <li className="navigation__forth"><a href="#cards-cancel-request" className="navigation__forth-link">Запрос</a></li>
                                            <li className="navigation__forth"><a href="#cards-cancel-response" className="navigation__forth-link">Ответ</a></li>
                                        </ul>
                                    </li>
                                    <li className="navigation__third"><NavLink to="/payments/cards/cards-status" className="navigation__third-link" onClick={()=>window.scrollTo(0, 0)}>Получение статуса</NavLink>
                                        <ul className="navigation__forth-wrap">
                                            <li className="navigation__forth"><a href="#cards-status-request" className="navigation__forth-link">Запрос</a></li>
                                            <li className="navigation__forth"><a href="#cards-status-response" className="navigation__forth-link">Ответ</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
