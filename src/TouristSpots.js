import React from 'react';

function TouristSpots() {
    return (
        <div className="tourist-spots">
            <h2>Tourist Spots</h2>
            <p>Explore the most popular and scenic tourist destinations in Penang.</p>
            {/* Add images, videos, and other content for this category */}
            <div className="tourist-spots-images">
                <img src="https://i.pinimg.com/236x/89/69/b4/8969b4030e55d439a8ea89b4ca76f12a.jpg"
                     alt="Tourist Spot 1"/>
                <img src="https://i.pinimg.com/236x/6d/be/6f/6dbe6f2bf57010a7020f7d24b50ac154.jpg"
                     alt="Tourist Spot 2"/>
            </div>
            {/* Embed YouTube video */}
            <div className="tourist-spots-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://youtu.be/3KCOgVq-lCs?si=yPf4gd-PYjSJ4SEf"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Tourist spots Video"
                ></iframe>
            </div>
        </div>
    );
}

export default TouristSpots;
