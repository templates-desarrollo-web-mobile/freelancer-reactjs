import PropTypes from "prop-types";

const MenuItem = ({ item }) => (
  <li className="nav-item mx-0 mx-lg-1">
    <a className="nav-link py-3 px-0 px-lg-3 rounded" href={"#".concat(item.id)}>
      {item.title}
    </a>
  </li>
);

export default MenuItem;

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
};