import React, { Component } from 'react'
import classes from "./mainPage.module.css"
class mainPage extends Component {
   state = {
     dis : false ,

   }
   
   handleButtonClick=()=> { 
       const  updated = !this.state.dis ; 
    this.setState({
        dis : updated 
    }
       
    )  

      return (
           true
             
           
      )
 

   }
   
   
    render() { 
        console.log(this.state.dis) ;  
        return (
            <div>
               <button onClick = {this.handleButtonClick} ></button> 
               <div className={ `${classes.again} ${this.state.dis ?`${classes.MainWrapper}` : null}`}>Manmohan</div>
            </div>
        )
    }
}

export default mainPage
