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

export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleLandmarksObject => ({...copyOfSingleLandmarksObject}))
}

export const getCitizens = () => {
    return database.citizens.map(copyOfSingleCitizensObject => ({...copyOfSingleCitizensObject}))
}