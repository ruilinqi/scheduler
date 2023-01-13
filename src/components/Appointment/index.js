import React from "react";

import "components/Appointment/styles.scss";
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";


export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* If props.interview (an interview object) is truthy the <Appointment> will render the <Show> component, 
      else it should render the <Empty> component */}
      {props.interview && (
        <Show
        student={props.interview.student}
        interview={props.interview.interviewer}
        />
      )}
      {!props.interview && <Empty />}
    </article>

  )
}

