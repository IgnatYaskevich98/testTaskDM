import React, {FC} from 'react';
import {countersActionsCreators, CountType} from "../../redux-store/counterReducer";
import {useDispatch} from "react-redux";
import style from "../../app.module.css";
import {Counter} from "../counter/Counter";

type CounterPageType = {
    total: number
    counters: CountType[]
}
export const CounterPage : FC<CounterPageType> = ({total,counters}) => {
    const dispatch = useDispatch()
    const removeCounter = (id: string, val: number,) => {
        dispatch(countersActionsCreators.removeCounter(id, val))
    }
    return (
        <div className={style.counters}>
            {counters.map(item => <Counter total={total} remove={removeCounter} key={item.id} id={item.id}/>)}
        </div>
    );
};

