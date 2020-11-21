const express = require('express')
const router = express.Router();


router.get('/',(req,res,next) => {
    res.status(200).json(ProfessorsList)
})

router.post('/',(req,res,next) => {
    const professor = {
        name : req.body.name,
        lastname : req.body.lastname ,
        rating : req.body.rating
    }
    res.status(200).json({
        message : 'professor File handling post Request',
        professor : professor
    })
})

router.get('/:professorID',(req,res,next) => {
    const id = req.params.professorID ;
    res.status(200).json({
        message : 'professor File handling Get Request',
        id : id
    })
})




ProfessorsList = [
    {size : 9},
    {name: 'DR Salma',lastname:'Hamza',rating:3, id : 0,rating:10,courses:['ECE203','CS101','CS303']},{
        name: 'DR Heger',lastname:' Arfaoui',rating:5, id : 1,rating:10,courses:['ECE203','CS101','CS303']},{
        name: 'DR Amine ',lastname:'Ben Sassi ',rating:10, id : 2,rating:10,courses:['ECE203','CS101','CS303']},{
        name: 'DR Lamia ',lastname:'Bouaziz ',rating:3, id : 3,rating:10,courses:['ECE203','CS101','CS303']},{
        name: 'DR Ata ',lastname:'Kaboudi',rating:1, id : 4,rating:10,courses:['ECE203','CS101','CS303']},{
         name: 'DR Syrine ',lastname:'Mahmoudi',rating:2, id : 5,rating:10,courses:['ECE203','CS101','CS303']},{
         name: 'DR Aziz',lastname:' Salhi',rating:7, id : 6,rating:10,courses:['ECE203','CS101','CS303']},{
        name: 'DR Oumaima',lastname:'Essid',rating:2, id : 7,rating:10,courses:['ECE203','CS101','CS303']},{
        name: 'DR Walid',lastname:'Ben aaaa',rating:1, id : 0,rating:10,courses:['ECE203','CS101','CS303']},
  
  ];

module.exports = router;