// Import the function that returns a copy of the fish array
import {getJCitizens} from './tokyo.js'

export const jCitizenList = () => {
    // Invoke the function that you imported from the database module
    let jCitizens = getJCitizens();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="jCitizensList">'

    // Create HTNL representations of each fish here
    for (const singleJCitizens of jCitizens) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="jcitizencard">
        <div class="citizen__name">${singleJCitizens.name}</div>
        <div class="citizen__bday">${singleJCitizens.bday}</div>
        <div class="citizen__known">${singleJCitizens.known}</div>
        <div><img  class="citizen__image image--card" src="${singleJCitizens.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}