const express = require ('express')
const router = express.Router()


router.get('/',(req,res,next) => {
        res.status(200).json(CoursesList)  ; 
})

 


router.post('/',(req,res,next) => {
    const course = {
        name : req.body.name,
        lastname: req.body.lastname,
        credits :req.body.credits
    }
    res.status(200).json({
        message : 'Course file post request',
        course : course
    })    
})


router.get('/:courseID',(req,res,next) => {
    const ID = req.params.courseID ;
    res.status(200).json(CoursesList[ID]);
   alert(CoursesList[ID]);
})


CoursesList = [
    {size : 9} ,
    { name: 'CS101', 
    id :0,credit :3,
    lastName : 'Introduction to Software',
    AvailableNotes : ['Oumaima','Aziz Bachtarzi','Aziz Salhi'],
    LastUpdate :'12/10/2020'},
    
    {
        name: 'ECE203',
         id :1,
         lastName : ' Electrical Circuits',credit :4,
         AvailableNotes : ['Aziz Salhi','Aziz Bachtarzi','Ata Kaboudi'],
         LastUpdate :'12/10/2020',
         Comments : ['Not baad','Helped me a lot','thank you for however uploaded this'],
         SuccessRate : 40,
         ReviewTime : 7,
        },{
        name: 'CS303', id :2,credit :3,
        lastName : 'Operating Systems',
        AvailableNotes : ['Batul Salhab','Aziz Bachtarzi','Batul Salhab'],
        LastUpdate :'12/10/2020',
        Comments : ['Not baad','Helped me a lot','thank you for however uploaded this'],
        SuccessRate : 40,
        ReviewTime : 7,
      }, {
        name: 'Math102', id :3 ,credit :4,
        lastName : 'Calculus 2',
        AvailableNotes : ['Ata Kaboudi','Batul Salhab','Aziz Bachtarzi'],
        LastUpdate :'12/10/2020',
        Comments : ['Not baad','Helped me a lot','thank you for however uploaded this'],
        SuccessRate : 40,
        ReviewTime : 7,
      },{
        name: 'ISS 101', id :4 ,
        lastName : 'Startup engineering',credit :3,
        AvailableNotes : ['Aziz Salhi','Batul Salhab','Oumaima'],
        LastUpdate :'12/10/2020',
        Comments : ['Not baad','Helped me a lot','thank you for however uploaded this'],
        SuccessRate : 40,
        ReviewTime : 7,
      },{
         name: 'CS 303', id :5,credit :3,
         lastName : 'Introduction to WebDev',
         AvailableNotes : ['Ata Kaboudi','Aziz Salhi','Aziz Bachtarzi'],
         LastUpdate :'12/10/2020',
         Comments : ['Not baad','Helped me a lot','thank you for however uploaded this'],
         SuccessRate : 40,
         ReviewTime : 7,
        },{
         name: 'CS 999', id :6,credit :4,
         lastName : 'AI and Data Science',
         AvailableNotes : ['Ata Kaboudi','Oumaima','Syrine Mahmoudi'],
         LastUpdate :'12/10/2020',
         Comments : ['Not baad','Helped me a lot','thank you for however uploaded this'],
         SuccessRate : 40,
         ReviewTime : 7,
        },{
        name: 'CD 401', id :7,credit :3,
        lastName : 'Mobile Apps',
        AvailableNotes : ['Syrine Mahmoudi','Ata Kaboudi','Batul Salhab'],
        LastUpdate :'12/10/2020',
        Comments : ['Not baad','Helped me a lot','thank you for however uploaded this'],
        SuccessRate : 40,
        ReviewTime : 7,
      },{
        name: 'MATH 701', id :8,credit :4,
        lastName : 'Multivariable Calculus',
        AvailableNotes : ['Syrine Mahmoudi','Ata Kaboudi','Syrine Mahmoudi'],
        LastUpdate :'12/10/2020',
        Comments : ['Not baad','Helped me a lot','thank you for however uploaded this'],
        SuccessRate : 40,
        ReviewTime : 7,
      },

];


module.exports = router;