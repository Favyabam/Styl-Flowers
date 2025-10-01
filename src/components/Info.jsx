import React from "react";

const Info = () => {
  return (
    <section className="bg-gray-200 py-13 px-4">
      <div className="flex flex-col pl-15 gap-6 justify-start md:flex-row md:flex-wrap">
        {/* First row: 3 boxes on md+, stacked on mobile */}
        <div className="flex flex-col gap-6 w-full md:flex-row md:justify-start md:gap-6 md:mb-6">
          <div className="flex items-center bg-white border border-gray-200 p-6 min-w-[250px] max-w-md w-full md:w-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Free Delivery</h3>
              <span className="text-base text-gray-600">on all orders</span>
            </div>
          </div>
          <div className="flex items-center bg-white border border-gray-200 p-6 min-w-[250px] max-w-md w-full md:w-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">10 days returns</h3>
              <span className="text-base text-gray-600">moneyback guarantee</span>
            </div>
          </div>
          <div className="flex items-center bg-white border border-gray-200 p-6 min-w-[250px] max-w-md w-full md:w-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">offer & gifts</h3>
              <span className="text-base text-gray-600">on all orders</span>
            </div>
          </div>
        </div>
        {/* Second row: 1 box centered on md+, full width on mobile */}
        <div className="flex w-full justify-start">
          <div className="flex items-center bg-white border border-gray-200 p-6 min-w-[250px] md:min-w-[800px] max-w-md w-full md:w-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">secure payments</h3>
              <span className="text-base text-gray-600">protected by paypal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
