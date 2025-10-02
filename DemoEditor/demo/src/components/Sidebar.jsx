import React from "react";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sidebar_header">
        <h1>Class Notes</h1>
      </div>

      <div className="notes">
        <div className="note">
          <div className="note_title">
           <p className="title"> Class 1 </p>
            <p className="Date">last modofied [date]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
