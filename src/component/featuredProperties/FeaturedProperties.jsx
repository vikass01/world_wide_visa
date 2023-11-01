import "./featuredProperties.css";
import { useNavigate } from "react-router-dom";
const FeaturedProperties = () => {
  const navigate = useNavigate();
  return (
    <div className="fp">
      <div className="fpscroll" onClick={()=>navigate('/hotelsid')}>
      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6a/c4/f0.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mumbai Private</span>
        <span className="fpCity">Sightseening</span>
        <span className="fpPrice">Starting from Rs. 3892/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/c1/48/62.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Old Delhi Food and</span>
        <span className="fpCity">Heritage Walk</span>
        <span className="fpPrice">Starting from Rs. 3754/-</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/72/0f/5c.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Phi Phi Islands Adventure</span>
        <span className="fpCity">with Seaview Lunch</span>
        <span className="fpPrice">Starting from Rs 6628/-</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/da/20/b9.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Mahal Day Tour</span>
        <span className="fpCity">from Delhi by Train</span>
        <span className="fpPrice">Starting from Rs.2474/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/3a/a6/f9.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Tour to Agra and Jaipur</span>
        <span className="fpCity">From New Delhi</span>
        <span className="fpPrice">Starting from Rs.13,480/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/d8/3e/89.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Overnight Camel Safari</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from Rs.3412/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/37/6e/15.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Kochi Tuk-Tuk Tour</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from Rs.1279/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://traveltriangle.com/blog/wp-content/uploads/2016/06/pilgrims-at-Badrinath-Temple.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Himalayan </span>
        <span className="fpCity">Chota Char Dham</span>
        <span className="fpPrice">Starting from Rs.4256/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://cdn.tourradar.com/s3/tour/645x430/161051_62c279f910482.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Varanasi Prayagraj </span>
        <span className="fpCity">Ayodhya</span>
        <span className="fpPrice">Starting from Rs. 1568/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://www.hlimg.com/images/deals/360X230/deals_201905021556801105-10.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Haridwar RIshikesh</span>
        <span className="fpCity">Mussoorie</span>
        <span className="fpPrice">Starting from Rs.3459/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://www.indiapilgrimtours.com/pictures/tours/gallery/39_1004.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Badrinath Dwarka Puri</span>
        <span className="fpCity">Rameshwaram</span>
        <span className="fpPrice">Starting from Rs.4589/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://blogs.revv.co.in/blogs/wp-content/uploads/2020/12/Head-to-Tirumala-Temple-to-pay-homage-to-Balaji.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Tirupati Balaji</span>
        <span className="fpCity">Darshan</span>
        <span className="fpPrice">Starting from 1126/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://shirditour.com/img/shirdi-tour-1.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Shirdi darshan</span>
        <span className="fpCity">Sabka malik ek</span>
        <span className="fpPrice">Starting from 4526/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://i.ndtvimg.com/i/2016-06/golden-temple-amritsar_650x400_51465180685.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Amritsar Tours</span>
        <span className="fpCity">Including Wagah Ceremony</span>
        <span className="fpPrice">Starting from Rs.5033/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/ec/13/fd.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Bodh Gaya Tours</span>
        <span className="fpCity">Hotel pick up</span>
        <span className="fpPrice">Starting from 2600/-</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>


      



      </div>
    </div>
  );
};

export default FeaturedProperties;
