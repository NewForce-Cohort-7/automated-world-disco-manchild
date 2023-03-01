// Import the function that returns a copy of the fish array
import {getSCitizens} from './glasgow.js'

export const sCitizenList = () => {
    // Invoke the function that you imported from the database module
    let sCitizens = getSCitizens();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="scitizensList">'

    // Create HTNL representations of each fish here
    for (const singleSCitizens of sCitizens) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="scitizencard">
        <div class="citizen__name">${singleSCitizens.name}</div>
        <div class="citizen__bday">${singleSCitizens.bday}</div>
        <div class="citizen__known">${singleSCitizens.known}</div>
        <div><img  class="citizen__image image--card" src="${singleSCitizens.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}