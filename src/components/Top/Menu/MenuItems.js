import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const MenuItems = ({items}) => (
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ms-auto">
        {
          items.map((item) => <MenuItem key={item.id} item={item}/>)
      }
    </ul>
  </div>
);


export default MenuItems;

// Para obligar pasar el argumento para la función
MenuItems.propTypes = {
    items: PropTypes.array.isRequired,
};