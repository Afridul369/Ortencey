import React from "react";
import Flex from "./Flex";
import { BsChevronDown } from "react-icons/bs";

const Menu = ({ className, menuname, icon }) => {
  return (
    <>
      <Flex className={"group gap-x-1"}>
        <div
          className={`group-hover:text-Menutxt text-Black01 duration-500 text-base  font-Poppins border-b${className}`}
        >
          {menuname}
        </div>
        <BsChevronDown className="mt-2 group-hover:text-Menutxt duration-500" />
      </Flex>
    </>
  );
};

export default Menu;
