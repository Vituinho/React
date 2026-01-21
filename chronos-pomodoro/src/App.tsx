import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/theme.css';
import './styles/global.css';
import { Bounce, ToastContainer } from 'react-toastify';
import { MessagesContainer } from './components/MessagesContainer';

export function App() {
  return (
    <TaskContextProvider>
      <Home/>
      <MessagesContainer/>
    </TaskContextProvider>
  );
}