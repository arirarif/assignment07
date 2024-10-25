import React from "react";
import bannerLogo from "../../assets/images/banner-main.png";
import bannerbg from "../../assets/images/bg-shadow.png";

const Banner = () => {
  const handleClaimClick = () => {
    // Dispatch a custom event with coin amount
    const event = new CustomEvent("addCoins", { detail: { amount: 100 } });
    window.dispatchEvent(event);
  };

  return (
    <div
      className="relative w-full h-96 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${bannerbg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        {/* Logo */}
        <img
          src={bannerLogo}
          alt="Cricket Logo"
          className="h-24 w-24 object-contain mb-4"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-300 mb-6">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Claim Button */}
        <button
          className="px-6 py-3 bg-[#E7FE29] text-black font-semibold rounded-lg hover:bg-green-200 transition-colors"
          onClick={handleClaimClick} // Call handleClaimClick when button is clicked
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
