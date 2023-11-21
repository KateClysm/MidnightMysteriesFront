import React from "react";
import '../button-help/button-help.css'
import HelpPage from "../../pages/help-page/HelpPage";

const ButtonHelp: React.FC = () => {
    return(
        <button className="button-help">
            ?<HelpPage/>
        </button>
    );
};

export default ButtonHelp;