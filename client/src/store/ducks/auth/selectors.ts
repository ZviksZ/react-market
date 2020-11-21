import { RootState } from '../../store'
import { createSelector } from 'reselect'

export const selectAuth = (state: RootState): AuthState => state.auth


