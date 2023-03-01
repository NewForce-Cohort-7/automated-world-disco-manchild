// Import the function that returns a copy of the fish array
import {getBCitizens} from './lapaz.js'

export const bCitizenList = () => {
    // Invoke the function that you imported from the database module
    let bCitizens = getBCitizens();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="bCitizensList">'

    // Create HTNL representations of each fish here
    for (const singleBCitizens of bCitizens) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="bcitizencard">
        <div class="citizen__name">${singleBCitizens.name}</div>
        <div class="citizen__bday">${singleBCitizens.bday}</div>
        <div class="citizen__known">${singleBCitizens.known}</div>
        <div><img  class="citizen__image image--card" src="${singleBCitizens.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}