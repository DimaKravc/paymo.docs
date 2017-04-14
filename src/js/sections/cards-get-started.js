import React from 'react';
import { BrowserRouter as Link, Route, NavLink } from 'react-router-dom';
import Breadcrumbs from '../containers/Breadcrumbs';

export default (e) => {
    return (
        <div>
            <div className="b-header">
                <Breadcrumbs location={e.location.pathname} />
            </div>
            <div className="b-title-h1 b-title-h1--indentation">
                <h1 className="b-title-h1__elem">Подключение метода оплаты банковскими картами</h1>
            </div>
            <div className="b-title-h2 b-title-h2--indentation">
                <h2 className="b-title-h2__elem">Возможности платежного метода</h2>
            </div>
            <p className="b-text b-text--indentation">Метод позволяет пользователям оплачивать товары/услуги с любой карты MasterCard, VISA, МИР. Возможна оплата по вендерам для осуществления платежей по свободным реквизитам и операций card-to-account. </p>
            <p className="b-text b-text--indentation">Предлагаем широкие возможности для интеграции в любой платежный виджет.</p>
            <div id="cards-connect-request" className="b-title-h2 b-title-h2--indentation">
                <h2 className="b-title-h2__elem">Подключение</h2>
            </div>
            <p className="b-text b-text--indentation">Для подключения данного метода необходимо зарегистрироваться в нашей системе, нажав на кнопку <span className='b-api-table__col--blue'>Подключиться</span> на сайте www.paymo.ru.</p>
            <p className="b-text b-text--indentation">После регистрации нужно заполнить все поля в окне <span className='b-api-table__col--blue'>Добавление нового магазина</span>, таким образом в системе PAYMО будет создан уникальный merchant point. </p>
            <p className="b-text b-text--indentation">После этого нужно заполнить раздел <span className='b-api-table__col--blue'>Информация о компании</span>.</p>
            <div className="b-title-h2 b-title-h2--indentation">
                <h2 className="b-title-h2__elem">Преимущества решения</h2>
            </div>
            <ul className="b-list">
                <div className="b-list__item-wrap"><img src="/img/star.svg" className="b-list__item-style"/>
                    <li className="b-list__item">Конверсия успешных оплат — более 92 % (средний показатель по системе)</li>
                </div>
                <div className="b-list__item-wrap"><img src="/img/star.svg" className="b-list__item-style"/>
                    <li className="b-list__item">Технология оплаты соответствует стандартам PCI DSS (Payment Card Industry Data Security Standard) 3.1 level1.</li>
                </div>
                <div className="b-list__item-wrap"><img src="/img/star.svg" className="b-list__item-style"/>
                    <li className="b-list__item">Собственные антифрод-решения и уникальная система токенизации для защиты от мошенничества.</li>
                </div>
            </ul>
            <div className="b-command b-command--indentation"><NavLink to="/payments/cards/cards-connect" className="b-command__link" onClick={()=>window.scrollTo(0, 0)}>Как проводится оплата</NavLink></div>
        </div>
    )
}