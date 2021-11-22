import React, {FC} from 'react';
import style from './app.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "./redux-store/store";
import {CounterStateType} from "./redux-store/counterReducer";
import {CounterPage} from "./components/pages/CounterPage";
import {HeadingPage} from "./components/pages/HeadingPage";

export const App: FC = () => {
    const {total, counters} = useSelector<RootStateType, CounterStateType>(state => state.count)

    return (
        <div className={style.app}>
            <HeadingPage counters={counters} total={total}/>
            <CounterPage counters={counters} total={total}/>
        </div>
    );
}

