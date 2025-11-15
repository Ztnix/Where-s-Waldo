import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { useEffect } from "react";

export default function WelcomeScreen() {
  const { levels, setLevelSelected } = useContext(GameContext);

  useEffect(() => {
    setLevelSelected(null);
  }, [setLevelSelected]);

  return (
    <div className="mainContainer flex flex-col items-center pb-8 gap-6 mb-8">
      <h1 className="font-bold text-4xl">Find Waldo</h1>
      <h2 className="font-bold text-2xl">Select a level</h2>
      <div className="gameSelectContainer flex gap-8">
        {levels.map((level, i) => (
          <Link
            key={i}
            className="level outline-1 outline-gray-500 rounded-lg w-[300px] h-[450px] inline-block"
            to={`/game/${i}`}
            onClick={() => setLevelSelected(level)}
          >
            <img
              src={level.img}
              className="rounded-t-lg h-full w-full object-cover"
            />
            <div className="textContentlevel p-4 bg-[#162942] rounded-b-lg">
              <h2 className="font-bold text-center text-2xl">{level.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
