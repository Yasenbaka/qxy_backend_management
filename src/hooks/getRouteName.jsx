const getRouteName = (subRoute, pageName) => {
    const mainRoute = "/management/";
    let handleRoute;
    switch (subRoute){
        case 1: {
            handleRoute = `${mainRoute}page/${pageName}`;
            break;
        }
        case 2: {
            handleRoute = `${mainRoute}commodity/${pageName}`;
            break;
        }
        case 3: {
            handleRoute = `${mainRoute}user/${pageName}`;
            break;
        }
        case 4: {
            handleRoute = `${mainRoute}company/${pageName}`;
            break;
        }
        default: {
            handleRoute = `${mainRoute}`;
            break;
        }
    }
    return handleRoute;
}

export default getRouteName;