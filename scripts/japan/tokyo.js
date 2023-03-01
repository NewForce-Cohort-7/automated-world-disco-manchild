const database = {
    landmarks:[
        {
        name:"Meiji Jingu",
        location:"1-1 Yoyogikamizonochō, Shibuya City, Tokyo 151-8557, Japan",
        description:"Meiji Jingu is one of the Shinto shrines in Japan, with the vast land of the forest (70 ha.), located in the middle of the megacity, Tokyo. Once you step into this precinct, you will forget that you are in the hustle bustle city, and will find Japanese traditional scene amidst greenery nature. It was established in 1920, to commemorate the virtue of Emperor Meiji and Empress Shoken who took the initiative to make a foundation of modernized Japan. Meiji Jingu is open everyday, but opening hours vary depending on the season.",
        image:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ1-JsxijA1Xe4tH4sQiJqPfPRyGydL2E5L7bvthkQXf7r-dNi9vUAOcQF8WS9k_vTAdpVK6Nww8CWWSlK2fLqzuw"
        },
        {
        name:"Tokyo Tower",
        location:"4-chōme-2-8 Shibakōen, Minato City, Tokyo 105-0011, Japan",
        description:"Standing 333 meters high in the center of Tokyo, Tokyo Tower (東京タワー) is the world's tallest, self-supported steel tower and 3 meters taller than its model, the Eiffel Tower. A symbol of Japan's post-war rebirth as a major economic power, Tokyo Tower was the country's tallest structure from its completion in 1958 until 2012 when it was surpassed by the Tokyo Skytree. In addition to being a popular tourist spot, Tokyo Tower serves as a broadcast antenna.",
        image:"https://www.japan-guide.com/g18/3009_01.jpg"
        },
        {
        name:"Sensō-ji",
        location:"2-chōme-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
        description:"Sensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple) is a Buddhist temple located in Asakusa. It is one of Tokyo's most colorful and popular temples.The legend says that in the year 628, two brothers fished a statue of Kannon, the goddess of mercy, out of the Sumida River, and even though they put the statue back into the river, it always returned to them. Consequently, Sensoji was built nearby for the goddess of Kannon. The temple was completed in 645, making it Tokyo's oldest temple.",
        image:"https://www.japan-guide.com/g18/3001_01.jpg"
        },
        {
        name:"Tokyo Skytree",
        location:"1-chōme-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan",
        description:"Tokyo Sky Tree is the centrepiece of a multilevel urban development called Tokyo Sky Tree Town. The other attractions include a large shopping centre, an aquarium, a planetarium, and a 31-story office building.",
        image:"https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/u80hqva8ahlxsflkhzy3.webp"
        },
        {
        name:"Shinjuku Gyoen National Garden",
        location:"11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Japan",
        description:"Shinjuku Gyoen (新宿御苑) is one of Tokyo's largest and most popular parks. Located a short walk from Shinjuku Station, the park's spacious lawns, meandering walking paths and tranquil scenery provide a relaxing escape from the busy urban center around it. In spring Shinjuku Gyoen becomes one of the best places in the city to see cherry blossoms.",
        image:"https://www.japan-guide.com/g18/3034_001_01.jpg"
        },
    ],
    citizens: [
        {
        name:"Hiroyuki Sanada",
        bday:"10.12.60-Living",
        known:"Actor/Martial artist( films: Mortal Kombat 2021, Bullet Train 2022, John Wick: Chapter 4 2023, Rush Hour 3 2007, Avengers: Endgame 2019)",
        image:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTMAxaWxJYEQkSQU767l2momu05ZCFHk3wXjxVqX4vimr-GZpX2z5XDRHHWbCdtwC_W5idSKzzwUcV57J0"
        },
        {
        name:"Yoko Ono",
        bday:"02.18.33-Living",
        known:"Japanese multimedia artist, singer, songwriter, peace activist(1982 grammy award winner)",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Yoko_Ono_2011_SXSW.jpg/330px-Yoko_Ono_2011_SXSW.jpg"
        },
        {
        name:"Shinya Yamanaka",
        bday:"09.04.62-Living",
        known:"Stem cell research (nobel prize in physiology in 2012)",
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