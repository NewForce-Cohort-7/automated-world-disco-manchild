// Import the function that returns a copy of the fish array
import {getBLandmarks} from './lapaz.js'

export const bLandmarkList = () => {
    // Invoke the function that you imported from the database module
    let bLandmarks = getBLandmarks();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="blandmarksList">'

    // Create HTNL representations of each fish here
    for (const singleBLandmarks of bLandmarks) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="blandmarkcard">
        <div class="landmark__name">${singleBLandmarks.name}</div>
        <div class="landmark__location">${singleBLandmarks.location}</div>
        <div class="landmark__description">${singleBLandmarks.description}</div>
        <div><img  class="landmark__image image--card" src="${singleBLandmarks.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}