//===============================================================================================

//=======================================(argentina)=============================================

//===============================================================================================
//argentina buenos aires landmark import
import { getALandmarks } from './buenosaires.js'

let allALandmarks = getALandmarks();

for (let singleALandmarks of allALandmarks) {
    console.log(singleALandmarks)
}

// Import the LandmarkList function
import {aLandmarkList} from './landmarkslist.js'


let aLParentHTMLElement = document.querySelector(".alandmarkobjects")
aLParentHTMLElement.innerHTML = aLandmarkList();


//----------------landmark-citizen-division-line-(same country)----------------------------------
//argentina buenos aires citizens import
import { getACitizens } from './buenosaires.js'

let allACitizens = getACitizens();

for (const singleACitizens of allACitizens) {
    console.log(singleACitizens)
}

// Import the CitizenList function
import {aCitizenList} from './citizenslist.js'


const aCParentHTMLElement = document.querySelector(".acitizenobjects")

aCParentHTMLElement.innerHTML = aCitizenList();


//================================================================================================