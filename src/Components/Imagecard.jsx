function Imagecard({ img, handleopenpopup }) {
  return (
    <div className="w-full max-h-dvh flex flex-col justify-between rounded shadow-md hover:shadow-2xl overflow-hidden pb-2">
      <div className="h-48 overflow-hidden">
        <img
          src={img.webformatURL}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-bold text-lg text-red-600 pt-3 px-3">
        Image by {img.user}
      </span>
      <ul className="text-base pt-1 px-3 leading-tight">
        <li>
          <strong>Likes : </strong>
          {img.likes}
        </li>
        <li>
          <strong>Views : </strong>
          {img.views}
        </li>
        <li>
          <strong>comments : </strong>
          {img.likes}
        </li>
      </ul>
      <button
        className="max-w-fit rounded-md bg-sky-500 hover:bg-sky-700 px-3 ml-3 mt-2 mb-1 text-white font-bold"
        onClick={handleopenpopup}
      >
        View
      </button>
    </div>
  );
}

export default Imagecard;
