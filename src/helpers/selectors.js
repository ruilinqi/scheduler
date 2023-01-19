export function getAppointmentsForDay(state, day) {
  const daysArray = state.days;
  let selectedAppointments = [];
  const appointmentArray = [];
  
  daysArray.forEach(dayObject => {
    if (dayObject.name === day) {
      selectedAppointments = dayObject.appointments;
    }
  });

  selectedAppointments.forEach((id) => {
    appointmentArray.push(state.appointments[id]);
  });

  return appointmentArray;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const selectedInterview = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  }
  return selectedInterview;
}

export function getInterviewersForDay (state, day) {

  const daysArray = state.days;
  let selectedInterviewers = [];
  const InterviewersArray = [];
  

  daysArray.forEach(dayObject => {
    if (dayObject.name === day) {
      selectedInterviewers = dayObject.interviewers;
    }
  });

  selectedInterviewers.forEach((id) => {
    InterviewersArray.push(state.interviewers[id]);
  });

  return InterviewersArray;
};
