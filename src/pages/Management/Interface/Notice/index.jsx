import "./index.css"

const originNotice = "阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉" +
    "阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉" +
    "阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉" +
    "阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉" +
    "阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉" +
    "阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉" +
    "阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉" +
    "阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉阿拉" +
    "阿拉阿拉阿拉阿拉阿拉阿拉阿拉";

export default function Notice(){
    return (
        <div className={"interface-notice-box"}>
            <h3>公告管理</h3>
            <div>
                <h4>原公告内容</h4>
                <div id={"interface-notice-origin-content"}>
                    {originNotice}
                </div>
            </div>
            <div id={"interface-notice-new-box"}>
                <h4>新公告内容</h4>
                <textarea id={"interface-notice-new-input"} type={"text"} placeholder={"输入新公告的内容"}/>
                <button>提交</button>
            </div>
        </div>
    )
}