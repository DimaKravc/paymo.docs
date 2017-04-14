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
                <h2 className="b-title-h2__elem">Как проводится оплата</h2>
            </div>
            <div className="b-caption b-caption--indentation" id="cards-connect-formation">
                <h1 className="b-caption__elem">Формирование запроса</h1>
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
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Пример подписи</h1>
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
                                    &#125;{'\n'}
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
                        <div className="b-api-table__col b-api-table__col--description">Ключ шифрования merchant point, в Личном кабинете обозначен как ЭЦП (secret key). Его можно сгенерировать в настройках магазина в Личном кабинете (Раздел <span className='b-api-table__col--blue'>Магазины</span> → <span className='b-api-table__col--blue'>Настройки</span> → <span className='b-api-table__col--blue'>Технические настройки</span>).</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">prep.body</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Ключ терминала, через который проводится подключение к серверу.</div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation" id="cards-connect-request">
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
                        <div className="b-api-table__col b-api-table__col--description">Идентификатор магазина в системе PAYMO. Указан в разделе Магазины в Личном кабинете</div>
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
                        <div className="b-api-table__col b-api-table__col--description">Принимает значения “card_visa”, “card_mc” и “card_mir”</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">pan</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Номер карты, например “411111111111”</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">expire</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Срок действия карты, например “0717”</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">cvc</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Код проверки подлинности карты, например “411”</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">rebill</div>
                        <div className="b-api-table__col b-api-table__col--is_required">нет</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Параметры рекуррентных платежей</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">signature</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Подпись платежной формы, сформированная с использованием «секретного ключа» (ЭЦП (secret_key)) интернет-магазина. ЭЦП (secret_key) можно сгенерировать в настройках магазина в Личном кабинете (Раздел <span className='b-api-table__col--blue'>Магазины</span> → <span className='b-api-table__col--blue'>Настройки</span> → <span className='b-api-table__col--blue'>Технические настройки</span>). Подпись формируется по алгоритму шифрования md5 с использованием параметров amount и crypto_key:<br/><br/> <span className='b-api-table__col--dark'>md5 ("amount"+"crypto_key")</span></div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Параметры ЭЦП</h1>
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
                        <div className="b-api-table__col b-api-table__col--name">n_amount*</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Сумма платежа</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">crypto_key*</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Как и предыдущем случае, ключ шифрования merchant point. Его можно сгенерировать в настройках магазина в Личном кабинете (<span className='b-api-table__col--blue'>Магазины</span> → <span className='b-api-table__col--blue'>Настройки</span> → <span className='b-api-table__col--blue'>Технические настройки</span>).</div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Пример ЭЦП</h1>
            </div>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row"><span className="b-code-snippet__item">
                <pre><code>data['signature'] = md5(''.join([str(n_amount),crypto_key]).encode()).hexdigest()</code></pre></span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Параметры рекуррентных платежей</h1>
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
                        <div className="b-api-table__col b-api-table__col--name">amount</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Сумма платежа в копейках</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">period</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Периодичность платежа в формате &#60;кол-во месяцев&#62;. &#60;кол-во дней&#62; (например, 3.0 — каждые 3 месяца, 1.0 — каждый месяц, 0.40 — каждые 40 дней).</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">end</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Дата окончания ребиллов в формате DD-MM-YYYY (например, 20–12–2015 — после 20-го декабря 2015 ребиллы прекращаются).</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">start_at</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Дата первого рекуррентного платежа в формате DD-MM-YYYY (например, 20−10−2016 − 20-е октября 2016); время списания берётся от времени первоначального платежа.</div>
                    </div>
                </div>
            </div>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Пример использования</h1>
            </div>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row"><span className="b-code-snippet__item">
                <pre>
                    <code>
                        <span className="b-code-snippet__chunk--dark">rebill</span>:&#123; "<span className="b-code-snippet__chunk--dark">amount</span>": 100, "<span className="b-code-snippet__chunk--dark">period</span>": "1.0", "<span className="b-code-snippet__chunk--dark">end</span>": "31-12-2016", "<span className="b-code-snippet__chunk--dark">start_at</span>": "20-10-2016"&#125;</code></pre></span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation" id="cards-connect-response">
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
                        <div className="b-api-table__col b-api-table__col--name">acsUrl</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Страница ACS банка-эмитента, на которую необходимо сделать POST-запрос для 3ds авторизации</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">paReq</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">base64-строка, содержащая параметры запроса (сумма авторизации, ID транзакции, и т.д.)</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">MD</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">контекст 3DS-транзакции: этот параметр также необходимо передать при выполнении POST-запроса на ACS</div>
                    </div>
                </div>
            </div>
            <div className="b-caption b-caption--indentation" id="cards-connect-3ds">
                <h1 className="b-caption__elem">3DS авторизация</h1>
            </div>
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">Запрос</h1>
            </div>
            <p className="b-text b-text--indentation">Если в ответе на предыдущий запрос (см. выше) были получены данные acsUrl, MD, paReq и termUrl, то необходимо отправить пользователя на страницу ACS банка-эмитента. Для этого необходимо заполнить (или сгенерировать «на лету») нижеследующую форму, подставив соответствующие значения в value:</p>
            <div className="b-code-snippet">
                <div className="b-code-snippet-wrap">
                    <div className="b-code-snippet__row">
                        <span className="b-code-snippet__item">
                            <pre>
                                <code>
                                    &lt;form action=&quot;&lt;<span className="b-code-snippet__chunk--dark">acsUrl</span>&gt;&quot; method=&quot;POST&quot;&gt;{'\n'}
                                    &lt;input type=&quot;hidden&quot; name=&quot;<span className="b-code-snippet__chunk--dark">MD</span>&quot; value=&quot;&lt;MD&gt;&quot;&gt;{'\n'}
                                    &lt;input type=&quot;hidden&quot; name=&quot;<span className="b-code-snippet__chunk--dark">PaReq</span>&quot; value=&quot;&lt;paReq&gt;&quot;&gt;{'\n'}
                                    &lt;input type=&quot;hidden&quot; name=&quot;<span className="b-code-snippet__chunk--dark">TermUrl</span>&quot; value=&quot;&lt;termUrl&gt;&quot;&gt;{'\n'}
                                    &lt;input type=&quot;submit&quot;&gt;{'\n'}
                                    &lt;/form&gt;
                                </code>
                            </pre>
                        </span>
                        <div className="b-code-snippet__copy" onClick={copy}></div>
                    </div>
                </div>
            </div>
            <p className="b-text b-text--indentation">После этого, выполнить автосабмит этой формы.</p>
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">Ответ</h1>
            </div>
            <p className="b-text b-text--indentation">Возврат с ACS банка-эмитента представляет собой отправку (со стороны банка) формы методом POST на URL, указанный в параметре TermUrl (см. выше и ниже), со следующими данными:</p>
            <div className="b-label b-label--indentation">
                <h1 className="b-label__elem">Параметры ответа</h1>
            </div>
            <ul className="b-list b-list--style-default">
                <div className="b-list__item-wrap">
                    <li className="b-list__item b-list__item--plain b-list__item--list-item">MD — идентификатор транзакции мерчанта</li>
                </div>
                <div className="b-list__item-wrap">
                    <li className="b-list__item b-list__item--plain b-list__item--list-item">PaRes — Payer Authentication Response</li>
                </div>
            </ul>
            <p className="b-text b-text--indentation">После этого необходимо редиректить юзера на страницу платежной системы для ожидания результата операции.</p>
            <div className="b-caption b-caption--indentation" id="cards-connect-submit">
                <h1 className="b-caption__elem">Отправка данных о 3DS в эквайер</h1>
            </div>
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">URL</h1>
            </div>
            <p className="b-text b-text--indentation">Общение происходит POST запросом, данные пересылаются JSON-ом по адресу</p>
            <div className="b-link b-link--indentation"><a href="https://paymo.ru/rest/v2/unipayment/process3ds/" className="b-link__elem">https://paymo.ru/rest/v2/unipayment/process3ds/</a></div>
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
            <div className="b-caption b-caption--indentation">
                <h1 className="b-caption__elem">Запрос</h1>
            </div>
            <p className="b-text b-text--indentation">В запросе передаем те параметры, которые пришли в ответе от ACS банка-эмитента, а именно:</p>
            <ul className="b-list b-list--style-default">
                <div className="b-list__item-wrap">
                    <li className="b-list__item b-list__item--plain b-list__item--list-item">MD — идентификатор транзакции мерчанта</li>
                </div>
                <div className="b-list__item-wrap">
                    <li className="b-list__item b-list__item--plain b-list__item--list-item">PaRes — Payer Authentication Response</li>
                </div>
            </ul>
            <div className="b-caption b-caption--indentation">
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
                        <div className="b-api-table__col b-api-table__col--name">transaction_id</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Номер транзакции в системе магазина. Может быть любым набором символов. Должен быть уникален в пределах выбранного api_key</div>
                    </div>
                    <div className="b-api-table__row">
                        <div className="b-api-table__col b-api-table__col--name">payment_id</div>
                        <div className="b-api-table__col b-api-table__col--is_required">да</div>
                        <div className="b-api-table__col b-api-table__col--data_type">строка</div>
                        <div className="b-api-table__col b-api-table__col--description">Идентификатор платежа в PAYMO</div>
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
                                <code>result': &#123;{'\n'}
                                    &emsp;&emsp;'code': &lt;код ответа&gt;,{'\n'}
                                    &emsp;&emsp;'auth_code': &lt;код авторизации в случае_успеха&gt;,{'\n'}
                                    &emsp;&emsp;'amount': &lt;сумма платежа в копейках&gt;,{'\n'}
                                    &emsp;&emsp;'message': &lt;текст_ответа&gt;,{'\n'}
                                &#125;</code>
                            </pre>
                        </span>
                            <div className="b-code-snippet__copy" onClick={copy}></div>
                        </div>
                </div>
            </div>
            <textarea value="" id="clipboard" style={{position: "fixed", left: "-10000000px"}}>&nbsp;</textarea>
            <div className="b-command b-command--indentation"><NavLink to="/payments/cards/cards-cancel" className="b-command__link" onClick={()=>window.scrollTo(0, 0)}>Отмена подписки на рекуррентные платежи</NavLink></div>
        </div>
    )
}