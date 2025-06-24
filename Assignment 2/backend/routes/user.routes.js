// routes/user.routes.js
import express from 'express';
import { Router } from 'express';
const router = express.Router();
import searchUser from '../controllers/user.controller.js';
// Maps GET /api/search?email=... to the searchUser function
router.get('/search', searchUser);

// module.exports = router;

export default router;
