// Import the function that returns a copy of the fish array
import {getSLandmarks} from './glasgow.js'

export const sLandmarkList = () => {
    // Invoke the function that you imported from the database module
    let sLandmarks = getSLandmarks();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="slandmarksList">'

    // Create HTNL representations of each fish here
    for (const singleSLandmarks of sLandmarks) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="slandmarkcard">
        <div class="landmark__name">${singleSLandmarks.name}</div>
        <div class="landmark__location">${singleSLandmarks.location}</div>
        <div class="landmark__description">${singleSLandmarks.description}</div>
        <div><img  class="landmark__image image--card" src="${singleSLandmarks.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}