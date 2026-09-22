const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.json());


// Predefined survey questions

const questions = [
    {
        id: 1,
        question: "Which language do you prefer?",
        options: [
            { id: 1, text: "Java" },
            { id: 2, text: "Python" },
            { id: 3, text: "JavaScript" }
        ]
    },
    {
        id: 2,
        question: "Which field interests you?",
        options: [
            { id: 1, text: "Web Development" },
            { id: 2, text: "AI/ML" },
            { id: 3, text: "Cyber Security" }
        ]
    }
];


// Store valid feedback submissions

const feedback = [];


// 1. GET /api/questions
// Return all questions

app.get('/api/questions', (req, res) => {

    res.status(200).json(questions);

});


// 2. POST /api/feedback
// Submit survey response

app.post('/api/feedback', (req, res) => {

    const { userId, responses } = req.body;

    // Basic validation
    if (
        !userId ||
        !Array.isArray(responses) ||
        responses.length === 0
    ) {
        return res.status(400).json({
            message: "Please provide valid feedback"
        });
    }


    // Validate every response
    for (const response of responses) {

        const { questionId, optionId } = response;

        // Check response structure
        if (
            questionId === undefined ||
            optionId === undefined
        ) {
            return res.status(400).json({
                message: "Please provide valid feedback"
            });
        }


        // Find question
        const question = questions.find(
            q => q.id === parseInt(questionId)
        );

        if (!question) {
            return res.status(400).json({
                message: "Please provide valid feedback"
            });
        }


        // Check whether selected option belongs to question
        const option = question.options.find(
            o => o.id === parseInt(optionId)
        );

        if (!option) {
            return res.status(400).json({
                message: "Please provide valid feedback"
            });
        }
    }


    // Store only after ALL validation succeeds
    const submission = {
        userId: userId,
        responses: responses
    };

    feedback.push(submission);

    res.status(201).json({
        message: "Feedback submitted successfully"
    });

});


// 3. GET /api/feedback/:userId
// Return user's feedback

app.get('/api/feedback/:userId', (req, res) => {

    const userId = req.params.userId;

    const userFeedback = feedback.find(
        f => f.userId === userId
    );

    if (!userFeedback) {
        return res.status(404).json({
            message: "Feedback not found"
        });
    }

    res.status(200).json(userFeedback);

});


// 4. GET /api/feedback/summary
// Return count for each available option

app.get('/api/feedback/summary', (req, res) => {

    const summary = {};

    // Create counters for every option
    questions.forEach(question => {

        question.options.forEach(option => {

            summary[`${question.id}_${option.id}`] = {
                questionId: question.id,
                optionId: option.id,
                option: option.text,
                count: 0
            };

        });

    });


    feedback.forEach(submission => {

        submission.responses.forEach(response => {

            const key = `${response.questionId}_${response.optionId}`;

            if (summary[key]) {
                summary[key].count++;
            }

        });

    });

    res.status(200).json(
        Object.values(summary)
    );

});


// Start server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});