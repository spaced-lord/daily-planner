var today = moment().format('llll');
var hour = moment().format('LT'); 
var currentTime = moment().format('LTS');
          
          
var day = [
{
    id: "0",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: " "
},
{
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: " "
},
{
    id: "2",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: " "
},
{
    id: "3",
    hour: "12",
    time: "12",
    meridiem: "am",
    reminder: " "
},
{
    id: "4",
    hour: "1",
    time: "13",
    meridiem: "pm",
    reminder: " "
},
{
    id: "5",
    hour: "2",
    time: "14",
    meridiem: "pm",
    reminder: " "
},
{
    id: "6",
    hour: "3",
    time: "15",
    meridiem: "pm",
    reminder: " "
},
{
    id: "7",
    hour: "4",
    time: "16",
    meridiem: "pm",
    reminder: " "
},
{
    id: "8",
    hour: "5",
    time: "17",
    meridiem: "pm",
    reminder: " "
},
{
    id: "9",
    hour: "6",
    time: "18",
    meridiem: "pm",
    reminder: " "  
},
{
    id: "10",
    hour: "7",
    time: "19",
    meridiem: "pm",
    reminder: " "  
},
{
    id: "11",
    hour: "8",
    time: "20",
    meridiem: "pm",
    reminder: " "  
},
]
          
          
$("#currentDay").text(today)
          
          
// sends to localStorage
    function storeReminders() {
        localStorage.setItem(day, JSON.stringify(day));
    }
        
// diplay reminders to the viewport on the appropriate time
    function displayReminders() {
        day.forEach(function (thisHour) {
        $(thisHour.id).val(thisHour.reminder);
        })
    }
        
    // pulls existing localStorage data
    function init() {
        var storedDay = JSON.parse(localStorage.getItem("day"));
        if (storedDay) {
            day = storedDay;
          }
          
        storeReminders();
        displayReminders();
    }

// visual asspects
    day.forEach(function(thisHour) {
        var hourRow = $('<form>').attr({
            "class" : "row"
        });
        $(".container").append(hourRow);
          
    // event field 
    var eventField = $('<div>')
    .text($(thisHour.hour), $(thisHour.meridiem))
    .attr({
        "class" : "col-md-2 hour"
    });

    // hourly event info
    var eventInfo = $("<div>")
        .attr({
        "class": "col-md-9 description p-0"
    });

    var eventData = $("<textarea>");
        eventInfo.append(eventData);
        eventData.attr("id", thisHour.id);
            if (thisHour.time < moment().format("HH")) {
              eventData.attr ({
                "class": "past",
              })
            }  else if (thisHour.time === moment().format("HH")) {
              eventData.attr({
                "class" : "present"
              })
            } else if (thisHour.time > moment().format("HH")) {
              eventData.attr({
                "class" : "future" 
              })
            }
    
    // save button obvi
    var saveButton = $("<i class='far fa-save fa-lg'></i>") 
    var savePlan = $("<button>")
        .attr({
        "class" : "col-md-1 btn saveBtn"
        });
    savePlan.append(saveButton);
    hourRow.append(eventField, eventInfo, savePlan);

})

// loads any existing localStorage
    init();

    // saves to localStorage
    $(".saveBtn").on('click', function(event) {
        event.preventDefault();
        var saveIndex = $(this).siblings(".description").children(".future").attr("id");
        day[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
        console.log(saveIndex);
        storedReminders();
        displayReminders();
    })




    
    






