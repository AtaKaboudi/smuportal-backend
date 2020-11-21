const express = require('express')
const router = express.Router()


router.get('/',(req,res,next)=>{
    res.status(200).json(chat)

})


chat = [{
    size : 7
},{
    name: 'Ata Kaboudi',
   message : 'Hi everyone',
},
{
    name: 'Syrine Mahmoudi',
    message : 'Hi ',
},{
    name : 'Aziz Salhi',
    message : 'Yoooooo',
},{
    name : 'Ata Kaboudi',
    message : 'Does anyone has ECE100 lecture3',
}
,{
    name : 'Aziz Salhi',
    message : 'Im looking for it too',
},{
    name : 'Oumeima Essid',
    message : ' Yes i have it but im not giving it to you',
},{
    name : 'Ata Kaboudi',
    message : 'k',
}

]


module.exports = router ;