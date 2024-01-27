import React from "react";
import "./index.css";

function Login() {
    return (
        <div className={"login-container"}>
            <div className={"login-box"}>
                <h2 className={"login-title"}>登入系统</h2>
                <input className={"login-input-line"} type={"text"} id={"qq-userid"} placeholder={"请输入学号或秦小油工号"}/>
                <input className={"login-input-line"} type={"password"} id={"group-userid"} placeholder={"请输入密码"}/>
                <button id={"login-button"}>提交</button>
            </div>
        </div>
    )
}

export default Login;