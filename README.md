# Train-Spot-project

This project is about creating the database of Railway System.

The railway system indicates the passengers to enquire about the availability of trains on the basis of source and destination,booking of tckets,enquire about the status of the booked ticket etc.The main aim of this project is to design and develop a database maintaining the records of different trains,train status and passengers.The train record includes its number,naame,source,destination and its availability.Passengers can book their tickets for the train in which seats are available. Passengers has to to provide desired train number and the date for which ticket is to be booked.Once the ticket is booked with confirm status and corresponding  ticket ID is generated which is stored along with other details of the passenger. The ticket once booked it can be cancelled at any time.




The aim of case study is to design and develop a database maintaining:

-The records of different trains

-Train status, and passengers.

-stations

-Passengers, there tickets and there subscribtions

# How To Create Database
1-run create file

2-run script file

# How to use the application



# Description of the database
There are 10 tables in the database

1- Passenger (His ID, first name, last name)

2- Passenger_Contact (PassengerID (FK To Passenger), email, city, State, Street)

3- Passenger_Phone (PassengerID (FK To Passenger), code of the country, phone Number)

4-Passenger_Subscribtion (PassengerID (FK To Passenger), SubscriptionID, Expiration Date of the subscription)

5-Station (ID, its name, its city, State, Street)

6-Subscribtion (ID, Fees to be paid, Class of the seats, number_of_trips it gives)

7-Ticket (ID, Class of the seat, its price, Booking date, The passenger Id, The trip ID(FK to trip))

8-Train (ID, its model, Its status, number of seats, number of carriages, Bought_BY(The id of the manager who bought it)

9-Trip (ID, Departure time, Arrival time, its Type, source_ID (starting station), destination id, Id of the train that is used, station managerID)

10-User "table of users who have access to the application"(Id of the user(PK), username, hashed password, 


# Screenshots