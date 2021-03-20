// import React, { Component } from 'react'

// export class Bell extends Component {
//     handleNotify = ()=>{
//         var notify =  this.props.notInfo
//         console.log(notify)
//     }
//     render() {
//         let Alert ;
//         let alarm;
//         Alert= localStorage.getItem("icon")

//         if(Alert=="true"){
//             {alarm = <div style={{height:"8px",width:"8px",borderRadius:"50%",backgroundColor:"red"}}>not</div>}
//         }
//         else{
//             {alarm = <div style={{height:"0",width:"0"}}>not</div>}
//         }
       

//         return (
//             <div>
//                 {alarm}
//             </div>
//         )
//     }
// }

// export default Bell

import React, { Component } from 'react'

 class Bell extends Component {
    render() {

        let Alert ;
        let alarm;
        Alert= parseFloat(localStorage.getItem("icon"))
        if(Alert >0){
            {alarm = <div
                 style={{height:"13px",width:"12px",borderRadius:"50%",backgroundColor:"red",color:"#fff",
                 display:"flex",justifyContent:'center',alignItems:'center',fontWeight:"500",fontSize:"11px"
        }}>{Alert}</div>}
        }
        else{
            {alarm = <div style={{height:"0",width:"0"}}></div>}
        }
        return (
            <div>
                {alarm}
            </div>
        )
    }
}

export default Bell

