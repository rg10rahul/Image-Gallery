import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Imagecard from "./Components/Imagecard";
import Imagesearch from "./Components/Imagesearch";
import Imagepopup from "./Components/Imagepopup";

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [term, setTerm] = useState("");
  const [openpopup, setOpenpopup] = useState(false);
  const [selectedimage, setSelectedimage] = useState(null);
  const API_KEY = import.meta.env.VITE_PIXABAY_API;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setImages(data.hits);
        setIsloading(false);
      } catch (err) {
        console.log("error fetching images");
        setIsloading(false);
      }
    };

    fetchImages();
  }, [term]);
  const handleopenpopup = (image) => {
    setSelectedimage(image);
    setOpenpopup(true);
  };
  const handlclosepopup = () => {
    setOpenpopup(false);
  };

  return (
    <div>
      <Header />
      <Imagesearch searchtext={(text) => setTerm(text)}></Imagesearch>
      {isloading ? (
        <h1 className="text-center mt-48 font-semibold text-5xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center my-8 mx-auto max-w-[1500px]">
          {images.map((image) => (
            <Imagecard
              key={image.id}
              img={image}
              handleopenpopup={() => handleopenpopup(image)}
            ></Imagecard>
          ))}
        </div>
      )}
      {openpopup && selectedimage && (
        <Imagepopup
          img={selectedimage}
          handleclosepopup={handlclosepopup}
        ></Imagepopup>
      )}
    </div>
  );
}

export default App;
