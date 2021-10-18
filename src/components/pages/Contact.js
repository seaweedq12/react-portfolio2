import React from 'react';

const styles ={
  style:{
    marginLeft: "10px"
  }
}

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="lightb h1">Contact Page</h1>
      <form  className='col-8' style={styles.style} >
        <div className="form-group">
          <label className="lightb" htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="lightb" htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label className="lightb" htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
