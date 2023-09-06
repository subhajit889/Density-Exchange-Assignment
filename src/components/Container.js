import React from 'react';
import SecondContainer from '../SecondContainer';
const Container = () => {

    return (
        <>
            <div className="extra-details flex my-10 text-center mx-24 space-x-20">
                <div className="flex-1 p-6 bg-purple-100 container-1 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-5000">
                    <h2 className='text-3xl font-bold mb-4'>Love the Nature</h2>
                    <div className="text-lg mb-4">
                        <p>
                            Mother Nature is the ultimate inspiration. When you're feeling sluggish, simply walking outside and getting fresh air can do wonders for your mood and outlook.
                        </p>
                    </div>
                </div>
                <div className="flex-1 p-6 bg-purple-100 container-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                    <h2 className='text-3xl font-bold mb-4'>Nature is the spirit</h2>
                    <div className="text-lg mb-4">
                        <p>
                            Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time.
                        </p>
                    </div>
                </div>
                <div className="flex-1 p-6 bg-purple-100 container-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                    <h2 className='text-3xl font-bold mb-4'>Men argue but Nature acts</h2>
                    <div className="text-lg mb-4">
                        <p>
                            Whoever you are, no matter how lonely, the world offers itself to your imagination, calls to you like the wild geese, harsh and exciting—over and over announcing your place in the family of things.
                        </p>
                    </div>
                </div>
            </div>
            <SecondContainer/>
        </>
    );
};

export default Container;