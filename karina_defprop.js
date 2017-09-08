var cinema = (function() {
    var proto = {
        __row: 0,
        __seat: 0,
        __subscribers: [],
        addSubscriber: function (property, callback) {
            this.__subscribers.push({
                property : property,
                callback : callback
            });
        },
        __invokeSubscribers: function (newValue, property) {
            this.__subscribers.forEach(function(subcriber) {
                if(property === subcriber.property){
                    subcriber.callback(newValue);
                }
            })
        }
    };

    var cinema = Object.create(proto);

    return cinema;
})();


Object.defineProperty(cinema, 'seat', {
    set: function (value) {
        this.__seat = value;
        this.__invokeSubscribers(this.__seat, 'seat');
    },
    get: function () {
        return this.__seat;
    }
});

Object.defineProperty(cinema, 'row', {
    set: function (value) {
        this.__row = value;
        this.__invokeSubscribers(this.__row, 'row');
    },
    get: function () {
        return this.__row;
    }
});

var subsriber1 = {
    seatSubscr1 : function(newValue) {
        console.log('Seat Subscriber1 ' + newValue);
    }
}

var subsriber2 = {
    seatSubscr2 : function(newValue) {
        console.log('Seat Subscriber2 ' + newValue);
    }
}

var subsriber3 = {
    rowSubscr3 : function(newValue) {
        console.log('Row Subscriber3 ' + newValue);
    }
}

var subsriber4 = {
    rowSubscr4 : function(newValue) {
        console.log('Row Subscriber4 ' + newValue);
    },
    seatSubscr4 : function(newValue){
        console.log('Seat Subscriber4 ' + newValue);
    }
}

cinema.addSubscriber('seat', subsriber1.seatSubscr1);
cinema.addSubscriber('seat', subsriber2.seatSubscr2);

cinema.addSubscriber('row', subsriber3.rowSubscr3);
cinema.addSubscriber('row', subsriber4.rowSubscr4);
cinema.addSubscriber('seat', subsriber4.seatSubscr4);

cinema.seat = 10;
cinema.row = 22;
console.log(cinema.seat);
console.log(cinema.row);