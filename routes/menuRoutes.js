const express = require('express');
const router = express.Router();
const Menu = require('../Models/Menu');
    router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new Menu(data);
      const response = await newMenu.save();
      console.log("data saved");
      res.status(201).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: err.message });
    }
  });
  router.get("/", async (req, res) => {
    try {
      const data = await Menu.find();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: err.message });
    }
  });

  router.get("/:workType", async (req, res) => {
   
    try {
    const workType = req.params.workType;
    if (workType == "spicy" || workType == "bitter" || workType == "sour" || workType == "sweet") {
      const data = await Menu.find({ taste: workType });
      console.log("data fetched");
      res.status(200).json(data);
    }
    else {
      res.status(404).json({err:err.message });
    }
}
    catch(err){
      console.log(err);
      res.status(500).json({ err: err.message });
    }
});
router.put("/:id", async (req, res) => {

    try{
const menuId =req.params.id;
const UpdateData=req.body;
   
const response = await Menu.findByIdAndUpdate(menuId, req.body, {
  new: true,
  runValidators: true
})
if(!menuId){
    return res.status(404).json({ err: "Menu not found" });
  }
  console.log("data updated");
  res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({ err: err.message });
    }
})
router.delete("/:id", async (req, res) => {
    try{ const menuId=req.params.id;
    const response = await Menu.findByIdAndDelete(menuId)
    if(!menuId){
        return res.status(404).json({ err: "Menu not found" });
      }
      console.log("data deleted");
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({ err: err.message });
    }
})
  module.exports = router

  