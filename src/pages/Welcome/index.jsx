import schoolLogoBg from "../../assets/school_logo_bg.png";
import "./index.css"
import "./select_banners.css"


export default function Welcome(){
return (
    <div className={"welcome-container-box"}>
        <img className={"main-school-logo-bg"} alt={"school_logo_bg.png"} src={schoolLogoBg}/>
        <h1>欢迎访问秦小油后台管理系统</h1>
        <h2>使用功能前请先登入系统</h2>
        <h2>请选择你的工作</h2>
        <hr/>
        <ul className={"welcome-select-banner-menu"}>
            <li>
                <a href={"/login"}>
                    <div id={"login-banner"}>登入系统</div>
                </a>
            </li>
            <li>
                <a href={"/department"}>
                    <div id={"milestone-banner"}>技术部</div>
                </a>
            </li>
            <li id={"select-banner-last"}>
                <a href={"/recruit"}>
                    <div id={"recruit-banner"}>加入技术部</div>
                </a>
            </li>
        </ul>
    </div>
)
}