import Skill from '../models/Skill.js'
import Project from '../models/Project.js'
import Contact from '../models/Contact.js';
const dsaData = async (req, res) => {
    try {
        const dsaData = {
            "totalProblems": 350,
            "platforms": [
                {
                    "name": "LeetCode",
                    "solved": 260,
                    "total": 2500
                },
                {
                    "name": "Codeforces",
                    "solved": 70,
                    "total": 1000
                },
                {
                    "name": "HackerRank",
                    "solved": 20,
                    "total": 500
                }
            ],
            "recentProblems": [
                {
                    "id": 1,
                    "title": "Remove Duplicates from Sorted Array",
                    "difficulty": "Easy",
                    "platform": "LeetCode",
                    "topic": "Array, Two pointers",
                    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/"
                },
                {
                    "id": 2,
                    "title": "Binary Tree Inorder Traversal",
                    "difficulty": "Medium",
                    "platform": "LeetCode",
                    "topic": "Tree, Stack",
                    "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
                },
                {
                    "id": 3,
                    "title": "Maximum Subarray",
                    "difficulty": "Medium",
                    "platform": "LeetCode",
                    "topic": "Array, Dynamic Programming",
                    "link": "https://leetcode.com/problems/maximum-subarray/"
                }
            ]
        }
        return res.status(200).json({
            msg: "successfully retrived dsa data",
            dsaData
        })

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "internal server errror"
        })
    }
}
const addContact = async (req, res) => {
    try {
        const { name, email, message, phone } = req.body;
        if (!name || !email || !message || !phone) {

            return res.status(400).json({
                msg: "fill all the fields"
            })
        }
        const contact = await Contact.insertOne({
            email, name, phone, message
        })

        return res.status(200).json({
            msg: "contact added successfully",
            contact
        })

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "internal server error"
        })
    }
}
const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();

        return res.status(200).json({
            msg: "feched skills successfully",
            skills
        })

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "internal server error"
        })
    }
}
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        return res.status(200).json({
            msg: "fetched projects successfully",
            projects
        })

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "internal server error"
        })
    }
}
const addSkill = async (req, res) => {
    try {
        const { skills } = req.body
        if (!Array.isArray(skills) || skills.length == 0) {
            return res.status(400).json({
                "msg": "please pass the array of skills"
            })
        }

        await Skill.insertMany(skills)

        // await skill.save();
        return res.status(200).json({
            msg: "succesfully added the skill",
            skills
        })

    } catch (err) {

        console.error(err.message)
        return res.status(500).json({
            msg: "interna; server error",
            err: err.message
        })
    }
}

const addProject = async (req, res) => {
    try {
        const { projects } = req.body;
        if (!Array.isArray(projects) || projects.length == 0) {
            res.status(400).json({
                msg: "please pass the project array"
            })
        }
        await Project.insertMany(projects)
        return res.status(200).json({
            "msg": "added ptojects successfully",
            projects
        })

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            "msg": "internal server error ",
            "err": err.message
        })

    }
}
export { addSkill, addProject, getSkills, getProjects, addContact, dsaData }




