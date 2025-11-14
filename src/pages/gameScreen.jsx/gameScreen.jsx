import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { useParams } from "react-router-dom";
import { useRef } from "react";

export default function GameScreen() {
  const { levels } = useContext(GameContext);
  const { id } = useParams();
  const level = levels[id];
  const divRef = useRef(null);

  function handlePointerDown(e) {
    const elRef = divRef.current;
    if (!elRef) return;

    const imgDiv = elRef.getBoundingClientRect();
    let x = e.clientX - imgDiv.left;
    let y = e.clientY - imgDiv.top;

    const nx = Math.max(0, Math.min(1, x / imgDiv.width));
    const ny = Math.max(0, Math.min(1, y / imgDiv.height));

    console.log("Coords:", nx.toFixed(3), ny.toFixed(3));
  }

  return (
    <div className="mainContainer flex flex-col items-center py-8 gap-6 mb-8">
      <div
        className="imgContainer w-[90%]"
        onPointerDown={handlePointerDown}
        ref={divRef}
      >
        <img src={level.img} />
      </div>
    </div>
  );
}
