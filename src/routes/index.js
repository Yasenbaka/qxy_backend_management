import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Department from "../pages/Department";
import Management from "../pages/Management";
import Interface from "../pages/Management/Interface";
import Commodity from "../pages/Management/Commodity";
import Indent from "../pages/Management/Indent";
import User from "../pages/Management/User";
import Home from "../pages/Management/Interface/Home";
import {Navigate} from "react-router-dom";
import Notice from "../pages/Management/Interface/Notice";
import NewCommodity from "../pages/Management/Interface/NewCommodity";

const routesList = [
    {
        path: "/",
        element: <Welcome/>,
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/department",
        element: <Department/>
    },
    {
        path: "/recruit",
        element: <Management/>
    },
    {
        path: "/management/*",
        element: <Management/>,
        children: [
            {
                path: "interface",
                element: <Interface/>,
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
                        path: "new_commodity",
                        element: <NewCommodity/>
                    },
                    {
                        path: "",
                        element: <Navigate to={"home"}/>
                    }
                ]
            },
            {
                path: "commodity",
                element: <Commodity/>
            },
            {
                path: "indent",
                element: <Indent/>
            },
            {
                path: "user",
                element: <User/>
            }
        ]
    }
]
export default routesList;