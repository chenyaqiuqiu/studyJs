var test = function(){
    var _this = this;
    var mmm = function(){
        console.log("mmmm ");
    }
    this.abc = function(){
        console.log(mmm());
        console.log("test function");
    }
}

var flight = {
    airline: "Oceanic",
    number: 100,
    departure: {
        "IATA": "SYD",
        time: "2015.01.30",
        city: "Sydney",
    },

    arrival: {
        IATA: "LAX",
    },
};

var flightFunc = function(){
    console.log(flight.departure["IATA"]);
}

flightFunc();
//console.log(flight.departure["IATA"]);
