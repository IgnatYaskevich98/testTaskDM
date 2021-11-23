import React, {FC} from 'react';
import {CountType} from "../../redux-store/counterReducer";
import style from "../../app.module.css";
import {Counter} from "../counter/Counter";

type CounterPageType = {
    total: number
    counters: CountType[]
}
export const CounterPage : FC<CounterPageType> = React.memo(({total,counters}) => {
    return (
        <div className={style.counters}>
            {counters.map(item => <Counter total={total} key={item.id} id={item.id}/>)}
        </div>
    );
});

