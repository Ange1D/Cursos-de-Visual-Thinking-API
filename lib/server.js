const StudentController = require("./controller/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Cursos de Visual Thinking API welcome!"});
});

app.listen(port, () => {
    console.log(`Cursos de Visual Thinking API API in localhost:${port}`);
});

app.get("/v1/students/", (_request, response) => {
    const students  = StudentController.getAllStudents();
    response.json(students );
});

app.get("/v1/students/email/", (_request, response) => {
    const students  = StudentController.getEmailWithCertification();
    response.json(students );
});

app.get("/v1/students/credits/", (_request, response) => {
    const students  = StudentController.getStudentsByCredits();
    response.json(students );
});
