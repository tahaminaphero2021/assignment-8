import React, { useEffect, useState } from "react";
import AllUsers from "../AllUsers/AllUsers";
import "./Home.css";

const Home = () => {

  const [users, setUsers] = useState([]);
  //   console.log(users);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const [addedPerson, setAddedPerson] = useState([]);
  

  const handleAddToCart = (newPerson) => {
    newPerson.isAdded = true;

    const newAddedPerson = [...addedPerson, newPerson];
    setAddedPerson(newAddedPerson);
  
  };
 
  const totalMale = addedPerson.filter((person) => person.gender == "male");


  const totalFemale = addedPerson.length - totalMale.length;

  return (
    <div>
      <div className="row">
        <h3 className="text-primary, mt-2">Make a Great Management Team For Your Company</h3>
        <h6 className="text-primary, mt-2">That stay of success of a company is simply that a great management</h6>
        <h4 className="text-primary, mt-2, mb-2">Total Budget: 10 Millions</h4>
       
        <div className="col-md-9 left-side">
          <div className="row">
            {users.map((user) => (
              <AllUsers
                handleAddToCart={handleAddToCart}
                key={user.id.value}
                user={user}
              ></AllUsers>
            ))}
          </div>
        </div>
        <div className="col-md-3">
         <h4 className="text-danger">Total Person: {addedPerson.length}</h4> 
         
          <h5>Total Male {totalMale.length}</h5>
              <h5>Total Female {totalFemale}</h5>
              <h5>Total Salary</h5>
         
        <button className="btn  btn-success mt-3 mb-3"
              >
                Add to group
              </button>
         
        </div> 
        </div>
      </div>
    
  );
};
export default Home;
