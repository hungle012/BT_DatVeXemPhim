import './App.css';
import BTBookingTicket from './BTBookingTicket/BTBookingTicket';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/Reducer/configStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BTBookingTicket />

      </Provider>
    </div>
  );
}

export default App;
