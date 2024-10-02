import React, { useState } from "react";
import "../App.css";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function FormSection() {
    const [add , setAdd] = useState(false)
    const [name , setName] = useState('')
    const [number , setNumber] = useState('')
    const [email , setEmail] = useState('')
    const [author , setAuthor] = useState('')
    const [title , setTitle] = useState('')
    const [genre , setGenre] = useState('')
    const [publication , setPublication] = useState('')
    const [isbn , setISBN] = useState('')
    const [edit , setEdit] = useState(false)
    const [editid , setEditId] = useState("")
    const [data , setData] = useState([])
    const handleAdd=()=>{
        setAdd(true)
        setTitle('')
        setAuthor('')
        setPublication('')
        setGenre('')
        setISBN('')
    }

    const handleSave=()=>{
        if(!name || !number || !email){
            alert("Please fill the data...!")
        }

        let id = data.length+1
       if(name && number && email){
        setData([...data , {
            id:id,
            name:name,
            number:number,
            email:email,
            title:title,
            author:author,
            genre:genre,
            isbn:isbn,
            publication:publication
        }])
       }

        setTitle('')
        setAuthor('')
        setPublication('')
        setGenre('')
        setISBN('')
        setAdd(false)
    }

    const handleDeletemain=()=>{
        setAdd(false)
        setTitle('')
        setAuthor('')
        setPublication('')
        setGenre('')
        setISBN('')
    }
    const handleEdit=(i)=>{
        const new_data =  data[i]
        setTitle(new_data.title)
        setAuthor(new_data.author)
        setPublication(new_data.publication)
        setGenre(new_data.genre)
        setISBN(new_data.isbn)
        setAdd(true)
        setEdit(true)
        setEditId(new_data.id)
    }

    const handleDelete=(i)=>{
        let id = i
       const new_data = data.filter((item)=>{
        if(item.id!==id){
            return item
        }
       })
       setData(new_data)
    }

    const handleUpdateSave=()=>{
         
        const new_data = data.filter((item)=>{
            if(item.id!==editid){
                return item
            }
           })
           setData([...new_data,{
            id:editid,
            name:name,
            number:number,
            email:email,
            title:title,
            author:author,
            genre:genre,
            isbn:isbn,
            publication:publication
        }])

        setTitle('')
        setAuthor('')
        setPublication('')
        setGenre('')
        setISBN('')
        setAdd(false)
        setEdit(false)
    }

  return (
    <>
    <div className="w-full text-center">
        <h1 className="text-white text-xl font-bold bg-red-500">DONATE A BOOKS</h1>
    </div>
        <form >
        <table cellPadding={10} className="md:flex justify-center align-middle bg-slate-800 w-full">
            <tr>
                <td className=" text-white text-xs md:text-sm">Full Name</td>
                <td><input type="text" name="name" id="name" placeholder="Jhon doe" value={name} onChange={(e)=>setName(e.target.value)} required/></td>
            </tr>
            <tr>
                <td className=" text-white text-xs md:text-sm">Phone Number</td>
                <td><input type="text" name="number" id="number" placeholder="1234567890" required value={number} onChange={(e)=>setNumber(e.target.value)}/></td>
            </tr>
            <tr>
                <td className=" text-white text-xs md:text-sm">email</td>
                <td><input type="email" name="email" id="email" placeholder="jhon@gmail.com" required value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
            </tr>
            <tr>
                <td>
                    <div className=" bg-blue-500 radius w-10 text-center text-white" onClick={handleAdd}><AddIcon/></div>
                </td>
            </tr>
        </table>
        {/* Data Maintain part */}
       <div className=" md:flex justify-center align-middle w-full">
       <table className="border text-white mt-4" cellPadding={6}>
        <tr>
            <th className="border text-xs md:text-sm">Sr No</th>
            <th className="border text-xs md:text-sm">Book Title</th>
            <th className="border text-xs md:text-sm">Author</th>
            <th className="border text-xs md:text-sm">Genre</th>
            <th className="border text-xs md:text-sm">Year of Publication</th>
            <th className="border text-xs md:text-sm">ISBN</th>
            <th className="border text-xs md:text-sm">Action</th>
        </tr>
        {
            add && 
            <tr>
                <td>1</td>
            <td className="border"><input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title" className="text-black" type="text" name="title" id="title"/></td>
            <td className="border"><input value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="author" className="text-black" type="text" name="author" id="author"/></td>
            <td className="border"><input value={genre} onChange={(e)=>setGenre(e.target.value)} placeholder="genre" className="text-black" type="text" name="genre" id="genre"/></td>
            <td className="border"><input value={publication} onChange={(e)=>setPublication(e.target.value)} placeholder="publication" className="text-black" type="text" name="publication" id="publication"/></td>
            <td className="border"><input value={isbn} onChange={(e)=>setISBN(e.target.value)} className="text-black" placeholder="isbn" type="text" name="isbn" id="isbn"/></td>
            <td className="border">
                {
                    edit ?
                    <button type="button" className=" bg-blue-500 radius hover:bg-green-500 hover:text-white p-1 mr-1"  onClick={handleUpdateSave}><EditIcon/></button>
                    :
                    <button type="submit" className=" bg-blue-500 radius hover:bg-green-500 hover:text-white p-1 mr-1"  onClick={handleSave}><SaveIcon/></button>
                }
                <button type="button" className=" bg-blue-500 radius p-1 hover:bg-red-500" onClick={handleDeletemain}><DeleteIcon/></button>
            </td>
        </tr>
        }
            {
                data.length>0 && data.map((item , index)=>{
                    return(
                       <>
                        <tr key={index}>
                        <td className="border text-xs md:text-sm">{item.id}</td>
                        <td className="border text-xs md:text-sm">{item.title}</td>
                        <td className="border text-xs md:text-sm">{item.author}</td>
                        <td className="border text-xs md:text-sm">{item.genre}</td>
                        <td className="border text-xs md:text-sm">{item.publication}</td>
                        <td className="border text-xs md:text-sm">{item.isbn}</td>
                        <td>
                        <button type="button"><EditIcon className=" bg-blue-500 radius hover:bg-green-500 hover:text-white p-1 mr-1" onClick={(e)=>handleEdit(index)}/></button>
                        <button type="button"><DeleteIcon className=" bg-blue-500 radius p-1 hover:bg-red-500" onClick={(e)=>handleDelete(item.id)}/></button>
                        </td>
                        </tr>
                       </>
                    )
                })
            }
        </table>
       </div>
        </form>
    </>
  );
}

export default FormSection;
