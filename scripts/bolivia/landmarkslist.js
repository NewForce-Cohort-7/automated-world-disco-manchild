// Import the function that returns a copy of the fish array
import {getLandmarks} from './lapaz.js'

export const LandmarkList = () => {
    // Invoke the function that you imported from the database module
    let landmarks = getLandmarks();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="landmarksList">'

    // Create HTNL representations of each fish here
    for (const singleLandmarks of landmarks) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="landmarkcard">
        <div class="landmark__name">${singleLandmarks.name}</div>
        <div class="landmark__location">${singleLandmarks.location}</div>
        <div class="landmark__description">${singleLandmarks.description}</div>
        <div><img  class="landmark__image image--card" src="${singleLandmarks.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}