import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";

import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";
// import useVisualMode from "hooks/useVisualMode";
// import InterviewerList from "./InterviewerList";

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();

  // set appointments and interviewers
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day); 
  // console.log("dailyinterviewers", dailyinterviewers);

  const schedule = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    //console.log("interview:", interview);
    return (
      <Appointment
      key={appointment.id} 
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      interviewers={dailyInterviewers}
      bookInterview={bookInterview}
      cancelInterview={cancelInterview}
      />
    )
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          value={state.day} //day
          onChange={setDay} //setDay
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      
      <section className="schedule">
        {schedule}
        {/* Add one last Appointment to the end of the list representing the last appointment for the day */}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
