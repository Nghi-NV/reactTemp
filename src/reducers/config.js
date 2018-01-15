'use strick'

import * as types from '../actions/types'

const INITIAL = {
  language: '',
  user: '',
  pass: ''
}

export default (state = INITIAL, action) => {
  switch (action.type) {
    case types.LOAD_INITIAL:
      return {
        state
      }
    default:
      return state
  }
}