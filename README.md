# RTA-Final-project: Real time stock price prediction

Stock price prediction has been a trending topic for a very long time now. Given the fact that stock prices can largely vary in short-term windows it essential to develop tools to follow this changes in real time. To have a closer look into how this could be done, this project aims to predict Amazon stock prices at an interval of every two minutes. 

The project contains the following files (scripts):
1. Data description and model.ipnyb
2. Python Web Server.ipnyb
3. script.js
4. index.html

Below you will find a short description of their contents as well as the required resources to be able to run the project in your localhost:

## 1. Data description and model.ipnyb
Gives an introduction of the Behavior of Stock-Market Prices for the chosen company (Amazon), and how the data is gathered and transformed. Also, gives a brief explanation of selected model for forecasting and its limitations. 

## 2. Python Web Server.ipnyb
Contains Web server that runs the model and retrieves data in JSON format.

## 3. Java Script web server (script.js and index.html)
*script.js* contains the development of a second web server in apache that requests data from python server and creates the visualization in JavaScript. *index.html* retrieves the web page distribution in html(visualization). The most important html element in *index.html* is the Canvas element that contains the graph.  

To be be able run it in your PC it is necessary to download XAMPP which contains the Apache HTTP Server. The Apache HTTP Server  Project is an open-source HTTP server for modern operating systems including UNIX and Windows, it allows us to create a local server that will host the web page containing the JavaScript and html. XAMPP can be downloaded in the following link: https://www.apachefriends.org/es/download.html
