import express from 'express';
import testController from '../controllers/testController.js';

const router = express.Router();

// Existing test route
router.get('/test', testController.getTest);

// New outreach route
router.get('/outreach', (req, res) => {
  res.json({
    success: true,
    data: {
      message: 'Outreach API endpoint active'
    }
  });
});

export default router;
