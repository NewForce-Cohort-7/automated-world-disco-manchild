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

export const getBLandmarks = () => {
    return database.landmarks.map(copyOfSingleBLandmarksObject => ({...copyOfSingleBLandmarksObject}))
}

export const getBCitizens = () => {
    return database.citizens.map(copyOfSingleBCitizensObject => ({...copyOfSingleBCitizensObject}))
}