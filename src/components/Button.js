import React from "react";

import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) {

   // let buttonClass = "button";
   // // Create a condition that checks to see if was passed as a prop
   // if (props.confirm) {
   //    buttonClass += " button--confirm";
   // }
   // if (props.danger) {
   //    buttonClass += " button--danger";
   // }

   // uses the library ClassNames to create a string buttonClass
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
    });
  
    return (
      <button
        className={buttonClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
}
