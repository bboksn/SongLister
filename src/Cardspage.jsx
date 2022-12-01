import {React} from 'react'
import Card from './Card'

export default function Cardspage({cards}) {
    //"https://imgs.search.brave.com/etd9v0VKyR-NlIO89oCNkHuNaUzIKnVch42wcz0IcwU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnRoZWxpbmVvZmJl/c3RmaXQuY29tL2lt/YWdlcy9yZW1vdGUv/aHR0cHNfY2RuMi50/aGVsaW5lb2ZiZXN0/Zml0LmNvbS9tZWRp/YS8yMDE0L0tpbmdf/S3J1bGVfLV9UaGVf/T296LmpwZw"
    //const [cards,setCards] = useState([{coverUrl:"",artistName:"",songName:"",tabLink:"",id:0}]);
    
  return (
    <>
    <div className='flex flex-wrap'>
    {cards.map(e => {
     return <Card coverUrl={e.coverUrl} artistName={e.artistName} songName={e.songName} tabLink={e.tabLink} key={e.id}></Card>  
    })}
    </div>
    </>
  )
}
