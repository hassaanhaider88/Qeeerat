// import express from "express";


// const app = express();
// const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello from the backend server!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



    import express from 'express';
    import axios from 'axios'
    const app = express();
    const port = 3000;

    // Replace with your actual Page ID and Access Token
    const PAGE_ID = '1EbEgWuLN4';
    const ACCESS_TOKEN = 'EAANfB8jlNbYBPwq7J6Pbfjb7TSexvT3BjvDvwVAoVZAdpdojhUOuWH47vMa9HYL7gDxZCf4wQXqxpEnOAKJyerOGMSbN0VkVH12KhLPGiRFMWAs1aE0baAhaVdH9IslAywmyuygQbe7gmwHzRivXp2nReZBnNy7MfSi45aZBFLVZBXj89P1aLSpCoZC2OEsdExWH8WYGQScDZAnXuLM4NripbBfbybNZBI7u';

    app.get('/facebook-posts', async (req, res) => {
        try {
            const response = await axios.get(
                `https://graph.facebook.com/v20.0/${PAGE_ID}/posts`,
                {
                    params: {
                        fields: 'id,message,created_time,full_picture,permalink_url,shares,reactions.summary(true),comments.summary(true)',
                        access_token: ACCESS_TOKEN
                    }
                }
            );
            res.json(response.data);
        } catch (error) {
            console.error('Error fetching Facebook posts:', error.response ? error.response.data : error.message);
            res.status(500).json({ error: 'Failed to fetch Facebook posts' });
        }
    });

    app.listen(port, () => {
        console.log(`Express app listening at http://localhost:${port}`);
    });


    