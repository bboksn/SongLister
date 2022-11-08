import {React,useState} from 'react'

export default function FormPage() {
    const [formData,setFormData] = useState({});
    function fillForm(e){
        e.preventDefault();
        setFormData({
            ...formData,
            [e.currentTarget.name]:e.currentTarget.value
        })
        console.log(formData)
    }
    function handleForm(e){
        e.preventDefault()
        fetch('http://localhost:3001/cards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {

              console.log('Success:', data);
            })
    }
        
  return (
    <div>
        <form className='flex flex-col border-2' onSubmit={handleForm}>
         Cover Image Url: <input className='border-2 border-black border-dashed mb-7' onChange={fillForm} name='coverUrl' type="text"/>
         Artist Name:   <input className='border-2 border-black border-dashed mb-7' onChange={fillForm} name='artistName' type="text"/>
         Song Name:   <input className='border-2 border-black border-dashed mb-7' onChange={fillForm} name='songName' type="text"/>
         GuitarTab/Youtube Url:   <input className='border-2 border-black border-dashed mb-7' onChange={fillForm} name='tabLink' type="text"/>
         <button className='text-3xl border-black border-4 w-[10%] self-center rounded-xl font-serif' type='submit'>Enter</button>
        </form>
    </div>
  )
}
