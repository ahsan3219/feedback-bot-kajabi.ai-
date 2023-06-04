const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
dotenv.config();


const app = express()
app.use(cors());


const configuration = new Configuration({
    
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


// app.get('/', (req, res) => {
//     res.sendfile(__dirname + '/design.html');
// })

app.post('/data',async (req, res) => {
req.on('data', async (datas) => {
    let data =JSON.parse(datas.toString())
    console.log(data.level);

    

    const textGeneration = async (prompt) => {

        try {
            const response = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: `${prompt} `,
                temperature: 0.9,
                max_tokens: 500,
            });
            console.log("response",response.data.choices[0].text    );
    
            return {
                status: 1,
                response: `${response.data.choices[0].text}`
            };
        } catch (error) {
            console.log("error: ", error.response.data);
            return {
                status: 0,
                response: ''
            };
        }
    };
    




    if(data.level==1 && data.writingType==="Narrative Writing Feedback"){
        console.log("Narrative Writing Feedback","Level 1",
        "age 10 to 12");
console.log("data.writingInput",data.writingInput);

prompt=`Can you please give me some feedback on the following story written by a 12-year-old? Please analyze its structure, content, grammar, and provide scores based on the following criteria: plot development, character description, use of descriptive language, and overall readability (on a scale of 1-5). Additionally, provide constructive feedback to help improve the story." Here is the story: ${data.writingInput}`
        let result = await textGeneration(prompt);

        res.send({ text: result.response });
    }

    
    else if (data.level==1 && data.writingType==="Persuasive Writing Feedback"){
    console.log("Persuasive Writing Feedback","Level 1",
    "age 10 to 12");

prompt=`Can you please analyze the persuasive piece written by a 10-year-old? Evaluate its structure, content, grammar, and provide scores based on the following criteria: clarity of argument, use of persuasive techniques, supporting evidence, and overall persuasiveness (on a scale of 1-5). Additionally, provide constructive feedback to help strengthen the persuasive writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });
}



else if (data.level==1 && data.writingType==="Review Writing Feedback"){
    console.log("Review Writing Feedback","Level 1",
    "age 10 to 12");

    prompt=`Can you please provide feedback on the review written by a 12-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: introduction and summary, critical analysis, supporting examples, and overall engagement (on a scale of 1-5). Additionally, provide constructive feedback to help enhance the review writing skills. Here is the story. "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}


else if (data.level==1 && data.writingType==="Poetic Writing Feedback"){
    console.log("Poetic Writing Feedback","Level 1",
    "age 10 to 12");

    prompt=`Can you please analyze the poem written by a 10-year-old? Evaluate its structure, content, grammar, and provide scores based on the following criteria: imagery and sensory details, use of figurative language, creativity, and overall impact (on a scale of 1-5). Additionally, provide constructive feedback to help refine the poetic writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}



else if (data.level==1 && data.writingType==="Expository Writing Feedback"){
    console.log("Expository Writing Feedback","Level 1",
    "age 10 to 12");


    prompt=`Please evaluate the expository piece written by a 12-year-old. Analyze its structure, content, grammar, and assign scores based on the following criteria: clarity of topic introduction, organization of ideas, supporting details, and overall effectiveness in explaining (on a scale of 1-5). Additionally, provide constructive feedback to help improve the expository writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });



}

else if (data.level==1 && data.writingType==="Technical Writing Feedback"){
    console.log("Narrative Writing Feedback","Level 1",
    "age 10 to 12");

    prompt=`Can you please provide feedback on the technical piece of writing by a 10-year-old? Analyze its structure, content, grammar, and provide scores based on the following criteria: clarity of instructions, use of appropriate vocabulary, organization of steps, and overall effectiveness in conveying information (on a scale of 1-5). Additionally, provide constructive feedback to help enhance the technical writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });



}

// Level 2

else if(data.level==2 && data.writingType==="Narrative Writing Feedback"){
    console.log("Narrative Writing Feedback","Level 2",
    "age 10 to 12");

    prompt=`Can you please give me some feedback on the story written by a 13-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: plot development, character depth, use of descriptive language, narrative style, and overall readability (on a scale of 1-5). Additionally, provide constructive feedback to help refine the narrative writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}



else if (data.level==2 && data.writingType==="Persuasive Writing Feedback"){
console.log("Persuasive Writing Feedback","Level 2",
"age 10 to 12");

prompt=`Can you please analyze the persuasive piece written by a 14-year-old? Evaluate its structure, content, grammar, and provide scores based on the following criteria: clarity of argument, logical reasoning, persuasive techniques, supporting evidence, and overall persuasiveness (on a scale of 1-5). Additionally, provide constructive feedback to help strengthen the persuasive writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });



}



else if (data.level==2 && data.writingType==="Review Writing Feedback"){
console.log("Review Writing Feedback","Level 2",
"age 10 to 12");

prompt=`Can you please provide feedback on the review written by a 12-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: introduction and summary, critical analysis, use of supporting examples, engagement, and overall quality (on a scale of 1-5). Additionally, provide constructive feedback to help enhance the review writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });



}



else if (data.level==2 && data.writingType==="Poetic Writing Feedback"){
console.log("Poetic Writing Feedback","Level 2",
"age 10 to 12");

prompt=`Can you please analyze the poem written by a 13-year-old? Evaluate its structure, content, grammar, and provide scores based on the following criteria: imagery, figurative language, thematic exploration, creativity, and overall impact (on a scale of 1-5). Additionally, provide constructive feedback to help refine the poetic writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}



else if (data.level==2 && data.writingType==="Expository Writing Feedback"){
console.log("Expository Writing Feedback","Level 2",
"age 10 to 12");

prompt=`Please evaluate the expository piece written by a 14-year-old. Analyze its structure, content, grammar, and assign scores based on the following criteria: clarity of topic introduction, organization of ideas, use of supporting details and examples, effectiveness in explaining, and overall coherence (on a scale of 1-5). Additionally, provide constructive feedback to help improve the expository writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });
}



