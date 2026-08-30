import * as services from "./endpoint.js"
import patterns from "./patterns.js"

function router(text){
    const normalizedText = text.toLowerCase().split(' ').join('').replace(/,.!?~&/g, '')
    for (const [pattern, regex] of Object.entries(patterns)){
        if(regex.test(normalizedText)){
            return services[pattern]()
              }           
        }
        return services.unclear()
    }


console.log(router('пфф Мгыл прорвёмся ... ОПЕР А!'))