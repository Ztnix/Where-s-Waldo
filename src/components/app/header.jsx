import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center py-8 px-12 bg-[#162942] text-white border-b border-gray-600">
      <div className="w-3/4 flex justify-between text-[1.2rem]">
        <div className="headerLogo">LOGO HERE</div>
        <div className="flex">
          <div className="flex gap-4 px-6 border-r border-gray-600 ">
            <button className="headerOption" onClick={() => navigate("/")}>
              Homepage
            </button>
          </div>
          <div className="flex gap-4 px-6 items-center">
            <div>Welcome, find waldo!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
