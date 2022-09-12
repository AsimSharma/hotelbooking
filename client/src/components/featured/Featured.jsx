import "./featured.css";
import image1 from "../../image/s.jpg"
import image2 from "../../image/p.jpg"
import image3 from "../../image/b.jpg"
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={image1}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sauraha,chitwan</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={image2}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lakeside,pokhara</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={image3}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bharatpur,Chitwan</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
