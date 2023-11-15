import { Outlet } from "react-router-dom";
import './layout-landing.scss';

const LayoutLanding = () => {
    return (
        <div className="container-landing">
            <Outlet />
        </div>
      );
};

export default LayoutLanding;