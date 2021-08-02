import Routing from './routes';
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './redux/store';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routing />
        <ToastContainer
          position="top-right"
          autoclose={5000}
          hideProgressBar
          draggable
        />
      </Provider>
    </div>
  );
}

export default App;
