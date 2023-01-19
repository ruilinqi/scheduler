import React from "react";
import PropTypes from 'prop-types';
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

function InterviewerList(props) {

  const InterviewerArray = props.interviewers.map((singleInterviewer) => {

    return (
      <InterviewerListItem 
      key={singleInterviewer.id}
      name={singleInterviewer.name}
      avatar={singleInterviewer.avatar}
      selected={singleInterviewer.id === props.value}
      setInterviewer={() => {props.onChange(singleInterviewer.id)}}

      />
    );
  });
    return (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">{InterviewerArray}</ul>
      </section>

    );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;