else if (data.level==2 && data.writingType==="Technical Writing Feedback"){
console.log("Technical Writing Feedback","Level 2",
"age 10 to 12");

prompt=`Can you please provide feedback on the technical writing piece by a 12-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: clarity of instructions, use of appropriate technical terms, organization of steps, accuracy of information, and overall effectiveness in conveying technical knowledge (on a scale of 1-5). Additionally, provide constructive feedback to help enhance the technical writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}



// Level 3


else if(data.level==3 && data.writingType==="Narrative Writing Feedback"){
    console.log("Narrative Writing Feedback","Level 3",
    "age 10 to 12");

    prompt=`Can you please provide feedback on the narrative piece written by a 15-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: plot development, character development, use of descriptive language, narrative techniques, and overall readability (on a scale of 1-5). Additionally, provide constructive feedback to help refine the narrative writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });

}



else if (data.level==3 && data.writingType==="Persuasive Writing Feedback"){
console.log("Persuasive Writing Feedback","Level 3",
"age 10 to 12");

prompt=`Please analyze the persuasive piece written by a 16-year-old. Evaluate its structure, content, grammar, and provide scores based on the following criteria: clarity of argument, logical coherence, persuasive strategies, use of evidence, and overall persuasiveness (on a scale of 1-5). Additionally, provide constructive feedback to help strengthen the persuasive writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}



else if (data.level==3 && data.writingType==="Review Writing Feedback"){
console.log("Review Writing Feedback","Level 3",
"age 10 to 12");


prompt=`Can you please provide feedback on the review written by a 14-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: introduction and summary, critical analysis, use of supporting examples

, engagement, and overall quality (on a scale of 1-5). Additionally, provide constructive feedback to help enhance the review writing skills.
 Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });



}



else if (data.level==3 && data.writingType==="Poetic Writing Feedback"){
console.log("Poetic Writing Feedback","Level 3",
"age 10 to 12");

prompt=`Can you please analyze the poem written by a 15-year-old? Evaluate its structure, content, grammar, and provide scores based on the following criteria: imagery, figurative language, thematic exploration, emotional resonance, and overall impact (on a scale of 1-5). Additionally, provide constructive feedback to help refine the poetic writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}



else if (data.level==3 && data.writingType==="Expository Writing Feedback"){
console.log("Expository Writing Feedback","Level 3",
"age 10 to 12");

prompt=`Please evaluate the expository piece written by a 16-year-old. Analyze its structure, content, grammar, and assign scores based on the following criteria: clarity of topic introduction, logical organization of ideas, use of supporting details and evidence, coherence in explanations, and overall effectiveness (on a scale of 1-5). Additionally, provide constructive feedback to help improve the expository writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}




