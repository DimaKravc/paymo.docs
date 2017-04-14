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
                <h2 className="b-title-h2__elem">Отмена подписки на рекуррентные платежи</h2>
            </div>
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">URL</h1>
            </div>
            <p className="b-text b-text--indentation">Общение происходит POST запросом, данные пересылаются JSON-ом по адресу</p>
            <div className="b-link b-link--indentation"><a href="https://paymo.ru/rest/v2/unipayment/" className="b-link__elem">https://paymo.ru/rest/v2/unipayment/</a></div>
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">Подпись</h1>
            </div>
            <p className="b-text b-text--indentation">В <strong>headers</strong> запроса должна быть сформирована подпись (X-SIGNATURE). Расчет подписи происходит следующим образом:</p>
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
            <div className="b-caption b-caption--indentation" id="cards-cancel-request">
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
                        <div className="b-api-table__col b-api-table__col--name">api_key*</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Идентификатор магазина в системе PAYMO. Указан в разделе <span className='b-api-table__col--blue'>Магазины</span> в Личном кабинете</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">transaction_id</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Номер транзакции в системе магазина. Может быть любым набором символов. Должен быть уникален в пределах выбранного api_key.</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">amount</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Сумма первого платежа в копейках</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">signature</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Подпись платежной формы, сформированная с использованием «секретного ключа» (ЭЦП (secret_key)) интернет-магазина. ЭЦП (secret_key) можно сгенерировать в настройках магазина в Личном кабинете (Раздел <span className='b-api-table__col--blue'>Магазины</span> → <span className='b-api-table__col--blue'>Настройки</span> → <span className='b-api-table__col--blue'>Технические настройки</span>). Подпись формируется по алгоритму шифрования md5 с использованием параметров amount и crypto_key: <br/><br/> <span className='b-code-snippet__chunk--dark'>md5 ("amount"+"crypto_key")</span></div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Пример на python:</h1>
            </div>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row">
                        <span className="b-code-snippet__item">
                            <pre>
                                <code>
                                    &#123;&quot;api_key&quot;: &quot;3fd47e05-8e7n-4e5-78-8fbb-9af08926d995&quot;, &quot;transaction_id&quot;: &quot;198&quot;, &quot;amount&quot;: 100,<br/>
                                    &quot;signature&quot;: &quot;oi3rf3ijfioejfoeirjf&quot;&#125;
                                </code>
                            </pre>
                        </span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation" id="cards-cancel-response">
                <h1 className="b-caption__elem">Ответ</h1>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Параметры ответа:</h1>
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
                        <div className="b-api-table__col b-api-table__col--name">message</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Ответ</div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Пример ответа:</h1>
            </div>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row">
                        <span className="b-code-snippet__item">
                            <pre>
                                <code>
                                    &#123;<span className='b-code-snippet__chunk--dark'>&quot;result&quot;</span>: true, <span className='b-code-snippet__chunk--dark'>&quot;message&quot;</span>: &quot;Rebill is stopped&quot;&#125;
                                </code>
                            </pre>
                        </span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <textarea value="" id="clipboard" style={{position: "fixed", left: "-10000000px"}}>&nbsp;</textarea>
            <div className="b-command b-command--indentation"><NavLink to="/payments/cards/cards-status" className="b-command__link" onClick={()=>window.scrollTo(0, 0)}>Получение статуса операции</NavLink></div>
        </div>
    )
}