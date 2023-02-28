//===============================================================================================

//=======================================(argentina)=============================================

//===============================================================================================
//argentina buenos aires landmark import
import { getLandmarks } from './argentina/buenosaires.js'

let allLandmarks = getLandmarks()

for (let singleLandmarks of allLandmarks) {
    console.log(singleLandmarks)
}

// Import the LandmarkList function
import {LandmarkList} from './argentina/landmarkslist.js'


const parentHTMLElement = document.querySelector(".landmarkobjects")

parentHTMLElement.innerHTML = LandmarkList()


//----------------landmark-citizen-division-line-(same country)----------------------------------
//argentina buenos aires citizens import
import { getCitizens } from './argentina/buenosaires.js'

let allCitizens = getCitizens()

for (const singleCitizens of allCitizens) {
    console.log(singleCitizens)
}

// Import the CitizenList function
import {CitizenList} from './argentina/citizenslist.js'


const parentHTMLElement = document.querySelector(".citizenobjects")

parentHTMLElement.innerHTML = CitizenList()


//================================================================================================

//========================================(japan)=================================================

//================================================================================================

//japan tokyo landmark import
import { getLandmarks } from './japan/tokyo.js'

let allLandmarks = getLandmarks()

for (const singleLandmarks of allLandmarks) {
    console.log(singleLandmarks)
}

// Import the LandmarkList function
import {LandmarkList} from './japan/tokyo.js'


const parentHTMLElement = document.querySelector(".landmarkobjects")

parentHTMLElement.innerHTML = LandmarkList()


//----------------landmark-citizen-division-line-(same country)----------------------------------
//japan tokyo citizens import
import { getCitizens } from './japan/tokyo.js'

let allCitizens = getCitizens()

for (const singleCitizens of allCitizens) {
    console.log(singleCitizens)
}

// Import the CitizenList function
import {CitizenList} from './japan/tokyo.js'


const parentHTMLElement = document.querySelector(".citizenobjects")

parentHTMLElement.innerHTML = CitizenList()


//================================================================================================

//========================================(bolivia)===============================================

//================================================================================================

//japan tokyo landmark import
import { getLandmarks } from './bolivia/lapaz.js'

let allLandmarks = getLandmarks()

for (const singleLandmarks of allLandmarks) {
    console.log(singleLandmarks)
}

// Import the LandmarkList function
import {LandmarkList} from './bolivia/lapaz.js'


const parentHTMLElement = document.querySelector(".landmarkobjects")

parentHTMLElement.innerHTML = LandmarkList()


//----------------landmark-citizen-division-line-(same country)----------------------------------
//japan tokyo citizens import
import { getCitizens } from './bolivia/lapaz.js'

let allCitizens = getCitizens()

for (const singleCitizens of allCitizens) {
    console.log(singleCitizens)
}

// Import the CitizenList function
import {CitizenList} from './bolivia/lapaz.js'


const parentHTMLElement = document.querySelector(".citizenobjects")

parentHTMLElement.innerHTML = CitizenList()


//================================================================================================

//========================================(scotland)==============================================

//================================================================================================

//japan tokyo landmark import
import { getLandmarks } from './scotland/glasgow.js'

let allLandmarks = getLandmarks()

for (const singleLandmarks of allLandmarks) {
    console.log(singleLandmarks)
}

// Import the LandmarkList function
import {LandmarkList} from './scotland/glasgow.js'


const parentHTMLElement = document.querySelector(".landmarkobjects")

parentHTMLElement.innerHTML = LandmarkList()


//----------------landmark-citizen-division-line-(same country)----------------------------------
//japan tokyo citizens import
import { getCitizens } from './scotland/glasgow.js'

let allCitizens = getCitizens()

for (const singleCitizens of allCitizens) {
    console.log(singleCitizens)
}

// Import the CitizenList function
import {CitizenList} from './scotland/glasgow.js'


const parentHTMLElement = document.querySelector(".citizenobjects")

parentHTMLElement.innerHTML = CitizenList()


//==========================================================