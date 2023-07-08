import clsx from "clsx";
import "./style.scss";
import { Link } from "react-router-dom";

const LeftMenu = (props) => {
  const { data } = props;

  return (
    <div className="left-menu">
      {data.map((_, i) => (
        <Link to={_.key} key={i}>
          <div className={clsx("item")}>{_.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default LeftMenu;
