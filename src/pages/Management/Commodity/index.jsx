import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Commodity(){
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkCookie = () => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie === 'cookie_name') {
                // Cookie存在，不进行跳转
                return true;
            }
        }
        // Cookie不存在，进行跳转
        navigate('/login');
        return false;
    }
    useEffect(() => {
        checkCookie();
    }, [checkCookie]);
    return (
        <div>
            <h2>Commodity Management</h2>
        </div>
    )
}
export default Commodity;