else if (data.level==3 && data.writingType==="Technical Writing Feedback"){
console.log("Technical Writing Feedback","Level 3",
"age 10 to 12");

prompt=`Can you please provide feedback on the technical writing piece by a 14-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: clarity of instructions, use of appropriate technical terminology, organization of steps, accuracy of information, and overall effectiveness in conveying technical knowledge (on a scale of 1-5). Additionally, provide constructive feedback to help enhance the technical writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });


}


// Level 4


else if(data.level==4 && data.writingType==="Narrative Writing Feedback"){
    console.log("Narrative Writing Feedback","Level 4",
    "age 10 to 12");

    prompt=`Can you please provide feedback on the narrative piece written by a 17-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: plot development, character development, use of descriptive language, narrative techniques, and overall readability (on a scale of 1-5). Additionally, provide constructive feedback to help refine the narrative writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });

}



else if (data.level==4 && data.writingType==="Persuasive Writing Feedback"){
console.log("Persuasive Writing Feedback","Level 4",
"age 10 to 12");

prompt=`Please analyze the persuasive piece written by an 18-year-old. Evaluate its structure, content, grammar, and provide scores based on the following criteria: clarity of argument, logical coherence, persuasive strategies, use of evidence, and overall persuasiveness (on a scale of 1-5). Additionally, provide constructive feedback to help strengthen the persuasive writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });
}



else if (data.level==4 && data.writingType==="Review Writing Feedback"){
console.log("Review Writing Feedback","Level 4",
"age 10 to 12");

prompt=`Can you please provide feedback on the review written by a 16-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: introduction and summary, critical analysis, use of supporting examples, engagement, and overall quality (on a scale of 1-5). Additionally, provide constructive feedback to help enhance the review writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });
}


else if (data.level==4 && data.writingType==="Poetic Writing Feedback"){
console.log("Poetic Writing Feedback","Level 4",
"age 10 to 12");

prompt=`Can you please analyze the poem written by a 17-year-old? Evaluate its structure, content, grammar, and provide scores based on the following criteria: imagery, figurative language, thematic exploration, emotional resonance, and overall impact (on a scale of 1-5). Additionally, provide constructive feedback to help refine the poetic writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });

}


else if (data.level==4 && data.writingType==="Expository Writing Feedback"){
console.log("Expository Writing Feedback","Level 4",
"age 10 to 12");

prompt=`Please evaluate the expository piece written by an 18-year-old. Analyze its structure, content, grammar, and assign scores based on the following criteria: clarity of topic introduction, logical organization of ideas, use of supporting details and evidence, coherence in explanations, and overall effectiveness (on a scale of 1-5). Additionally, provide constructive feedback to help improve the expository writing skills. Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });

}



else if (data.level==4 && data.writingType==="Technical Writing Feedback"){
console.log("Technical Writing Feedback","Level 4",
"age 10 to 12");

prompt=`Can you please provide feedback on the technical writing piece by a 16-year-old? Analyze its structure, content, grammar, and assign scores based on the following criteria: clarity of instructions, use of appropriate technical terminology, organization of steps, accuracy of information, and overall
effectiveness in conveying technical knowledge (on a scale of 1-5). Additionally, provide constructive feedback to help enhance the technical writing skills.
Here is the story "${data.writingInput}"`
    let result = await textGeneration(prompt);

    res.send({ text: result.response });

}


// // Level 5

// else if(data.level==5 && data.writingType==="Narrative Writing Feedback"){
//     console.log("Narrative Writing Feedback","Level 5",
//     "age 10 to 12");
// }

// else if (data.level==5 && data.writingType==="Persuasive Writing Feedback"){
// console.log("Persuasive Writing Feedback","Level 5",
// "age 10 to 12");
// }

// else if (data.level==5 && data.writingType==="Review Writing Feedback"){
// console.log("Review Writing Feedback","Level 5",
// "age 10 to 12");
// }

// else if (data.level==5 && data.writingType==="Poetic Writing Feedback"){
// console.log("Poetic Writing Feedback","Level 5",
// "age 10 to 12");
// }

// else if (data.level==5 && data.writingType==="Expository Writing Feedback"){
// console.log("Expository Writing Feedback","Level 5",
// "age 10 to 12");
// }

// else if (data.level==5 && data.writingType==="Technical Writing Feedback"){
// console.log("Technical Writing Feedback","Level 5",
// "age 10 to 12");
// }



})

}   )

app.listen(3000, () => console.log('Example app listening on port 3000!'))