import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeCard from './components/RecipeCard'
import Content from './components/Content'
import EditorsPick from './components/EditorsPick'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <RecipeCard />
      <Content />
      <EditorsPick />
      <Footer />
    </>
  )
}

export default App
