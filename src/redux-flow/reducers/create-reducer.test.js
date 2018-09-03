import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import createReducer from './create-reducer'

const INITIAL_STATE = 0
const reducer = createReducer(INITIAL_STATE, {
    'INCREMENT': (state, action) => state + 1,
    'DECREMENT': (state, action) => state - 1
})

it('CreateReducer should be a function', () => {
    expect(createReducer).to.be.a('function')
})

it('createReducer(initialState, {}) should return a reduer function', () => {
    expect(createReducer([], {})).to.be.a('function')
})

it('should create a reducer', () => {
    const before = 0
    const action = deepFreeze({ type: 'INCREMENT' })
    const after = 1
    expect(reducer(before, action)).to.be.equal(after)
})

it('reducer should return lastest state if action is unknown', () => {
    const before = 3
    const action = deepFreeze({ type: 'UNKNOWN' })
    const after = 3
    expect(reducer(before, action)).to.be.equal(after)
})

it('reducer should return INITIAL_STATE when latest state is undefined', () => {
    const before = undefined
    const action = deepFreeze({})
    const after = 0
    expect(reducer(before, action)).to.be.equal(after)
})

it('INITIAL_STATE should not be undefined', () => {
    try {
        createReducer()
    } catch (e) {
        expect(e.message).to.be.equal('INITIAL_STATE should not be undefined')
    }
})

it('handleActions should not be different from object', () => {
    try {
        createReducer([])
    } catch (e) {
        expect(e.message).to.be.equal('createReducer expects the second argument as an object representing reducer')
    }
})