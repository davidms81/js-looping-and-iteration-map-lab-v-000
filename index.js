// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    first = driver.split(' ')[0]
    last = driver.split(' ')[1]
    return {firstName: first, lastName: last}
  })
}
