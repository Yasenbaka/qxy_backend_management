import Management from "../pages/Management";
import Home from "../components/ManagementContent/Page/Home";
import Notice from "../components/ManagementContent/Page/Notice";
import Picture from "../components/ManagementContent/Page/Picture";
import Page from "../components/ManagementContent/Page";
import {createHashRouter, Navigate} from "react-router-dom";
import Commodity from "../components/ManagementContent/Commodity";
import Update from "../components/ManagementContent/Commodity/Update";
import Change from "../components/ManagementContent/Commodity/Change";
import Release from "../components/ManagementContent/Commodity/Update/Release";

const routesList = createHashRouter(
    [
        {
            path: "/",
            element: <Management/>
        },
        {
            path: "management/*",
            element: <Management/>,
            children: [
                {
                    path: "page/*",
                    element: <Page/>,
                    children: [
                        {
                            path: "home",
                            element: <Home/>
                        },
                        {
                            path: "notice",
                            element: <Notice/>
                        },
                        {
                            path: "picture",
                            element: <Picture/>
                        },
                        {
                            path: "",
                            element: <Navigate to={"home"}/>
                        }
                    ]
                },
                {
                    path: "commodity/*",
                    element: <Commodity/>,
                    children: [
                        {
                            path: "update",
                            element: <Update/>,
                            children: [
                                {
                                    path: "release",
                                    element: <Release/>
                                },
                                {
                                    path: "",
                                    element: <Navigate to={"release"}/>
                                }
                            ]
                        },
                        {
                            path: "change",
                            element: <Change/>
                        },
                        {
                            path: "",
                            element: <Navigate to={"update"}/>
                        }
                    ]
                }
            ]
        }
    ]
)
export default routesList;