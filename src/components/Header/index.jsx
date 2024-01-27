import qxyLogo1350 from "../../assets/qxy_logo1350.png";
import "./index.css"


function Header() {
    return (
        <header className={"main-header"}>
            <img className={"main-header-logo"} alt="qxy_logo1350.png" src={qxyLogo1350}/>
            <div className={"main-header-menu-box"}>
                <ul className={"main-header-menu"}>
                    <li className={"main-header-menu-item"}>
                        <a rel="noreferrer" href={"/"} target={"_self"}>返回主页</a></li>
                    <li className={"main-header-menu-item"}>
                        <a rel="noreferrer" href={"/management/interface"} target={"_self"}>界面管理</a></li>
                    <li className={"main-header-menu-item"}>
                        <a rel="noreferrer" href={"/management/commodity"} target={"_self"}>商品管理</a></li>
                    <li className={"main-header-menu-item"}>
                        <a rel="noreferrer" href={"/management/indent"} target={"_self"}>订单管理</a></li>
                    <li className={"main-header-menu-item"}>
                        <a rel="noreferrer" href={"/management/user"} target={"_self"}>用户管理</a></li>
                    <li className={"main-header-menu-item"}>
                        <a rel="noreferrer" href={"/management/commodity"} target={"_self"}>公司管理</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;