import {Link, NavLink, Outlet} from "react-router-dom";


function Interface(){
    return (
        <div>
            <div className={"interface-side-menu"}>
                <NavLink to={'/management/interface/home'}>主页</NavLink>
                <Link to={'/management/interface/commodity_list'}>商品列表</Link>
            </div>
            <Outlet/>
        </div>
    )
}
export default Interface;