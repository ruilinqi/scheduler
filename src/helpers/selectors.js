export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const foundDay = state.days.find((singleDay) => {
    return singleDay.name === day;
  });

  if ((state.days).length === 0 || !foundDay) {
    return [];
  }

  const appointments = foundDay.appointments;
  const result = appointments.map((id) => {
    return state.appointments[id];
  });
  return result;
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