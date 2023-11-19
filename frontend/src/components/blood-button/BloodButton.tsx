import { NavLink } from 'react-router-dom';
import './blood-button.scss';

const BloodButton = ({ route, buttonName }: { route: string; buttonName: string }) => {
  return (
    <NavLink to={route} className="blood-btn">
      {buttonName}
    </NavLink>
  );
};

export default BloodButton;