export function getAppointmentsForDay(state, day) {
  const daysArray = state.days;
  let selectedAppointments = [];
  const appointmentArray = [];
  
  //console.log("getAppointmentsForDay - daysArray:", daysArray);
  daysArray.forEach(dayObject => {
    if (dayObject.name === day) {
      selectedAppointments = dayObject.appointments;
    }
  });

  console.log("getAppointmentsForDay - Selected Appointments:", selectedAppointments);
  selectedAppointments.forEach((id) => {
    appointmentArray.push(state.appointments[id]);
  });
  //console.log("appointmentArray", appointmentArray);

  return appointmentArray;
}


export function getInterview(state, interview) {
  //return a new object containing the interview data when we pass it an object that 
  //contains the interviewer. Otherwise, the function should return null.
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
  
  //console.log("getInterviewersForDay daysArray:", daysArray);

  daysArray.forEach(dayObject => {
    if (dayObject.name === day) {
      selectedInterviewers = dayObject.interviewers;
    }
  });
  //console.log("getInterviewersForDay selectedInterviewers:", selectedInterviewers);

  selectedInterviewers.forEach((id) => {
    InterviewersArray.push(state.interviewers[id]);
  });

  return InterviewersArray;
};
