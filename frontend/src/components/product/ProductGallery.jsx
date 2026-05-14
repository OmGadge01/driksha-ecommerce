import { useState } from "react";

const ProductGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  const [activeImage, setActiveImage] =
    useState(images[0]);

  return (
    <div
      className="
        flex
        flex-col
        gap-5
        md:flex-row-reverse
      "
    >
      <div
        className="
          aspect-square
          flex-1
          overflow-hidden
          rounded-3xl
          bg-gray-100
        "
      >
        <img
          src={activeImage}
          alt=""
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>

      <div
        className="
          flex
          gap-3
          md:flex-col
        "
      >
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className={`
              overflow-hidden
              rounded-2xl
              border-2

              ${
                activeImage === image
                  ? "border-[#6C63FF]"
                  : "border-transparent"
              }
            `}
          >
            <img
              src={image}
              alt=""
              className="
                h-24
                w-24
                object-cover
              "
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;