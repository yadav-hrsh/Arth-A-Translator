import React, { useState,useRef } from 'react'
import axios from "axios";
import { stringify } from 'postcss';
import {AiTwotoneSound} from 'react-icons/ai';

const Dictionary = () => {
    const [data, setdata] = useState("");
    const [Ans, setAns] = useState({})

    const audio_bar = useRef();


    const make_req = async (e) => {
        e.preventDefault();
        if (data.length != 0) {
            try {
                setAns({})
                const res = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + data)
                

                // for (const key in Ans) {
                //     delete Ans[key];
                // }

                // console.log(Ans);
                setAns(res.data);
                // console.log(res.data)
                // console.log(res.data[0].meanings[0].definitions)
            }
            catch (e) {
                alert("Please Enter Correct English Word!!")
            }
        }
    }

    return (
        <div className='mx-[45px] mt-[10px]'>
            <h1 className='text-4xl mb-4 text-teal-600 font-bold'>Dictionary</h1>
            <form action="" onSubmit={make_req}>
                <input className='border-b-2 m-3 focus:border-teal-600 text-lg outline-none' type="text" value={data} onChange={e => setdata(e.target.value)} />
                <button onClick={() => { if (data.length == 0) { alert("Please Enter Some Text") } }} className='bg-blue-900 text-white px-4 p-2 rounded-2xl shadow-lg mr-3' type='submit'>Search</button>
                <button className='bg-blue-900 text-white px-4 p-2 rounded-2xl shadow-lg' onClick={() => { setdata(""), setAns({}) }}>New word</button>
            </form>

            {Object.keys(Ans).length == 0 ? null :
                <>
                    {/* word */}
                    <div className='my-3 flex'>
                        <h2 className='text-[30px] m-2 font-semibold'>{Ans[0].word.substring(0, 1).toUpperCase() + Ans[0].word.substring(1)}</h2>
                        <audio ref={audio_bar} className='mx-2' src={Ans[0].phonetics[0].audio}>
                        </audio>
                        <button className='mt-2' onClick={()=>{console.log(audio_bar.current.play())}}><AiTwotoneSound /></button>
                    </div>
                    {/* /word end */}

                    {Ans.map((item, index) => (
                        <div key={index} className='mx-4'>
                            {
                                item.meanings.map((meaning_wise, index) => (
                                    <>

                                        {/* Meaning */}
                                        <h3 className='font-semibold text-2xl text-indigo-800'>{Ans[0].word.substring(0, 1).toUpperCase() + Ans[0].word.substring(1)} <span className='text-xl'>({meaning_wise.partOfSpeech})</span></h3>
                                        {
                                            meaning_wise.definitions.map((meaning_item, index) =>
                                            (
                                                <>
                                                    <h2 className='text-base mx-8'>:- {meaning_item.definition}</h2>
                                                </>

                                            )
                                            )
                                        }
                                        {/* Meaning end */}

                                        {/* ex */}
                                        <div>
                                            <h3 className='mx-3 text-lg font-semibold'>Example</h3>
                                            {
                                                meaning_wise.definitions[0].example ?
                                                    item.meanings[0].definitions.map((meaning_item, index) =>
                                                    (
                                                        <>
                                                            <h2 key={index} className='text-base mx-8'>{index + 1}. {meaning_item.example}</h2>
                                                        </>
                                                    )
                                                    ) : <h2 className='text-base mx-8'>There is no example is available :-)</h2>
                                            }
                                        </div>
                                        {/* ex end */}


                                        {/* synonyms */}
                                        <div>
                                            <h3 className='mx-3 text-lg font-semibold'>synonyms</h3>
                                            {
                                                meaning_wise.synonyms.length == 0 ? <><h2 className='text-base mx-8'>There is no synonyms is available</h2></> :
                                                    meaning_wise.synonyms.map((meaning_item, index) =>
                                                    (
                                                        <>
                                                            <h2 className='text-base mx-8'>{index + 1}. {meaning_item}</h2>
                                                        </>
                                                    )
                                                    )
                                            }
                                        </div>
                                        {/* synonyms end */}
                                    </>
                                ))
                            }

                        </div>
                    ))
                    }
                </>
            }
        </div>
    )
}

export default Dictionary