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
        <form onSubmit={handleForm}>
         Cover Image Url:   <input onChange={fillForm} name='coverUrl' type="text"/>
         Artist Name:   <input onChange={fillForm} name='artistName' type="text"/>
         Cover Image Url:   <input onChange={fillForm} name='songName' type="text"/>
         GuitarTab Url:   <input onChange={fillForm} name='tabLink' type="text"/>
         <input type="submit"/>
        </form>
    </div>
  )
}
