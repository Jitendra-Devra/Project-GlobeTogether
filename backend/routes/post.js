const express = require("express");
const router = express.Router();
const zod = require("zod");
const { Post } = require("../db");
const { authMiddleware } = require("../middleware");

// Zod schema for creating a post
const postBody = zod.object({
    destination: zod.string().nonempty("Destination is required."),
    startDate: zod.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid start date format.",
    }),
    endDate: zod.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid end date format.",
    }),
    numberOfPeople: zod.number().min(1, "Number of people must be at least 1."),
    description: zod.string().nonempty("Description is required."),
});

// Create a new post
router.post("/create", authMiddleware, async (req, res) => {
    const parseResult = postBody.safeParse(req.body);

    if (!parseResult.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: parseResult.error.errors,
        });
    }

    const { destination, startDate, endDate, numberOfPeople, description } = req.body;

    try {
        const post = await Post.create({
            destination,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            numberOfPeople,
            description,
            createdBy: req.userId, // Assuming `authMiddleware` sets `req.userId`
        });

        res.status(201).json({
            message: "Post created successfully",
            post,
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating post", error: error.message });
    }
});

// Retrieve all posts
router.get("/bulk", async (req, res) => {
    try {
        const posts = await Post.find().populate("createdBy", "username email"); // Include user details
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error: error.message });
    }
});

module.exports = router;
