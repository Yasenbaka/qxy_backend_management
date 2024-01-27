import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Department from "../pages/Department";
import Management from "../pages/Management";
import Interface from "../pages/Management/Interface";
import Commodity from "../pages/Management/Commodity";
import Indent from "../pages/Management/Indent";
import User from "../pages/Management/User";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
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
                element: <Interface/>
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