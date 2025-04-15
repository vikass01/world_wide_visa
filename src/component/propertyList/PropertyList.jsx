import { useState } from "react";
import "./propertyList.css";
import { useNavigate } from "react-router-dom";


const PropertyList = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  return (
    <div className="pList">
      <div className="pListscroll" onClick={() => navigate('/hotels', { state: { destination, date, options } })}>
        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/Malaysia.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Malaysia</h1>
            <h2>98 Locations</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/thailand.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Thailand</h1>
            <h2>96 Locations</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/indonesia.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Indonesia</h1>
            <h2>64 Locations</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/Seychelles-Slider-3.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Seychelles</h1>
            <h2>67 Locations</h2>
          </div>
        </div>

        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/02/The-Pearl-Qatar.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Qatar</h1>
            <h2>78 Locations</h2>
          </div>
        </div>

        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/shutterstock_758979559.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>UAE</h1>
            <h2>43 Locations</h2>
          </div>
        </div>

        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/02/Bruce-Lee-Hong-Kong.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Hong Kong</h1>
            <h2>98 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/sri-lanka1.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Sri Lanka</h1>
            <h2>85 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/cambodia.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Cambodia</h1>
            <h2>69 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/Vietnam.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Vietnam</h1>
            <h2>98 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/bhutan.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Bhutan</h1>
            <h2>89 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/Nepal.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Nepal</h1>
            <h2>38 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/Turkey-tourist-spot_23rd-oct.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Turkey</h1>
            <h2>23 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/kenya.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Kenya</h1>
            <h2>44 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/02/Tourist-in-Egypt.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Egypt</h1>
            <h2>35 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/02/South-Koreaepb0310.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>South Korea</h1>
            <h2>82 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/02/Mynamar-countryside.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Myanmar</h1>
            <h2>055 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/02/Speed-boat-Sanya-China.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>China</h1>
            <h2>25 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/02/Taiwan-tourism.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Taiwan</h1>
            <h2>35 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/lebanon.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1> Lebanon</h1>
            <h2>45 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/oman.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Oman</h1>
            <h2>36 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/11/shutterstock_511613911.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Russia</h1>
            <h2>86 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/07/View-of-Dead-Sea-from-Zara-cliff-ss25072017.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Jordan</h1>
            <h2>36 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/paraguay.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Paraguay</h1>
            <h2>56 Locations</h2>
          </div>
        </div>


        <div className="pListItem">
          <img
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/laos-.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Laos</h1>
            <h2>68 Locations</h2>
          </div>
        </div>





      </div>
    </div>
  );
};

export default PropertyList;
