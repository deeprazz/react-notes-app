import { useState } from "react";

import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
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
        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="font-medium w-full border-2 rounded px-5 py-2 outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* DETAILED VALA INPUT */}
        <textarea
          type="text"
          className="p-5 font-medium w-full h-32 border-2 rounded px-5 py-2 flex flex-row items-start outline-none"
          placeholder="Write Details Here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button
          className="bg-white active:scale-95 font-medium text-black px-5 w-full
           py-2 rounded outline-none"
        >
          Add notes
        </button>
      </form>
      <div className=" p-10 border-l-2 lg:w-1/2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between items-start relative h-52 w-40 bg-cover rounded-2xl bg-[url('https://imgs.search.brave.com/w_ORjH_AHYUEtSxsOWwnuPJmF_Wf9GdWjvQy91plo9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cmVjb21tZW5kLXdv/cmtzL3BuZy1jbGlw/YXJ0LzIwMjUwMjE1/L291cm1pZC9wbmd0/cmVlLXN0aWNreS1u/b3Rlcy1wbmctaW1h/Z2VfMTU0ODQ0Mjcu/cG5n')] text-black py-6 px-8 pb-4"
              >
                <h3 className="leading-tight text-lg font-bold">
                  {elem.title}{" "}
                </h3>
                <p className="mt-2 text-xs leading-tight font-semibold text-gray-500">
                  {elem.details}
                </p>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 py-1 text-xs rounded font-bold bg-red-500 text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
