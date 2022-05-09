const StudentService = require("../../lib/services/StudentService");

const Reader = require("../../lib/utils/Reader");

const students = Reader.readJsonFile("test/data/visualpartners_test.json");

describe("Unit Tests for StudentService Class", () => {
    test("1) Show all Students ", () => {

        const students  = StudentService.getAllStudents("test/data/visualpartners_test.json");

        expect(students.length).toBe(51);
      

    });

    test("2) Get Email Of Students with Certifiaction", () => {

        const studentsWithCertification = StudentService.getEmailWithCertification(students);

        expect(studentsWithCertification.length).toBe(29);
    });

    test("3) Students By Credits above 500 ", () => {

        const studentsByCredits = StudentService.getStudentsByCredits(students);

        expect(studentsByCredits.length).toBe(27);
    });



});