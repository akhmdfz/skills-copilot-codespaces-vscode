// Create web Server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_post);
router.get('/:id/delete', commentController.comment_delete);