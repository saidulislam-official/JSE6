class Vehicles{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
    move(){
        console.log('This car is awesome ');
    }
}
class Bus extends Vehicles{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
class Truck extends Vehicles{
     constructor(name,price,year,load){
        super(name,price,year);
        this.load = load;
        
    }
}