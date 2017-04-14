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
                <h2 className="b-title-h2__elem">Проведение платежа</h2>
            </div>
            <p className="b-text b-text--indentation">Общение происходит POST запросом, данные пересылаются JSON-ом по адресу</p>
            <div className="b-link b-link--indentation"><a href="http://testgate4.paymo.ru/rest/v2/unipayment/" className="b-link__elem">http://testgate4.paymo.ru/rest/v2/unipayment/</a></div>
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
                                    {'\n'}
                                hashed = hmac.new(<span className="b-code-snippet__chunk--blue">crypto_key</span>.encode(), str(<span className="b-code-snippet__chunk--blue">prep.body</span>).encode(), sha1){'\n'}
                                x-signature = base64.b64encode(hashed.digest()).decode().rsplit(&quot;\n&quot;)[0]{'\n'}
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
            <div className="b-label b-label--indentation">
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
            <div className="b-caption b-caption--indentation" id="qr-connect-request">
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
                        <div className="b-api-table__col b-api-table__col--description">Идентификатор магазина в системе PAYMO. Указан в разделе <span className="b-api-table__col--blue">Магазины</span> в Личном кабинете</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">amount</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Сумма первого платежа в копейках</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">transaction_id</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Номер транзакции в магазине. Может быть любым набором символов. Должен быть уникален в пределах выбранного api_key.</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">payment_method</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Значением всегда должен быть "vtbqr"</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">mobile_phone</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Номер телефона плательщика</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">is_mobile_device</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Должен принимать значение "true", если оплата происходит с мобильного девайса. False — если с компьютера. По умолчанию — false.</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">signature</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Подпись платежной формы, сформированная с использованием «секретного ключа» (crypto_key) интернет-магазина. Crypto_key можно сгенерировать в настройках магазина в Личном кабинете (Раздел <span className="b-api-table__col--blue">Магазины</span> → <span className="b-api-table__col--blue">Настройки</span> → <span className="b-api-table__col--blue">Общие</span>). Подпись формируется по алгоритму шифрования md5 с использованием следующих параметров: <br/><br/><span className="b-api-table__col--dark">md5 ("amount"+"crypto_key")</span><br/><br/> <span className="b-api-table__col--italic">! Этот параметр обеспечивает безопасность при прохождении платежа и целостность передаваемых данных, крайне рекомендован для использования. Корректное его составление гарантирует, что мошенник не сможет подделать какие-либо данные в операции оплаты.</span></div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">Пример запроса</h1>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Пример суммы платежа (?)</h1>
            </div>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row">
                        <span className="b-code-snippet__item">
                            <pre>
                                <code>
                                    n_amount = int(Decimal(str(data['amount'])) * 100){'\n'}
                                    {'\n'}
                                    data['hash_sum'] = md5(''.join([str(n_amount),crypto_key]).encode()).hexdigest()
                                </code>
                            </pre>
                        </span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Параметры суммы платежа (?)</h1>
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
                        <div className="b-api-table__col b-api-table__col--name">data['amount']</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Сумма, которая передается в платеже</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">n_amount</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Сумма умноженная на 100</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">crypto_key</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Как и предыдущем случае, secret key (ключ шифрования). Его можно сгенерировать в настройках магазина в Личном кабинете (Раздел <span className="b-api-table__col--blue">Магазины</span> → <span className="b-api-table__col--blue">Настройки</span> → <span className="b-api-table__col--blue">Технические настройки</span>).</div>
                    </div>
                </div>
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
                                    <span>nbsp;</span>{'\n'}
                                    def make_payment_data(payment_method):{'\n'}
                                    &emsp;&emsp;&quot;&quot;&quot;Создаем данные для платежа&quot;&quot;&quot;{'\n'}
                                    &emsp;&emsp;data = &#123;{'\n'}
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">api_key</span>': api_key,{'\n'}
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">transaction_id</span>': str(uuid.uuid4()),{'\n'}
                                    &emsp;&emsp;'oferta': '1',{'\n'}
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">amount</span>': '100',{'\n'}
                                    &emsp;&emsp;'pan': '4111111111111111',{'\n'}
                                    &emsp;&emsp;'expire': '1218',{'\n'}
                                    &emsp;&emsp;'cvc': '234',{'\n'}
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">mobile_phone</span>': '79017909173',{'\n'}
                                    &emsp;&emsp;'<span className="b-code-snippet__chunk--blue">payment_method</span>': payment_method,{'\n'}
                                    &emsp;&emsp;'custom_data': &#123;'something': 'else'&#125;,{'\n'}
                                    &emsp;&emsp;'description': 'description'{'\n'}
                                    &emsp;&emsp;&#125;{'\n'}
                                    &emsp;&emsp;return data{'\n'}
                                    {'\n'}
                                    def make_payment(data):{'\n'}
                                    &emsp;&emsp;&quot;&quot;&quot;Проводим платеж&quot;&quot;&quot;{'\n'}
                                    &emsp;&emsp;<span className="b-code-snippet__chunk--blue"># Это URL по которому мы стучимся в API чтобы провести платеж</span>{'\n'}
                                    &emsp;&emsp;url = '<span className="b-code-snippet__chunk--blue">http://testgate4.paymo.ru/rest/v2/unipayment/</span>'{'\n'}
                                    &emsp;&emsp;<span className="b-code-snippet__chunk--blue"># Тут мы добавляем в данные платежа hash_sum</span>{'\n'}
                                    &emsp;&emsp;n_amount = int(Decimal(str(data['<span className="b-code-snippet__chunk--blue">amount</span>'])) * 100){'\n'}
                                    &emsp;&emsp;data['hash_sum'] = md5(''.join([str(n_amount), crypto_key]).encode()).hexdigest(){'\n'}
                                    &emsp;&emsp;r = Request('POST', url, json=data, headers={}){'\n'}
                                    &emsp;&emsp;prep = r.prepare(){'\n'}
                                    &emsp;&emsp;<span style={{"color": "#737b91"}}># Высчитывается X-SIGNATURE и добавляется в заголовок запроса</span>{'\n'}
                                    &emsp;&emsp;hashed = hmac.new(<span className="b-code-snippet__chunk--blue">crypto_key</span>.encode(), str(prep.body).encode(), sha1){'\n'}
                                    &emsp;&emsp;prep.headers['X-SIGNATURE'] = base64.b64encode(hashed.digest()).decode().rsplit(&quot;\n&quot;)[0]{'\n'}
                                    &emsp;&emsp;<span style={{"color": "#737b91"}}># Далее передается запрос</span>{'\n'}
                                    &emsp;&emsp;resp = s.send(prep){'\n'}
                                    &emsp;&emsp;print('Make payment response:', resp.text){'\n'}
                                    &emsp;&emsp;return{'\n'}
                                </code>
                            </pre>
                        </span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation" id="qr-connect-response">
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
                        <div className="b-api-table__col b-api-table__col--name">pmnt_id</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">По данному идентификатору можно узнать статус платежа</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">transaction_id</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Номер транзакции в магазине. Может быть любым набором символов. Должен быть уникален в пределах выбранного api_key</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">qr_src</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Ссылка для генерации QR-кода, закодированная в base64, если при инициации платежа было отправлено "is_mobile_device": false<br/><br/> Вывести qr-код на экран можно так:<br/><br/> <span className="b-api-table__col--code">&lt;img src=&#39;data:image/<br/>png:base64.&#39;.qr_src.&#39;&quot; width = &quot;200&quot; height = &quot;200&quot;&gt;&#39;</span> <br/><br/>Или ссылка на оплату в мобильном приложении, если было отправлено "is_mobile_device": true при инициации платежа.</div>
                    </div>
                </div>
            </div>
            <textarea value="" id="clipboard" style={{position: "fixed", left: "-10000000px"}}>&nbsp;</textarea>
            <div className="b-command b-command--indentation"><NavLink to="/payments/pay24/qr-status" className="b-command__link" onClick={()=>window.scrollTo(0, 0)}>Метод получения статуса платежа</NavLink></div>
        </div>
    )
}