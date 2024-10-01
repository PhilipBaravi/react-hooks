import { FC, memo } from "react";

type NavItemProps = {
  navItem: string;
};

const NavItem: FC<NavItemProps> = ({ navItem }) => {
  return (
    <span className="text-darkBlack font-[350] leading-normal text-[1.2rem] w-[70%] hover:bg-lightGray cursor-pointer">
      {navItem}
    </span>
  );
};

export default memo(NavItem);
