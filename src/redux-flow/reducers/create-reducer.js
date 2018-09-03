const createReducer = (INITIAL_STATE, handleActions) => {
    if (typeof INITIAL_STATE === 'undefined')
        throw new Error('INITIAL_STATE should not be undefined')

    if (Object.prototype.toString.call(handleActions) !== '[object Object]')
        throw new Error('createReducer expects the second argument as an object representing reducer')

    return (state = INITIAL_STATE, action) => (
        handleActions.hasOwnProperty(action.type)
            ? handleActions[action.type](state, action)
            : state
    )
}

export default createReducer