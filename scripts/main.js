//===============================================================================================

//=======================================(argentina)=============================================

//===============================================================================================
//argentina buenos aires landmark import
import { getALandmarks } from './argentina/buenosaires.js'

let allALandmarks = getALandmarks()

for (let singleALandmarks of allALandmarks) {
    console.log(singleALandmarks)
}

// Import the LandmarkList function
import {aLandmarkList} from './argentina/landmarkslist.js'


const parentHTMLElement = document.querySelector(".alandmarkobjects")

parentHTMLElement.innerHTML = aLandmarkList()


//----------------landmark-citizen-division-line-(same country)----------------------------------
//argentina buenos aires citizens import
import { getACitizens } from './argentina/buenosaires.js'

let allACitizens = getACitizens()

for (const singleACitizens of allACitizens) {
    console.log(singleACitizens)
}

// Import the CitizenList function
import {aCitizenList} from './argentina/citizenslist.js'


const parentHTMLElement = document.querySelector(".acitizenobjects")

parentHTMLElement.innerHTML = aCitizenList()


//================================================================================================

//========================================(japan)=================================================

//================================================================================================

//japan tokyo landmark import
import { getJLandmarks } from './japan/tokyo.js'

let allJLandmarks = getJLandmarks()

for (const singleJLandmarks of allJLandmarks) {
    console.log(singleJLandmarks)
}

// Import the LandmarkList function
import {jLandmarkList} from './japan/tokyo.js'


const parentHTMLElement = document.querySelector(".jlandmarkobjects")

parentHTMLElement.innerHTML = jLandmarkList()


//----------------landmark-citizen-division-line-(same country)----------------------------------
//japan tokyo citizens import
import { getJCitizens } from './japan/tokyo.js'

let allJCitizens = getJCitizens()

for (const singleJCitizens of allJCitizens) {
    console.log(singleJCitizens)
}

// Import the CitizenList function
import {jCitizenList} from './japan/tokyo.js'


const parentHTMLElement = document.querySelector(".jcitizenobjects")

parentHTMLElement.innerHTML = jCitizenList()


//================================================================================================

//========================================(bolivia)===============================================

//================================================================================================

//Bolivia lapaz landmark import
import { getBLandmarks } from './bolivia/lapaz.js'

let allBLandmarks = getBLandmarks()

for (const singleBLandmarks of allBLandmarks) {
    console.log(singleBLandmarks)
}

// Import the LandmarkList function
import {bLandmarkList} from './bolivia/lapaz.js'


const parentHTMLElement = document.querySelector(".blandmarkobjects")

parentHTMLElement.innerHTML = bLandmarkList()


//----------------landmark-citizen-division-line-(same country)----------------------------------
//bolivia lapaz citizens import
import { getBCitizens } from './bolivia/lapaz.js'

let allBCitizens = getBCitizens()

for (const singleBCitizens of allBCitizens) {
    console.log(singleBCitizens)
}

// Import the CitizenList function
import {bCitizenList} from './bolivia/lapaz.js'


const parentHTMLElement = document.querySelector(".bcitizenobjects")

parentHTMLElement.innerHTML = bCitizenList()


//================================================================================================

//========================================(scotland)==============================================

//================================================================================================

//scotland glasgow landmark import
import { getSLandmarks } from './scotland/glasgow.js'

let allSLandmarks = getSLandmarks()

for (const singleSLandmarks of allSLandmarks) {
    console.log(singleSLandmarks)
}

// Import the LandmarkList function
import {sLandmarkList} from './scotland/glasgow.js'


const parentHTMLElement = document.querySelector(".slandmarkobjects")

parentHTMLElement.innerHTML = sLandmarkList()


//----------------landmark-citizen-division-line-(same country)----------------------------------
//scotland glasgow citizens import
import { getSCitizens } from './scotland/glasgow.js'

let allSCitizens = getSCitizens()

for (const singleSCitizens of allSCitizens) {
    console.log(singleSCitizens)
}

// Import the CitizenList function
import {sCitizenList} from './scotland/glasgow.js'


const parentHTMLElement = document.querySelector(".scitizenobjects")

parentHTMLElement.innerHTML = sCitizenList()


//==========================================================