import React from 'react'

const Signin = () => {
  return (
    <div className='signin-page'>
          <label>Enter your Email</label>
          <input type="email" placeholder="Enter your Email here"/>
          <label> Enter your Password</label>
          <input type="password" placeholder="Enter your Password here"/>
          <button>SignIn</button>
     </div>
  );
};

export default Signin