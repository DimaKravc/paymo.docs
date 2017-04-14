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
                                    import hmac{'\n'}
                                    from hashlib import <span className="b-code-snippet__chunk--blue">sha1</span>{'\n'}
                                    import <span className="b-code-snippet__chunk--blue">base64</span>{'\n'}
                                    <span>&nbsp;</span>{'\n'}
                                    hashed = hmac.new(<span className="b-code-snippet__chunk--blue">crypto_key</span>.encode(), str(<span className="b-code-snippet__chunk--blue">prep.body</span>).encode(), sha1){'\n'}
                                    x-signature = base64.b64encode(hashed.digest()).decode().rsplit(&quot;&quot;)[0]{'\n'}
                                    headers = &#123;{'\n'}
                                    &emsp;&emsp;&quot;X-Signature&quot;: x-signature,{'\n'}
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
                                    from requests import Request, Session{'\n'}
                                    from hashlib import md5, sha1{'\n'}
                                    import <span className="b-code-snippet__chunk--blue">base64</span>{'\n'}
                                    import <span className="b-code-snippet__chunk--blue">hmac</span>{'\n'}
                                    from decimal import Decimal{'\n'}
                                    import uuid{'\n'}
                                    {'\n'}
                                    s = Session(){'\n'}
                                    <span className="b-code-snippet__chunk--blue">crypto_key</span> = 'TEST'{'\n'}
                                    <span className="b-code-snippet__chunk--blue">api_key</span> = '3fd47e05-8e7c-4e58-8fbb-9af08926d995'{'\n'}
                                    {'\n'}
                                    def check_payment(data):{'\n'}
                                    &quot;&quot;&quot;Проверка статуса платежа&quot;&quot;&quot;{'\n'}
                                    # Это URL по которому мы стучимся чтобы узнать статус платежа{'\n'}
                                    url = 'https://paymo.ru/rest/v2/unipayment/check_status/'{'\n'}
                                    {'\n'}
                                    # Тут мы формируем данные для запроса{'\n'}
                                    v_data = &#123;{'\n'}
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">api_key</span>': data['api_key'],{'\n'}
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">pmnt_id</span>': data['pmnt_id'],{'\n'}
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">payment_method</span>': data['payment_method'],{'\n'}
                                    &#125;
                                    {'\n'}
                                    r = Request('POST', url, json=v_data, headers={}){'\n'}
                                    prep = r.prepare(){'\n'}
                                    <span>&nbsp;</span>{'\n'}
                                    # Тут высчитываем X-SIGNATURE и добавляем его в заголовок запроса{'\n'}
                                    hashed = hmac.new(crypto_key.encode(), str(prep.body).encode(), sha1){'\n'}
                                    prep.headers[{'\n'}
                                    &emsp;&emsp;'X-SIGNATURE'] = base64.b64encode(hashed.digest()).decode().rsplit(&quot;&quot;)[0]{'\n'}
                                    {'\n'}
                                    # А теперь запрос отправляем{'\n'}
                                    resp = s.send(prep){'\n'}
                                    print('Check payment status response:', resp.text){'\n'}
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