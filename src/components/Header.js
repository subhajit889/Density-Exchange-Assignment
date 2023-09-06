import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Header = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto bg-purple-200 rounded-lg shadow-lg p-10">
        <div className="flex justify-between items-center">
          {/* First Section */}
          <div className="w-1/2">
            <p className="text-2xl my-8">Discover some amazing Landscape</p>
            <h1 className="text-7xl font-bold">
              Welcome to<br />
              The Landscape Viewer
            </h1>
            <p className="text-lg my-8">We can transform your life . . . . . . .</p>
            <div className="buttons-container flex-row space-x-4 my-8">
              <button className="bg-black hover:bg-purple-900 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Download from Play Store
              </button>
              <button className="bg-black hover:bg-purple-900 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Download from App Store
              </button>
            </div>
          </div>

          {/* Second Section */}
          <div className="w-1/2 animate-fade-in">
            <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
              <div>
                <img
                  src="https://w.forfun.com/fetch/54/54f594a083eccc7831a97cb4ff36d52c.jpeg"
                  alt="Carousel Image 1"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.hdqwalls.com/download/beautiful-landscape-nature-scenery-1d-1600x1200.jpg" 
                  alt="Carousel Image 2"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://wallpapers.com/images/hd/picturesque-1600-x-1200-wallpaper-mkrv3p5a1tfxgmro.jpg" 
                  alt="Carousel Image 3"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://w.forfun.com/fetch/54/54f594a083eccc7831a97cb4ff36d52c.jpeg"
                  alt="Carousel Image 4"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.hdqwalls.com/download/beautiful-landscape-nature-scenery-1d-1600x1200.jpg"
                  alt="Carousel Image 5"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://wallpapers.com/images/hd/picturesque-1600-x-1200-wallpaper-mkrv3p5a1tfxgmro.jpg" 
                  alt="Carousel Image 6"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.hdqwalls.com/download/beautiful-landscape-nature-scenery-1d-1600x1200.jpg" 
                  alt="Carousel Image 7"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://wallpapers.com/images/hd/picturesque-1600-x-1200-wallpaper-mkrv3p5a1tfxgmro.jpg" 
                  alt="Carousel Image 8"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
