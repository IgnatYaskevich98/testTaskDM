import React, {useState} from 'react';
import style from './App.module.css'
import {Counter} from "./components/Counter";

export const App = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className={style.App}>
            <Counter count={count} setCount={setCount}/>
        </div>
    );
}

