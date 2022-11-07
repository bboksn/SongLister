import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <ul>
        <li className='text-3xl'>
            <Link className='px-32' to={"/"}>Home</Link>
            <Link className='px-32' to={"/SongList"}>SongList</Link>
            <Link className='px-32' to={"/About"}>About</Link>
        </li>
    </ul>
    </>
  )
}