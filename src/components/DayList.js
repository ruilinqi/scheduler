import React from "react";
import "./DayList.scss";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const daysArray = props.days;
  
  // Map over the days array to return <DayListItem> components as children
  const DayListItems = daysArray.map((day) => {
    return (
      <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange}
      />
    )
  });
  return (
    <ul>{DayListItems}</ul>
  )
}