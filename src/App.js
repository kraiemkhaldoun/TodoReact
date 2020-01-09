
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  tab:[],text:"" , booleen:false
  }

    }
    ajout=(event)=>{
      this.setState({ text:event.target.value})
     
    

  }
  create=()=>{
    this.setState({
      tab:[...this.state.tab,{text:this.state.text,id:Math.random(),booleen:this.state.booleen}]
    })
    
  }
  complete=(id)=>{

   this.setState({
  tab : this.state.tab.map(el => el.id===id ? {...el, booleen:!el.booleen}:el)     
    })
  }
  delete=(id)=>{
    this.setState({
      tab:this.state.tab.filter(el=>el.id!==id)
    })
    
  }
  render() { 
    return ( <div>
          <div class="section1">
          <div class="tit">
            <h1> To Do Apps!</h1>
        <p>Add New To Do</p>
        </div>
        <input type="text" placeholder="Add new task" id="inp" onChange={this.ajout}/> 
        <div class="btn-add">
            <button className="bouton" onClick={this.create}> ADD </button>

        </div>
          </div>


  <div class="section2">
  <h1  > let's get some work done!</h1>
       {this.state.tab.map(el=><div key={this.id++}>
       <h1 className={el.booleen&& "undo" }>{el.text}</h1>
       <button onClick={()=>this.complete(el.id)}>{el.booleen?"undo":"complete"}</button>
       <button onClick={()=>this.delete(el.id)}>Delete</button>
       </div>)}
  </div>

        

    </div> );
  }
}
 
export default App;

