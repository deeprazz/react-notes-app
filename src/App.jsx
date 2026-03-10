import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-4 lg:w-1/2 items-start p-10  "
      >
        <h1 className=" font-bold text-4xl">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="font-medium w-full border-2 rounded px-5 py-2 outline-none"
        />
        <textarea
          type="text"
          className="p-5 font-medium w-full h-32 border-2 rounded px-5 py-2 flex flex-row items-start outline-none"
          placeholder="Write Details "
        />
        <button
          className="bg-white font-medium text-black px-5 w-full
           py-2 rounded outline-none"
        >
          Add notes
        </button>
      </form>
      <div className=" p-10  lg:w-1/2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          <div className=" h-52 w-40 rounded-2xl bg-white"></div>
          <div className=" h-52 w-40 rounded-2xl bg-white"></div>
          <div className=" h-52 w-40 rounded-2xl bg-white"></div>
          <div className=" h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
