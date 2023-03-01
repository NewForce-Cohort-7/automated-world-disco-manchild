//================================================================================================

//========================================(japan)=================================================

//================================================================================================

//japan tokyo landmark import
import { getJLandmarks } from './tokyo.js'

let allJLandmarks = getJLandmarks();

for (const singleJLandmarks of allJLandmarks) {
    console.log(singleJLandmarks)
}

// Import the LandmarkList function
import {jLandmarkList} from './landmarkslist.js'


const jLParentHTMLElement = document.querySelector(".jlandmarkobjects")

jLParentHTMLElement.innerHTML = jLandmarkList();


//----------------landmark-citizen-division-line-(same country)----------------------------------
//japan tokyo citizens import
import { getJCitizens } from './tokyo.js'

let allJCitizens = getJCitizens();

for (const singleJCitizens of allJCitizens) {
    console.log(singleJCitizens)
}

// Import the CitizenList function
import {jCitizenList} from './citizenslist.js'


const jCParentHTMLElement = document.querySelector(".jcitizenobjects")

jCParentHTMLElement.innerHTML = jCitizenList();


//================================================================================================