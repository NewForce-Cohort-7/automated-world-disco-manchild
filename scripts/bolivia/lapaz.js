const database = {
    landmarks:[
        {
        name:"Uyuni Salt Flats",
        location:"Daniel Campos Province",
        description:"World's largest salt flat ",
        image:"https://www.tripsavvy.com/thmb/MZvblZ5BMfSzHOhVUnR…es-465844068-8804586b15ba423395bae15f1d9dffa7.jpg "
        },
        {
        name:"Yungas Road 'Road of Death'",
        location:"Yungas Region",
        description:"Road linking La Paz and the Yungas region famous for its narrow single track, lack of guardrails, and steep slopes.",
        image:" https://trans-americas.com/wp-content/uploads/2017/11/78916.jpg"
        },
        {
        name:"Moon Valley",
        location:"La Paz",
        description:"Pedro Domingo Murillo Province",
        image:"https://www.boliviahop.com/wp-content/uploads/moon-valley-1.jpg"
        },
        {
        name:"Tiwanaku",
        location:"Western Bolivia near Lake Titicaca",
        description:"Pre-Columbian archaeological site",
        image:"https://historia.nationalgeographic.com.es/medio/2…udad-preincaica-de-tiwanaku_409bf3a8_1280x849.jpg"
        },
        {
        name:"Monumento a la Virgen del Socavon",
        location:"Oruro, Bolivia",
        description:"Monument to the Virgin Mary of the Catholic faith",
        image:"https://www.ibolivia.org/wp-content/uploads/2019/08/monumento-a-la-virgen-del-socavon.jpg"
        },
    ],
    citizens: [
        {
        name:"Simon Bolivar",
        bday:"07.24.1783-Deceased",
        known:"First President of Colombia",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Jos%C3%A9._1922%2C_Legislative_Palace%2C_La_Paz.png/399px-Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Jos%C3%A9._1922%2C_Legislative_Palace%2C_La_Paz.png"
        },
        {
        name:"Bernardo Guarachi",
        bday:"01.14..53-Living",
        known:"First Bolivian to summit the Everest, and Bolivia's most iconic climber.",
        image:"https://www.visitbolivia.net/wp-content/uploads/2020/01/Bernando-Guarachi.jpg"
        },
        {
        name:"Marco Antonio Etcheverry",
        bday:"09.26.70-Living",
        known:"Retired Major League Soccer player for D.C United",
        image:"https://pbs.twimg.com/media/DoBEUJwX0AETS1x?format=jpg&name=small"
        }
    ]
}

export const getBLandmarks = () => {
    return database.landmarks.map(copyOfSingleBLandmarksObject => ({...copyOfSingleBLandmarksObject}))
}

export const getBCitizens = () => {
    return database.citizens.map(copyOfSingleBCitizensObject => ({...copyOfSingleBCitizensObject}))
}