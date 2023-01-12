import React from "react";
import "./DayList.scss";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = props.days; // 0 - 2
  // Map over the days array to return <DayListItem> components as children
  const DayListItems = days.map((day) => {
    return (
      <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange} //setDay={(event) => props.setDay(day.id)} 
      />
    )
  });
  return (
    <ul>{DayListItems}</ul>
  )
}