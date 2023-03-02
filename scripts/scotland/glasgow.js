const database = {
    landmarks:[
        {
        name:"The Necropolis",
        location:"50 Cathedral Square, Glasgow G4 0UZ Scotland",
        description:"The Glasgow Necropolis is a Victorian cemetery.",
        image:"https://www.encirclephotos.com/wp-content/uploads/Scotland-Glasgow-Glasgow-Necropolis-Entrance-1440x968.jpg"
        },
        {
        name:"Glasgow Cathedral",
        location:"Castle St, Glasgow G4 0QZ, UK",
        description:"The Glasgow Cathedral is a medieval cathedral that is the oldest cathedral on mainland Scotland and the oldest building in Glasgow.",
        image:"”https://www.whatsonnetwork.co.uk/uploads/800x600/dd19ca45292f25b32c31ac7327f4725a.jpg"
        },
        {
        name:"Glasgow City Chambers",
        location:"City Chambers, George Square, Glasgow, Strathclyde, G2 1DU",
        description:"Glasgow City Chambers is a municipal building that has functioned as the headquarters of the Glasgow City Council since 1996.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Glasgow_City_Chambers_Exterior.jpg/1280px-Glasgow_City_Chambers_Exterior.jpg"
        },
        {
        name:"Duke of Wellington Statue",
        location:"16 Royal Exchange Square, Glasgow G1 3AG, United Kingdom",
        description:" The statue was erected in 1844 to honor Arthur Wellesley, First Duke of Wellington.",
        image:"https://www.tracesofwar.com/upload/5401171122173718.jpg"
        },
        {
        name:"The River Clyde",
        location:"City Center",
        description:"The River Clyde is the second-longest river in Scotland and cuts right through the heart of the city.",
        image:"https://cdn.pixabay.com/photo/2023/01/19/00/35/glasgow-7728118_960_720.jpg"
        },
    ],
    citizens: [
        {
        name:"Lewis Capaldi",
        bday:"10.07.96-Living",
        known:" Scottish singer-songwriter and musician.",
        image:"https://substreammagazine.com/wp-content/uploads/2019/02/unnamed-8.png"
        },
        {
        name:"Sir Alex Ferguson",
        bday:"12.31.41-Living",
        known:"Scottish former football manager and player.",
        image:"https://resources.premierleague.com/premierleague/photos/players/250x250/man58.png"
        },
        {
        name:"Charles Rennie Mackintosh",
        bday:"06.07.1868-Deceased",
        known:"Scottish architect, designer, water colourist and artist. ",
        image:"https://uploads8.wikiart.org/images/charles-rennie-mackintosh.jpg!Portrait.jpg"
        }
    ]
}

export const getSLandmarks = () => {
    return database.landmarks.map(copyOfSingleSLandmarksObject => ({...copyOfSingleSLandmarksObject}))
}

export const getSCitizens = () => {
    return database.citizens.map(copyOfSingleSCitizensObject => ({...copyOfSingleSCitizensObject}))
}