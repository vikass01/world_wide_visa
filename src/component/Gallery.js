import React from "react";
import ImageGallery from "react-image-gallery";
import "./gallery.css";

export default function Gallery() {
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
    </>
  );
}
