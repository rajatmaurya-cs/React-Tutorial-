import { useSelector } from 'react-redux'
import './App.css'
import { Counter } from './components/Counter'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div 
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8">React Redux Practice</h1>
        <ThemeToggle />
        <Counter />
      </div>
    </div>
  )
}

export default App
