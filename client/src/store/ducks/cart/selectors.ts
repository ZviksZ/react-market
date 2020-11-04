import { RootState } from '../../store'
import { CartState } from './contracts/state'

export const selectCart = (state: RootState): CartState => state.cart
