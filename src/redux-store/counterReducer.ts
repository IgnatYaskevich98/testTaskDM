export  type CountType = {
    count: number
    id: string
}
export type CounterStateType = {
    total: number
    counters: CountType[]
}
export const counterState: CounterStateType = {
    total: 0,
    counters: [] as CountType[]
}
export const counterReducer = (state: CounterStateType = counterState, action: ActionsTypes): CounterStateType => {
    switch (action.type) {
        case ADD_COUNTER :
            return {...state, counters: action.payload}
        case RESET_COUNTER:
            return {total: 0, counters: action.payload}
        case REMOVE_COUNTER:
            return {
                total: state.total - action.count,
                counters: state.counters.filter(item => item.id !== action.payload)
            }
        case SET_TOTAL_COUNT:
            return {...state, total: action.payload}
        default:
            return state
    }
}

const ADD_COUNTER = 'ADD_COUNTER'
const RESET_COUNTER = 'RESET_COUNTER'
const REMOVE_COUNTER = 'REMOVE_COUNTER'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const countersActionsCreators = {
    addCounter: (payload: CountType[]) => ({type: ADD_COUNTER, payload} as const),
    resetCounter: (payload: CountType[]) => ({type: RESET_COUNTER, payload} as const),
    removeCounter: (payload: string, count: number) => ({type: REMOVE_COUNTER, payload, count} as const),
    setTotalCount: (payload: number) => ({type: SET_TOTAL_COUNT, payload} as const)
}
type ActionsTypes = ReturnType<typeof countersActionsCreators.addCounter>
    | ReturnType<typeof countersActionsCreators.resetCounter>
    | ReturnType<typeof countersActionsCreators.removeCounter>
    | ReturnType<typeof countersActionsCreators.setTotalCount>

