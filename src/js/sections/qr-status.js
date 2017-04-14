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
                <h1 className="b-title-h1__elem">Подключение<br/> платежного метода PAY24</h1>
            </div>
            <div className="b-title-h2 b-title-h2--indentation">
                <h2 className="b-title-h2__elem">Метод получения статуса платежа</h2>
            </div>
            <p className="b-text b-text--indentation">В headers запроса должна быть сформирована подпись (X-SIGNATURE). Расчет подписи<br/> происходит следующим образом:</p>
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
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Пример на Python:</h1>
            </div>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row">
                        <span className="b-code-snippet__item">
                            <pre>
                                <code>
                                    import hmac<br/>
                                    from hashlib import <span className="b-code-snippet__chunk--blue">sha1</span><br/>
                                    import <span className="b-code-snippet__chunk--blue">base64</span><br/>
                                    <span>&nbsp;</span><br/>
                                    hashed = hmac.new(<span className="b-code-snippet__chunk--blue">crypto_key</span>.encode(), str(<span className="b-code-snippet__chunk--blue">prep.body</span>).encode(), sha1)<br/>
                                    x-signature = base64.b64encode(hashed.digest()).decode().rsplit(&quot;&quot;)[0]<br/>
                                    headers = &#123;<br/>
                                    &emsp;&emsp;&quot;X-Signature&quot;: x-signature,<br/>
                                    &#125;
                                </code>
                            </pre>
                        </span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation" id="qr-status-signature">
                <h1 className="b-label__elem">Параметры подписи</h1>
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
                        <div className="b-api-table__col b-api-table__col--name">crypto_key</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">secret key (ключ шифрования merchant point). Его можно сгенерировать в настройках магазина в Личном кабинете (Раздел <span className="b-api-table__col--blue">Магазины</span> → <span className="b-api-table__col--blue">Настройки</span> → <span className="b-api-table__col--blue">Технические настройки</span>).</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">prep.body</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Ключ терминала, через который проводится подключение к серверу.</div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation" id="qr-status-body">
                <h1 className="b-caption__elem">Тело запроса</h1>
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
                        <div className="b-api-table__col b-api-table__col--name">api_key</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Идентификатор магазина в системе PAYMO. Указан в разделе <span className="b-api-table__col--blue">Магазины</span> в Личном кабинете.</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">payment_method</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Значением всегда должен быть "vtbqr"</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">pmnt_id</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Идентификатор платежа, полученный в ответе от сервера при успешной инициации платежа.</div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation" id="qr-status-example">
                <h1 className="b-label__elem">Пример запроса</h1>
            </div>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row">
                        <span className="b-code-snippet__item">
                            <pre>
                                <code>
                                    from requests import Request, Session<br/>
                                    from hashlib import md5, sha1<br/>
                                    import <span className="b-code-snippet__chunk--blue">base64</span><br/>
                                    import <span className="b-code-snippet__chunk--blue">hmac</span><br/>
                                    from decimal import Decimal<br/>
                                    import uuid<br/>
                                    <br/>
                                    s = Session()<br/>
                                    <span className="b-code-snippet__chunk--blue">crypto_key</span> = 'TEST'<br/>
                                    <span className="b-code-snippet__chunk--blue">api_key</span> = '3fd47e05-8e7c-4e58-8fbb-9af08926d995'<br/>
                                    <br/>
                                    def check_payment(data):<br/>
                                    &quot;&quot;&quot;Проверка статуса платежа&quot;&quot;&quot;<br/>
                                    # Это URL по которому мы стучимся чтобы узнать статус платежа<br/>
                                    url = 'https://paymo.ru/rest/v2/unipayment/check_status/'<br/>
                                    <br/>
                                    # Тут мы формируем данные для запроса<br/>
                                    v_data = &#123;<br/>
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">api_key</span>': data['api_key'],<br/>
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">pmnt_id</span>': data['pmnt_id'],<br/>
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">payment_method</span>': data['payment_method'],<br/>
                                    &#125;
                                    <br/>
                                    r = Request('POST', url, json=v_data, headers={})<br/>
                                    prep = r.prepare()<br/>
                                    <span>&nbsp;</span><br/>
                                    # Тут высчитываем X-SIGNATURE и добавляем его в заголовок запроса<br/>
                                    hashed = hmac.new(crypto_key.encode(), str(prep.body).encode(), sha1)<br/>
                                    prep.headers[<br/>
                                    &emsp;&emsp;'X-SIGNATURE'] = base64.b64encode(hashed.digest()).decode().rsplit(&quot;&quot;)[0]<br/>
                                    <br/>
                                    # А теперь запрос отправляем<br/>
                                    resp = s.send(prep)<br/>
                                    print('Check payment status response:', resp.text)<br/>
                                    return
                                </code>
                            </pre>
                        </span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation" id="qr-status-response">
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
                        <div className="b-api-table__col b-api-table__col--description">Результат платежа, может принимать значения true и false</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">state</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Статус платежа</div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Возможные статусы ответа</h1>
            </div>
            <div className="b-state-table">
                <div className="b-state-table-wrap">
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">DEPOSITED</div>
                        <div className="b-state-table__col b-state-table__col--description">Транзакция совершена успешно</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">DECLINED</div>
                        <div className="b-state-table__col b-state-table__col--description">Транзакция неуспешна</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">READY_PAY</div>
                        <div className="b-state-table__col b-state-table__col--description">Плательщику осталось отсканировать QR-код.</div>
                    </div>
                    <div className="b-state-table__row">
                        <div className="b-state-table__col b-state-table__col--name">WAIT_EXTERNAL</div>
                        <div className="b-state-table__col b-state-table__col--description">Ожидается подтверждение от ВТБ-24.</div>
                    </div>
                </div>
            </div>
            <textarea value="" id="clipboard" style={{position: "fixed", left: "-10000000px"}}>&nbsp;</textarea>
            <div className="b-command b-command--indentation">&nbsp;</div>
        </div>
    )
}