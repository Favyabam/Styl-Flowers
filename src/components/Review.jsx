import React from "react";

const Review = () => {
  return (
    <section id="review" className="bg-white">
      
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold bg-pink-100 text-center mb-12 w-full max-w-[69rem] py-4 mt-8">
          <span className="text-gray-800">Customer's</span>{" "}
          <span className="text-pink-500">Review</span>
        </h1>
      </div>

      <div className="py-16 px-6">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full mx-auto">
            <p className="text-gray-600 mb-6">
              Absolutely stunning flowers! I ordered a bouquet for my mother’s birthday, and she couldn’t stop smiling. The arrangement was fresh, vibrant, and delivered on time. I’ll be ordering again.
            </p>
            <div>
              <h3 className="font-bold text-gray-800">Sarah John</h3>
              <p className="text-gray-500 text-sm">Happy Customer</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full mx-auto">
            <p className="text-gray-600 mb-6">
              I’ve tried a few flower shops before, but this one stands out. The customer service was friendly, and the bouquet looked even better in real life than in the pictures. Truly worth every penny.
            </p>
            <div>
              <h3 className="font-bold text-gray-800">Praise Joe</h3>
              <p className="text-gray-500 text-sm">Returning Customer</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full mx-auto">
            <p className="text-gray-600 mb-6">
              My wedding flowers were beyond perfect! From the bridal bouquet to the table arrangements, everything was elegant and beautifully arranged. Thank you for making my big day extra special.
            </p>
            <div>
              <h3 className="font-bold text-gray-800">Alex Mary</h3>
              <p className="text-gray-500 text-sm">First-time Buyer</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Review;
