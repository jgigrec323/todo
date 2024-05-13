import React from "react";
import AddBtn from "./AddBtn";

function MainContainer({ children }) {
  return (
    <div className="bg-neutral-900 h-[32rem] w-60 p-5 rounded-3xl relative  flex-1">
      {children}
      <AddBtn></AddBtn>
    </div>
  );
}

export default MainContainer;
