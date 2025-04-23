
Here is the structure of my project, inspired by fruits lesson, 3 more routs and models has been added

sbamongoose/  
├── data/                  (Sample JSON data)
│   ├── deliveries.json    (Array of delivery objects)
│   ├── drivers.json       (Array of driver objects)
│   └── trucks.json        (Array of truck objects)
├── models/  
│   ├── Delivery.mjs   (Mongoose model)  
│   ├── Driver.mjs     (Mongoose model)  
│   └── Truck.mjs      (Mongoose model)  
├── routes/  
│   ├── deliveries.js (Express routes for deliveries)  
│   ├── drivers.js    (Express routes for drivers)  
│   └── trucks.js     (Express routes for trucks)  
|   |__ index.js
├── node_modules/  
├── .env              (Environment variables)  
├── .gitignore        (Ignore node_modules, .env, etc.)  
├── app.mjs           (Main Express app)  
├── package.json  
├── package-lock.json  
└── README.md          

/////////////////////////////////////////////////////////////////////////

Truck route tested: 

First, I sent a GET request to http://localhost:3000/trucks to see all the trucks in my database. It worked, and I got a list of truck data back.

Then I went to http://localhost:3000/trucks/seed to add a few sample trucks. After hitting that route, I checked again with the GET request and saw the seeded trucks added in.

Next, I tried getting just one truck using its ID. I used the URL http://localhost:3000/trucks/680932c3311d537bf15601d8, and it returned the truck with that specific ID. That showed me the single truck route was working.

After that, I tested creating a new truck. I sent a POST request to http://localhost:3000/trucks with truck details like model, licensePlate, and capacity in the JSON body. The new truck was successfully saved in the database.

Then I tried updating an existing truck. I used a PUT request to http://localhost:3000/trucks/680932c3311d537bf15601d8 and sent updated values in the body. It worked and returned the updated truck info.

Finally, I deleted a truck by sending a DELETE request to http://localhost:3000/trucks/680932c3311d537bf15601d8. It removed that truck from the database with no issues.

Each route worked as expected, and I was able to test the full cycle of creating, reading, updating, and deleting trucks using Postman.

/////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////