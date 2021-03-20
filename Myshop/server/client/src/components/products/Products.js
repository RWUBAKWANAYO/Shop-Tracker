
import React from 'react';
import {useEffect, useState} from 'react';





const Products = ()=> {

   
  
  const [data, setData] = useState([])
  const [display, setDisplay] = useState(false);
      const [options, setOptions] = useState(true);
      const [search, setSearch] = useState("");

useEffect(()=>{
  fetch('/allpost')
  .then((res)=>res.json())
  .then((result)=>{
    
    setData(result.posts)
   
  }
  ).catch(err=>console.log(err))

  

},[])

const findProducts = getProduct=>{
              setSearch(getProduct);
              setDisplay(false)
              
              
          }

  return (
      
    <div className="productsContainer">
      
      {
            
            data.map(item=>{
             
                
                return (
                  <div ></div>
              
                )
                
                

              })
              
                ,options &&(
                  <div className="productsWrapper">
                 <input onClick={()=>{setDisplay(!display)
                 }} 
     
     placeholder="Looking for products"
     value={search}
     onChange={(e)=>{setSearch(e.target.value)}
     }/>
     {display&&(
     <div className="autoContainer">
         {data.filter(({title})=>title).map((v, i)=>{

              let picture;
              if(v.photo =="No Image"||v.photo==undefined){
              
                  {picture  = <i class="fas fa-file-image" style={{fontSize:"50px",width:"40px", height:"40px",color:"rgb(25,182,95)"}} ></i>
                       }
              }
              else{
                {picture = <img src={v.photo} style={{width:"40px",height:"50px"}}/>}
              
              }
             
             
             return <div className="option" key={i} tabIndex="0" onClick={()=>{findProducts(v.title)
                 }}>
                     <div id="title" >{v.title}</div>
                     <div> {picture}</div>
                     <div id="price">{v.amount}&nbsp;Rwf</div>
                 
                    
                     

                 
             </div>
         })}
     </div>
     )}
     <div></div>
     </div>  
          )
        
        } 
                
      
    </div>
  )
    
    }



export default Products;
