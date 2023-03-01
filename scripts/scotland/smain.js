//================================================================================================

//========================================(scotland)==============================================

//================================================================================================

//scotland glasgow landmark import
import { getSLandmarks } from './glasgow.js'

let allSLandmarks = getSLandmarks();

for (const singleSLandmarks of allSLandmarks) {
    console.log(singleSLandmarks)
}

// Import the LandmarkList function
import {sLandmarkList} from './landmarkslist.js'


const sLParentHTMLElement = document.querySelector(".slandmarkobjects")

sLParentHTMLElement.innerHTML = sLandmarkList();


//----------------landmark-citizen-division-line-(same country)----------------------------------
//scotland glasgow citizens import
import { getSCitizens } from './glasgow.js'

let allSCitizens = getSCitizens();

for (const singleSCitizens of allSCitizens) {
    console.log(singleSCitizens)
}

// Import the CitizenList function
import {sCitizenList} from './citizenslist.js'


const sCParentHTMLElement = document.querySelector(".scitizenobjects")

sCParentHTMLElement.innerHTML = sCitizenList();


//====================================================================================================