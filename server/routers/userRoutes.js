import express from 'express'
import { addSkill, addProject, getSkills, getProjects, addContact, dsaData } from '../controllers/userCntrollers.js';
const router = express.Router();

router.post('/add/skill', addSkill)
router.post('/add/project', addProject)
router.get('/get/skills', getSkills)
router.get('/get/projects', getProjects)
router.post('/add/contact', addContact)
router.get('/get/dsa', dsaData)

export default router