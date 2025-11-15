export default function Dropdown({ level, closeDropdown, checkCoords }) {
  return (
    <div className=" w-[170px] h-fit flex flex-col divide-y divide-black bg-[#94bbee] rounded-lg">
      {level.items.map(
        (item, i) =>
          item.active && (
            <div
              className="ddItem w-[full] flex p-2 gap-2 hover:bg-blue-200 hover:rounded-lg cursor-pointer"
              onClick={() => {
                closeDropdown();
                checkCoords(item.id);
              }}
              key={i}
            >
              <img
                src={item.img}
                className=" max-w-14 aspect-square border rounded-lg bg-white"
              />
              <div className="flex flex-1 items-center justify-center text-center">
                {item.name}
              </div>
            </div>
          )
      )}
    </div>
  );
}
