import requests from "../request.js";

const getVirDevInfo = (projectID) => {
    return requests.get('/getVirDevInfo', {
        params: {
            projectID
        }
    }
    )
}

const getVirDevParamHisInfo = (projectID, virDevID, virParamSeq, startTime, endTime, diffTime) => {
    return requests.get('/getVirDevParamHisInfo', {
        params: {
            projectID,
            virDevID,
            virParamSeq,
            startTime,
            endTime,
            diffTime
        }
    }
    )
}

const ctrlVirDevParamValue = (projectID, virDevId, virParamSeq, virParamValue) => {
    return requests.get('/ctrlVirDevParamValue', {
        params: {
            projectID,
            virDevId,
            virParamSeq,
            virParamValue,
        }
    }
    )
}

export { getVirDevInfo, getVirDevParamHisInfo, ctrlVirDevParamValue }