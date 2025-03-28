export function getGreeting(hours){
    if (hours < 4 || hours >= 19) return "Good night"
    if (hours < 9) return "Good morning"
    if (hours < 16) return "Good afternoon"
    return "Good evening"
}

//common js -- old
// module.exports = getGreeting
// export const getGreetings =  getGreeting;
//ESM syntax

// export default getGreeting; 
//export deafult---> any name without {} in imported file
//export --> same name with {}