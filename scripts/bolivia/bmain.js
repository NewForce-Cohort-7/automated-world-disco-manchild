//================================================================================================

//========================================(bolivia)===============================================

//================================================================================================

//Bolivia lapaz landmark import
import { getBLandmarks } from './lapaz.js'

let allBLandmarks = getBLandmarks();

for (const singleBLandmarks of allBLandmarks) {
    console.log(singleBLandmarks)
}

// Import the LandmarkList function
import {bLandmarkList} from './landmarkslist.js'


const bLParentHTMLElement = document.querySelector(".blandmarkobjects")

bLParentHTMLElement.innerHTML = bLandmarkList();


//----------------landmark-citizen-division-line-(same country)----------------------------------
//bolivia lapaz citizens import
import { getBCitizens } from './lapaz.js'

let allBCitizens = getBCitizens();

for (const singleBCitizens of allBCitizens) {
    console.log(singleBCitizens)
}

// Import the CitizenList function
import {bCitizenList} from './citizenslist.js'


const bCParentHTMLElement = document.querySelector(".bcitizenobjects")

bCParentHTMLElement.innerHTML = bCitizenList();


//================================================================================================
