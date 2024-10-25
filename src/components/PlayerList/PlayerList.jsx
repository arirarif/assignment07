// import React, { useEffect, useState } from "react";

// const PlayerCard = ({ player }) => (
//   <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 m-4">
//     <img
//       className="w-full h-48 object-cover"
//       src={player.imageUrl}
//       alt={player.name}
//     />
//     <div className="p-4">
//       <h3 className="text-lg font-bold">{player.name}</h3>
//       <div className="flex items-center text-sm text-gray-600">
//         <span className="mr-2">🇮🇳 {player.country}</span>
//         <span>{player.role}</span>
//       </div>
//       <div className="mt-2">
//         <p className="text-sm">Rating: {player.rating}</p>
//         <p className="text-sm">Price: {player.price}</p>
//       </div>
//       <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800">
//         Choose Player
//       </button>
//     </div>
//   </div>
// );

// const PlayerList = () => {
//   const [players, setPlayers] = useState([]);

//   // Fetch the players data from the cards.json file
//   useEffect(() => {
//     fetch("/cards.json")
//       .then((response) => response.json())
//       .then((data) => setPlayers(data))
//       .catch((error) => console.error("Error fetching player data:", error));
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center">
//       {players.map((player) => (
//         <PlayerCard key={player.id} player={player} />
//       ))}
//     </div>
//   );
// };

// export default PlayerList;

import React, { useEffect, useState } from "react";

const PlayerCard = ({ player, coins, onPurchase }) => {
  const handleChooseClick = () => {
    const playerPrice = parseInt(player.price.replace(/[^0-9]/g, "")); // Convert price string to a number
    if (coins >= playerPrice) {
      const purchased = onPurchase(playerPrice);
      if (purchased) {
        alert(`${player.name} chosen for ${player.price}`);
      }
    } else {
      alert(`Not enough coins. You need more coins to purchase ${player.name}`);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 m-4">
      <img
        className="w-full h-48 object-cover"
        src={player.imageUrl}
        alt={player.name}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{player.name}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">🇮🇳 {player.country}</span>
          <span>{player.role}</span>
        </div>
        <div className="mt-2">
          <p className="text-sm">Rating: {player.rating}</p>
          <p className="text-sm">Price: {player.price}</p>
        </div>
        <button
          onClick={handleChooseClick}
          className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

const PlayerList = ({ coins, onPurchase }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/cards.json")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching player data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          coins={coins}
          onPurchase={onPurchase}
        />
      ))}
    </div>
  );
};

export default PlayerList;
