const database = {
    landmarks:[
        {
        name:"Meiji Jingu",
        location:"1-1 Yoyogikamizonochō, Shibuya City, Tokyo 151-8557, Japan",
        description:"Meiji Jingu is one of the Shinto shrines in Japan, with the vast land of the forest (70 ha.), located in the middle of the megacity, Tokyo.",
        image:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ1-JsxijA1Xe4tH4sQiJqPfPRyGydL2E5L7bvthkQXf7r-dNi9vUAOcQF8WS9k_vTAdpVK6Nww8CWWSlK2fLqzuw"
        },
        {
        name:"Tokyo Tower",
        location:"4-chōme-2-8 Shibakōen, Minato City, Tokyo 105-0011, Japan",
        description:"Tokyo Tower (東京タワー) is the world's tallest, self-supported steel tower and 3 meters taller than its model, the Eiffel Tower.",
        image:"https://www.japan-guide.com/g18/3009_01.jpg"
        },
        {
        name:"Sensō-ji",
        location:"2-chōme-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
        description:"Sensoji is a Buddhist temple located in Asakusa.",
        image:"https://www.japan-guide.com/g18/3001_01.jpg"
        },
        {
        name:"Tokyo Skytree",
        location:"1-chōme-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan",
        description:"Tokyo Sky Tree is the centrepiece of a multilevel urban development containing numerous attractions.",
        image:"https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/u80hqva8ahlxsflkhzy3.webp"
        },
        {
        name:"Shinjuku Gyoen National Garden",
        location:"11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Japan",
        description:"Shinjuku Gyoen (新宿御苑) is one of Tokyo's largest and most popular parks.",
        image:"https://www.japan-guide.com/g18/3034_001_01.jpg"
        },
    ],
    citizens: [
        {
        name:"Hiroyuki Sanada",
        bday:"10.12.60-Living",
        known:"Actor and Martial artist",
        image:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTMAxaWxJYEQkSQU767l2momu05ZCFHk3wXjxVqX4vimr-GZpX2z5XDRHHWbCdtwC_W5idSKzzwUcV57J0"
        },
        {
        name:"Yoko Ono",
        bday:"02.18.33-Living",
        known:"Japanese multimedia artist, singer, songwriter, and peace activist",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Yoko_Ono_2011_SXSW.jpg/330px-Yoko_Ono_2011_SXSW.jpg"
        },
        {
        name:"Shinya Yamanaka",
        bday:"09.04.62-Living",
        known:"Stem cell researcher",
        image:"https://www.discoverwalks.com/blog/wp-content/uploads/2022/03/640px-shinya_yamanaka10.jpg"
        }
    ]
}

export const getJLandmarks = () => {
    return database.landmarks.map(copyOfSingleJLandmarksObject => ({...copyOfSingleJLandmarksObject}))
}

export const getJCitizens = () => {
    return database.citizens.map(copyOfSingleJCitizensObject => ({...copyOfSingleJCitizensObject}))
}