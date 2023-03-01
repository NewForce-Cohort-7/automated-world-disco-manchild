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

export const getALandmarks = () => {
    return database.landmarks.map(copyOfSingleALandmarksObject => ({...copyOfSingleALandmarksObject}))
}

export const getACitizens = () => {
    return database.citizens.map(copyOfSingleACitizensObject => ({...copyOfSingleACitizensObject}))
}