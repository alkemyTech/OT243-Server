const express = require('express');
const router = express.Router();
const { getAllComments,
        createComment, 
        deleteComment, 
        updateComment,
}= require('../controllers/commentController')
const CheckRole= require('../middlewares/checkRole');
const { validateJWT } = require('../utils/jasonWebToken')
const { validateComment } = require("../validators/commentsValidator")



router.get('/',validateJWT,CheckRole.isAdmin, getAllComments)

router.delete("/:id",validateJWT,CheckRole.isAdmin,deleteComment)

router.post("/",validateJWT,CheckRole.isAdmin,validateComment,createComment)

router.put("/:id",validateJWT,updateComment)



module.exports = router;