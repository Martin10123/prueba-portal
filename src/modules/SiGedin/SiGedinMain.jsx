import { useState } from "react";
import { images } from "../../helpers/imagesSlider";
import "./styles.css";

export const SiGedinMain = () => {
  const [listaImagenes, setListaImagenes] = useState(images);

  const nextImage = () => {
    setListaImagenes((prevImages) => {
      const [firstImage, ...restImages] = prevImages;
      return [...restImages, firstImage];
    });
  };

  const prevImage = () => {
    setListaImagenes((prevImages) => {
      const lastImage = prevImages[prevImages.length - 1];
      const restImages = prevImages.slice(0, prevImages.length - 1);
      return [lastImage, ...restImages];
    });
  };

  return (
    <main className="w-full h-screen bg-slate-100">
      <div className="container_slide">
        <div className="slide">
          {listaImagenes.map((image) => (
            <div
              key={image.id}
              className="item"
              style={{
                backgroundImage: `url(${image.image})`,
              }}
            >
              <div className="content">
                <div className="name"></div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  eum!
                </div>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="button">
          <button className="prev" onClick={prevImage}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={nextImage}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </main>
  );
};
