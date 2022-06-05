import './App.scss'
import BoardComponent from './components/BoardComponent'
import { BoardProvider } from './hooks/useBoard'

const App = () => {
  return (
    <BoardProvider>
      <div className='app'>
        <BoardComponent />
        <div></div>
      </div>
    </BoardProvider>
  )
}

export default App
