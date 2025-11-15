import "./styles/App.css";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import sonic from "./assets/sonic.webp";
import spider from "./assets/spider.png";
import ash from "./assets/ash.webp";
import bender from "./assets/bender.jpg";
import catdog from "./assets/catdog.png";
import fry from "./assets/fry.png";

import { GameContext } from "./context/GameContext";
import Header from "./components/app/header";
import Footer from "./components/app/footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [levels, setLevels] = useState([
    {
      title: "Universe 113",
      img: img3,
      items: [
        {
          img: bender,
          name: "Bender",
          id: 1,
          active: true,
          coords: [0.907, 0.704],
        },
        {
          img: catdog,
          name: "Cat-Dog",
          id: 2,
          active: true,
          coords: [0.318, 0.467],
        },
        {
          img: fry,
          name: "Fry",
          id: 3,
          active: true,
          coords: [0.371, 0.172],
        },
      ],
    },
    {
      title: "Multiverse Chaos",
      img: img2,
      items: [
        {
          img: sonic,
          name: "Sonic",
          id: 4,
          active: true,
          coords: [0.338, 0.526],
        },
        {
          img: spider,
          name: "Spider-Man",
          id: 5,
          active: true,
          coords: [0.645, 0.842],
        },
        {
          img: ash,
          name: "Ash Ketchum",
          id: 6,
          active: true,
          coords: [0.028, 0.715],
        },
      ],
    },
    {
      title: "Dragon Isle",
      img: img1,
      items: [
        {
          img: sonic,
          name: "Sonic",
          id: 7,
          active: true,
          coords: [0.338, 0.526],
        },
        {
          img: spider,
          name: "Spider-Man",
          id: 8,
          active: true,
          coords: [0.645, 0.842],
        },
        {
          img: ash,
          name: "Ash Ketchum",
          id: 9,
          active: true,
          coords: [0.028, 0.715],
        },
      ],
    },
  ]);
  const [levelSelected, setLevelSelected] = useState(null);

  const gameContextValue = {
    levels,
    setLevels,
    levelSelected,
    setLevelSelected,
  };

  return (
    <>
      <GameContext.Provider value={gameContextValue}>
        <Header></Header>
        <main className="flex-1 flex overflow-auto">
          <div className="bg-[#1d3557] text-white flex-1 flex border-b border-gray-600 justify-center py-8">
            <Outlet />
          </div>
        </main>
        <Footer></Footer>
      </GameContext.Provider>
    </>
  );
}
