import qxyLogo1350 from "../../assets/qxy_logo1350.png";
import "./index.css"
import {Button, Tooltip} from "antd";
import {BarsOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import avatar from "../../assets/avatar.jpg";

const onSearch = (value, _e, info) => console.log(info?.source, value);

function Header() {
    return (
        <header className={"main_header"}>
            <Tooltip title="菜单">
                <Button className={"main_header_item"} style={{marginLeft: "20px"}} shape="circle" size={"large"} icon={
                    <BarsOutlined/>}/>
            </Tooltip>
            <img className={"main_header_logo main_header_item"} alt="qxy_logo1350.png" src={qxyLogo1350}/>
            <Search
                className={"main_header_item"}
                placeholder="input search text"
                onSearch={onSearch}
                style={{width: 300}}/>
            <a href={"/"} style={{position: "relative"}}>
                <img className={"main_header_item"} alt={"avatar"} src={avatar} style={{
                    borderRadius: "50%",
                    width: 40
                }}/>
            </a>
        </header>
    )
}

export default Header;