import { NavLink, Outlet, useLocation } from "react-router";
import "./data.css";

export default function DataLayout() {
  const location = useLocation();
  return (
    <>
      <div>
        <h1>This is header</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/data/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/data/sellers">Sellers</NavLink>
          </li>
          <li>
            <NavLink to="/data/customers">Customers</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <p>This is footer</p>
        <p>
          {location.pathname} {location.search} {location.hash}
        </p>
      </div>
    </>
  );
}
