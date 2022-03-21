import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import Review from './review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="mt-8 bg-img2">
            <Carousel
                autoplay
                dots={false}
                className="py-12 px-5 lg:px-12 bg-color2"
            >
                {reviews.map((review) => (
                    <Review key={review._id} review={review} />
                ))}
            </Carousel>
        </div>
    );
};

export default Reviews;
<h1>reviews</h1>;
