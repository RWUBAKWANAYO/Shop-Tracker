import React, { Component } from 'react'

 class ViewProducts extends Component {
    // state = {
    //     allpost: null,
    //     allnotification:null,
    //     // dataToPass: up
    //     hello : "hey"
    //      }

    // componentDidMount(){
    //     fetch('/allpost')
    //      .then(res=>res.json())
    //      .then((result)=>{
    //        console.log(result)
    //        this.setState({allpost: result.posts})
    //     }
    //      )
    //      .catch(err=>console.log(err))
    //      fetch('/allnotification')
    //      .then(res=>res.json())
    //      .then((result)=>{
    //        console.log(result.notification[0].quantity)
           
    //        this.setState({allnotification: result.notification})
    //     }
    //      )
    //      .catch(err=>console.log(err))
    // }
    

render() {
   
    
        // let recentPost = this.state.allpost ?(
        //     this.state.allpost.map((post)=>{

                

        //         return (
                    
        //                 <div>
        //                     <p> {post.quantity}</p>
        //                 </div>
                    
        //         )
        // })
        //     ):(
  
        //     <h1>Loading...</h1>
        // )
        return (
            <div styl={{marginTop:"200px",height:"50vh",width:"100%",backgroundColor:'orangered'}}>
                <h1>HELLO</h1>
                {/* {recentPost} */}
            </div>
        )
    }
}

export default ViewProducts;
