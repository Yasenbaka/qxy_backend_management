import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Management(){
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkCookie = () => {
        const cookies = document.cookie.split(';');
        let isCookieLogin = false;
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split('=')[0].trim();
            if (cookie === 'login') isCookieLogin = true;// Cookie存在，不进行跳转
        }
        if (!isCookieLogin) navigate('/login');// Cookie不存在，进行跳转
    }
    useEffect(() => {checkCookie();}, [checkCookie]);
    return (
        <div>
            <h1>控制台：{}</h1>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Management;