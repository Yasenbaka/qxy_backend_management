import "./index.css"

export default function Footer(){
    return (
        <footer id={"footer-box"}>
            <div>秦小油：东北石油大学 秦皇岛校区文创品牌！</div>
            <div>Copyright ©2024-2025 by 秦小油® All Rights Reserved.</div>
            <a target={"_blank"} href={"https://beian.miit.gov.cn/"} className={"app-footer-text"} rel="noreferrer">
                某ICP备xxxxxxxxxx-x号
            </a>
        </footer>
    )
}