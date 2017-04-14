import React from 'react';
import { BrowserRouter as Link, Route, NavLink } from 'react-router-dom';
import copy from "../utils/copy";
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
                <h2 className="b-title-h2__elem">Получение статуса операции</h2>
            </div>
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">URL</h1>
            </div>
            <p className="b-text b-text--indentation">Общение происходит POST запросом, данные пересылаются JSON-ом по адресу</p>
            <div className="b-link b-link--indentation"><a href="https://paymo.ru/rest/v2/unipayment/check_status/" className="b-link__elem">https://paymo.ru/rest/v2/unipayment/check_status/</a></div>
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">Подпись</h1>
            </div>
            <p className="b-text b-text--indentation">В headers запроса должна быть сформирована подпись (X-SIGNATURE). Расчет подписи происходит следующим образом:</p>
            <ul className="b-list">
                <div className="b-list__item-wrap"><span className="b-list__item-round">1</span>
                    <li className="b-list__item b-list__item--plain b-list__item--va-top">Необходимо закодировать тело в формате JSON по ключу key, криптографической функцией хэширования - sha1 (HMAC-SHA1)</li>
                </div>
                <div className="b-list__item-wrap"><span className="b-list__item-round">2</span>
                    <li className="b-list__item b-list__item--plain b-list__item--va-top">Результат кодирования закодировать в BASE64</li>
                </div>
                <div className="b-list__item-wrap">
                    <li className="b-list__item b-list__item--plain b-list__item--linked">Описание алгоритма: <a href="http://tools.ietf.org/html/rfc2104.html" className="b-link__elem b-link__elem--plain">http://tools.ietf.org/html/rfc2104.html</a></li>
                </div>
            </ul>
            <div className="b-caption b-caption--indentation" id="cards-status-request">
                <h1 className="b-caption__elem">Запрос</h1>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Параметры запроса</h1>
            </div>
            <div className="b-api-table">
                <div className="b-api-table-wrap">
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--secondary b-api-table__col--name">Параметр</div>
                        <div className="b-api-table__col b-api-table__col--secondary b-api-table__col--is_required">Обязательный</div>
                        <div className="b-api-table__col b-api-table__col--secondary b-api-table__col--data_type">Тип данных</div>
                        <div className="b-api-table__col b-api-table__col--secondary b-api-table__col--description">Описание</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">transaction_id</div>
                        <div className="b-api-table__col b-api-table__col--is_required">true</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Номер транзакции в магазине. Может быть любым набором символов. Должен быть уникален в пределах выбранного api_key.</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">api_key</div>
                        <div className="b-api-table__col b-api-table__col--is_required">true</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Идентификатор магазина в системе PAYMO. Указан в разделе <span className='b-api-table__col--blue'>Магазины</span> в Личном кабинете.</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">payment_method</div>
                        <div className="b-api-table__col b-api-table__col--is_required">true</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Метод оплаты</div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation" id="cards-status-response">
                <h1 className="b-caption__elem">Ответ</h1>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Параметры ответа</h1>
            </div>
            <div className="b-api-table">
                <div className="b-api-table-wrap">
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--secondary b-api-table__col--name">Параметр</div>
                        <div className="b-api-table__col b-api-table__col--secondary b-api-table__col--is_required">Обязательный</div>
                        <div className="b-api-table__col b-api-table__col--secondary b-api-table__col--data_type">Тип данных</div>
                        <div className="b-api-table__col b-api-table__col--secondary b-api-table__col--description">Описание</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">result</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Результат запроса</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">state</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Статус операции</div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Пример ответа</h1>
            </div>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row">
                        <span className="b-code-snippet__item">
                            <pre>
                                <code>
                                    &#123;<span className='b-code-snippet__chunk--dark'>&quot;result&quot;</span>: true, <span className='b-code-snippet__chunk--dark'>&quot;state&quot;</span>: &quot;deposited&quot;&#125;
                                </code>
                            </pre>
                        </span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Возможные статусы ответа</h1>
            </div>
            <div className="b-state-table">
                <div className="b-state-table-wrap">
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">PROCESSING</div>
                        <div className="b-state-table__col b-state-table__col--description">Платеж в обработке</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">DEPOSITED</div>
                        <div className="b-state-table__col b-state-table__col--description">Транзакция совершена успешно</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">DECLINED</div>
                        <div className="b-state-table__col b-state-table__col--description">Транзакция неуспешна</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">WAIT_EXTERNAL</div>
                        <div className="b-state-table__col b-state-table__col--description">Ожидается подтверждение от внешней платежной системы.</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">REFUNDED</div>
                        <div className="b-state-table__col b-state-table__col--description">Осуществлен полный возврат денежных средств.</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">APPROVED</div>
                        <div className="b-state-table__col b-state-table__col--description">Денежные средства захолдированы, ожидается подтверждение операции.</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">PART_REFUNDED</div>
                        <div className="b-state-table__col b-state-table__col--description">Произведен частичный возврат денежных средств.</div>
                    </div>
                </div>
            </div>
            <textarea value="" id="clipboard" style={{position: "fixed", left: "-10000000px"}}>&nbsp;</textarea>
            <div className="b-command b-command--indentation"></div>
        </div>
    )
}