const API = "https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering"
const location_map = { 'dub': "Dublin", "ny": "New York" }
const weekDays_map = { 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5 };
let employeePair = {}

/*
 Get the employee list for the API.
 @rertun Object response of the query.
*/
export const getEmployees = async () => {
    const response = await fetch(API)
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Something went wrong ...');
    }
}

/*
 A pair can be made between two colacated employees.
 This method is responsible to return concatenated
 array of pairs for two different location.
 @param users{Object} employee list
 @rertun Object employee list pair
*/
export const getPair = (users) => {
    employeePair = getPairByLocation(users,'dub')
    employeePair = employeePair.concat(getPairByLocation(users,'ny'))
    return employeePair
}
/*
 Filter result by location
 @param users{Object} employee list
 @param location{String} location
 @rertun Object filtered employee list pair by location and sorted by day of the week
*/
const getPairByLocation = (users,location)=>{
    users = shuffleArray(users.filter(user => user.location === location)) 
    const employeePair= users.reduce((acc, v, i, a) => {
        if (i < a.length - 1) {
            acc.push({ 'giver': users[i], 'receiver': users[i + 1], 'location_display': location_map[users[i].location], 'day': getRandomDay() })
        } else {
            acc.push({ 'giver': users[i], 'receiver': users[0], 'location_display': location_map[users[i].location], 'day': getRandomDay() })
        }
        return acc;
    }, [])
    return sortByDay(employeePair)
}

/*
 Randomly Shuffle the array of employees
 @param users{Object} employee list
 @rertun Object employee list shuffled randomely
*/
const shuffleArray = (users) => {
    return users.map(element => [element, Math.random()]).sort((a, b) => a[1] - b[1]).map(element => element[0])

}
/*
 Sort by day of the week ['Monday','Tuesday',...,'Friday']
 @param employeePair{Object} employee pair list
 @rertun Object sorted employee list sorted by the day of the week
*/
const sortByDay = (employeePair) => {
    employeePair.sort((employee1, employee2) => {
        return weekDays_map[employee1.day] - weekDays_map[employee2.day]
    })
    return employeePair
}

/*
 get a random day of the week
 @rertun String random day of the week
*/
export const getRandomDay = () => {
    return Object.keys(weekDays_map)[Math.floor(Math.random() * 5)]
}
/*
 filter data by location and search key
 @param location{String} location 'dub'/'ny.
 @param name{String} search key 
 @return Object filtered data
*/
export const filterData = (location, name) => {
    return employeePair.filter(employeePair => (location ? employeePair.location_display === location : true) && (employeePair.giver.name.first.toLowerCase().startsWith(name) || employeePair.giver.name.last.toLowerCase().startsWith(name) || employeePair.receiver.name.first.toLowerCase().startsWith(name) || employeePair.receiver.name.last.toLowerCase().startsWith(name)))
}