const Reader = require("../../lib/utils/Reader");

class StudentService{

    static getAllStudents(path){
        const students = Reader.readJsonFile(path);
        return students;
    }

    static getEmailWithCertification(students){
        const filterPartners = students.filter( student => student.haveCertification );

        return filterPartners.map( student => student.email );
    }

    static getStudentsByCredits(students){
        return students.filter(student => {
            if(student.credits > 500) return student;
        });
    }
}

module.exports =StudentService;