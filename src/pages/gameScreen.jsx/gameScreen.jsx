import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Dropdown from "../../components/ui/dropdown";

export default function GameScreen() {
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
  const [dddisplay, setDddisplay] = useState(false);
  const [selected, setSelected] = useState(null);
  const [hits, setHits] = useState([]);
  const [playerChoiceCoords, setPlayerChoiceCoords] = useState(null);
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

    setMenuCoords({ x, y });
    setDddisplay(true);

    const nx = Math.max(0, Math.min(1, x / imgDiv.width));
    const ny = Math.max(0, Math.min(1, y / imgDiv.height));

    setPlayerChoiceCoords([nx.toFixed(3), ny.toFixed(3)]);

    console.log("Coords:", nx.toFixed(3), ny.toFixed(3));
  }

  useEffect(() => {
    async function checkCoords() {
      if (
        Math.abs(selected.coords[0] - playerChoiceCoords[0]) <= 0.04 &&
        Math.abs(selected.coords[1] - playerChoiceCoords[1]) <= 0.04
      ) {
        if (hits.includes(selected.name)) {
          console.log("Already Hit");
        } else {
          console.log(selected.coords[0] - playerChoiceCoords[0]);
          console.log("HIT");
          setHits((p) => [...p, selected.name]);
        }
      }
    }
    checkCoords();
  }, [selected, playerChoiceCoords, hits]);

  return (
    <div className="mainContainer flex flex-col items-center py-8 gap-6 mb-8 relative">
      <div
        className="imgContainer w-[90%]"
        onPointerDown={handlePointerDown}
        ref={divRef}
      >
        <img src={level.img} />
      </div>
      {dddisplay && (
        <div
          className="dropdown absolute"
          style={{ left: menuCoords.x, top: menuCoords.y }}
        >
          <Dropdown
            level={level}
            closeDropdown={() => setDddisplay(false)}
            setSelected={(name) => setSelected(name)}
          ></Dropdown>
        </div>
      )}
    </div>
  );
}
