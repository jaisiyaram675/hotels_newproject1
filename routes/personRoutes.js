const express = require("express");
const router = express.Router();
const Person = require("../Models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("dataSaved");
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
});

//  ab data send karne ke baad data lena bi toh hai
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
});


router.get("/:workType", async (req, res) => {
  try {
  const workType = req.params.workType;
  if(workType=="chef" ||  workType=="waiter" || workType =="manager"){ 
    const data = await Person.find({ work: workType });
    console.log("data fetched");
    res.status(200).json(data);
  }
  else{
    res.status(400).json({ err: err.message });
  }
  
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
});
router.put("/:id", async (req, res) => {
    try{
        const personId = req.params.id;
        const UpdatedData = req.body;
        const response = await Person.findByIdAndUpdate(personId, UpdatedData,{
            new: true,
            runValidators: true
        })
        if(!response){
            res.status(404).json({message:"data not found"})
        }
        console.log("data updated");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({err:err.message})

    }
})
 router.delete("/:id", async (req, res) => {
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)
        if(!response){
            res.status(404).json({message:"data not found"})
        }
        console.log("data deleted");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({err:err.message})

    }
})
module.exports = router;