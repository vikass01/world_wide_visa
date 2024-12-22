import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "./gallery.css";
import { Gallery as GridGallery  } from "react-grid-gallery";
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
import image11 from "../Airport_Drops/0011.jpeg";
import image12 from "../Airport_Drops/0012.jpeg";
import image13 from "../Airport_Drops/0013.jpeg";
import image14 from "../Airport_Drops/0014.jpeg";
import image15 from "../Airport_Drops/0015.jpeg";
import image16 from "../Airport_Drops/0016.jpeg";


export default function Gallery() {
  const [index, setIndex] = useState(-1);


  const images = [
    {
      original: "https://www.en.etemaaddaily.com/pages/eduandjobs/656neet_pg_counselling.jpg",
      thumbnail: "https://www.en.etemaaddaily.com/pages/eduandjobs/656neet_pg_counselling.jpg",
    },
    {
      original: "https://phoenixchd.com/wp-content/uploads/2021/02/mbbs-students.jpg",
      thumbnail: "https://phoenixchd.com/wp-content/uploads/2021/02/mbbs-students.jpg",
    },
    {
      original: "https://medipediaoverseas.com/blog/blogadmin/download/452we-at-medipedia-overseas-suggest-our-students-to-focus-on-mbbs-clinical-subjects.-practise-makes-the-doctor-perfect-who-saves-the-human-life..jpg",
      thumbnail: "https://medipediaoverseas.com/blog/blogadmin/download/452we-at-medipedia-overseas-suggest-our-students-to-focus-on-mbbs-clinical-subjects.-practise-makes-the-doctor-perfect-who-saves-the-human-life..jpg",
    },
    {
      original: "https://cache.careers360.mobi/media/article_images/2022/11/7/shutterstock_1342231466.jpg",
      thumbnail: "https://cache.careers360.mobi/media/article_images/2022/11/7/shutterstock_1342231466.jpg",
    },
    {
      original: "https://images.thequint.com/thequint%2F2022-02%2F3ef67523-a353-4e64-a366-caed0b9431b6%2FIMG_20220226_WA0009__1_.jpg",
      thumbnail: "https://images.thequint.com/thequint%2F2022-02%2F3ef67523-a353-4e64-a366-caed0b9431b6%2FIMG_20220226_WA0009__1_.jpg",
    },
    {
      original: "https://images.catchnews.com/upload/2016/10/13/foreign-doctors-india-lead-medi-2.jpg",
      thumbnail: "https://images.catchnews.com/upload/2016/10/13/foreign-doctors-india-lead-medi-2.jpg",
    },
    {
      original: "https://www.dailyrounds.org/blog/wp-content/uploads/2018/07/Indian-doctors.jpg",
      thumbnail: "https://www.dailyrounds.org/blog/wp-content/uploads/2018/07/Indian-doctors.jpg",
    },
    {
      original: "https://qph.cf2.quoracdn.net/main-qimg-19cfd057210281389cf5d0956b92bc90-lq",
      thumbnail: "https://qph.cf2.quoracdn.net/main-qimg-19cfd057210281389cf5d0956b92bc90-lq",
    },
    {
      original: "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1648904688.jpg",
      thumbnail: "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1648904688.jpg",
    },
  ];

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
    src: image5,
    width: 320,
    height: 212,
 },
 {
  src: image16,
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
// {
//   src: image10,
//   width: 320,
//   height: 212,
// },
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
  src: image4,
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
        <p>Images of MBBS abroad student life, amenities and facilities. In this gallery, <br/>get an idea about how our students are thoroughly enjoying their MBBS courses</p>

        </div>
      <div className="fgii">
        <h3 style={{textAlign:"center"}}>Clinical Practice Students Study MBBS Abroad</h3>
        <ImageGallery items={images} autoPlay={true} />
      </div>

      <div className="dnsd">
      <h3 style={{textAlign:"center", color:"#fff"}}>Meet Our Graduate MBBS Students Abroad</h3>
        </div>
      
      <div className="hoiaa">
      
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-14.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-13.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-12.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-11.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-1.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-6.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-6.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-11.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-10.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-8.png"></img>
        <img src="https://brightfutureas.com/wp-content/uploads/2023/10/Meet-Our-Graduate-MBBS-Students-Abroad-14.png"></img>
      </div>

      <div className="dnsd" style={{display:'flex',flexDirection:'column'}}>
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

      {currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          nextSrc={imagez[(index + 1) % imagez.length].src}
          prevSrc={imagez[(index + imagez.length - 1) % imagez.length].src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
      
    </>
  );
}
