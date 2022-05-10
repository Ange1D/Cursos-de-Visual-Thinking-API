const Reader = require("../../lib/utils/Reader");
const StudentService = require("../../lib/services/StudentService");

class ExplorerController{
    static getAllStudents(){
        return StudentService.getAllStudents("visualpartners.json"); 
    }
    static getEmailWithCertification(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmailWithCertification(students);
    }
    static getStudentsByCredits(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCredits(students);
    }

}
module.exports=ExplorerController;