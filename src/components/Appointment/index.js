import React from "react";

import "components/Appointment/styles.scss";
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const {mode, transition, back} = useVisualMode(
    // When props.interview contains a value, then we want to pass useVisualMode the SHOW mode, if it is empty then we should pass EMPTY.
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form interviewers={props.interviewers}
        onCancel={() => transition(EMPTY)}
        />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

      {/* If props.interview (an interview object) is truthy the <Appointment> will render the <Show> component, 
      else it should render the <Empty> component */}
      {/* {props.interview && (
        <Show
        student={props.interview.student}
        interview={props.interview.interviewer}
        />
      )}
      {!props.interview && <Empty />} */}
    </article>

  )
}

