// src/components/CultureHeritage.js
import React from 'react';

function CultureHeritage() {
    return (
        <div className="culture-heritage">
            <h2>Culture Heritage</h2>
            <p>Explore the rich cultural heritage of Penang through its monuments, museums, and historical landmarks.</p>
            {/* Add images, videos, and other content for this category */}
            <div className="culture-heritage-images">
                <img src="path_to_heritage_image_1.jpg" alt="Heritage Site 1" />
                <img src="path_to_heritage_image_2.jpg" alt="Heritage Site 2" />
            </div>
            <div className="culture-heritage-video">
                <video controls>
                    <source src="path_to_heritage_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default CultureHeritage;
