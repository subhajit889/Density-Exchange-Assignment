import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    'https://wallpapercave.com/wp/wp4470060.jpg',
    'https://c4.wallpaperflare.com/wallpaper/190/581/68/green-trees-berlin-park-high-resolution-wallpaper-preview.jpg',
    'https://wallpaperaccess.com/full/1140594.jpg',
    'https://wallpaper.dog/large/20359969.jpg',
    'https://cdn.wallpapersafari.com/51/23/3Q2cft.jpg',
    'https://wallpapercave.com/wp/wp4470060.jpg',
    'https://wallpaperaccess.com/full/1140594.jpg',
    'https://cdn.wallpapersafari.com/51/23/3Q2cft.jpg',
];

const SecondContainer = () => {
    const quote1Ref = useRef(null);
    const quote2Ref = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        }, options);

        observer.observe(quote1Ref.current);
        observer.observe(quote2Ref.current);

        return () => {
            observer.unobserve(quote1Ref.current);
            observer.unobserve(quote2Ref.current);
        };
    }, []);

    return (
        <div className="main">
            <div className="carousel-container mx-auto max-w-3xl">
                <h1 className="text-center text-4xl font-bold mb-8">
                    Loves The Nature . . . . . Follow these places!!
                </h1>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={2000}
                    showThumbs={false}
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="quote">
                <h1 className='text-4xl font-bold mb-8'>Some Famous Quotes are. . . . .
                </h1>
                <div className={`quote1 ${quote1Ref}`} ref={quote1Ref}>
                    <h2 className='text-3xl font-bold mb-8'>
                        William Barick Says...
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, asperiores hic vel alias nesciunt aperiam veniam earum voluptates! Nihil fugit laborum id at assumenda eius dolorem ab et, labore quidem atque facilis, sint corporis magnam quas fugiat vitae accusantium exercitationem magni necessitatibus dolor quisquam officiis doloribus. Delectus, dolorem maiores? Iusto!id at assumenda eius dolorem ab et, labore quidem atque facilis, sint corporis magnam quas fugiat vitae accusantium exercitationem magni necessitatibus dolor quisquam officiis doloribus. Delectus, dolorem maiores? Iusto!
                    </p>
                </div>
                <div className={`quote2 ${quote2Ref}`} ref={quote2Ref}>
                    <h2 className='text-3xl font-bold mt-10 mb-5'>
                        Franchis Crisman Says...
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, asperiores hic vel alias nesciunt aperiam veniam earum voluptates! Nihil fugit laborum id at assumenda eius dolorem ab et, labore quidem atque facilis, sint corporis magnam quas fugiat vitae accusantium exercitationem magni necessitatibus dolor quisquam officiis doloribus. Delectus, dolorem maiores? Iusto!id at assumenda eius dolorem ab et, labore quidem atque facilis, sint corporis magnam quas fugiat vitae accusantium exercitationem magni necessitatibus dolor quisquam officiis doloribus. Delectus, dolorem maiores? Iusto!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SecondContainer;