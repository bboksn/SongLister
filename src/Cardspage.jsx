import React from 'react'
import Card from './Card'

export default function Cardspage() {
    //"https://imgs.search.brave.com/etd9v0VKyR-NlIO89oCNkHuNaUzIKnVch42wcz0IcwU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnRoZWxpbmVvZmJl/c3RmaXQuY29tL2lt/YWdlcy9yZW1vdGUv/aHR0cHNfY2RuMi50/aGVsaW5lb2ZiZXN0/Zml0LmNvbS9tZWRp/YS8yMDE0L0tpbmdf/S3J1bGVfLV9UaGVf/T296LmpwZw"
  return (
    <>
    <div className='flex flex-wrap'>
    <Card/>
    <Card coverUrl={"https://imgs.search.brave.com/etd9v0VKyR-NlIO89oCNkHuNaUzIKnVch42wcz0IcwU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnRoZWxpbmVvZmJl/c3RmaXQuY29tL2lt/YWdlcy9yZW1vdGUv/aHR0cHNfY2RuMi50/aGVsaW5lb2ZiZXN0/Zml0LmNvbS9tZWRp/YS8yMDE0L0tpbmdf/S3J1bGVfLV9UaGVf/T296LmpwZw"} songName={"The Ooz"} artistName={"King Krule"} tabLink={"https://tabs.ultimate-guitar.com/tab/king-krule/the-ooz-tabs-2300413"}></Card>
    </div>
    </>
  )
}
