import React, { useState, useRef } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Translator = () => {
    const [data_val, setdata_val] = useState("");
    const [Lnag, setLnag] = useState("hi")
    const [from_lang, setfrom_lang] = useState("en")
    const [Ans, setAns] = useState(null)

    const make_req = async (e) => {
        e.preventDefault();

        const key = '588f33b5124b471f9aad59e51295e32e';
        const region = 'centralindia';
        const endpoint = 'https://api.cognitive.microsofttranslator.com';
        const url = `${endpoint}/translate`;

        const headers = {
            'Ocp-Apim-Subscription-Key': key,
            'Ocp-Apim-Subscription-Region': region,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString(),
        };

        const params = {
            'api-version': '3.0',
            from: [from_lang],
            to: [Lnag],
        };

        const data = [
            {
                text: data_val,
            },
        ];

        try {
            const response = await axios.post(url, data, { params, headers });
            setAns(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
        console.log(data_val);
        console.log(Ans)
    }

    return (
        <div className='flex flex-col  mx-[45px] mt-[10px]'>
            <div className='flex flex-col'>
                <h1 className='text-4xl mb-4 text-teal-600 font-bold'>Translator</h1>
                <form action="" onSubmit={make_req}>
                    
                    <h1 className='ml-4'>From</h1>
                    <div className='flex mb-3'>
                        <div className='w-2/5'>
                            <select className='w-36 outline-none focus:border-teal-700 border-2 rounded-lg mr-9 m-3 p-2' value={from_lang} onChange={e => setfrom_lang(e.target.value)} name="languages">
                                <option value="">languages</option>
                                <option value="af">Afrikaans</option>
                                <option value="sq">Albanian - shqip</option>
                                <option value="am">Amharic - አማርኛ</option>
                                <option value="ar">Arabic - العربية</option>
                                <option value="an">Aragonese - aragonés</option>
                                <option value="hy">Armenian - հայերեն</option>
                                <option value="ast">Asturian - asturianu</option>
                                <option value="az">Azerbaijani - azərbaycan dili</option>
                                <option value="eu">Basque - euskara</option>
                                <option value="be">Belarusian - беларуская</option>
                                <option value="bn">Bengali - বাংলা</option>
                                <option value="bs">Bosnian - bosanski</option>
                                <option value="br">Breton - brezhoneg</option>
                                <option value="bg">Bulgarian - български</option>
                                <option value="ca">Catalan - català</option>
                                <option value="ckb">Central Kurdish - کوردی (دەستنوسی عەرەبی)</option>
                                <option value="zh">Chinese - 中文</option>
                                <option value="zh-HK">Chinese (Hong Kong) - 中文（香港）</option>
                                <option value="zh-CN">Chinese (Simplified) - 中文（简体）</option>
                                <option value="zh-TW">Chinese (Traditional) - 中文（繁體）</option>
                                <option value="co">Corsican</option>
                                <option value="hr">Croatian - hrvatski</option>
                                <option value="cs">Czech - čeština</option>
                                <option value="da">Danish - dansk</option>
                                <option value="nl">Dutch - Nederlands</option>
                                <option value="en">English</option>
                                <option value="en-AU">English (Australia)</option>
                                <option value="en-CA">English (Canada)</option>
                                <option value="en-IN">English (India)</option>
                                <option value="en-NZ">English (New Zealand)</option>
                                <option value="en-ZA">English (South Africa)</option>
                                <option value="en-GB">English (United Kingdom)</option>
                                <option value="en-US">English (United States)</option>
                                <option value="eo">Esperanto - esperanto</option>
                                <option value="et">Estonian - eesti</option>
                                <option value="fo">Faroese - føroyskt</option>
                                <option value="fil">Filipino</option>
                                <option value="fi">Finnish - suomi</option>
                                <option value="fr">French - français</option>
                                <option value="fr-CA">French (Canada) - français (Canada)</option>
                                <option value="fr-FR">French (France) - français (France)</option>
                                <option value="fr-CH">French (Switzerland) - français (Suisse)</option>
                                <option value="gl">Galician - galego</option>
                                <option value="ka">Georgian - ქართული</option>
                                <option value="de">German - Deutsch</option>
                                <option value="de-AT">German (Austria) - Deutsch (Österreich)</option>
                                <option value="de-DE">German (Germany) - Deutsch (Deutschland)</option>
                                <option value="de-LI">German (Liechtenstein) - Deutsch (Liechtenstein)</option>
                                <option value="de-CH">German (Switzerland) - Deutsch (Schweiz)</option>
                                <option value="el">Greek - Ελληνικά</option>
                                <option value="gn">Guarani</option>
                                <option value="gu">Gujarati - ગુજરાતી</option>
                                <option value="ha">Hausa</option>
                                <option value="haw">Hawaiian - ʻŌlelo Hawaiʻi</option>
                                <option value="he">Hebrew - עברית</option>
                                <option value="hi">Hindi - हिन्दी</option>
                                <option value="hu">Hungarian - magyar</option>
                                <option value="is">Icelandic - íslenska</option>
                                <option value="id">Indonesian - Indonesia</option>
                                <option value="ia">Interlingua</option>
                                <option value="ga">Irish - Gaeilge</option>
                                <option value="it">Italian - italiano</option>
                                <option value="it-IT">Italian (Italy) - italiano (Italia)</option>
                                <option value="it-CH">Italian (Switzerland) - italiano (Svizzera)</option>
                                <option value="ja">Japanese - 日本語</option>
                                <option value="kn">Kannada - ಕನ್ನಡ</option>
                                <option value="kk">Kazakh - қазақ тілі</option>
                                <option value="km">Khmer - ខ្មែរ</option>
                                <option value="ko">Korean - 한국어</option>
                                <option value="ku">Kurdish - Kurdî</option>
                                <option value="ky">Kyrgyz - кыргызча</option>
                                <option value="lo">Lao - ລາວ</option>
                                <option value="la">Latin</option>
                                <option value="lv">Latvian - latviešu</option>
                                <option value="ln">Lingala - lingála</option>
                                <option value="lt">Lithuanian - lietuvių</option>
                                <option value="mk">Macedonian - македонски</option>
                                <option value="ms">Malay - Bahasa Melayu</option>
                                <option value="ml">Malayalam - മലയാളം</option>
                                <option value="mt">Maltese - Malti</option>
                                <option value="mr">Marathi - मराठी</option>
                                <option value="mn">Mongolian - монгол</option>
                                <option value="ne">Nepali - नेपाली</option>
                                <option value="no">Norwegian - norsk</option>
                                <option value="nb">Norwegian Bokmål - norsk bokmål</option>
                                <option value="nn">Norwegian Nynorsk - nynorsk</option>
                                <option value="oc">Occitan</option>
                                <option value="or">Oriya - ଓଡ଼ିଆ</option>
                                <option value="om">Oromo - Oromoo</option>
                                <option value="ps">Pashto - پښتو</option>
                                <option value="fa">Persian - فارسی</option>
                                <option value="pl">Polish - polski</option>
                                <option value="pt">Portuguese - português</option>
                                <option value="pt-BR">Portuguese (Brazil) - português (Brasil)</option>
                                <option value="pt-PT">Portuguese (Portugal) - português (Portugal)</option>
                                <option value="pa">Punjabi - ਪੰਜਾਬੀ</option>
                                <option value="qu">Quechua</option>
                                <option value="ro">Romanian - română</option>
                                <option value="mo">Romanian (Moldova) - română (Moldova)</option>
                                <option value="rm">Romansh - rumantsch</option>
                                <option value="ru">Russian - русский</option>
                                <option value="gd">Scottish Gaelic</option>
                                <option value="sr">Serbian - српски</option>
                                <option value="sh">Serbo - Croatian</option>
                                <option value="sn">Shona - chiShona</option>
                                <option value="sd">Sindhi</option>
                                <option value="si">Sinhala - සිංහල</option>
                                <option value="sk">Slovak - slovenčina</option>
                                <option value="sl">Slovenian - slovenščina</option>
                                <option value="so">Somali - Soomaali</option>
                                <option value="st">Southern Sotho</option>
                                <option value="es">Spanish - español</option>
                                <option value="es-AR">Spanish (Argentina) - español (Argentina)</option>
                                <option value="es-419">Spanish (Latin America) - español (Latinoamérica)</option>
                                <option value="es-MX">Spanish (Mexico) - español (México)</option>
                                <option value="es-ES">Spanish (Spain) - español (España)</option>
                                <option value="es-US">Spanish (United States) - español (Estados Unidos)</option>
                                <option value="su">Sundanese</option>
                                <option value="sw">Swahili - Kiswahili</option>
                                <option value="sv">Swedish - svenska</option>
                                <option value="tg">Tajik - тоҷикӣ</option>
                                <option value="ta">Tamil - தமிழ்</option>
                                <option value="tt">Tatar</option>
                                <option value="te">Telugu - తెలుగు</option>
                                <option value="th">Thai - ไทย</option>
                                <option value="ti">Tigrinya - ትግርኛ</option>
                                <option value="to">Tongan - lea fakatonga</option>
                                <option value="tr">Turkish - Türkçe</option>
                                <option value="tk">Turkmen</option>
                                <option value="tw">Twi</option>
                                <option value="uk">Ukrainian - українська</option>
                                <option value="ur">Urdu - اردو</option>
                                <option value="ug">Uyghur</option>
                                <option value="uz">Uzbek - o‘zbek</option>
                                <option value="vi">Vietnamese - Tiếng Việt</option>
                                <option value="wa">Walloon - wa</option>
                                <option value="cy">Welsh - Cymraeg</option>
                                <option value="fy">Western Frisian</option>
                                <option value="xh">Xhosa</option>
                                <option value="yi">Yiddish</option>
                                <option value="yo">Yoruba - Èdè Yorùbá</option>
                                <option value="zu">Zulu - isiZulu</option>
                            </select>
                        </div>
                        <div className='w-4/5'>
                            <textarea className='w-full border-b-2  focus:border-teal-600 text-lg outline-none' type="text" value={data_val} onChange={e => setdata_val(e.target.value)} />
                        </div>
                    </div>
                    <h1 className='ml-4'>To</h1>

                    <select className='w-36 outline-none focus:border-teal-700 border-2 rounded-lg mr-9 m-3 p-2' value={Lnag} onChange={e => setLnag(e.target.value)} name="languages">
                        <option value="">languages</option>
                        <option value="af">Afrikaans</option>
                        <option value="sq">Albanian - shqip</option>
                        <option value="am">Amharic - አማርኛ</option>
                        <option value="ar">Arabic - العربية</option>
                        <option value="an">Aragonese - aragonés</option>
                        <option value="hy">Armenian - հայերեն</option>
                        <option value="ast">Asturian - asturianu</option>
                        <option value="az">Azerbaijani - azərbaycan dili</option>
                        <option value="eu">Basque - euskara</option>
                        <option value="be">Belarusian - беларуская</option>
                        <option value="bn">Bengali - বাংলা</option>
                        <option value="bs">Bosnian - bosanski</option>
                        <option value="br">Breton - brezhoneg</option>
                        <option value="bg">Bulgarian - български</option>
                        <option value="ca">Catalan - català</option>
                        <option value="ckb">Central Kurdish - کوردی (دەستنوسی عەرەبی)</option>
                        <option value="zh">Chinese - 中文</option>
                        <option value="zh-HK">Chinese (Hong Kong) - 中文（香港）</option>
                        <option value="zh-CN">Chinese (Simplified) - 中文（简体）</option>
                        <option value="zh-TW">Chinese (Traditional) - 中文（繁體）</option>
                        <option value="co">Corsican</option>
                        <option value="hr">Croatian - hrvatski</option>
                        <option value="cs">Czech - čeština</option>
                        <option value="da">Danish - dansk</option>
                        <option value="nl">Dutch - Nederlands</option>
                        <option value="en">English</option>
                        <option value="en-AU">English (Australia)</option>
                        <option value="en-CA">English (Canada)</option>
                        <option value="en-IN">English (India)</option>
                        <option value="en-NZ">English (New Zealand)</option>
                        <option value="en-ZA">English (South Africa)</option>
                        <option value="en-GB">English (United Kingdom)</option>
                        <option value="en-US">English (United States)</option>
                        <option value="eo">Esperanto - esperanto</option>
                        <option value="et">Estonian - eesti</option>
                        <option value="fo">Faroese - føroyskt</option>
                        <option value="fil">Filipino</option>
                        <option value="fi">Finnish - suomi</option>
                        <option value="fr">French - français</option>
                        <option value="fr-CA">French (Canada) - français (Canada)</option>
                        <option value="fr-FR">French (France) - français (France)</option>
                        <option value="fr-CH">French (Switzerland) - français (Suisse)</option>
                        <option value="gl">Galician - galego</option>
                        <option value="ka">Georgian - ქართული</option>
                        <option value="de">German - Deutsch</option>
                        <option value="de-AT">German (Austria) - Deutsch (Österreich)</option>
                        <option value="de-DE">German (Germany) - Deutsch (Deutschland)</option>
                        <option value="de-LI">German (Liechtenstein) - Deutsch (Liechtenstein)</option>
                        <option value="de-CH">German (Switzerland) - Deutsch (Schweiz)</option>
                        <option value="el">Greek - Ελληνικά</option>
                        <option value="gn">Guarani</option>
                        <option value="gu">Gujarati - ગુજરાતી</option>
                        <option value="ha">Hausa</option>
                        <option value="haw">Hawaiian - ʻŌlelo Hawaiʻi</option>
                        <option value="he">Hebrew - עברית</option>
                        <option value="hi">Hindi - हिन्दी</option>
                        <option value="hu">Hungarian - magyar</option>
                        <option value="is">Icelandic - íslenska</option>
                        <option value="id">Indonesian - Indonesia</option>
                        <option value="ia">Interlingua</option>
                        <option value="ga">Irish - Gaeilge</option>
                        <option value="it">Italian - italiano</option>
                        <option value="it-IT">Italian (Italy) - italiano (Italia)</option>
                        <option value="it-CH">Italian (Switzerland) - italiano (Svizzera)</option>
                        <option value="ja">Japanese - 日本語</option>
                        <option value="kn">Kannada - ಕನ್ನಡ</option>
                        <option value="kk">Kazakh - қазақ тілі</option>
                        <option value="km">Khmer - ខ្មែរ</option>
                        <option value="ko">Korean - 한국어</option>
                        <option value="ku">Kurdish - Kurdî</option>
                        <option value="ky">Kyrgyz - кыргызча</option>
                        <option value="lo">Lao - ລາວ</option>
                        <option value="la">Latin</option>
                        <option value="lv">Latvian - latviešu</option>
                        <option value="ln">Lingala - lingála</option>
                        <option value="lt">Lithuanian - lietuvių</option>
                        <option value="mk">Macedonian - македонски</option>
                        <option value="ms">Malay - Bahasa Melayu</option>
                        <option value="ml">Malayalam - മലയാളം</option>
                        <option value="mt">Maltese - Malti</option>
                        <option value="mr">Marathi - मराठी</option>
                        <option value="mn">Mongolian - монгол</option>
                        <option value="ne">Nepali - नेपाली</option>
                        <option value="no">Norwegian - norsk</option>
                        <option value="nb">Norwegian Bokmål - norsk bokmål</option>
                        <option value="nn">Norwegian Nynorsk - nynorsk</option>
                        <option value="oc">Occitan</option>
                        <option value="or">Oriya - ଓଡ଼ିଆ</option>
                        <option value="om">Oromo - Oromoo</option>
                        <option value="ps">Pashto - پښتو</option>
                        <option value="fa">Persian - فارسی</option>
                        <option value="pl">Polish - polski</option>
                        <option value="pt">Portuguese - português</option>
                        <option value="pt-BR">Portuguese (Brazil) - português (Brasil)</option>
                        <option value="pt-PT">Portuguese (Portugal) - português (Portugal)</option>
                        <option value="pa">Punjabi - ਪੰਜਾਬੀ</option>
                        <option value="qu">Quechua</option>
                        <option value="ro">Romanian - română</option>
                        <option value="mo">Romanian (Moldova) - română (Moldova)</option>
                        <option value="rm">Romansh - rumantsch</option>
                        <option value="ru">Russian - русский</option>
                        <option value="gd">Scottish Gaelic</option>
                        <option value="sr">Serbian - српски</option>
                        <option value="sh">Serbo - Croatian</option>
                        <option value="sn">Shona - chiShona</option>
                        <option value="sd">Sindhi</option>
                        <option value="si">Sinhala - සිංහල</option>
                        <option value="sk">Slovak - slovenčina</option>
                        <option value="sl">Slovenian - slovenščina</option>
                        <option value="so">Somali - Soomaali</option>
                        <option value="st">Southern Sotho</option>
                        <option value="es">Spanish - español</option>
                        <option value="es-AR">Spanish (Argentina) - español (Argentina)</option>
                        <option value="es-419">Spanish (Latin America) - español (Latinoamérica)</option>
                        <option value="es-MX">Spanish (Mexico) - español (México)</option>
                        <option value="es-ES">Spanish (Spain) - español (España)</option>
                        <option value="es-US">Spanish (United States) - español (Estados Unidos)</option>
                        <option value="su">Sundanese</option>
                        <option value="sw">Swahili - Kiswahili</option>
                        <option value="sv">Swedish - svenska</option>
                        <option value="tg">Tajik - тоҷикӣ</option>
                        <option value="ta">Tamil - தமிழ்</option>
                        <option value="tt">Tatar</option>
                        <option value="te">Telugu - తెలుగు</option>
                        <option value="th">Thai - ไทย</option>
                        <option value="ti">Tigrinya - ትግርኛ</option>
                        <option value="to">Tongan - lea fakatonga</option>
                        <option value="tr">Turkish - Türkçe</option>
                        <option value="tk">Turkmen</option>
                        <option value="tw">Twi</option>
                        <option value="uk">Ukrainian - українська</option>
                        <option value="ur">Urdu - اردو</option>
                        <option value="ug">Uyghur</option>
                        <option value="uz">Uzbek - o‘zbek</option>
                        <option value="vi">Vietnamese - Tiếng Việt</option>
                        <option value="wa">Walloon - wa</option>
                        <option value="cy">Welsh - Cymraeg</option>
                        <option value="fy">Western Frisian</option>
                        <option value="xh">Xhosa</option>
                        <option value="yi">Yiddish</option>
                        <option value="yo">Yoruba - Èdè Yorùbá</option>
                        <option value="zu">Zulu - isiZulu</option>
                    </select>
                    <button onClick={() => { if (data_val.length == 0) { alert("Please Enter Some Text") } }} className='bg-blue-900 text-white px-4 p-2 rounded-2xl shadow-lg mr-3' type='submit'>Translate</button>
                    <button className='bg-blue-900 text-white px-4 p-2 rounded-2xl shadow-lg' onClick={() => { setdata_val(""), setAns(null) }}>New Translation</button>
                </form>
            </div>

            {
                Ans === null ? null :
                    <div className='flex'>
                        {
                            
                            Ans[0].translations.map((item, index) => {
                                return (

                                    <div className='ml-4 mt-4 space-x-9 space-y-4' key={index}>
                                        <h1 className='text-2xl font-semibold'>Results:</h1>
                                        <h1 className='hover:text-purple-700'>{item.text}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>

    )
}

export default Translator
