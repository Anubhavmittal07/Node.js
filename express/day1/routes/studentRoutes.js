const express=require('express')
const router = express.Router();
// const app = express();
// app.use(express.json());

let students = [
        {
            id:1,
            name:'John Doe', 
            age:20,
            course:'Computer Science'
        },
        {
            id:2,
            name:'Jane Smith',
            age:22,
            course:'Mathematics'
        },
        {
            id:3,   
            name:'Bob Johnson',
            age:21,
            course:'Physics'
        },
];
router.get('/', (req, res) => {
    res.json(students);
});

//get student by course
router.get('/search', (req, res) => {
    const course = req.query.course;
    const filteredStudents = students.filter(s => s.course.toLowerCase() === course.toLowerCase());
    res.json(filteredStudents);
});


router.get('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});
router.post('/', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };
    students.push(newStudent);
    res.status(201).json({
        message: 'Student added successfully',
    });
});
router.delete('/:id',(req,res)=>{
    const studentId=parseInt(req.params.id);
    const studentIndex=students.findIndex(s=>s.id===studentId);
    if(studentIndex!==-1){
        students.splice(studentIndex,1);
        res.json({message:'Student deleted successfully'});
    }else{
        res.status(404).json({message:'Student not found'});
    }   
});

router.put('/:id',(req,res)=>{
    const studentId=parseInt(req.params.id);
    const studentIndex=students.findIndex(s=>s.id===studentId);
    if(!studentIndex){
        res.status(404).json({message:'Student not found'});
    }
    students.name=req.body.name;
    students.age=req.body.age;
    students.course=req.body.course;
    res.json({message:'Student updated successfully'});
});

router.patch("/:id",(req,res)=>{
    const studentId=parseInt(req.params.id);
    const studentIndex=students.findIndex(s=>s.id===studentId);
    if(req.body.name!==undefined){
        students[studentIndex].name=req.body.name;
    }
    if(req.body.age!==undefined){
        students[studentIndex].age=req.body.age;
    }
    if(req.body.course!==undefined){
        students[studentIndex].course=req.body.course;
    }
    res.json({message:'Student updated successfully'});
});

module.exports=router; //--> export default router