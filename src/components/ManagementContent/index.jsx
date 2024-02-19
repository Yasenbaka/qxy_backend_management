import "./index.css";
import {Outlet} from "react-router-dom";

function ManagementContent() {
    return (
        <div className={"management_content_box"}>
            <Outlet/>
        </div>
    )
}

export default ManagementContent;