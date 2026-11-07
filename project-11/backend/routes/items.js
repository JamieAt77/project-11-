import express from 'express';
import { randomUUID } from "node:crypto";

const router = express.Router();

// Dummy items data
const items = [
  { id: randomUUID(), name: 'Item 1', description: 'Description for item 1' },
  { id: randomUUID(), name: 'Item 2', description: 'Description for item 2' },
  // Add more items as needed
];

// GET /api/items
router.get('/items', (req, res) => {
  res.json({ items });
});

export default router;
