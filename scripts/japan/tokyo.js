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

export const getJLandmarks = () => {
    return database.landmarks.map(copyOfSingleJLandmarksObject => ({...copyOfSingleJLandmarksObject}))
}

export const getJCitizens = () => {
    return database.citizens.map(copyOfSingleJCitizensObject => ({...copyOfSingleJCitizensObject}))
}