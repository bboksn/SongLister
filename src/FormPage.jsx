import {React,useState} from 'react'

export default function FormPage() {
   // const [formData,setFormData] = useState({});
    const [i1,setI1] = useState("");
    const [i2,setI2] = useState("");
    const [i3,setI3] = useState("");
    const [i4,setI4] = useState("");
    const setters = [setI1,setI2,setI3,setI4]
//old form submission with less state values but harder to clear form to give visuial feedback of submission
   /* function fillForm(e){
        e.preventDefault();
        setFormData({
            ...formData,
            [e.currentTarget.name]:e.currentTarget.value
        })
        console.log("DATA!!!",formData)
    }*/
   /* function handleForm(e){
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
    }*/
    function handleForm(e){
        e.preventDefault()
        fetch('http://localhost:3001/cards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
        "coverUrl": i1,
      "artistName": i2,
      "songName": i3,
      "tabLink": i4
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
              setters.forEach(e => {
                e("")
              });
            })
    }
  return (
    <div>
        <form className='flex flex-col border-2' onSubmit={handleForm}>
         Cover Image Url: <input className='border-2 border-black border-dashed mb-7' value={i1} onChange={(e)=>setI1(e.target.value)} name='coverUrl' type="text"/>
         Artist Name:   <input className='border-2 border-black border-dashed mb-7' value={i2} onChange={(e)=>setI2(e.target.value)} name='artistName' type="text"/>
         Song Name:   <input className='border-2 border-black border-dashed mb-7' value={i3} onChange={(e)=>setI3(e.target.value)} name='songName' type="text"/>
         GuitarTab/Youtube Url:   <input className='border-2 border-black border-dashed mb-7' value={i4} onChange={(e)=>setI4(e.target.value)} name='tabLink' type="text"/>
         <button className='lg:text-3xl border-black border-4 w-[10%] self-center rounded-xl font-serif' type='submit'>Enter</button>
        </form>
    </div>
  )
}
