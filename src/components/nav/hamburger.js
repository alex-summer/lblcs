import "./hamburger.css";

const Hamburger = ({ className, onClick, status }) => {
  return (
    <div className={className}>
      <input type="checkbox" id="toggle" checked={status} onChange={onClick} />
      <label id="hamburger" htmlFor="toggle">
        <div className="hamburger">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </div>
  );
};

export default Hamburger;
