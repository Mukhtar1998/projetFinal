import React, {useState} from "react";
import { createSubscriber } from "../hooks/subscriberHooks";

const UserProfilFront = () => {
  const userIsConnected = localStorage.getItem("user");
  console.log("user", localStorage.getItem("user"));
  const [user] = useState();
  const [course] = useState();
  const [date] = useState();
  const subscribe = () => {
    if (userIsConnected) {
      createSubscriber({ user: user, course: course, date: date }).then(
        (res) => {
          localStorage.setItem("subscriber", JSON.stringify(res));
          console.log(res);
        }
      );
    } else {
      return true ;
    }
    console.log(`Hello,{user.name}welcome to your profile`);
    return (
      <div>
        <h2>Hello,{user.name}welcome to your profile</h2>
        <button onClick={() => subscribe()}>get MySubscription</button>
      </div>
    );
  };
};

export default UserProfilFront;
