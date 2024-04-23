module.exports = app => {
  const studentController = require("../controllers/student.controller.js");
  let router = require("express").Router();

  // Create a new Student
  router.post("/", studentController.create);

  // Retrieve all Students
  router.get("/", studentController.findAll);

  router.get("/:id", students.findOne);

  // Retrieve all Students
  router.get("/", students.findAll);

  // Delete a Student with id
  router.delete("/:id", students.delete);

  // Delete all students
  router.delete("/", students.deleteAll);

  app.use("/api/students", router);
};
