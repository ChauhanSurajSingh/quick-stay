import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50 px-6 pt-20 pb-30 md:px-16 lg:px-24">
      <Title
        title="What Our Guest Say"
        subTitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
      />
      <div className="mt-20 flex flex-wrap items-center gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="rounded-xl bg-white p-6 shadow">
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1">
              <StarRating rating={testimonial.rating} />
            </div>
            <p className="mt-4 max-w-90 text-gray-500">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
