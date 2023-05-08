/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(recordsArray){
    return {
        firstName: recordsArray[0],
        familyName: recordsArray[1],
        title: recordsArray[2],
        payPerHour: recordsArray[3],
        timeInEvents: [],
        timeOutEvents:[]
    }
}
function createEmployeeRecords(array){
    let newArray = []
    let i = 0
    for (let element of array){
        newArray[i] = createEmployeeRecord(element)
        i++
    }
    return newArray

}

function createTimeInEvent(time){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time.substr(11, 4)),
        date: time.substr(0, 10)
    })

    return this
}

function createTimeOutEvent(time){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time.substr(11, 4)),
        date: time.substr(0, 10)
    })

    return this
}

function hoursWorkedOnDate(inputDate){
    let hoursWorked = 0
    for (let i = 0; i < this.timeInEvents.length; i++){
        if (this.timeInEvents[i].date === inputDate){
            hoursWorked = ((this.timeOutEvents[i].hour)-(this.timeInEvents[i].hour))/100
            break
        }
    }
    return hoursWorked
}

function wagesEarnedOnDate(inputDate){
    return hoursWorkedOnDate.call(this, inputDate)*this.payPerHour
}

// function allWagesFor(employeeRecord){
//     let pay = 0
//     for (let i = 0 ; i < employeeRecord.timeInEvents.length; i++){
//         pay += wagesEarnedOnDate(employeeRecord, employeeRecord.timeInEvents[i].date)
//     }
//     return pay
    
// }

function calculatePayroll(array){
    let payroll = array.reduce( (acc, record) => {
        return allWagesFor.call(record) + acc
    }, 0)

    // for (let employeeRecord of array){
    //     pay += allWagesFor.call(employeeRecord)
    // }
     return payroll
}

function findEmployeeByFirstName(record, name){
    const found = record.find(record => record.firstName === name)
    return found

}
