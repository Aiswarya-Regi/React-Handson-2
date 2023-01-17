import React, { Component } from 'react'
import './App.css';

class App extends Component {
  // Golden rule : State can only be changed using setState fn
  state = {
    //  key : value
    Name : "",
    Department : "",
    Rating : "",
    employees :[]
  };


  changeHandler = (e) =>  //this parameter 'e' represents an event
  {
    this.setState({ [ e.target.name] : e.target.value});  //its a key value pair here also that we are fetching
    // console.log(this.state);
  }

  submitHandler = (e) => {
    // e.preventDefault();-//whenever we have a basic button,preventDeafult() prevents the default behaviour pf button
    console.log("Submit Handler called")

    const empObj = {
      Name: this.state.Name,
      Department: this.state.Department,
      Rating: this.state.Rating,
    }

    const arr = this.state.employees;
    arr.push(empObj);
    this.setState({employees : arr})
  }

  render() {
    return (
      <div className='App'>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form>
            <label>Name : </label>
            <input type="text" name="Name" value={this.state.Name} onChange={this.changeHandler} className="labels"></input>
            <br/><br/>
            <label>Department : </label>
            <input type="text" name="Department" value={this.state.Department} onChange={this.changeHandler} className="labels"></input>
            <br/><br/>
            <label>Rating : </label>
            <input type="number" name="Rating" value={this.state.Rating} onChange={this.changeHandler} className="labels"></input>
            <br/><br/><br/>
            <button type="button" onClick={this.submitHandler} className="btn">Submit</button>
            {/* HTML button is of type submit */}
          </form>
        <br/><br/><br/>
        
        {this.state.employees.length === 0? 
            <hr style={{opacity:"1", width:"80%",backgroundColor:"black",height:"5px"}}/>:
          <div className="container">
            
              {this.state.employees.map((value,index) =>
              {
                return(
                  <div class="container2" key={index}> Name : {value.Name} | Department : {value.Department} |  Rating : {value.Rating}</div>   //giving an unique key and iyerating through array
                )
              }

              )}
          </div>
  }
      </div>
      

    )
  }
}

export default App












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>EMPLOYEE FEEDBACK FORM</h1>
//       <form>
//       <label>Name:
//         <input type="text" className='labels'/>
//       </label><br></br>
//       <label>Department:
//         <input type="text" className='labels'/>
//         </label><br></br>
//       <label>Rating:
//         <input type="text" className='labels'/>
//         </label><br></br>
//         <button className='labels'>Submit</button>
//     </form>
//     </div>
//   );
// }

// export default App;
