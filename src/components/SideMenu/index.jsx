import "./index.css";
import getRouteName from "../../hooks/getRouteName";
import {
    AuditOutlined,
    HomeOutlined,
    LoginOutlined,
    LogoutOutlined,
    MutedOutlined, PaperClipOutlined,
    PictureOutlined,
    PropertySafetyOutlined, TeamOutlined, UsergroupAddOutlined, UserOutlined
} from "@ant-design/icons";


function SideMenu () {

    return (
        <div className={"side_menu_box"}>
            <ul>
                <li className={"side_menu_title"}>页面</li>
                <li className={"side_menu_item"}><a href={getRouteName(1, 'home')}><HomeOutlined className={"side_menu_item_icon"} />主页管理</a></li>
                <li className={"side_menu_item"}><a href={getRouteName(1, 'notice')}><MutedOutlined className={"side_menu_item_icon"} />公告管理</a></li>
                <li className={"side_menu_item"}><a href={getRouteName(1, 'picture')}><PictureOutlined className={"side_menu_item_icon"} />图片管理</a></li>
                <li className={"side_menu_title"}>商品</li>
                <li className={"side_menu_item"}><a href={getRouteName(2, 'update/release')}><LoginOutlined className={"side_menu_item_icon"} />商品发布与内容管理</a></li>
                <li className={"side_menu_item"}><a href={getRouteName(2, 'change')}><LogoutOutlined className={"side_menu_item_icon"} />商品库存与撤销管理</a></li>
                <li className={"side_menu_title"}>用户</li>
                <li className={"side_menu_item"}><a href={"/"}><PropertySafetyOutlined className={"side_menu_item_icon"} />订单管理</a></li>
                <li className={"side_menu_item"}><a href={"/"}><TeamOutlined className={"side_menu_item_icon"} />用户管理</a></li>
                <li className={"side_menu_item"}><a href={"/"}><UsergroupAddOutlined className={"side_menu_item_icon"} />会员管理</a></li>
                <li className={"side_menu_title"}>公司</li>
                <li className={"side_menu_item"}><a href={"/"}><UserOutlined className={"side_menu_item_icon"} />员工账户</a></li>
                <li className={"side_menu_item"}><a href={"/"}><PaperClipOutlined className={"side_menu_item_icon"} />岗位管理</a></li>
                <li className={"side_menu_item"}><a href={"/"}><AuditOutlined className={"side_menu_item_icon"} />招生就业</a></li>
            </ul>
        </div>
    );
}

export default SideMenu;