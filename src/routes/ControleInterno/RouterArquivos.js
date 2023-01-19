const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')
const Controller = require('../../controller/ControleInterno/ControllerArquivos')



// 8. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('anexo')



router.get('/controleinterno/arquivos',Controller.get)
router.post('/save', upload,Controller.post)






module.exports = router;
