import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between mt-1">
      <ul className="flex gap-[324px]">
        <li>2023 / @ MUSTAFA MENGÜTAY</li>
        <li>
          <div className="flex gap-[300px]">
            <li>CYPRUS</li>
            <li>09:23</li>
          </div>
        </li>
      </ul>
      <ul className="flex gap-[30px]">
        <li>ABOUT</li>
        <li>WORK</li>
        <li>BOOKMARKS</li>
      </ul>
    </div>
  );
};

export default Header;
