const StudentController = require("../../lib/controller/StudentController");


describe("Unit Tests Explorer Controller ", () => {
    test("1) Show all Students", () => {

        const students = StudentController.getAllStudents();

        expect(students.length).toBe(51);
      

    });

    test("2) Get Email Of Students with Certifiaction", () => {

        const studentsWithCertification = StudentController.getEmailWithCertification();

        expect(studentsWithCertification.length).toBe(29);
    });

    test("3) Students By Credits above 500 ", () => {

        const studentsByCredits = StudentController.getStudentsByCredits();

        expect(studentsByCredits.length).toBe(27);
    });


});