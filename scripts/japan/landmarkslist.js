// Import the function that returns a copy of the fish array
import {getJLandmarks} from './tokyo.js'

export const jLandmarkList = () => {
    // Invoke the function that you imported from the database module
    let jLandmarks = getJLandmarks();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="jLandmarksList">'

    // Create HTNL representations of each fish here
    for (const singleJLandmarks of jLandmarks) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="jlandmarkcard">
        <div class="landmark__name">${singleJLandmarks.name}</div>
        <div class="landmark__location">${singleJLandmarks.location}</div>
        <div class="landmark__description">${singleJLandmarks.description}</div>
        <div><img  class="landmark__image image--card" src="${singleJLandmarks.image}" /></div>
            <hr class="dashed">
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}