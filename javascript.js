function changeColor() {          
    var lightOneClass = document.getElementById("lightOne").className;
    var lightTwoClass = document.getElementById("lightTwo").className;
    var lightThreeClass = document.getElementById("lightThree").className;
    
    if (lightOneClass == 'light light-off') {
        if (lightTwoClass == 'light light-off') {
            if (lightThreeClass == 'light light-off') {
                document.getElementById("lightOne").className = 'light red-light';   
                document.getElementById("lightTwo").className = 'light light-off';   
                document.getElementById("lightThree").className = 'light light-off';   
            } else {
                document.getElementById("lightOne").className = 'light red-light';   
                document.getElementById("lightTwo").className = 'light light-off';   
                document.getElementById("lightThree").className = 'light light-off'; 
            }
        } else {
            document.getElementById("lightOne").className = 'light light-off';   
            document.getElementById("lightTwo").className = 'light light-off';                       
            document.getElementById("lightThree").className = 'light green-light'; 
        }
    } else {
        document.getElementById("lightOne").className = 'light light-off';   
        document.getElementById("lightTwo").className = 'light yellow-light';   
        document.getElementById("lightThree").className = 'light light-off'; 
    }         





}