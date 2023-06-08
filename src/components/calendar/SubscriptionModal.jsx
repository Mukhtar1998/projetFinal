import React, {  useState } from "react";
import "./Modal.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/fr";
import { createSubscriber } from "../../hooks/subscriberHooks";
import { LocalizationProvider } from "@mui/x-date-pickers";

export const MySubscriptionModal = ({ show, handleClose, course }) => {
  const [newSubscriber, setNewSubscriber] = useState([]);
  const [Cdate, setDate] = useState(new Date().toLocaleDateString("fr-FR"));

  console.log("newSubscriber", newSubscriber);
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const disableWeekends = (date) => {
    if(course) {
      const courseDay = course.courses[0].day;
      console.log(course._id);
      return new Date(date).getDay() !== Number(courseDay);
    } else {
      return true;
    }
  };

  const subscribe = () => {
    const fetchSubscriber = async () => {
      const body = {
        course: course._id,
        date: Cdate,
      };
      const createSubscriberFront = await createSubscriber(body);
      setNewSubscriber(createSubscriberFront);
      console.log("createSubscriberFront", createSubscriberFront);
    };
    fetchSubscriber();
  };

  return (
    <div className={showHideClassName} id="modal">
      <section className="modal-main">
        {course ? <h2>Subscribe to -{course.title}</h2> : null}
        <br />
        {course ? <span>Subscription number :{course._id}</span> : null}
        {course ? <p>Chose a date :</p> : null}
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <DatePicker
            onChange={(date) => {
              const dateString = new Date(date).toISOString();
              setDate(dateString)
              console.log(dateString);
            }}
            shouldDisableDate={disableWeekends}
          ></DatePicker>
        </LocalizationProvider>
        <button type="button" className="btn" onClick={handleClose}>
          Close
        </button>
        <button className="btn" onClick={() => subscribe()}>Subscribe</button>
      </section>
    </div>
  );
};
