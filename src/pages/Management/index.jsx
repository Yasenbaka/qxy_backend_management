import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideMenu from "../../components/SideMenu";
import "./index.css";
import ManagementContent from "../../components/ManagementContent";

function Management(){
    return (
        <>
            <Header/>
            <div className={"management_container_box"}>
                <SideMenu/>
                <ManagementContent/>
            </div>
            <Footer/>
        </>
    );
}

export default Management;