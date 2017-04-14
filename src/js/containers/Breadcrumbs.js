import React from 'react';
import {BrowserRouter as Link, Route, NavLink} from 'react-router-dom';

const ALIASES = {
    "/payments": "Проведение платежей",
    "/pay24": "PAY24",
    "/cards": "Банковские карты",
    "/qr-get-started": "Возможности платежного метода",
    "/qr-connect": "Проведение платежа",
    "/qr-status": "Метод получения статуса платежа",
    "/cards-get-started": "Описание",
    "/cards-connect": "Проведение платежа",
    "/cards-cancel": "Отмена подписки на рекуррентные платежи",
    "/cards-status": "Получение статуса операции"
};

export default class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        let pathArr = this.props.location.match(/\/[^\/]*/gi),
            getUrl = (i) => {
                let url = "";
                for (let k = 0; k <= i; k++) {
                    url += pathArr[k];
                }
                return url;
            };

        return (
            <ul className="b-breadcrumbs">
                {pathArr.map((item, id)=>(
                    <li key={id} className="b-breadcrumbs__item">
                        <NavLink className="b-breadcrumbs__item-link b-breadcrumbs__item-link--indentation" to={getUrl(id)}>{ALIASES[item]}</NavLink>
                    </li>
                ))}
            </ul>
        )
    }
}
