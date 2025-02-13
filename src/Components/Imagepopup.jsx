import { IoCloseSharp } from "react-icons/io5";

function Imagepopup({ img, handleclosepopup }) {
  return (
    <>
      <div
        className=" fixed w-full h-full inset-0 flex justify-center items-center bg-black/80"
        onClick={handleclosepopup}
      >
        <div className="fixed container rounded bg-black w-2/4 h-3/4 overflow-hidden">
          <div className="flex flex-row justify-end mt-1 mr-4">
            <IoCloseSharp
              className="h-6 w-8 cursor-pointer"
              style={{ fill: "white" }}
              onClick={handleclosepopup}
            ></IoCloseSharp>
          </div>
          <div className="h-full w-full overflow-hidden">
            <img
              src={img.largeImageURL}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Imagepopup;
