const { Student } = require("../models/student");
const { ServiceError } = require("../utils/service-error");
require("dotenv").config();

class StudentService {
  constructor() {
    const functions = [this.getAllStudent];

    for (let f of functions) {
      this[f.name] = f.bind(this);
    }
  }

  async getAllStudent() {
    try {
      console.log("server is trying to fetch data from the backend");
      const students = await Student.find();
      console.log(students);
      return students;
    } catch (error) {
      throw new ServiceError("Failed to fetch students", error);
    }
  }
}

module.exports = {
  StudentService,
};
