import React from "react";
import ListItems from "./listitem";
import "./list.css";
const List=()=>{
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = '/';
    };
    const name=localStorage.getItem("username");
    return(
        <div>
            <div className="name">Hi ! {name} here is list.....</div>
            <ListItems/>
            <div className="button"><button onClick={(e) => handleLogout(e)}> Logout </button></div>
        </div>
    );
};

export default List;