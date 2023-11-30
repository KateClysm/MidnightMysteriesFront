import { NavLink } from 'react-router-dom';
import './blood-button.scss';

const BloodNavLink = ({ route, buttonName }: { route: string; buttonName: string }) => {
  return (
    <NavLink to={route} className="blood-btn">
      {buttonName}
    </NavLink>
  );
};

export default BloodNavLink;