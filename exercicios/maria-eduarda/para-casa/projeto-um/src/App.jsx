import './App.css'
import Bio from './components/Bio'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

import gatinhos from './assets/banner.jpg'
import harrypotter from './assets/harrypotter.jpg'


function App() {
  return (
    <>
      <Header/>
      <Bio/>
      <Card title="Gatinhos"
            description="Sou apaixonada por gatos e tenho 5, além de uma tatuagem com a cara de um." 
            image={gatinhos} 
            imageAlt="gatos"
      />

      <Card title="Harry Potter"
            description="Sou fã, e tenho dois gatos com nomes de alguns dos meus personagens favoritos: Sirius Black e Minerva McGonagall." 
            image={harrypotter} 
            imageAlt="HP"
      />
      <Footer name="Maria"/>
    </>
  )
}

export default App
