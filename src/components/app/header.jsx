import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function Header() {
  const navigate = useNavigate();
  const { levelSelected } = useContext(GameContext);

  return (
    <div
      className={`flex justify-center  px-12 bg-[#162942] text-white border-b border-gray-600 ${
        levelSelected ? "sticky top-0 z-50 py-4" : "py-7"
      }`}
    >
      <div className="w-3/4 flex justify-between text-[1.2rem]">
        <div className="headerLogo flex items-center">Find me if you can!</div>
        <div className="timer"></div>
        <div className="waldossss flex">
          {levelSelected &&
            levelSelected.items.map((item, i) => (
              <div key={i} className={`ddItem w-[full] flex p-2 gap-2 `}>
                <img
                  src={item.img}
                  className={`max-w-10 aspect-square border rounded-lg bg-white ${
                    !item.active ? "opacity-70" : ""
                  }`}
                />
                <div
                  className={`flex flex-1 items-center justify-center text-center ${
                    !item.active ? "opacity-70 line-through" : ""
                  }`}
                >
                  {item.name}
                </div>
              </div>
            ))}
        </div>
        <div className="flex items-center">
          <button className="headerOption" onClick={() => navigate("/")}>
            Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
