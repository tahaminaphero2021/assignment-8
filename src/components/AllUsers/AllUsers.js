import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./AllUsers.css";

const AllUsers = (props) => {
  console.log(props.user);

  const { name, gender, phone, company, salary, picture } = props.user;
 

  return (

    <div className="col-md-4">
      <div className="user-car">
        <div className="user-image">
          <img src={picture.large} alt="" />
        </div>
        <h6>Name: {name.first}</h6>
        <h6>gender: {gender}</h6>
        <h6>Phone: {phone}</h6>
        <h6>Company: {company}</h6>
        <h6>Salary: {salary}</h6>
        {props.user.isAdded ? (
          <button className="btn btn-danger mt-3 mb-3">Already Added</button>
        ) : (
          <button
            onClick={() => props.handleAddToCart(props.user)}
            className="btn  btn-success mt-3 mb-3 "
          >
           Hire Me
          </button>    
          )}
          <br/>
          <button
          
            className="btn  btn-secondary mt-3 mb-3 " >
            Details
          </button>
     

    
    </div>
     </div>

  );
};

export default AllUsers;
