import "./index.css";
import {CloudServerOutlined, ToolOutlined} from "@ant-design/icons";
import {Outlet} from "react-router-dom";
import getRouteName from "../../../../hooks/getRouteName";

function Update() {
    return (
        <div className={"commodity_update_container_box"}>
            <header className={"submenu_box"}>
                <ul>
                    <li><a href={getRouteName(2, "update/release")}><CloudServerOutlined />商品发布</a></li>
                    <li><a href={getRouteName(2, "update/substance")}><ToolOutlined />内容修改</a></li>
                </ul>
            </header>
            <hr/>
            <Outlet/>
        </div>
    )
}

export default Update;