var today = moment().format('llll');
var hour = moment().format('LT'); 
var currentTime = moment().format('LTS');
         
          
          
$("#currentDay").text(today)
$.each($("textarea"), function() {
    if(hour === this.id) {
        $(this).addClass("present");
        $(this).removeClass("past future");
    } if(hour < this.id) {
        $(this).addClass("past");
        $(this).removeClass("present future");
    } if(hour > this.id) {
        $(this).addClass("future");
        $(this).removeClass("past present");
    }
    
    renderStorage();
    // localStorage
    function renderStorage() {
       $("textarea").each(function() {
           for(i = 0; i < localStorage.length; i++) {
            if(this.id == localStorage.key(i)) {
                $("textarea[id = '"+ localStorage.key(i) + "']").val(localStorage.getItem(localStorage.key(i))) 
            }
           } 
       })
    }
    // Save button
    $("button").click(function(event) {
        event.preventDefault() 
        var timeblock = $(this).attr("data-text")
        var save = $("textarea[id = '"+ timeblock + "']").val()
        localStorage.setItem(timeblock, save)
    })


});
          




    
    






