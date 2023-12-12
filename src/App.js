import React,{useState} from 'react';
import './App.css';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
  const [allEntry, setallEntry] = useState([]);

  const submitform = (e)=>{
    e.preventDefault();

    if(email && password){
      const newEntry = { id:new Date().getTime().toString(), email, password};
      setallEntry([...allEntry, newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassword("");
    }else{
      alert("Enter the details !!")
    } 
  }
  

  return (
    <div className="App">
      <h3> Basic Login Form validation </h3>
      <form className='form' onSubmit={submitform}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>

      </form>

      <div className='datadisplay'>
        {
          allEntry.map((currentEle)=>{
            //65 line --> Object destructuring//
            const {id, email, password} = currentEle;
            return(
              <div className='container-row' key={id}>
                <p> <b>Email:</b> {email} </p>
                <p> <b>Password:</b>{password} </p>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
