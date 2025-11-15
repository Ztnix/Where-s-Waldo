import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Dropdown from "../../components/ui/dropdown";
import Notification from "../../components/ui/notification";
import Modal from "../../components/ui/modal";

export default function GameScreen() {
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [notification, setNotification] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState(null);
  const [gameoverModalDisplay, setGameoverModalDisplay] = useState(false);

  const [hits, setHits] = useState([]);
  const [playerChoiceCoords, setPlayerChoiceCoords] = useState(null);
  const { levels, setLevels, setLevelSelected } = useContext(GameContext);
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

    console.log(`Coords: ${nx.toFixed(3)}, ${ny.toFixed(3)}`);
    setPlayerChoiceCoords([nx.toFixed(3), ny.toFixed(3)]);
    setMenuCoords({ x, y });
    setDropdownDisplay(true);
  }

  async function checkCoords(id) {
    if (!playerChoiceCoords) return;

    const itemF = level.items.find((it) => it.id === id);
    if (!itemF) return;

    if (
      Math.abs(itemF.coords[0] - playerChoiceCoords[0]) <= 0.04 &&
      Math.abs(itemF.coords[1] - playerChoiceCoords[1]) <= 0.04
    ) {
      if (hits.includes(itemF.id)) {
        setNotificationDetails({
          message: "Already been found!",
          isFound: false,
        });
        setNotification(true);
      } else {
        setNotificationDetails({
          message: "¡That's correct!",
          isFound: true,
        });
        setNotification(true);
        setLevels((prev) =>
          prev.map((l) => ({
            ...l,
            items: l.items
              ? l.items.map((it) =>
                  it.id === itemF.id ? { ...it, active: !it.active } : it
                )
              : l.items,
          }))
        );
        setLevelSelected((l) => ({
          ...l,
          items: l.items
            ? l.items.map((it) =>
                it.id === itemF.id ? { ...it, active: !it.active } : it
              )
            : l.items,
        }));
        setHits((p) => [...p, itemF.id]);
      }
    } else {
      setNotificationDetails({ message: "Try again", isFound: false });
      setNotification(true);
    }
  }

  useEffect(() => {
    if (hits.length === 3) {
      setGameoverModalDisplay(true);
    }
  }, [hits]);

  useEffect(() => {
    setLevels((prev) =>
      prev.map((l) => ({
        ...l,
        items: l.items
          ? l.items.map((it) => ({ ...it, active: true }))
          : l.items,
      }))
    );
    setLevelSelected((l) => ({
      ...l,
      items: l.items ? l.items.map((it) => ({ ...it, active: true })) : l.items,
    }));
  }, [setLevels, setLevelSelected]);

  return (
    <div className="mainContainer flex flex-col items-center py-8 gap-6 mb-8 relative">
      <div
        className="imgContainer w-[90%]"
        onPointerDown={handlePointerDown}
        ref={divRef}
      >
        <img src={level.img} />
      </div>
      {dropdownDisplay && (
        <div
          className="dropdown absolute"
          style={{ left: menuCoords.x, top: menuCoords.y }}
        >
          <Dropdown
            level={level}
            closeDropdown={() => setDropdownDisplay(false)}
            checkCoords={(id) => checkCoords(id)}
          ></Dropdown>
        </div>
      )}
      {notification && (
        <Notification
          setNotification={setNotification}
          notificationDetails={notificationDetails}
        ></Notification>
      )}
      {gameoverModalDisplay && (
        <div className="gameOverDiv fixed inset-0 bg-[#00000074] flex items-center justify-center">
          <Modal></Modal>
        </div>
      )}
    </div>
  );
}
