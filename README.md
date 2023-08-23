1. App Title: Mock App - Game Of Thrones
   Github Page URL: https://thietkhong.github.io/Unit_32.1.6_Capstone_Project_Mock_Game_Of_Thrones_App

2. App purpose to mock a Game of Thrones website app

3. This light mock app posts news of Game of Throne and list all of characters in Game of Thrones.

4. App deployed by using Gitpage and test if it displayed properly on Chrome, Firefox, and MS Edge.

5. App created by using React.js framework.

- Dependency package:
  + npm install react-router-dom

- Install git-pages:
  + npm install gh-pages --save-dev

- Modify package.json file: add the following three lines into respective section.
  
    "name": "react_api_game_of_thrones_exercise",
    "version": "0.1.0",  
    (ADD this line) --> "homepage": "https://thietkhong.github.io/Unit_32.1.6_Capstone_Project_Mock_Game_Of_Thrones_App",  
    "private": true,

    "scripts": {
  
        "predeploy": "npm run build",   <-- (ADD this line) 

        "deploy": "gh-pages -d build",  <-- (ADD this line) 

        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
      },

- Deploy app:
  +  npm run deploy

- API used without needing key to be authenticated:
  + https://ThronesApi.com/api/v2/Characters 
