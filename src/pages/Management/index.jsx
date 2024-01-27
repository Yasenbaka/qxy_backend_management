import {Outlet} from "react-router-dom";

function Management(){
    return (
        <div>
            <h1>请在上方导航选择你的工作内容！</h1>
            <Outlet/>
        </div>
    )
}
export default Management;