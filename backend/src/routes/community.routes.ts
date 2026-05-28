import { Router } from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  addComment,
  likePost,
  deletePost,
} from '../controllers/community.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

// @route   GET /api/community
// @desc    Get all community posts
// @access  Public
router.get('/', getAllPosts);

// @route   GET /api/community/:id
// @desc    Get community post by ID
// @access  Public
router.get('/:id', getPostById);

// @route   POST /api/community
// @desc    Create community post
// @access  Private
router.post('/', authenticate, createPost);

// @route   POST /api/community/:id/comments
// @desc    Add comment to post
// @access  Private
router.post('/:id/comments', authenticate, addComment);

// @route   POST /api/community/:id/like
// @desc    Like a post
// @access  Private
router.post('/:id/like', authenticate, likePost);

// @route   DELETE /api/community/:id
// @desc    Delete post
// @access  Private
router.delete('/:id', authenticate, deletePost);

export default router;
