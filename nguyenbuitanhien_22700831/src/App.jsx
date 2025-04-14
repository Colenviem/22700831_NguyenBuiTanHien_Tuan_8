import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeCard from './components/RecipeCard'
import Content from './components/Content'
import EditorsPick from './components/EditorsPick'

function App() {

  return (
    <>
      <Header/>
      <RecipeCard />
      <Content />
      <EditorsPick />
    </>
  )
}

export default App
