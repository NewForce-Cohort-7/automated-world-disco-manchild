// Import the function that returns a copy of the fish array
import {getCitizens} from './glasgow.js'

export const CitizenList = () => {
    // Invoke the function that you imported from the database module
    let citizens = getCitizens();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="citizensList">'

    // Create HTNL representations of each fish here
    for (const singleCitizens of citizens) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="citizencard">
        <div class="citizen__name">${singleCitizens.name}</div>
        <div class="citizen__bday">${singleCitizens.bday}</div>
        <div class="citizen__known">${singleCitizens.known}</div>
        <div><img  class="citizen__image image--card" src="${singleCitizens.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}