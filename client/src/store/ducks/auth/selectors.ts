import { RootState } from '../../store'
import { createSelector } from 'reselect'
import { AuthState } from './contracts/state'

export const selectAuth = (state: RootState): AuthState => state.auth
