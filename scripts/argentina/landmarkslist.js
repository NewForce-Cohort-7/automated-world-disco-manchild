// Import the function that returns a copy of the fish array
import {getALandmarks} from './buenosaires.js'

export const aLandmarkList = () => {
    // Invoke the function that you imported from the database module
    let aLandmarks = getALandmarks();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="aLandmarksList">'

    // Create HTNL representations of each fish here
    for (const singleALandmarks of aLandmarks) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="argentinalandmarkcard">
        <div class="landmark__name">${singleALandmarks.name}</div>
        <div class="landmark__location">${singleALandmarks.location}</div>
        <div class="landmark__description">${singleALandmarks.description}</div>
        <div><img  class="landmark__image image--card" src="${singleALandmarks.image}" /></div>
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}