// Import the function that returns a copy of the fish array
import {getACitizens} from './buenosaires.js'

export const aCitizenList = () => {
    // Invoke the function that you imported from the database module
    let aCitizens = getACitizens();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="aCitizensList">'

    // Create HTNL representations of each fish here
    for (const singleACitizens of aCitizens) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="acitizencard">
        <div class="citizen__name">${singleACitizens.name}</div>
        <div class="citizen__bday">${singleACitizens.bday}</div>
        <div class="citizen__known">${singleACitizens.known}</div>
        <div><img  class="citizen__image image--card" src="${singleACitizens.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}