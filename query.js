require('./config/db_connection.js');

const Secret = require('./models/Secret.js');
console.log('starting query file')


Secret.create({
    content: "My secret is very dramatic",
        category: "family drama"
    },
     function(err, createdSecret) {
        if (err) { 
                //if there's an error, log it
            console.log(err);    
            } else { 
                //else log the created article
          console.log(createdSecret);    
    }})


// Company.create({
//     name: "Google", 
//     founded: "September 4, 1998", 
//     employees: 57100,
//     active: true,
//     products: ['search', 'maps', 'email'],
//     CEO: {
//         name: "Larry Page",
//         age: 43
//     }},
//     (err, createdCompany) => 
//     {
//         if (err) { 
//             console.log(err);    
//             } else { 
//           console.log(createdCompany);    
//     }});
