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
      appointments
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
      appointments
    });
   
    console.log("appointment:", appointment, "appointments:", appointments)
    
    return axios.delete(`/api/appointments/${id}`, {'interview': interview})
  };

  return { state, setDay, bookInterview, cancelInterview };

}