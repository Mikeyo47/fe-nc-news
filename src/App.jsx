import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArticlesList from './components/ArticlesList'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ArticlesList/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
