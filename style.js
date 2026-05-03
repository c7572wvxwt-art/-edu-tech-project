body {
font-family: Arial, sans-serif;
background: #ffe6f0;
color: #333;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
flex-direction: column;
overflow: auto;
}

h1, h2 {
text-align: center;
margin: 20px 0;
color: #ff66b2;
}

.circle {
position: relative;
width: 600px;
height: 600px;
border-radius: 50%;
margin: auto;
}

.center-text {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 24px;
font-weight: bold;
color: #fff;
background: #ff66b2;
padding: 15px 25px;
border-radius: 50%;
border: 3px solid silver;
}

.country-btn {
position: absolute;
width: 120px;
height: 120px;
font-size: 14px;
line-height: 16px;
border-radius: 50%;
background: #ff66b2;
color: white;
border: 3px solid silver;
cursor: pointer;
text-align: center;
transition: transform 0.5s, opacity 0.5s;
opacity: 0;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
word-wrap: break-word;
}

#country-page, #ask-page {
padding: 20px;
text-align: center;
max-width: 700px;
}

#country-text {
line-height: 1.8;
margin-top: 20px;
text-align: justify;
white-space: pre-wrap;
color: #333;
}

button {
margin-top: 20px;
margin-right: 10px;
padding: 15px 25px;
font-size: 18px;
border: 2px solid silver;
border-radius: 10px;
background: #ff66b2;
color: black;
cursor: pointer;
}

#question-input {
width: 80%;
padding: 10px;
font-size: 18px;
margin-top: 20px;
border: 2px solid silver;
border-radius: 8px;
}

#answer-text {
margin-top: 20px;
font-size: 20px;
color: #333;
line-height: 1.6;
}

.hidden { display: none; }

#main-ask-btn {
margin-top: 30px;
padding: 15px 30px;
font-size: 20px;
background: #ff66b2;
color: black;
border-radius: 12px;
border: 2px solid silver;
cursor: pointer;
}