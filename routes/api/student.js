
const  express = require('express')
const router = express.Router();

router.get('/', (req,res,next) =>{
    res.status(200).json(StudentsList);
})

router.post('/', (req,res,next) =>{
    const student = {
        name : req.body.name ,
        lastname : req.body.lastname ,
        rating : req.body.rating
    }
    res.status(200).json({
        message : 'Student File post Request'
    })
})


router.get('/:studentId', (req,res,next) =>{
    const id = req.params.studentId; 
    res.status(200).json({
        message : 'Student File Get File Request',
        id : id
    })
})


module.exports = router;


StudentsList = [
    {size : 9},
    {name: 'Ata',lastname:' Kaboudi', id : 0,gpa:4,rating:10,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},{
        name: 'Syrine',lastname:'  Mahmoudi', id : 1,gpa:4,rating:8,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},{
        name: 'Aziz ',lastname:' Salhi', id : 2,gpa:4,rating:7,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},{
        name: 'Oumaima',lastname:' essid', id : 3,gpa:4,rating:6,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},{
        name: 'Aziz',lastname:'  Bachtarzi', id : 4,gpa:4,rating:0,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},{
         name: 'Kenza',lastname:'  Boukhris', id : 5,gpa:4,rating:4,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},{
         name: 'Batul ',lastname:' Salhab', id : 6,gpa:4,rating:8,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},{
        name: 'Daly ',lastname:' Saddoud', id : 7,gpa:4,rating:10,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},{
        name: 'Dana',lastname:'  darras', id : 8,gpa:4,rating:6,courses:['ECE203','CS101','CS303'],level:"Sophomore",field:"Software"},
  
  ];
    