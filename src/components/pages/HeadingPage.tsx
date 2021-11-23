import React, {FC, useCallback} from 'react';
import {useDispatch} from "react-redux";
import {countersActionsCreators, CountType} from "../../redux-store/counterReducer";
import {v1} from "uuid";
import {Heading} from "../header/Heading";

type HeadingPageType = {
    counters: CountType[]
    total: number
}
export const HeadingPage: FC<HeadingPageType> = React.memo(({total, counters}) => {
    const dispatch = useDispatch()

    const addCounter = useCallback(() => dispatch(countersActionsCreators.addCounter([...counters, {
        count: 0,
        id: v1()
    }])), [dispatch, counters])

    const resetCounter = useCallback(() => dispatch(countersActionsCreators.resetCounter([])), [dispatch])
    return (
        <div>
            <Heading counters={counters} total={total} addCounter={addCounter} resetCounter={resetCounter}/>
        </div>
    );
});

