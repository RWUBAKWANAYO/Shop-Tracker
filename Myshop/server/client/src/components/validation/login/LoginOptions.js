// import React from 'react'
// import  { useState } from 'react';
// import {Link} from 'react-router-dom';


// const LoginOptions = ()=> {
//     const [isShown, setIsShown] = useState(false);
//     return (
//         <div style={{backgroundColor:"orangered"}}>
//         <div className="hoverHelp" onMouseLeave={()=>setIsShown(false)}></div>
//             <div className="homeWrapper">
//             <div className="userContainer">
//                 <div className="userWrapper"><i className="fas fa-user-tie"></i></div>
//                 <div className="userInfo">
//                     <p className="paragraph1">Hello</p>
//                     <p className="paragraph2">Sign in</p>
//                 </div>
                
//             </div>
           
//         </div>
//         <div>
//             <div className="optionsDisplay" onMouseEnter={()=>setIsShown(true)}
//                                             onMouseLeave={()=>setIsShown(true)}>
       
//             </div>
//             {isShown && (
//             <div className="userOptions" onMouseLeave={()=>setIsShown(false)}
//                                          onMouseEnter={()=>setIsShown(true)}>
                                    
//                 <h2>Login</h2>
//                 <button
//                 onClick={()=>setIsShown(false)}
//                 ><Link className="optionLink" to="/Login"> As Boss</Link></button>
//                 <button
//                 onClick={()=>setIsShown(false)}
//                 ><Link className="optionLink" to="/LoginGuest"> As Employee</Link></button>
                
//                 {isShown && (<div className="arrowUp"onMouseEnter={()=>setIsShown(true)}
//                                             onMouseLeave={()=>setIsShown(true)}></div>
//             )}
               
//             </div>
            
//             )}
            
//         </div>
        
//         </div>
//     )
// }

// export default  LoginOptions;
