const database = {
    landmarks:[
        {
        name:"",
        location:"",
        description:"",
        image:""
        },
        {
        name:"",
        location:"",
        description:"",
        image:""
        },
        {
        name:"",
        location:"",
        description:"",
        image:""
        },
        {
        name:"",
        location:"",
        description:"",
        image:""
        },
        {
        name:"",
        location:"",
        description:"",
        image:""
        },
    ],
    citizens: [
        {
        name:"",
        bday:"",
        known:"",
        image:""
        },
        {
        name:"",
        bday:"",
        known:"",
        image:""
        },
        {
        name:"",
        bday:"",
        known:"",
        image:""
        }
    ]
}

export const getSLandmarks = () => {
    return database.landmarks.map(copyOfSingleSLandmarksObject => ({...copyOfSingleSLandmarksObject}))
}

export const getSCitizens = () => {
    return database.citizens.map(copyOfSingleSCitizensObject => ({...copyOfSingleSCitizensObject}))
}