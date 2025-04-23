// import express from 'express';
// import Driver from '../models/Driver.mjs';

// const router = express.Router();

// // POST - Add new driver
// router.post('/', async (req, res) => {
//   try {
//     const newDriver = await Driver.create(req.body);
//     res.status(201).json(newDriver);
//   } catch (error) {
//     console.error('Create error:', error);
//     res.status(400).send('Failed to create driver.');
//   }
// });

// // GET - List all drivers
// router.get('/', async (req, res) => {
//   try {
//     const drivers = await Driver.find();
//     res.json(drivers);
//   } catch (error) {
//     console.error('Fetch error:', error);
//     res.status(500).send('Failed to fetch drivers.');
//   }
// });

// export default router;


// imort express
import express from 'express';

import Driver from '../models/Driver.mjs';

const router=express.Router();

router.get('/seed',async(requestAnimationFrame,res)=>{
    try 
    {
        await Driver.creat([
            {name:'Alex Smith', licenseNumber:'123456', experience: '5 years'},
            {name:'Mia Ramirez', licenseNumber:'11223344', experience: '2years'},
            {name:'Chris Lee', licenseNumber:'66778899', experience: '7 years'}

        ]);
res.redirect('/drivers');

    }catch(error){
    console.error('Seed Error:',error);
    res.status(500).send('Seed CommandFailedEvent.')
    }
});


//get
router.get('/',async (req, res)=>{
    try{
        const drivers=await Driver.find();
        res.json(drivers);
    }catch(error){
        console.error('Fetch error:', error);
        res.status(500).send('Failed to fetch drivers.');

    }
});

//driver by id

router.get('/:id',async (req, res)=>{
    try{
        const drivers=await Driver.findById(req.params.id);


        if(!driver)
        {
            return res.status(404).send('Driver not found.')
        }

        res.json(drivers);
    }catch(error){
        console.error('Show error:', error);
        res.status(400).send('Invalid driver ID.');

    }
});

//post
router.post('/',async(req,res)=>{

    console.log('post / drivers hit');
    console.log('request header:', req.headers);
    console.log('request body', req.body);
try{
    const newDriver= await Driver.create(req.body);
    console.log('driver created:', newDriver);
    res.status(201).json(newDriver)

}catch(error){
    console.error('create error:', error.message);
        res.status(400).send(`failed to create new driver:' ${error.message}`);

};


});

//update put 

router.put('/:id',async (req,res)=>{
    try{
        const updatedDriver=await Driver.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updatedDriver){return res.status(404).send('Driver not found.')}
        res.josn(updatedDriver);

    }catch(error){

        console.error('update error:', error);
        res.status(400).send(`failed to update driver.`);





    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const deletedDriver=await Driver.findByIdAndDelete(req.params.id);
        if (!deletedDriver){
            return res.status(400).send('deiver not found.');
        }
res.sendStatus(204);
    }catch(error){
        console.error('delete error:', error);
        res.status(500).send(`failed to delete driver.`);

    }
});

export default router;
