var userChoise;
var seats = [ false, false, false, false, false, false, false, false, false, false];
var firstclass = 1;
var economy = 6;
var client = 0;

function bookingSeat() {
    if (client <= 10)
        while ((firstclass != 0) && (economy != 0)) {
            userChoise = parseInt(document.getElementById("form").userChoise.value);

            if (userChoise == 1) {
                // check if first class is available
                if (firstclass <= 5 && seats[firstclass-1] == 0) {
                    seats[firstclass-1]=true; //Booking Seat for firstclass
                    console.log(seats); //Showing Seats
                    var check = prompt("You are booked in first class, seat " + firstclass + ".  Would you like to make another booking?\n\nType Y or N");
                    client++; //add client to variable
                    firstclass++; //add seat for first class
                    if (check=="Y" || check=="y") {

                    }else {
                        // if cancel clicked or N is typed
                        window.alert("Flight leaves in 3 hours");
                        break;
                    }
                // check if Economy is available
                }else if (firstclass > 5 && economy <= 10) {
                    var check = prompt("First class is full. Would you like a seat in the economy class?\n\nType Y or N");

                    if (check=="Y" || check=="y") {
                        seats[economy-1]=true; //remove seat from economy class
                        console.log(seats);
                        var check2=prompt("You are booked in economy class, seat " + economy + ".  Would you like to make another booking?\n\nType Y or N");
                        client++; //add client to variable
                        economy++; //add seat for economy class
                        if (check2=="Y" || check2=="y") {

                        }else {
                            // if cancel clicked or N is typed
                            window.alert("Flight leaves in 3 hours");
                            break;
                        }
                    }else {
                        // if cancel clicked or N is typed
                        window.alert("Flight leaves in 3 hours");
                        break;
                    }
                }else if(client>=10){
                    // when seats are full
                    window.alert("No seat available on the Flight.");
                    break;
                } // end else if (condition)                    
            } // end if

            else if (userChoise == 2) {
                // check if first class is available
                if (economy <= 10 && seats[economy-1] == 0) {
                    seats[economy-1]=true;
                    console.log(seats);
                    var check = prompt("You are booked in economy class, seat " + economy + ".  Would you like to make another booking?\n\nType Y or N");
                    client++;
                    economy++;
                    if (check=="Y" || check=="y") {

                    }else {
                        // check if first class is available
                        window.alert("Flight leaves in 3 hours");
                        break;
                    }
                // check if Economy is available
                }else if (economy > 10 && firstclass <= 5) {
                    var check = prompt("Economy is full. Would like a seat in first class?\n\nType Y or N");

                    if (check=="Y" || check=="y") {
                        seats[firstclass-1]=true;
                        console.log(seats);
                        var check2=prompt("You are booked in first class, seat " + firstclass + ".  Would you like to make another booking?\n\nType Y or N");
                        client++;
                        firstclass++;
                        if (check2=="Y" || check2=="y") {

                        }else {
                            // check if first class is available
                            window.alert("Flight leaves in 3 hours");
                            break;
                        }
                    }else {
                        // check if first class is available
                        window.alert("Flight leaves in 3 hours");
                        break;
                    }
                }else if(client>=10){
                    // when seats are full
                    window.alert("No seat available on the Flight.");
                    break;
                }
            }
            else{
                // if other than 1 or 2 is typed
                alert("Please type 1 or 2 only.");
                break;
            }
    } // end of first if
}// end function