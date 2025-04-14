import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeCard from './components/RecipeCard'
import Content from './components/Content'

function App() {

  return (
    <>
      <Header/>
      <RecipeCard />
      <Content />
    </>
  )
}

export default App
