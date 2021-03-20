import React,{useState, useEffect} from 'react'
// import M from 'materialize-css'
import {Link,useHistory} from 'react-router-dom'
import AdminWrapper from '../AdminWrapper'
import NavigationBar from './NavigationBar'
import Footer from '../../Index/Footer'

 const Addnew = ()=> {
     const history = useHistory()
    const [title, setTitle] = useState("")
    const [quantity, setQuantity] = useState("")
    const [amount, setAmount] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const[uploading,setUploading] = useState('')


    useEffect(()=>{
        if(url){

        fetch("/createpost", {
                
            method:"post",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer "+localStorage.getItem("jwt")
                
            },
            body:JSON.stringify({
                title,
                quantity,
                amount,
                photo:url,
            })
        }).then(res=>res.json())
        .then(data=>{
          
            if(data.error){
              console.log(data.error)
           }
           else{
            
            console.log("true")
           }
          
        })
        .catch(err=>{
            console.log (err)
        })
    }

    },[url])



const postDetails = ()=>{
   
    if(image==""){
        setUrl("No Image")
        setUploading('You send product without image')
    }
    const data = new FormData()
    data.append('file', image)
    data.append("upload_preset", "el-shop")
    data.append("cloud_name", "nayo")

    fetch("	https://api.cloudinary.com/v1_1/nayo/image/upload",{
    method:"post",
    body:data
 } )
 .then(res=>res.json())
 .then(data=>{
    setUrl(data.url)
    setUploading('Product send successfully')
 })
 .catch(err=>{console.log(err)
    
})
}






    return (
        <div >
        <NavigationBar/>
            {/* <AdminWrapper/> */}
        <div style={{margin:"50px 0 -15vw 0"}}>
        
        <div className="add-container">
        <div className="add-help">
            <h2>New product in stock</h2>
        <form onSubmit={(e)=>{postDetails()
                            e.preventDefault()}}>
           <div className="title-wrapper">
           <input type="text" placeholder="Tittle" required
            value={title}
            onChange = {(e)=>setTitle(e.target.value)}
            />
            <input type="text" placeholder="Quantity" required
            value={quantity}
            onChange = {(e)=>setQuantity(e.target.value)} />

            <input type="text" placeholder="Amount" required
            value={amount}
            onChange = {(e)=>setAmount(e.target.value)} />
           </div>
            <div className="file-wrapper" > 
                
                <label>Upload image</label>
                <div className="upload-container" >
                <input type="file" onChange = {(e)=>setImage(e.target.files[0])} />
                </div>
                <p id="uploaded">{uploading}</p>
               <div className=" send-button"> <button type="submit"
                >Send</button></div>
             
             </div>
             </form>
             </div>
             
            
             <div className="add-slide">
                 <h1><span>My</span>Shop</h1>
                 <div className="add-link-container"><Link  to="/AdminWrapper" className="add-link">Go Back</Link></div>

             </div>
        </div>
        
        </div>
        <Footer/>

        </div>
    )
}

export default Addnew ;

