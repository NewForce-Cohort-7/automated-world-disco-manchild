const database = {
    landmarks:[
        {
        name:"Teatro Colon",
        location:"Cerrito 628, CABA, Argentina",
        description:"Opera House",
        image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e0/99/2b/caption.jpg?w=1200&h=-1&s=1"
        },
        {
        name:"Obelisco de Buenos Aires",
        location:"Av. 9 de Julio, CABA, Argentina",
        description:"Obelisk created in 1936 to celebrate 400 years since the city's founding in 1536.",
        image:"https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg"
        },
        {
        name:"Monument to Pedro de Mendoza",
        location:"Defensa 1527, CABA, Argentina",
        description:"Monument to city's founder",
        image:"https://upload.wikimedia.org/wikipedia/commons/4/49/Buenos_Aires_-_San_Telmo_-_Parque_Lezama_-_20071215c.jpg"
        },
        {
        name:"Plaza San Martín",
        location:"Maipu 1210, CABA. Argentina",
        description:"City Park",
        image:"https://turismo.buenosaires.gob.ar/sites/turismo/files/plaza%20san%20martin%20panoramica.jpg"
        },
        {
        name:"'El Monumental' River Plate Stadium",
        location:"Av. Pres. Figueroa Alcorta 7597, CABA, Argentina",
        description:"Home of the Argentina National football team",
        image:"https://footballgroundguide.com/wp-content/uploads/2020/10/River-Plate-Stadium.jpg"
        },
    ],
    citizens: [
        {
        name:"Horacio Rodríguez Larret",
        bday:"10.29.1965-Living",
        known:"Current Mayor of Buenos Aires",
        image:"https://media.zenfs.com/en/bloomberg_politics_602/ac910615eb53a11307387f9eb341e37a"
        },
        {
        name:"Juan Bautista Justo",
        bday:"6.28.1865-1.8.1928",
        known:"Journalist, politician, writer",
        image:"https://www.buscabiografias.com/img/people/Juan-Bautista-Justo.jpg"
        },
        {
        name:"Pedro de Mendoza",
        bday:"~1499-6.23.1537",
        known:"Spanish conquistador and City's Founder",
        image:"https://www.biografiasyvidas.com/biografia/m/fotos/mendoza_pedro.jpg"
        }
    ]
}

export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleLandmarksObject => ({...copyOfSingleLandmarksObject}))
}

export const getCitizens = () => {
    return database.citizens.map(copyOfSingleCitizensObject => ({...copyOfSingleCitizensObject}))
}