// const express = require('express');

// const app = express();

// const PORT = 8000;

// // Middleware to read JSON request body
// app.use(express.json());

// // In-memory poll data
// const polls = [
//     {
//         id: 1,
//         question: "Which programming language do you prefer?",
//         options: [
//             { id: 1, text: "Java", count: 0 },
//             { id: 2, text: "JavaScript", count: 0 },
//             { id: 3, text: "Python", count: 0 }
//         ]
//     },
//     {
//         id: 2,
//         question: "Which frontend framework do you prefer?",
//         options: [
//             { id: 1, text: "React", count: 0 },
//             { id: 2, text: "Angular", count: 0 },
//             { id: 3, text: "Vue", count: 0 }
//         ]
//     }
// ];


// // 1. GET /api/polls
// // Return all polls
// app.get('/api/polls', (req, res) => {

//     res.status(200).json({
//         message: "Polls retrieved successfully",
//         polls: polls
//     });

// });


// // 2. GET /api/polls/:id
// // Return one poll
// app.get('/api/polls/:id', (req, res) => {

//     const id = parseInt(req.params.id);

//     const poll = polls.find(p => p.id === id);

//     if (!poll) {
//         return res.status(404).json({
//             message: "Poll not found"
//         });
//     }

//     res.status(200).json(poll);

// });


// // 3. POST /api/vote
// // Record a vote
// app.post('/api/vote', (req, res) => {

//     const { pollId, optionId } = req.body;

//     // Check required values
//     if (pollId === undefined || optionId === undefined) {
//         return res.status(400).json({
//             message: "pollId and optionId are required"
//         });
//     }

//     // Find poll
//     const poll = polls.find(p => p.id === parseInt(pollId));

//     if (!poll) {
//         return res.status(404).json({
//             message: "Poll not found"
//         });
//     }

//     // Find option inside poll
//     const option = poll.options.find(
//         o => o.id === parseInt(optionId)
//     );

//     if (!option) {
//         return res.status(400).json({
//             message: "Invalid option"
//         });
//     }

//     // Increase vote count
//     option.count++;

//     res.status(200).json({
//         message: "Vote recorded successfully",
//         option: option
//     });

// });


// // 4. GET /api/polls/:id/results
// // Return results of a poll
// app.get('/api/polls/:id/results', (req, res) => {

//     const id = parseInt(req.params.id);

//     const poll = polls.find(p => p.id === id);

//     if (!poll) {
//         return res.status(404).json({
//             message: "Poll not found"
//         });
//     }

//     // Calculate total responses
//     const totalResponses = poll.options.reduce(
//         (total, option) => total + option.count,
//         0
//     );

//     res.status(200).json({
//         pollId: poll.id,
//         question: poll.question,
//         results: poll.options,
//         totalResponses: totalResponses
//     });

// });


// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


const express=require('express')
const app=express();
const PORT=8000

app.use(express.json())

const polls = [
    {
        id:1,
        question:"What language do you prefer for DSA?",
        options:[
            {id:1, text:"Java", cnt:1},
            {id:2, text:"Cpp", cnt:0},
            {id:3, text:"Python", cnt:0}
        ]
    },
    {
        id:2,
        question:"How much salary do you expect?",
        options:[
            {id:1, text:"20lpa", cnt:0},
            {id:2, text:"30lpa", cnt:0},
            {id:3, text:"60lpa", cnt:1}
        ]
    }
]

app.get('/api/polls',(req,res)=>{
    res.status(200).json({
        message:"polls retrived successfully",
        polls:polls
    })
})

app.get('/api/polls/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const poll=polls.find(p=> p.id===id)
    if(!poll){
        return res.status(404).json("poll not found")
    }
    else{
        res.json(poll);
    }
})

app.post('/api/vote',(req,res)=>{
    const {pollid, optionid} = req.body;
    if(!pollid || !optionid){
        return res.status(400).json("Both Id's were required!")
    }
    const id=parseInt(pollid)
    const poll=polls.find(p=> p.id===id)
    if(!poll){
        return res.status(404).json("Poll Not Found")
    }
    const opt=poll.options.find(o=> o.id===parseInt(optionid))
    if(!opt){
        return res.status(404).json("Option Not Found")
    }
    opt.cnt++;
    res.json({
        msg:"Vote recorder succ",
        option:opt
    })
})

app.listen(8000,()=>{
    console.log("Server Started")
}
)