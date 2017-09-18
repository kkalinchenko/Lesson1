var cinema = {
  __seat : 0,
  __seatStatus : 'free',
  __subscribers : [],
  addSubscriber : function(property, callback){
    this.__subscribers.push({
      property : property,
      callback : callback
    });
  },
  __invokeSubscribers : function(newValue, propertyInv) {
    this.__subscribers.forEach(function(item) {
      if(propertyInv === item.property){
        item.callback(newValue);
      }
    });
  }
};

Object.defineProperty(cinema, 'seat',{
  get : function(){
    return this.__seat;
  },
  set : function(newSeat) {
    this.__seat = newSeat;
    this.__seatStatus = __chooseStatus();
    this.__invokeSubscribers(this.__seat, this.__seatStatus);
  }
});

var subscribeToFreeSeat = displaySeatDecorator(null, displaySeat, 'Free seat ');
var subscribeToOccupiedSeat = displaySeatDecorator(null, displaySeat, 'Occupied seat ');


cinema.addSubscriber('free', subscribeToFreeSeat); 
cinema.addSubscriber('occupied', subscribeToOccupiedSeat); 


function displaySeat(seat){
  return seat;
}

function displaySeatDecorator(context, callback, status) {
  return function() {
    var res = callback.apply(context, arguments);
    alert(status + res);
  };
}


function __chooseStatus() {
  while(true){
    var status = parseInt(prompt('0 - free seat, 1 - occupied seat', ''));
    if (status === 0 || status === 1) break; 
  }
  return (status === 0) ? 'free' : 'occupied';
}

cinema.seat = 31;
cinema.seat = 41;

/***1***/

var array = {
  '0' : 1,
  '1' : 4,
  '2' : 0,
  '3' : 9,
  '4' : 2,
  length : 5
};

Array.prototype.sort.call(array, function(a, b){
  return a - b;
});

/***2***/

var calc = {
   pred: 'The sum is ',
   sum: function(a, b) {
      return this.pred + a + b;
   }
};

function sumDecorator(context, callback){
  return function() {
    var res = callback.apply(context, arguments);
    console.log(arguments);
    return res;
  };
}

function calculateSum(callback, a, b) {
 return  callback(a,b);
}

var decorateSum = sumDecorator(calc, calc.sum);

console.log(calculateSum(decorateSum, 3, 2));

