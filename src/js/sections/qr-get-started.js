import React from 'react';
import { BrowserRouter as Link, Route, NavLink } from 'react-router-dom';
import Breadcrumbs from '../containers/Breadcrumbs';
import StarIcon from '../../svg/star.svg';
import Phone1Img from '../../img/phone-1.png';
import Phone2Img from '../../img/phone-2.png';

export default (e) => {
    return (
        <div>
            <div className="b-header">
                <Breadcrumbs location={e.location.pathname} />
            </div>
            <div className="b-title-h1 b-title-h1--indentation">
                <h1 className="b-title-h1__elem">Подключение<br/> платежного метода PAY24</h1>
            </div>
            <div className="b-title-h2 b-title-h2--indentation">
                <h2 className="b-title-h2__elem">Возможности платежного метода</h2>
            </div>
            <p className="b-text b-text--indentation">PAY24 — инновационное платежное решение, которое позволяет клиентам банка ВТБ-24 оплатить товары и услуги с помощью сканирования QR кода.</p>
            <p className="b-text b-text--indentation">Метод позволяет совершать платежи с помощью мобильного приложения PAY24:</p>
            <ul className="b-list b-list--style-default">
                <div className="b-list__item-wrap">
                    <li className="b-list__item b-list__item--plain b-list__item--list-item">на сайте (плательщик сканирует QR-код прямо на странице оплаты);</li>
                </div>
                <div className="b-list__item-wrap">
                    <li className="b-list__item b-list__item--plain b-list__item--list-item">по коду в SMS (для совершения операции достаточно кликнуть на ссылку в платежном окне, которое откроется при оплате счета в SMS);</li>
                </div>
                <div className="b-list__item-wrap">
                    <li className="b-list__item b-list__item--plain b-list__item--list-item">в бумажной квитанции (плательщик сканирует QR-код, указанный в квитанции, и оплачивает счет).</li>
                </div>
            </ul>
            <div id="qr-connect-request" className="b-title-h2 b-title-h2--indentation">
                <h2 className="b-title-h2__elem" id="qr-get-started-connect">Подключение</h2>
            </div>
            <p className="b-text b-text--indentation">Для подключения данного метода необходимо зарегистрироваться в нашей системе, нажав на кнопку <a href='#' className="b-text--link">Подключиться</a> на сайте <a href='http://paymo.ru' className="b-text--underline">www.paymo.ru</a>.</p>
            <p className="b-text b-text--indentation">После регистрации нужно заполнить все поля в окне <a href='#' className="b-text--link">Добавление нового магазина</a>, таким образом в системе PAYMО будет создан уникальный merchant point.</p>
            <p className="b-text b-text--indentation">Мы предлагаем широкие возможности для интеграции в любой платежный виджет.</p>
            <div className="b-title-h2 b-title-h2--indentation">
                <h2 className="b-title-h2__elem">Как проводится оплата по QR-коду</h2>
            </div>
            <div className="b-phone-manual">
                <ul className="b-list">
                    <div className="b-list__item-wrap b-list__item-wrap--inline"><span className="b-list__item-round">1</span>
                        <li className="b-list__item b-list__item--plain b-list__item--uppercase b-list__item--va-top">Наведите телефон на QR-код</li><img src={Phone1Img} className="b-phone-manual__image"/>
                    </div>
                    <div className="b-list__item-wrap b-list__item-wrap--inline"><span className="b-list__item-round">2</span>
                        <li className="b-list__item b-list__item--plain b-list__item--uppercase b-list__item--va-top">подтвердите операцию оплаты</li><img src={Phone2Img} className="b-phone-manual__image"/>
                    </div>
                </ul>
            </div>
            <div className="b-title-h2 b-title-h2--indentation">
                <h2 className="b-title-h2__elem">Преимущества решения</h2>
            </div>
            <ul className="b-list">
                <div className="b-list__item-wrap"><img src={StarIcon} className="b-list__item-style"/>
                    <li className="b-list__item">Плательщику не нужно вводить данные карты при оплате</li>
                </div>
                <div className="b-list__item-wrap"><img src={StarIcon} className="b-list__item-style"/>
                    <li className="b-list__item">На сегодняшний день оплата через QR-код — самая безопасная технология совершения платежей</li>
                </div>
            </ul>
            <div className="b-command b-command--indentation"><NavLink to="/payments/pay24/qr-connect" className="b-command__link" onClick={()=>window.scrollTo(0, 0)}>Как проводится оплата</NavLink></div>
        </div>
    )
}