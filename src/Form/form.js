// import React, { Component } from 'react';


// class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//       color: "",
//       comment: "",
//       topic: "",
//       apple: "",
//       avocado: ""

//     };
//   }

//   handleUsernameChange = (event) => {
//     this.setState(
//       {
//         username: event.target.value,
//       },
//       () => {
//         console.log("username", this.state.username);
//       }
//     );
//   };

//   handleCommentChange = (event) => {
//     this.setState(
//       {
//         comment: event.target.value,
//       },
//       () => {
//         console.log("comment", this.state.comment);
//       }
//     );
//   };

//   handleTopicChange = (event) => {
//     this.setState(
//       {
//         topic: event.target.value,
//       },
//       () => {
//         console.log("topic", this.state.topic);
//       }
//     );
//   };

//   handleEmailChange = (event) => {
//     this.setState(
//       {
//         email: event.target.value
//       },
//       () => {
//         console.log("email", this.state.email);
//       }

//     );
//   }

//   onRadioChange = (event) => {
//     this.setState({
//       color: event.target.value
//     },
//       () => {
//         console.log("color", this.state.color);
//       }
//     );
//   }

//   handlePasswordChange = (event) => {
//     this.setState(
//       {
//         password: event.target.value
//       },
//       () => {
//         console.log("password", this.state.password);
//       }
//     );
//   }


//   onChangeApple = (event) => {
   
   
//     console.log(event.target.checked);

//     this.setState(initialState => ({
//      [event.target.name]:event.target.checked

//     }));
//   }


//   // onChangeAvocado = () => {
//   //   this.setState(initialState => ({
//   //     isAvocado: !initialState.isAvocado,
//   //   }));
//   //  }

//   handleSubmit = (event) => {
//     alert(`${this.state.username} ${this.state.email} ${this.state.password} ${this.state.topic} ${this.state.comment} ${this.state.color} ${this.state.apple}`);
//     event.preventDefault();
//   };
//   render() {


//     return (

// //     //   // <div style={{background: "url(" + "https://cdn2.hubspot.net/hubfs/202339/canvas/images/parallax/Website-Design-Background.png" + ")"}}>

// //     //   // <h1> User Registeration Form </h1>


      
// //     //   //   <form className="pic"   onSubmit={this.handleSubmit}>
   
       
// //     //   //       <div>
// //     //   //       <label>Username</label>
// //     //   //       <input
// //     //   //         type="text"
// //     //   //         value={this.state.username}
// //     //   //         onChange={this.handleUsernameChange}
// //     //   //       />
// //     //   //     </div><br></br> 


// //     //   //      <div>
// //     //   //       <label>Email</label>
// //     //   //       <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} />
// //     //   //     </div> <br></br> 

// //     //   //      <div>
// //     //   //       <label>
// //     //   //         Password
// //     //   //       </label>
// //     //   //       <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
// //     //   //     </div> <br></br> 

// //     //   //      <div>
// //     //   //       <label>Topic</label>
// //     //   //       <select value={this.state.topic} onChange={this.handleTopicChange}>
// //     //   //         <option>React</option>
// //     //   //         <option>Angular</option>
// //     //   //         <option>Python</option>
// //     //   //       </select>
// //     //   //     </div> <br></br> 

// //     //   //      <div>

// //     //   //       <span>Select Color:</span>


// //     //   //       <label>
// //     //   //         <input
// //     //   //           type="radio"
// //     //   //           value="red"
// //     //   //           checked={this.state.color === "red"}
// //     //   //           onChange={this.onRadioChange}
// //     //   //         />
// //     //   //         <span>Red</span>
// //     //   //       </label>



// //     //   //       <label>
// //     //   //         <input
// //     //   //           type="radio"
// //     //   //           value="green"
// //     //   //           checked={this.state.color === "green"}
// //     //   //           onChange={this.onRadioChange}
// //     //   //         />
// //     //   //         <span>Green</span>
// //     //   //       </label>



// //     //   //       <label>
// //     //   //         <input
// //     //   //           type="radio"
// //     //   //           value="blue"
// //     //   //           checked={this.state.color === "blue"}
// //     //   //           onChange={this.onRadioChange}
// //     //   //         />
// //     //   //         <span>Blue</span>
// //     //   //       </label>


// //     //   //     </div> <br></br> 

// //     //   //      <div >

// //     //   //       <span> Fruits:  </span>
// //     //   //       <label>
// //     //   //         <input type="checkbox"
// //     //   //           name="apple"
// //     //   //           checked={this.state.apple}
// //     //   //           onChange={this.onChangeApple}

// //     //   //         />
// //     //   //         <span>Apple</span>
// //     //   //       </label>

// //     //   //       <label>
// //     //   //         <input type="checkbox" name="avocado"
// //     //   //           checked={this.state.avocado}
// //     //   //           onChange={this.onChangeApple}

// //     //   //         />
// //     //   //         <span>Avocado</span>
// //     //   //       </label>
// //     //   //     </div><br></br> 

            
 

// //     //   //      <div>
// //     //   //       <label >comment</label>
// //     //   //       <textarea 
// //     //   //         value={this.state.comment}
// //     //   //         onChange={this.handleCommentChange}
// //     //   //       ></textarea>
// //     //   //     </div> <br></br> 

// //     //   //     <button type="submit" style={{ backgroundColor: "violent"}} >Submit</button> <br></br> 

// //     //   //   </form> <br></br>


// //     //   //   </div>
      
// //     // );

// //   }

// // }





// export default Form;