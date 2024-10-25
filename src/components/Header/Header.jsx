// import React, { useEffect, useState } from "react";
// import profile from "../../assets/images/logo.png";
// import coin from "../../assets/images/logo.png";

// const Header = () => {
//   const [coins, setCoins] = useState(0); // State to manage coin count

//   useEffect(() => {
//     // Event listener for adding coins
//     const addCoinListener = (event) => {
//       setCoins((prevCoins) => prevCoins + event.detail.amount);
//     };

//     // Add event listener
//     window.addEventListener("addCoins", addCoinListener);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("addCoins", addCoinListener);
//     };
//   }, []);

//   return (
//     <header className="w-full bg-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-2">
//           <img src={profile} alt="Logo" className="h-12 w-12 object-contain" />
//           <span className="text-lg font-semibold text-gray-800">Cricket</span>
//         </div>

//         {/* Middle: Menu Links */}
//         <nav className="flex-grow hidden md:flex justify-center space-x-8 text-gray-600">
//           <a href="#home" className="hover:text-gray-800">
//             Home
//           </a>
//           <a href="#fixture" className="hover:text-gray-800">
//             Fixture
//           </a>
//           <a href="#teams" className="hover:text-gray-800">
//             Teams
//           </a>
//           <a href="#schedule" className="hover:text-gray-800">
//             Schedule
//           </a>
//         </nav>

//         {/* Right: Coin Button */}
//         <div className="flex items-center">
//           <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
//             <span className="mr-2 text-gray-700">{coins} Coin</span>
//             <img src={coin} alt="Coin" className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect } from "react";
import profile from "../../assets/images/logo.png";
import coin from "../../assets/images/logo.png";

const Header = ({ coins }) => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src={profile} alt="Logo" className="h-12 w-12 object-contain" />
          <span className="text-lg font-semibold text-gray-800">Cricket</span>
        </div>

        {/* Middle: Menu Links */}
        <nav className="flex-grow hidden md:flex justify-center space-x-8 text-gray-600">
          <a href="#home" className="hover:text-gray-800">
            Home
          </a>
          <a href="#fixture" className="hover:text-gray-800">
            Fixture
          </a>
          <a href="#teams" className="hover:text-gray-800">
            Teams
          </a>
          <a href="#schedule" className="hover:text-gray-800">
            Schedule
          </a>
        </nav>

        {/* Right: Coin Button */}
        <div className="flex items-center">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <span className="mr-2 text-gray-700">{coins} Coin</span>
            <img src={coin} alt="Coin" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
