import React, {FC} from 'react';
import style from "./heading.module.css";
import {CountType} from "../../redux-store/counterReducer";

type HeadingType = {
    counters: CountType[]
    total: number
    addCounter: Function
    resetCounter: Function
}
export const Heading: FC<HeadingType> = ({counters, total, addCounter, resetCounter}) => {
    return (
        <div className={style.header}>
            <div className={style.buttonBlock}>
                <button className={style.buttonElement} onClick={() => addCounter()}>Add Counter</button>
                <button className={style.buttonElement} onClick={() => resetCounter()}>Reset</button>
            </div>
            <div className={style.counterInfo}>
                <div>Counters number: {counters.length}</div>
                <div>Total counters: {total}</div>
            </div>
        </div>
    );
};

