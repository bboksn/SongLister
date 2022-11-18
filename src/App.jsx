import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import FormPage from './FormPage'
import Cardspage from './Cardspage'
import About from './About'
export default function App() {
  const [cards,setCards] = useState([{coverUrl:"",artistName:"",songName:"",tabLink:"",id:0}]);
  return (
    <>
    <Nav></Nav>
    <Routes>
      
      <Route path='/' element={<Cardspage cards={cards} setCards={setCards}/>}/>
      <Route path='songs' element={<Cardspage cards={cards} setCards={setCards}/>}/>
      <Route path='songs/new' element={<FormPage/>}/>
      <Route path='About' element={<About/>}/>
      
    
    </Routes>
    </>
  )
}
