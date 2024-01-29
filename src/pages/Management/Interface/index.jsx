import {NavLink, Outlet} from "react-router-dom";
import "./index.css"


function Interface(){
    return (
        <div className={"interface-box"}>
            <h2>界面管理：</h2>
            <hr/>
            <div className={"interface-side-menu-box"}>
                <ul className={"interface-side-menu"}>
                    <li><NavLink to={'/management/interface/home'}>主页</NavLink></li>
                    <li><NavLink to={'/management/interface/notice'}>公告</NavLink></li>
                    <li><NavLink to={'/management/interface/new_commodity'}>新品推荐</NavLink></li>
                    <li><NavLink to={'/management/interface/notice'}>礼品推荐</NavLink></li>
                </ul>
            </div>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default Interface;