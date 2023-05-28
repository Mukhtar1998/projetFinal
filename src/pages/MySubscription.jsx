// import React, { useEffect, useState } from "react";
// import { userCourses } from "../hooks/coursesHooks";

// const MySubscription = () => {
//     const [subscriptions, setSubscription] = useState([]);
//     useEffect(() => {
//       const fetchMyData = async () => {
//         const subscriptionsFromDb = await userCourses();
//         setSubscription(subscriptionsFromDb);
//       };
//       fetchMyData();
//       console.log("subscriptions",subscriptions);
//     });
//     return (
//     <div className="content">
//     {/* {subscriptions.map((course) => (
//           <div className="card" key={course._id}>
//             <br />
          
//             <Link to="/register">
//             <button class="btn3">Get started</button>
//             </Link>
//           </div>
//         ))} */}
//     </div>
//     );
  
//   };
  
//   export default MySubscription;