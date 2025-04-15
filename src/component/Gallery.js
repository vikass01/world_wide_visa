import React, { useState } from "react";
import "./gallery.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import image1 from "../Airport_Drops/001.jpeg";
import image2 from "../Airport_Drops/002.jpeg";
import image3 from "../Airport_Drops/003.jpeg";
import image4 from "../Airport_Drops/004.jpeg";
import image5 from "../Airport_Drops/005.jpeg";
import image6 from "../Airport_Drops/006.jpeg";
import image7 from "../Airport_Drops/007.jpeg";
import image8 from "../Airport_Drops/008.jpeg";
import image9 from "../Airport_Drops/009.jpeg";
import image10 from "../Airport_Drops/0010.jpeg";
import image11 from "../Airport_Drops/0011.jpeg";
import image12 from "../Airport_Drops/0012.jpeg";
import image13 from "../Airport_Drops/0013.jpeg";
import image14 from "../Airport_Drops/0014.jpeg";
import image15 from "../Airport_Drops/0015.jpeg";
import image16 from "../Airport_Drops/0016.jpeg";
// import image17 from "../Airport_Drops/0017.jpeg";
import image18 from "../Airport_Drops/0018.jpeg";
import image19 from "../Airport_Drops/0019.jpeg";
import image20 from "../Airport_Drops/0020.jpeg";
import image21 from "../Airport_Drops/0021.jpeg";
import image22 from "../Airport_Drops/0022.jpeg";
import image23 from "../Airport_Drops/0023.jpeg";
import image24 from "../Airport_Drops/0024.jpeg";
import image25 from "../Airport_Drops/0025.jpeg";
import image26 from "../Airport_Drops/0026.jpeg";
import image27 from "../Airport_Drops/0027.jpeg";


export default function Gallery() {
  const [index, setIndex] = useState(-1);


  

  const imagez = [
    {
      src: image1,
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: image2,
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: image3,
      width: 320,
      height: 212,
    },

    {
      src: image4,
      width: 320,
      height: 212,
    },
    {
      src: image5,
      width: 320,
      height: 212,
    },

    {
      src: image6,
      width: 320,
      height: 212,
    },
    {
      src: image7,
      width: 320,
      height: 212,
    },
    {
      src: image8,
      width: 320,
      height: 212,
    },
    {
      src: image9,
      width: 320,
      height: 212,
    },
    {
      src: image10,
      width: 320,
      height: 212,
    },
    {
      src: image11,
      width: 320,
      height: 212,
    },
    {
      src: image12,
      width: 320,
      height: 212,
    },
    {
      src: image13,
      width: 320,
      height: 212,
    },
    {
      src: image14,
      width: 320,
      height: 212,
    },
    {
      src: image15,
      width: 320,
      height: 212,
    },

    {
      src: image16,
      width: 320,
      height: 212,
    },
    // {
    //   src: image17,
    //   width: 320,
    //   height: 212,
    // },
    {
      src: image18,
      width: 320,
      height: 212,
    },
    {
      src: image19,
      width: 320,
      height: 212,
    },
    {
      src: image20,
      width: 320,
      height: 212,
    },
    {
      src: image21,
      width: 320,
      height: 212,
    },
    {
      src: image22,
      width: 320,
      height: 212,
    },
    {
      src: image23,
      width: 320,
      height: 212,
    },
    {
      src: image24,
      width: 320,
      height: 212,
    },
    {
      src: image25,
      width: 320,
      height: 212,
    },
    {
      src: image26,
      width: 320,
      height: 212,
    },
    {
      src: image27,
      width: 320,
      height: 212,
    },
  ];

  const currentImage = imagez[index];
  const nextIndex = (index + 1) % imagez.length;
  const nextImage = imagez[nextIndex] || currentImage;
  const prevIndex = (index + imagez.length - 1) % imagez.length;
  const prevImage = imagez[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <>
      <div className="dnsdf">
        <h2>Photos Gallery  </h2>
        <p>Images of MBBS abroad student life, amenities and facilities. In this gallery, <br />get an idea about how our students are thoroughly enjoying their MBBS courses</p>

      </div>
     

      <div className="dnsd" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ textAlign: "center", color: "#fff" }}>Students Dropping On Airport</h3>
        <div>
          <div className="gallery-container">
            {imagez.map((img, idx) => (
              <div key={idx} className="gallery-item" onClick={() => setIndex(idx)}>
                <img
                  src={img.src}
                  alt={img.alt || `Image ${idx}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>

        </div>

      </div>

      

    </>
  );
}
