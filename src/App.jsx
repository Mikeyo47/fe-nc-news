import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArticlesList from './components/ArticlesList'
import Header from './components/Header'
import ArticlePage from './components/ArticlePage'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/articles/p=:p" element={<ArticlesList />} />
        </Routes>
      </main>
    </>
  )
}

export default App
