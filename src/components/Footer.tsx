import { AddIcon } from "../assets/Icon";
import { useState } from "react";

function Footer() {
  const [activeButton, setActiveButton] = useState("all-orders");
  const handleButtonClick = (buttonId: string) => {
    console.log(`Button with ID "${buttonId}" was clicked.`);
    setActiveButton(buttonId);
  };
  const DEFAULT_BUTTON_CLASSES = "px-4 py-2";

  const ACTIVE_ONLY_CLASSES =
    "bg-green-500 border-t-2 border-black text-white shadow-md";
  const ADD_BUTTON_DEFAULT_CLASSES = "px-4 py-2 ";

  const handleWorksheet = () => {
    alert("Adding new worksheet..");
  };

  return (
    <footer className="flex justify-self-start gap-5">
      <div></div>
      <button
        className={`${DEFAULT_BUTTON_CLASSES} ${
          activeButton === "all-orders" ? ACTIVE_ONLY_CLASSES : ""
        }`}
        onClick={() => handleButtonClick("all-orders")}
      >
        All Orders
      </button>
      <button
        className={`${DEFAULT_BUTTON_CLASSES} ${
          activeButton === "pending" ? ACTIVE_ONLY_CLASSES : ""
        }`}
        onClick={() => handleButtonClick("pending")}
      >
        Pending
      </button>
      <button
        className={`${DEFAULT_BUTTON_CLASSES} ${
          activeButton === "reviewed" ? ACTIVE_ONLY_CLASSES : ""
        }`}
        onClick={() => handleButtonClick("reviewed")}
      >
        Reviewed
      </button>
      <button
        className={`${DEFAULT_BUTTON_CLASSES} ${
          activeButton === "arrived" ? ACTIVE_ONLY_CLASSES : ""
        }`}
        onClick={() => handleButtonClick("arrived")}
      >
        Arrived
      </button>
      <button
        className={`w-[90px] ${ADD_BUTTON_DEFAULT_CLASSES} ${
          activeButton === "add-new" ? ACTIVE_ONLY_CLASSES : ""
        }`}
        onClick={() => handleButtonClick("add-new")}
      >
        <span className="flex justify-center items-center">
          <AddIcon onClick={handleWorksheet} />
        </span>
      </button>
    </footer>
  );
}
export default Footer;
