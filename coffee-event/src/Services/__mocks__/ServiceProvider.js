export const fakeData ={  
    "users":[  
       {  
          "name":{  
             "first":"Brennon",
             "last":"Breitenberg"
          },
          "location":"ny",
          "department":"engineering",
          "motto":"Distributed discrete superstructure",
          "email":"brennon.breitenberg@hbc.com",
          "phone":"063 4324581",
          "guid":"d20c20ab-5813-48d4-8148-dee37530a1ec"
       },
       {  
          "name":{  
             "first":"Payton",
             "last":"Corwin"
          },
          "location":"ny",
          "department":"engineering",
          "motto":"Multi-tiered transitional strategy",
          "email":"payton.corwin@hbc.com",
          "phone":"023 9206042",
          "guid":"0b6f30f7-fd64-4864-bc88-145c47bdb9ee"
       },
       {  
          "name":{  
             "first":"Alta",
             "last":"Christiansen"
          },
          "location":"dub",
          "department":"engineering",
          "motto":"Innovative systematic approach",
          "email":"alta.christiansen@hbc.com",
          "phone":"046 8248739",
          "guid":"f6f9fdea-5deb-48ff-9fe7-0f8445c7af22"
       },
       {  
          "name":{  
             "first":"Laura",
             "last":"Bailey"
          },
          "location":"dub",
          "department":"engineering",
          "motto":"Expanded contextually-based functionalities",
          "email":"laura.bailey@hbc.com",
          "phone":"063 6130882",
          "guid":"fc2cf9f6-c776-4ba3-b05d-70fccaa0a703"
       }]
    }
export const fakePairs = {
    "pairs" :[{
        "giver" :  {  
            "name":{  
               "first":"Brennon",
               "last":"Breitenberg"
            },
            "location":"ny",
            "department":"engineering",
            "motto":"Distributed discrete superstructure",
            "email":"brennon.breitenberg@hbc.com",
            "phone":"063 4324581",
            "guid":"d20c20ab-5813-48d4-8148-dee37530a1ec"
         },
        "receiver" : {  
            "name":{  
               "first":"Payton",
               "last":"Corwin"
            },
            "location":"ny",
            "department":"engineering",
            "motto":"Multi-tiered transitional strategy",
            "email":"payton.corwin@hbc.com",
            "phone":"023 9206042",
            "guid":"0b6f30f7-fd64-4864-bc88-145c47bdb9ee"
         },
         "location_display" : "dub",
         "day" : "Monday"
    }]
    
}
export const getEmployees =() =>{
    return new Promise(resolve=>{
        resolve(fakeData)
    })
}

export const getPair = () =>{
    return fakePairs.pairs
}

export const filterData = (location, name) => {
    return fakePairs.pairs
}