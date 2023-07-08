let LeftMenu = (props) => {
  const { data } = props;
  return (
    <div className="left-menu">
      {data.map((_, i) => (
        <div key={i}>{_.name}</div>
      ))}
    </div>
  );
};

export default LeftMenu;
