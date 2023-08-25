import requests from "../request.js";

const getProjectInfo = (pageSize = 9999, currentPage = 1) => {
    return requests.get('/getProjectInfo', {
        params: {
            pageSize,
            currentPage
        }
    }
    )
}

function getProjectInfoByCond(pageSize = 9999, currentPage = 1, projectName, projectAddress){
    return requests.get("/getProjectInfoByParam", {
        params:{
            pageSize,
            currentPage,
            projectName,
            projectAddress
        }
    })
}

const getProjectOnLineInfo = () => {
    return requests.get('/getProjectOnLineInfo', {

    }
    )
}

export { getProjectInfo, getProjectOnLineInfo, getProjectInfoByCond }