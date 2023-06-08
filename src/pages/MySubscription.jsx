import React, { useEffect, useState } from "react";
import { getSubscriber } from "../hooks/subscriberHooks";
// import {deleteSubscriber} from "../hooks/subscriberHooks"

const MySubscription = () => {
  const [subscription, setSubscrition] = useState([]);
  
  useEffect(() => {
    const fetchMyData = async () => {
      const subscriberFromDb = await getSubscriber();
      setSubscrition(subscriberFromDb);
      console.log("subscribtions", subscriberFromDb);
    };
    fetchMyData();
  }, []);
  
  // const getId = (id) => {
  //   const subscriptionId = subscription.filter(item => item.length === id )
  //   console.log("ID",subscriptionId);
  // }

  const dayToDayName = (day) => {
    if(day === "1") {
      return "Lundi"
    }else if (day === "2") {
      return "Mardi"
    }else if (day === "3") {
      return "Mercredi"
    }else if (day === "4") {
      return "Jeudi"
    }else if (day === "5") {
      return "Verndredi"
    }else if (day === "6") {
      return "Samedi"
    }else if (day === "0") {
      return "Dimenche"
    }
  }
 
  return (
    <>
      <div>
        <h1>My Subscription</h1>
      </div>
      <div className="subscriber-content">
        {subscription.map((subcriber) => (
          <div className=" subscriber-card" key={subcriber._id}>
            <h3>Title :{subcriber.course.title}</h3>
            <br />
            <p>Description :{subcriber.course.description}</p>
            <br />
            <p>Day :{subcriber.course.courses.map((day) => dayToDayName(day.day))}</p>
            <br />
            <p>Time :{subcriber.course.courses.map((time) => time.time)}</p>
            <br/>
            <p>Date : {new Date(subcriber.date).toLocaleDateString()}</p>
          {/* <button onClick={getId()}>Delete</button> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default MySubscription;
