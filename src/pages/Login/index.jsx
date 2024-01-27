import React, {useEffect, useState} from "react";
import "./index.css";
import axios from "axios";


function Login() {
    let [isCookieLogin, setCookieState] = useState(false);
    const checkCookie = () => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split('=')[0].trim();
            if (cookie === 'login') setCookieState(true);// Cookie存在
        }
    }
    useEffect(() => {
        checkCookie();
    });
    const loginButtonClicked = () => {
        axios.get('http://localhost:8000/tologin')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('请求失败:', error);
            });
    }
    const notLogin = <div className={"login-container"}>
        <div className={"login-box"}>
            <h2 className={"login-title"}>登入系统</h2>
            <input className={"login-input-line"} type={"text"} id={"qq-userid"} placeholder={"请输入学号或秦小油工号"}/>
            <input className={"login-input-line"} type={"password"} id={"group-userid"} placeholder={"请输入密码"}/>
            <button onClick={loginButtonClicked} id={"login-button"}>提交</button>
        </div>
    </div>
    const logged = <div className={"login-container"}>
        <h2 className={"login-title"}>你已经登入系统了！请返回主页！</h2>
    </div>
    return (
        isCookieLogin? logged: notLogin
    )
}

export default Login;