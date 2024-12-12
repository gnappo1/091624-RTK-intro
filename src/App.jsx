import { useSelector } from 'react-redux'
import './App.css'
import TodoPage from './features/todo/TodoPage'

function App() {
  const error = useSelector(state => state.todo.error)

  return (
    <>
      {error && <div id="error">{error}</div>}
      <TodoPage />
    </>
  );
}

export default App
