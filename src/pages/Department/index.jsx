import "./index.css"

const employeesNumber = 4;
const employeesNumberFrontend = 2;
const employeesNumberBackend = 2;
const employeesNumberFullStack = 0;

export default function Department(){
    return (
        <div className={"department-container-box"}>
            <h1>计算机技术开发部 简称技术部：</h1>
            <h2>部门结构介绍：</h2>
            <h3>该部人员共{employeesNumber}人，其中前端{employeesNumberFrontend}人，后端{employeesNumberBackend}人{employeesNumberFullStack !== 0? `，全栈${employeesNumberFullStack}人`: ""}；</h3>
            <h2>技术介绍：</h2>
            <h3>页面开发技术栈：微信小程序、VUE、React，后端开发技术栈：FastAPI、Django、MySQL；</h3>
            <h2>部员工作：</h2>
            <h3>王禹尧[男 227003130221]（前端在职2024-）：运营团队队长，前端微信小程序开发，对接设计组；</h3>
            <h3>张玺龙[男 237003420433]（后端在职2024-）：技术部项目经理，前端后台管理系统开发，后端开发，协调接口通信与协议，记录分离开发约定；</h3>
            <h3>韩乃彬[男 227003130224]（前端在职2024-）：前端工程师，前端微信小程序开发，协调通信加密方式，协调网络安全；</h3>
            <h3>林杨[女 237003230106]（后端在职2024-）：后端工程师，后端与后台维护，辅助记录分离开发约定，记录数据结构；</h3>
            <h2>部门计划：</h2>
            <h3>前端：正在建设小程序中！</h3>
            <h3>后端：Django接口技术准备就绪，未来将会转变成JavaWeb SpringMVC技术！</h3>
            <h3>后台：正在建设后台中！</h3>
        </div>
    )
}