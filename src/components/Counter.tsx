import React, {FC, useCallback} from 'react';
import style from "./Counter.module.css";

type CounterType = {
    count: number
    setCount: (val: number) => void
}
export const Counter: FC<CounterType> = React.memo(({count, setCount}) => {
    count % 2 === 0 ? document.body.style.backgroundColor = 'lightslategray' : document.body.style.backgroundColor = 'white'
    const onClickDecrement = useCallback(() => setCount(count - 1), [setCount,count])
    const onClickIncrement = useCallback(() => setCount(count + 1), [setCount,count])
    return (
        <div className={style.container}>
            <div className={style.screen}>{count}</div>
            <div className={style.information}>
                {count % 2 === 0 ? `Введено чётное число` : `Введено нечётное число`}
            </div>
            <div className={style.buttons}>
                <button className={style.buttonElement} onClick={onClickDecrement} disabled={count < 1}>-</button>
                <button className={style.buttonElement} onClick={() => setCount(0)}>Reset</button>
                <button className={style.buttonElement} onClick={onClickIncrement}>+</button>
            </div>
        </div>
    );
});

