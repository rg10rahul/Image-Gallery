import { useState } from "react";

function Imagesearch({ searchtext }) {
  const [text, setText] = useState("");

  const onsearchsubmit = (e) => {
    e.preventDefault();
    searchtext(text);
  };

  return (
    <div className="max-w-sm rounded mx-auto mt-10">
      <form
        onSubmit={onsearchsubmit}
        className="flex justify-center gap-2 w-full"
      >
        <input
          className="max-w-sm rounded border-black border-2 px-2"
          type="text"
          placeholder="Search image here"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button
          className="max-w-fit rounded-md bg-blue-500 hover:bg-blue-800 px-[10px] text-white font-semibold"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Imagesearch;
