import React, { useState, useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'





 const SoldProducts = ()=> {
     const history = useHistory()
     const [productName, setProductName] = useState("")
     const [firstQuantity, setFirstQuantity]= useState()
     const [firstTitle, setFirstTile]= useState()
     const [productQuantity, setProductQuantty] = useState("")
     const [productAmount, setProductAmount] = useState("")
     const [notification, setNotification] = useState('false')
     const [displayStyle, setDisplayStyle] = useState('none')
     const [info, setInfo] = useState('Waiting...')
     const[message, setMessage] = useState('')
     const[coloring, setColoring] = useState('#000')
     

     
     
     let  prodTitle = []
     let  prodQuantity = []
   
     
    useEffect(()=>{
        fetch('/allpost')
  .then((res)=>res.json())
  .then((result)=>{
    
    result.posts.map((items)=>{
        prodTitle.push(items.title)
        prodQuantity.push(items.quantity)
        
    }
    )
    setFirstTile(prodTitle)
    setFirstQuantity(prodQuantity)
    
  }
  ).catch(err=>console.log(err))

  

    },[])

    

      
     const getData =()=> {
       
        setNotification("false")
        setDisplayStyle('none')
        
        }

        const handleDisplay = ()=>{
            if(notification =='true'){
               let bell =  (parseFloat(localStorage.getItem("icon")) +1)
               localStorage.setItem("icon", bell)

            }

        }

    
        
  
    const postProducts = ()=>{

        setDisplayStyle('flex')
        
        let eachItem = firstTitle
        let EachName = productName
        let inputValue = parseFloat(productQuantity)
        let allQuantity = firstQuantity
        const propertyTitle = Object.values(eachItem)
        let found = propertyTitle.filter((el)=> el == EachName)
        let num  = propertyTitle.indexOf(found[0])
        let a = (allQuantity[num]) 
        let newValue= a - inputValue
        let b;
        if(newValue <= 0 ){
         b = 0
           
        }
        else{
             b = newValue
          
        }
       
        
    fetch("/updatepost/:", {
        method:"put",
        headers:{
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
                
          },
        body:JSON.stringify({
            title:productName,
            quantity:b
            })
  })
  .then(res=>res.json())
  .then(data=>{
    
      if(data.error){
        
        console.log(data.error)
        setInfo('Stock is not updated')
        setMessage('make sure product name you write is yet in the stock')
        setColoring('#000')
        
     }
     else{
        setProductName("")
        setProductQuantty("")
        setProductAmount("")
        setInfo('STOCK UPDATED SUCCESSFULLY')
        setColoring('rgb(25,185,92)')
        setMessage('')
        

        fetch("/createnotification", {
            method:"post",
            headers:{
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                    
              },
            body:JSON.stringify({
                title:productName,
                quantity:productQuantity,
                amount:productAmount
                })
      })
      .then(res=>res.json())
      .then(data=>{
        
          if(data.error){
            
            console.log(data.error)
            
            
         }
         else{
         
            setNotification('true')
            
         }
         
         
        })
      .catch(err=>{console.log (err)})
       
    }
    
     })
  .catch(err=>{console.log (err)})
   
}

    return (
        <div >
             <div className="sendInfo"
             style ={{
                display:`${displayStyle}`,
               
    
            }}>
            <div className="sendWrapper">
               <div className="senderContainer">
               <div style={{fontSize:"20px"}}><i className="fas fa-times" 
               onClick={()=>{getData()
                handleDisplay()}}></i></div>
            
               </div>
               <div className="infoContainer">
               <h2 style={{color:`${coloring}`}}>{info}</h2>
                <p>{message}</p>
               </div>
       
            </div>

        </div>
        
            <div className="sold-container" >

            <div  className="sold-wrapper" >
           
                <div className="sold-sub-wrapper" >

                    <div className="form-wrapper">
                        <h1>Fill form to report</h1>
                        
                        
                        <form className="report-form"

                           onSubmit={(e)=>{postProducts()
                            
                            e.preventDefault()
                           
                            
                        }
                            } >
                        <div className="reportWrapper">
                        <label>Products sold : </label>
                        <input className="report-input" type= "text" name="sold" placeholder="Name of Product"  required 
                        value ={productName}
                        onChange = {(e)=>{setProductName (e.target.value)}}/>
                        </div>
                        <div className="reportWrapper">
                        <label>Quantity  : </label>
                        <input className="report-input" type= "number" placeholder="How many?" required='name' name="quantity"min="1"  required 
                        value ={productQuantity}
                        onChange = {(e)=>setProductQuantty (e.target.value)}/>
                        </div>
                        <div className="reportWrapper">
                        <label>Amount for all  : </label>
                        <input className="report-input" type= "number" placeholder="Total price" required='email' name="all" 
                        value ={productAmount}
                        
                        onChange = {(e)=>setProductAmount (e.target.value)}/>
                        </div>
                        <div className="submitWrapper"> <button type="submit" >Send </button></div>

                        </form>
        
                    </div>
                  
                   
                </div>
                
                
               
                
            </div>
            
            </div>
            
        </div>
       
       
    )
}
export default SoldProducts
