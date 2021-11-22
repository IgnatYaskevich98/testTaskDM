import React, {FC, useCallback, useState} from 'react';
import style from "./counter.module.css";
import {useDispatch} from "react-redux";
import {countersActionsCreators} from "../../redux-store/counterReducer";

type CounterType = {
    remove: (id: string, val: number) => void
    id: string
    total: number
}
export const Counter: FC<CounterType> = (({total, remove, id}) => {
    const dispatch = useDispatch()
    const [val, setValue] = useState<number>(0)

    const onClickDecrement = useCallback(() => {
        setValue(val - 1)
        dispatch(countersActionsCreators.setTotalCount(total - 1))
    }, [val, dispatch, total])

    const onClickIncrement = useCallback(() => {
        setValue(val + 1)
        dispatch(countersActionsCreators.setTotalCount(total + 1))
    }, [val, dispatch, total])

    const onClickReset = useCallback(() => {
        setValue(0)
        dispatch(countersActionsCreators.setTotalCount(total - val))
    }, [dispatch, total, val])

    return (
        <div className={style.container}
             style={val % 2 === 0 ? {backgroundColor: 'dimgrey'} : {backgroundColor: 'white'}}>
            <button className={style.buttonElement} onClick={() => remove(id, val)}>Remove</button>
            <div className={style.screen}>{val}</div>
            <div className={style.information}>{val % 2 === 0 ? `Введено чётное число` : `Введено нечётное число`}</div>
            <div className={style.buttons}>
                <button className={style.buttonElement} onClick={onClickDecrement} disabled={val < 1}>-</button>
                <button className={style.buttonElement} onClick={onClickReset}>Reset</button>
                <button className={style.buttonElement} onClick={onClickIncrement}>+</button>
            </div>
        </div>
    );
});

