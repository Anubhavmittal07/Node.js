const express = require('express');

const app = express();
const PORT = 7000;

app.use(express.json());

const tasks=[
    // {
    //     id:1,
    //     name:"Study FSD",
    //     status:"In progress"
    // },
    // {
    //     id:2,
    //     name:"SEDP",
    //     status:"not started"
    // },
    // {
    //     id:3,
    //     name:"SIH",
    //     status:"selected"
    // }
]
const validStat = ["pending", "in-progress", "completed"];
//const uniq=3;

app.get('/api/tasks/status/:status',(req,res)=>{
    const stat=req.params.status;
    const task=tasks.filter(t=> t.status==stat);
    res.status(200).json(task)
})


// 2. GET /api/url/:code
// Get original URL using short code
app.get('/api/tasks', (req, res) => {

    res.status(200).json(tasks)
});


// 3. GET /api/users/:username/urls
// Get all URLs created by a user
app.post('/api/task', (req, res) => {

    const {title,stat}=req.body;
    if(!title || !stat || !validStat.includes(stat)){
        return res.status(400).json({
            msg:"Please provide valid task details"
        })
    }

    const task={
        id:Date.now(),
        name:title,
        status:stat
    }
    tasks.push(task);
    
});


// 4. DELETE /api/url/:code
// Delete a stored URL
app.delete('/api/tasks/:id', (req, res) => {

    const id = req.params.id;

    const index = tasks.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    urls.splice(index, 1);

    res.status(200).json({
        message: "Task deleted successfully"
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});