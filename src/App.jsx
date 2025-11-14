import "./styles/App.css";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.jpeg";
import sonic from "./assets/sonic.webp";
import spider from "./assets/spider.png";
import ash from "./assets/ash.webp";
import { GameContext } from "./context/GameContext";
import Header from "./components/app/header";
import Footer from "./components/app/footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [gameState, setGameState] = useState("WelcomeScreen");
  const levels = [
    {
      title: "Dragon Isle",
      img: img1,
      items: {
        1: {
          img: sonic,
          coords: [0.338, 0.526],
        },
        2: {
          img: spider,
          coords: [0.645, 0.842],
        },
        3: {
          img: ash,
          coords: [0.028, 0.715],
        },
      },
    },
    {
      title: "Multiverse Chaos",
      img: img2,
    },
  ];

  const gameContextValue = { gameState, setGameState, levels };

  return (
    <>
      <Header></Header>
      <main className="flex-1 flex overflow-auto">
        <div className="bg-[#1d3557] text-white flex-1 flex border-b border-gray-600 justify-center py-8">
          <GameContext.Provider value={gameContextValue}>
            <Outlet />
          </GameContext.Provider>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
