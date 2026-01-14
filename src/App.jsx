import Header from './Compontes/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
    </div>
  )
}

export default App


