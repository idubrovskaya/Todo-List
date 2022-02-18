import './App.css';
import { TodoList } from './components/TodoList/TodoList.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
