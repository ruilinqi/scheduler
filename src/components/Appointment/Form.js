import React, { useState } from 'react'; // import useState hook
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  // It evaluates to props.student if it is truthy. If props.student is undefined, then use empty string ""
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  }
  const cancel = () => {
    reset();
    props.onCancel();
  }

  const validate = () => {
    if (!student) {
      setError("Student name cannot be empty");
      return;
    }
    if (!interviewer) {
      setError("Please select an interviewer");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        {/* when the user presses the key enter, the event handler captures the event and stops it using the method */}
        <form autoComplete="off" onSubmit={event => event.preventDefault()}> 
          <input
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            /*
              This must be a controlled component
              your code goes here
            */
          />
        </form>
        <InterviewerList 
          value = {interviewer}
          interviewers={props.interviewers}
          onChange={setInterviewer}
          /* your code goes here */
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={handleSubmit}>Save</Button>
        </section>
      </section>
    </main>
  )
}
