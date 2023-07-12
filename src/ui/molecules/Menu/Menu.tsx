import { Paths } from '@consts/router.paths';
import { NavLink } from "@ui/atoms/NavLink";

export const Menu = () => {
  return (
    <ul className="flex">
      <li className="mr-3">
        <NavLink to={Paths.HOME}>Home</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={Paths.LOGIN}>Login</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={Paths.PRODUCTS}>Products</NavLink>
      </li>
    </ul>
  );
}