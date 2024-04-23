module.exports = app => {
  const studentController = require("../controllers/student.controller.js");
  let router = require("express").Router();

  // Create a new Student
  router.post("/", studentController.create);

  // Retrieve all Students
  router.get("/", studentController.findAll);

  app.use("/api/students", router);
};
