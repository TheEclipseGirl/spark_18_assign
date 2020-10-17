import React from 'react';
import RightTab from './RightTab.js';
class Right extends React.Component{

    unique = (a) => {
        return Array.from(new Set(a));
    }

    deleteFromMain = (e) => {
        this.props.deleteATab(e);
    }

    render(){

        var elements = this.props.checkedElements;
        elements = this.unique(elements);
        return (
           <div className='right-container'>
               {elements.map((e) => {
                   return (
                       <RightTab name = {e} deleteFromMain={this.deleteFromMain}/>
                   );
               })}
           </div>
            
        ); 
    }
}
var styles= {
    h1:{
        visibility:'visible'
    }
}
export default Right;