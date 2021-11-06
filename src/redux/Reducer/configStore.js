import { combineReducers, createStore } from "redux";
import BTBookingTicketReducer from './BTBookingTicketReducer'

const rootReducer = combineReducers({
    // Chứa các reducer
    // Chứa cá state của ứng dụng
    BTBookingTicketReducer
})
export const store = createStore(rootReducer);