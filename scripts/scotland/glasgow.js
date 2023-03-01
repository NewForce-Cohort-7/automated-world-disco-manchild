const database = {
    landmarks:[
        {
        name:"The Necropolis",
        location:"50 Cathedral Square, Glasgow G4 0UZ Scotland",
        description:"The Glasgow Necropolis is a Victorian cemetery that offers incredible architecture, stunning sculptures and fascinating stories. It's estimated that around 50,000 burials have taken place in the 37-acre cemetery. When the Necropolis was first designed, it was supposed to have catacombs running deep into the hillside overlooking Glasgow. At the time, designers felt this was necessary because grave robbers would frequently exhume bodies and sell them to anatomists.",
        image:"https://www.encirclephotos.com/wp-content/uploads/Scotland-Glasgow-Glasgow-Necropolis-Entrance-1440x968.jpg"
        },
        {
        name:"Glasgow Cathedral",
        location:"Castle St, Glasgow G4 0QZ, UK",
        description:"Located across the street from the Glasgow Necropolis, the Glasgow Cathedral is a grand medieval cathedral that's not only the oldest cathedral on mainland Scotland but also the oldest building in Glasgow. The cathedral was built between the 13th and 15th centuries on the site where it's believed Saint Kentigern was buried in A.D. 612. It's a breathtaking example of Scottish Gothic architecture.",
        image:"”https://www.whatsonnetwork.co.uk/uploads/800x600/dd19ca45292f25b32c31ac7327f4725a.jpg"
        },
        {
        name:"Glasgow City Chambers",
        location:"City Chambers, George Square, Glasgow, Strathclyde, G2 1DU",
        description:"Glasgow City Chambers is a municipal building that has functioned as the headquarters of the Glasgow City Council since 1996. The building was constructed between 1882 and 1888 and is a fine example of Victorian civic architecture. If you're interested in learning more about some of the fascinating stories about the building's construction and history, public tours are available Monday through Friday at 10:30 a.m. and 2:30 p.m.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Glasgow_City_Chambers_Exterior.jpg/1280px-Glasgow_City_Chambers_Exterior.jpg"
        },
        {
        name:"Duke of Wellington Statue",
        location:"16 Royal Exchange Square, Glasgow G1 3AG, United Kingdom",
        description:"Glaswegians have a unique sense of humor, and nowhere else is this more apparent than at the Duke of Wellington statue. The statue was erected in 1844 to honor Arthur Wellesley, First Duke of Wellington, who is best known for defeating Napoleon at the Battle of Waterloo. For around 140 years, the statue stood without much interest. However, in the early 1980s, an orange traffic cone mysteriously appeared on the Duke's head one night. While no one knows exactly why the cone first appeared, most believe it was the result of a drunken dare between college students.",
        image:"https://www.tracesofwar.com/upload/5401171122173718.jpg"
        },
        {
        name:"The River Clyde",
        location:"City Center",
        description:"The River Clyde is the second-longest river in Scotland and cuts right through the heart of the city. It played a major role in shipbuilding and the Industrial Revolution in Glasgow. At one time, the banks of the Clyde were lined with shipyards and factories. When the shipbuilding industry started to decline in Glasgow, many buildings were abandoned. However, the city now has renewed interest in the waterway thanks to the Clyde Waterfront Regeneration project. Nearly 13 miles of the waterfront has been redeveloped to house museums, hotels, residential areas, a business district and more. If you want to explore some of the most popular attractions and uncover the history of the river, spend some time strolling down the river's walkways.",
        image:"https://cdn.pixabay.com/photo/2023/01/19/00/35/glasgow-7728118_960_720.jpg"
        },
    ],
    citizens: [
        {
        name:"Lewis Capaldi",
        bday:"10.07.96-Living",
        known:" Scottish singer-songwriter and musician. He was nominated for the Critics' Choice Award at the 2019 Brit Awards",
        image:"https://substreammagazine.com/wp-content/uploads/2019/02/unnamed-8.png"
        },
        {
        name:"Sir Alex Ferguson",
        bday:"12.31.41-Living",
        known:"Scottish former football manager and player, best known for managing Manchester United from 1986 to 2013. He is widely regarded as one of the greatest managers of all time and has won more trophies than any other manager in the history of football.",
        image:"https://resources.premierleague.com/premierleague/photos/players/250x250/man58.png"
        },
        {
        name:"Charles Rennie Mackintosh",
        bday:"06.07.1868-Deceased",
        known:"Scottish architect, designer, water colourist and artist. His artistic approach had much in common with European Symbolism.",
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