import banner1 from '../../assets/banner/Banner1.jpg';
import banner2 from '../../assets/banner/Banner2.jpg';
import banner3 from "../../assets/banner/Banner3.jpg";

const Banner = () => {
  return (
    <div className="flex  mt-8  flex-col sm:flex-row">
      <div className="w-2/5  rounded-l-md h-[450px] bg-fuchsia-200 pl-8 flex justify-center items-center">
        <div className="">
          <p className="text-4xl text-center  font-semibold font-medium leading-none italic">
            {" "}
            Original and authentic  makeup product purchase
            from our shop
          </p>
        </div>
      </div>
      {/* second half */}
      
      <div className="w-3/5">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src={banner1} className="w-full h-[450px] rounded-md" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={banner2} className="w-full h-[450px] rounded-md" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={banner3} className="w-full h-[450px] rounded-md" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn bg-fuchsia-600 text-white btn-xs">
            1
          </a>
          <a href="#item2" className="btn bg-fuchsia-600 text-white btn-xs">
            2
          </a>
          <a href="#item3" className="btn bg-fuchsia-600 text-white btn-xs">
            3
          </a>
        </div>
      </div>
      </div>
  );
}

export default Banner;