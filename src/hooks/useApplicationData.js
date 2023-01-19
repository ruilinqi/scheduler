import React, {useState, useEffect} from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // set current day
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')

    ]).then((all) => {
        setState(prev => ({
          ...prev,
          days: all[0].data, 
          appointments: all[1].data, 
          interviewers: all[2].data
        }));

      })
      .catch((error) => console.log(error));
  }, []);

  const setSpots = (day, num) => {
    let dayName = day;
    let daysArray = [...state.days];
  
    for (let i = 0; i < daysArray.length; i++) {
      if (daysArray[i].name === dayName) {
        daysArray[i].spots += num;
      }
    }
  
    return daysArray;
  }

  const updatedDays = (appointments, appointmentId) => {
    const apptDay = state.days.find((day) =>
      day.appointments.includes(appointmentId)
    );
  
    const spots = apptDay.appointments.filter(
      (id) => appointments[id].interview === null
    ).length;
  
    return state.days.map((x) =>
      x.appointments.includes(appointmentId) ? { ...x, spots } : x
    );
  };

  // Book interview
  // Makes an HTTP request and updates the local state
  function bookInterview(id, interview) {
    console.log(id, interview);
    
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments,
      days: updatedDays(appointments, id)
    });
    console.log("appointment:", appointment, "appointments:", appointments)
    
    return axios.put(`/api/appointments/${id}`, {'interview': interview})
  };

  // Cancel interview
  // 
  function cancelInterview(id, interview) {
    console.log(id, interview);
    
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments,
      days: updatedDays(appointments, id)
    });
   
    console.log("appointment:", appointment, "appointments:", appointments)
    
    return axios.delete(`/api/appointments/${id}`, {'interview': interview})
  };

  return { state, setDay, bookInterview, cancelInterview };

}