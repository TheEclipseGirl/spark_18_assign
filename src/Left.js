import React from 'react';
class Left extends React.Component{
   
    render(){
        return (
          <div className='left-container'>
              <div>
                  <h1>
                      Portugal
                  </h1>
                  <input className="check-me" type="checkbox" id='a' data-value="Aasiya Jayavant" onClick={()=>this.props.handleClick('a')}/> <label htmlFor="a">Aasiya Jayavant</label><br/>
                  <input className="check-me" type="checkbox" id='b' data-value="Luvleen Lawrence" onClick={()=>this.props.handleClick('b')}/> <label htmlFor="b">Luvleen Lawrence</label><br/>
                  <input className="check-me" type="checkbox" id='c' data-value="Rey Mibourne" onClick={()=>this.props.handleClick('c')}/> <label htmlFor="c">Rey Mibourne</label><br/>
                  <input className="check-me" type="checkbox" id='d' data-value="Cayla Brister" onClick={()=>this.props.handleClick('d')}/> <label htmlFor="d">Cayla Brister</label>
              </div>
              <div>

                    <h1>
                      Nicaragua
                    </h1>
                  <input className="check-me" type="checkbox" id='e' data-value="Deveedaas Nandi" onClick={()=>this.props.handleClick('e')}/> <label htmlFor="e">Deveedaas Nandi</label><br/>
                  <input className="check-me" type="checkbox" id='f' data-value="Obsey Chidy" onClick={()=>this.props.handleClick('f')}/> <label htmlFor="f">Obsey Chidy</label><br/>
                  <input className="check-me" type="checkbox" id='g' data-value="Xenie Dolezelova" onClick={()=>this.props.handleClick('g')}/> <label htmlFor="g">Xenie Dolezelova</label><br/>
                  <input className="check-me" type="checkbox" id='h' data-value="Ezequiel Dengra" onClick={()=>this.props.handleClick('h')}/> <label htmlFor="h">Ezequiel Dengra</label>
                  
              </div>
              <div>
                    <h1>
                      Marshall Islands
                    </h1>
                  <input className="check-me" type="checkbox" id='i' data-value="Aaron Almaraz" onClick={()=>this.props.handleClick('i')}/> <label htmlFor="i">Aaron Almaraz</label><br/>
                  <input className="check-me" type="checkbox" id='j' data-value="Jelena Denisova" onClick={()=>this.props.handleClick('j')}/> <label htmlFor="j">Jelena Denisova</label>
              </div>

          </div>
            
        ); 
    }
}
export default Left;