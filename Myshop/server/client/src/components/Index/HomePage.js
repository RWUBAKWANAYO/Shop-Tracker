import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import NavigateBar from './NavigateBar'
import anime1 from '../img/home/anime1.jpeg'
import anime2 from '../img/home/anime2.jpeg'
import anime3 from '../img/home/anime3.jpeg'
import anime4 from '../img/home/anime4.jpeg'
import anime5 from '../img/home/anime5.jpeg'
import anime6 from '../img/home/anime6.jpeg'
import anime7 from '../img/home/anime7.jpeg'




export class HomePage extends Component {
    render() {
        return (
            <div className="homePg">

                <div className="animation-container">

                    <div className="pic" id="pic1">
                    <img src={anime1} />
                    </div>
                    <div className="pic" id="pic2">
                    <img src={anime2} />
                    </div>
                   
                    <div className="pic" id="pic3">
                    <img src={anime3} />
                    </div>
                    <div className="pic" id="pic4">
                    <img src={anime4} />
                    </div>
                    

                </div>

               <NavigateBar/>

                <div className="short-dis">
                    <h1><span className="name">My </span> Shop<span></span></h1>
                    <p>
                    Simplest way to manage and track your business activities and finances.
                    Because information matters.
                    </p>
                </div>
                <div id="chat"><Link to="./Contact" className="chatLink"><h3>Let talk <i class="fas fa-arrow-right"></i></h3></Link></div>

            <div className="cardWrapper">
                <h1>    BE AWARE WITH  YOUR BUSINESS</h1>
                <hr className="line"/>
                <br/>
               <div className="cardContainer">
                  
                   <div className="card-item">
                    
                      <img src={anime5}/>
                      
                      <h3>Don't do it traditional</h3>
                      <p>You waste your time and alot of effort trying to figure out how your business
                          work in terms of finance, looking on how your stock is low and income
                          still down it's so hard to expect how your business will be in the
                          the future.
                          dont worry any more here there is solution

                    </p>
                   </div>

                   <div className="card-item">
                      
                       <img src={anime6}/>
                   
                        <h3>Start do it proffessional</h3>
                       <p>It's so easy to manage and track your business activities and finances
                           any time and every where with real time information, which should
                           grow your finance in precision way , avoid any kind of unpredictable
                           loss and instruct the worker according to what you see rather than
                           wrong information you get
                           
                    </p>
                   </div>

                   <div className="card-item">
                       <img src={anime7}/>
                       <h3>This way is real and with accuracy</h3>
                       <p>Nothing more complicated you need rather than open your computer, tablet
                           or smart phone and start looking every situation occur in your business,
                            it's simple every thing you need to get in modern business world
                            you will get it with My shop website 
                            build your business every where with My shop
                           
                    </p>
                  
                   </div>
               </div>

               <div className="whyUs">
                   <div className="whyUs-cont">
                   <h1>WHY CHOOSE US?</h1>
                   <hr/>
                    <h4>! - Easy way to use My shop</h4>
                    <h4>! - Provide managent with accuracy</h4>
                    <h4>! - Customers satisfaction is our No1 goal</h4>
                    <h4>! - Honest and reliable cooperation</h4>
                   <h4> ! - Fast way to growth your business</h4>
                   </div>
               </div>

              <div className='funcWrapper'> 
                    <h1>WHAT CAN OFFER ?</h1>
                  <div className="functionality">

                      <div className="func-container">

                   <div className="func-item">
                       <h1>Store </h1>
                       <h5>This is part of this website where you can store prodcucts names , quantity, amount of each
                           product , date your products get in stock and remaing products after customer buy some
                           of them
                           </h5>
                        <div>
                        <i class="fas fa-database"></i>
                        </div>
                   </div>
                   <div className="func-item">
                       <h1>Update Stock</h1>
                       <h5>Immediately your stock will be update for any movement of products occur within stock,
                           It means after any kind of modification like selling add new products stock will be 
                           updated in real time
                           </h5>
                        <div>
                        <i class="fas fa-edit"></i>
                        </div>
                   </div>
                   <div className="func-item">
                       <h1>Notifications</h1>
                       <h5>It can be a big issue to loose any kind of information of how customer are interact with
                           your products and consume it, but with notification system every sold products you will receive
                           information of that event occur
                       </h5>
                        <div>
                        <i class="fas fa-bell-slash"></i>
                        </div>
                   </div>
                   <div className="func-item">
                       <h1>Evaluation</h1>
                       <h5>Is better to revise back on how your stock stand now , what kind of  product mostly liked by customer
                           how yor stock goes it that time compared to income provide my shop contain best way of that evaluation
                       </h5>
                        <div>
                        <i class="fas fa-database"></i>
                        </div>
                   </div>
                   <div className="func-item">
                       <h1>Agenda</h1>
                       <h5>Don't waste so much time trying to fill your normal agenda what product you need to put in Stock
                           right now , with my app you can revirse your stock and every needed products you can put it on 
                           agenda with only single click and access agenda every where you're
                           </h5>
                        <div>
                        <i class="fas fa-edit"></i>
                        </div>
                   </div>
                  

               </div>
               </div>

               
               <Footer/>
                

               </div>

               
            </div>
                
            </div>
        )
    }
}

export default HomePage
