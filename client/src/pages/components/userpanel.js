import React from "react";
import "../../styles/page.css";

export const userpanel = [
  <div className="dataContainer">
    <div className="statusContainer">
      <div className="currentFinantialStatus">
        <div className="statusDescription">Twoje obecne środki:</div>
        <div className="cashAmount"></div>
      </div>
      <div className="controlBox">
        <div className="addCash">Dodaj przychód lub wydatek</div>
        <div className="addGoal">Dodaj cel</div>
      </div>
    </div>
  </div>
];

class Userpanel extends React.Component {
  render() {
    return <div className="pageContainer">{userpanel}</div>;
  }
}

export default Userpanel;