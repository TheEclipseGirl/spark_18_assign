import React from 'react';
import Left from './Left.js';
import Right from './Right.js';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            isChecked: []
        }
    }

    deleteATab = (e) => {
        
        console.log('delete ', e);
        this.setState((prevState)=>{
            let temp = prevState.isChecked;
            let index = temp.indexOf(e);
            temp.splice(index, 1);
            return {
                isChecked: temp
            }
        });
        let checks = document.querySelectorAll('.check-me');
        checks.forEach((q) => {
            if(q.checked && q.getAttribute('data-value') === e){
                q.click();
            }
        });
    }

    handleClick=(e)=>{
        let t=document.getElementById(e);
        console.log(t.getAttribute('data-value'));
        this.setState((prevState) => {
            let temp = prevState.isChecked;
            
            if(t.checked){
                temp.push(t.getAttribute('data-value'));
            }else{
                let index = temp.indexOf(t.getAttribute('data-value'));
                temp.splice(index, 1);
            }
            return{
                isChecked: temp
            }
        });
        
    }


    render(){
        return (
           <div className='main'>

            <div className='left'>
                <Left handleClick={this.handleClick}/>
            </div>
            <div className='right'>
                <Right checkedElements = {this.state.isChecked} deleteATab= {this.deleteATab}/>
            </div>

           </div>
        ); 
    }
}
export default Main;