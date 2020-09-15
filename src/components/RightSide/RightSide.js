import React, { Component } from 'react'
import classes from "./RightSide.module.css"
class RightSide extends Component {
   state= {
    displayMenu :false  ,
    ellipisMenu :false  ,
   }
   
   handleBtnClick=()=>{
      this.setState({
            displayMenu : !this.state.displayMenu 
      })
   return true 
   

   }
   handleBtnClickElipsis=()=>{
    this.setState({
        ellipisMenu : !this.state.ellipisMenu
    })
 return true 


 }

    render() {
        return (
            <div className = {classes.MainWrapper}> 
               <div className={classes.mobileTopBar}>
               <div className={classes.mobileTopBarLogo}>Magbofin</div> 
               <div className ={classes.mbRightSection}> 
               <i class="fas fa-bell"></i>
               <i class="fas fa-search"></i>  
               <img src="https://i.guim.co.uk/img/media/fbb1974c1ebbb6bf4c4beae0bb3d9cb93901953c/80_0_2400_1440/master/2400.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ede2b27f1cea7c3be30b938195c0cc5c" alt= "userImage"></img> 
               </div> 
               </div>
               <div className = {classes.Navwrapper}> 
               <div className = {classes.btnMenu}>
               <button className={classes.CategoryBtn} onClick={this.handleBtnClick}> Category </button> 
               <div className={ `${this.state.displayMenu ?`${classes.btnMenuWrapper}` : `${classes.BtnMenuHide}`}`}>
                   <div className={classes.dropDown}>
                        IOT
                   </div> 
                   <div className={classes.dropDown}>
                       Artificial Intelligence
                   </div>
               </div>
               </div>
               <div className={classes.svgWrapper}>
               <input type = "text" className ={classes.searchbox} placeholder="Search"/>
               <i class="fas fa-search"></i>   
                </div> 
               <button className={classes.subscribebtn}>Subscribe</button> 
               <button className = {classes.myself}>My shelf</button>
               <i className={`fas fa-bell ${classes.bellicon}`}></i>
               <img className={classes.userPic} src="https://i.guim.co.uk/img/media/fbb1974c1ebbb6bf4c4beae0bb3d9cb93901953c/80_0_2400_1440/master/2400.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ede2b27f1cea7c3be30b938195c0cc5c"></img>
               <div className={`${classes.ellipisWrapper}   ${this.state.ellipisMenu ? `${classes.activeElipis}` : null } `} onClick={this.handleBtnClickElipsis}>
               {console.log(this.state.ellipisMenu)}
               <i className={`fas fa-ellipsis-v ${classes.ellipis} ` }></i></div>
                <div className={`${this.state.ellipisMenu ?`${classes.ellipisDropdown} ` : `${classes.BtnMenuHide}`}`}>
                    <div>My Profile</div>
                    <div>My Categories</div>
                    <div> Settings</div>
                    <div>logout</div>
                   
                </div>
            </div>  
               <div className={classes.LandingSection}>
                 <div className={classes.section1}>
                 <div className = {classes.spanpara}><span>#post #techmagazine #welcome back</span></div>    
                 <div className={classes.cardWrapper}>
                     <h2>What is Lorem Ipsum ? </h2> 
                     <p className={classes.para}>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                        has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has 
                        survived not only five centuries,</p> 
                    <div className={classes.gap}></div>
                 </div>
                 <div className={classes.cardWrapper}>
                     <h2>What is Lorem Ipsum ? </h2> 
                     <p className={classes.para}>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                        has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has 
                        survived not only five centuries,</p> 
                    <div className={classes.gap}></div>
                 </div> 
                 <div className={classes.cardWrapper}>
                     <h2>What is Lorem Ipsum ? </h2> 
                     <p className={classes.para}>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                        has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has 
                        survived not only five centuries,</p> 
                    <div className={classes.gap}></div>
                 </div>
                 </div> 
                 <div className={classes.section2}>
                 <img src = "https://www.couponcloud.in/assets/uploads/products/b9b9a0d536da0a88c89fe456518f1143.png"></img> 
                 <img src = "https://www.couponcloud.in/assets/uploads/products/b9b9a0d536da0a88c89fe456518f1143.png"></img>     
                 <div className= {classes.mbBtnBar}> 
                     <button>Subscribe</button> 
                     <button>Myshlef</button> 
                     <button>Bookmark</button>
                 </div>    
                </div>    
               </div> 
          
            </div>
        )
    }
}

export default RightSide ;
