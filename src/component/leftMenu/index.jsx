import clsx from "clsx";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";

const LeftMenu = (props) => {
  const { data } = props;

  const { pathname } = useLocation();
  console.log(location);

  return (
    <div className="left-menu">
      {data.map((_, i) => (
        <Link to={_.key} key={i}>
          <div className={clsx("item", pathname === _.key && "active")}>
            {_.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LeftMenu;
