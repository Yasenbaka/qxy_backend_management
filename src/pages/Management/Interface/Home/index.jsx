import "./index.css"

export default function Home(){
    return (
        <div className={"interface-home-box"}>
            <div className={"interface-home-banner-box"}>
                <h4>主页Banner图</h4>
                <button>选择图片</button>
                <button>确定上传</button>
                <div id={"interface-home-banner-img"}/>
            </div>
            <hr/>
            <div className={"interface-home-color-box"}>
                <h4>全局色调</h4>
                <div id={"interface-home-color-main"}>
                    主色调
                    <div style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#afced8"
                    }}/>
                    <form>
                        <input placeholder={"颜色的16进制"}/>
                        <button>提交</button>
                    </form>
                </div>
                <div id={"interface-home-color-sub"}>
                    副色调
                    <div style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#9ba5fa"
                    }}/>
                    <form>
                        <input placeholder={"颜色的16进制"}/>
                        <button>提交</button>
                    </form>
                </div>
                <div id={"interface-home-color-middle"}>
                    中和色调
                    <div style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#82989f"
                    }}/>
                    <form>
                        <input placeholder={"颜色的16进制"}/>
                        <button>提交</button>
                    </form>
                </div>
            </div>
        </div>
    )
}