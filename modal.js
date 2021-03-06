

// {
//   name: "",
//   image: "",
//   description: ``,
//   shortDescription: "",
//   frontEndTech: [],
//   BackEndTech: [],
//   otherTech: [],
//   skillsLearned: [],
//   dateCreated: "",
//   liveUrl: "",
//   codeUrl: ""
// },


// {
//   name: "Foodgram",
//   image: "foodImage.jpeg",
//   description: `A social media platform to share delicious food images and discover new food dishes at nearby restruants.
//     Users add and share photos a the clickof a button, allowing TensorFlow AI to identify and categorize the
//     food. In addition the user can search for food items around them by image and use google places / geolocate
//     to discover to foods posted by other users to try. (This project is a collaboration of 4 people)`,
//   shortDescription: "Share and discover new food dishes from restruants around you!",
//   frontEndTech: ["test"],
//   BackEndTech: ["test"],
//   otherTech: ["test"],
//   skillsLearned: [
//     "React.js file structure and meteor framework integration.",
//     "Integration of MongoDB.",
//     "Using multiple APIs and NPM package in conjunction with React.js."
//   ],
//   dateCreated: "October, 2017",
//   liveUrl: "#",
//   codeUrl: "https://github.com/daj757/foodgram"
// },



window.onload = function () {

  const modalData = [
    {
      name: "Email Survey Manager",
      image: "emailSurveyManager.png",
      description: `Email Survey Manager is a full-stack React / Redux application allowing users to create and send mass email surveys to 
        collect feedback results from recipients.  MongoDB / Mongoose are used to store data on the backend and authentication is done through 
        Passport.js and Google OAuth.  In addition, I used Sendgrid API to send out emails to chosen recipients and webhooks to retrieve the 
        reciepients responses through SendGrid.  In addition Stripe API is used for handling payments.  Modern ES6 syntax is used throughout 
        the entire application and I have future plans to add more functionality including creating a better UI for creating custom survey emails 
        and more useful statistics displays for survey recipient response data.`,
      shortDescription: `Email Survey Manager is a full-stack React / Redux application allowing users to create and send mass email surveys to 
        collect feedback results from recipients.`,
      frontEndTech: ["Javascript", "Materialize", "CSS", "React.js", "Redux.js"],
      BackEndTech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Axios"],
      otherTech: ["Passport.js", "Google OAuth 2.0", "Cookie Session", "Stripe API", "SendGrid API", "GIT", "GitHub", "Heroku Deployment"],
      skillsLearned: ["Learned how to use the redux with react for an advance javascript front end framework.",
        "Learned how to make use of webhooks to retrieve data from SendGrid API",
        "Learned how to use advanced ES6 concepts to make use of modren javascript",
        "Learned how to handle secure user authentication along with secure hadling of payments by users"],
      dateCreated: "August, 2018",
      liveUrl: "https://emailsurveymanager.herokuapp.com/",
      codeUrl: "https://github.com/dacup72/email-survey-manager"
    },
    {
      name: "NYT Article Search",
      image: "newYorkTimes.png",
      description: `New York Time Article Search is a full-stack ReactJS application that uses the New York Times Article API to allow users to both 
        search and saved articles.  The backend is run Node / Express and connects to MongoDB with Mongoose for the database.  Users can also view the 
        source of the articles they searched for by clicking the view button on each article. `,
      shortDescription: "Full-stack React.js app using the New York Times Article API with MongoDB to give users a great article search app!",
      frontEndTech: ["HTML", "CSS", "Bootstrap", "Javascript", "JSX"],
      BackEndTech: ["MongoDB", "Mongoose", "Node.js", "Express.js", "Axios"],
      otherTech: ["GitHub", "New York Times Articles API"],
      skillsLearned: ["Learned how to make all of the pieces of a full stack React app work together"],
      dateCreated: "June, 2018",
      liveUrl: "https://article-search-app-14.herokuapp.com/",
      codeUrl: "https://github.com/dacup72/NYT-React-Search"
    },
    {
      name: "Clicky Game",
      image: "clickyGame.png",
      description: `Clicky Game is a front end React app that give the user a fun memory test game with images.  The data that keeps track of score 
        and images is stored in a JSON file.  In this game your score is determined by how many images you can click with out clicking one that you 
        have already clicked.  What makes it challenging is that there is a method in react that shuffles all images everytime you click one.  Each 
        successful click adds one point to your score and the top score is also kept track of. Have fun!`,
      shortDescription: "A React.js front end game using a JSON file to store data and difficult image memory tasks to challenge the user!",
      frontEndTech: ["Javascript", "CSS", "Bootstrap", "React.js"],
      BackEndTech: ["Node.js"],
      otherTech: ["Github", "Create-React-App", "Heroku Deployment"],
      skillsLearned: ["Learned how to make use of state and prop updates for the game refresh",
        "Learned how to deploy React app on Heroku",
        "Learned how to create front end with JSX",
        "Learned more about using keyframes with CSS"],
      dateCreated: "May, 2018 ",
      liveUrl: "https://clicky-game3.herokuapp.com/",
      codeUrl: "https://github.com/dacup72/Clicky-Game"
    },
    {
      name: "Flashcard Generator",
      image: "flashcardGenerator.png",
      description: `FlashCard-Generator is designed to be a web-based application that helps users to learn 
        information in an interactive and fun manner. Users are required to sign up with a username and password 
        so that their created cards can be saved and can be reviewed at their leisure.`,
      shortDescription: "A flashcard generating app for studying that uses Firebase for database and authentication!",
      frontEndTech: ["HTML", "CSS", "Bootstrap", "Animate CSS", "Javascript", "jQuery"],
      BackEndTech: ["Firebase Database"],
      otherTech: ["GitHub"],
      skillsLearned: ["Learned how to use authentication with Firebase",
        "Learned to store user data and display it based on login status",
        "Learned how to use Animate CSS"],
      dateCreated: "February 2018",
      liveUrl: "https://dacup72.github.io/Flashcard-Generator/",
      codeUrl: "https://github.com/dacup72/Flashcard-Generator"
    },
    {
      name: "Eat The Burger",
      image: "eatTheBurger.png",
      description: `Eat The Burger is a full-stack app using Javascript and Handlebars templating on the front end and Node / Express js with 
        MySQL / Sequelize for the back end.  The app allows you to create burgers that are saved in the database and that can either be left for 
        other people to "purchase" and "eat" (Select and delete) or eaten by your self!  It was a fun experimentation with SQL and Sequelize in a 
        full-stack application!`,
      shortDescription: `Create your favorite burger with this full-stack application utilizing Node / Express.js and SQL / Sequelize on the back end and 
        Javascript / Handelbars HTML templating on the front end!`,
      frontEndTech: ["HTML", "CSS", "Bootstrap", "Javascript", "Handlebars.js"],
      BackEndTech: ["Node.js", "Express.js", "MySQL", "Sequelize"],
      otherTech: ["Github", "Heroku Deployment"],
      skillsLearned: [
        "Learned how to use an Handlebars html templating with Javascript on the front end",
        "Learned how to deploy a full-stack application and how to solve the potential errors that come along with it",
        "Learned how to integrate MySQL database / Sequelize with Express.js routing in a full stack application"
      ],
      dateCreated: "May, 2018",
      liveUrl: "https://shielded-anchorage-88746.herokuapp.com/",
      codeUrl: "https://github.com/dacup72/burger"
    },
    {
      name: "Bamazon Storefront",
      image: "bamazonCustomer.png",
      description: `Bamazon is a Node.js app the runs through the console and allows 
        for a multi layered store environment to function with mySQL database.  At the customer level users are 
        prompted on the console with Inquirer.js to buy products.  
        On the manager level users are prompted to add inventory and products along with other useful tasks.  
        On the Supervisor level users can veiw total sales and add product departments.`,
      shortDescription: "A Node.js store front run completly on the terminal and storing data with MySQL database!",
      frontEndTech: ["Javascript"],
      BackEndTech: ["Node.js", "SQL Database"],
      otherTech: ["Inquirer.js", "MySQL Workbench", "MAMP", "GitHub"],
      skillsLearned: ["Learned advanced SQL methods including MySQL aliases, GROUP BYs, and JOINS",
        "Learned how to interact with back end solely through Node.js",
        "Learned how to run SQL database on local machine"],
      dateCreated: "March, 2018",
      liveUrl: "#",
      codeUrl: "https://github.com/dacup72/bamazon-storefront"
    },
    {
      name: "Friend Finder",
      image: "friendFinder.jpg",
      description: `Friend Finder is a front and back end application designed to compare saved survey scores in 
        order to discover your best match for a friend.  The back end runs with Node.js 
        and uses Express.js along with Path.js for back end routing.  The database that stores user input from 
        the survey is a simple javascript file expoerting an array of objects.  Have fun finding your match online!`,
      shortDescription: "Take the survey and find friends similar to you with a live Node / Express app!",
      frontEndTech: ["HTML", "Bootstrap", "Javascript", "jQuery"],
      BackEndTech: ["Node.js", "Express.js", "Path.js"],
      otherTech: ["GitHub", "Body-Parser", "Heroku Deployment"],
      skillsLearned: [
        "Learned GET and POST routing through Express.js",
        "Learned how to set up localhost server on local machine to run code",
        "Learned how to deploy code to Heroku"
      ],
      dateCreated: "March, 2018",
      liveUrl: "https://friend-finder-app2.herokuapp.com/",
      codeUrl: "https://github.com/dacup72/FriendFinder"
    },
    {
      name: "LIRI Bot",
      image: "liriBot.png",
      description: `LIRI Bot is a Node.js based application allowing users to access different API's through the terminal / git bash window.  
        Users can do the following: enter a screen name into the "my-tweets" command to get access to specific tweets, enter a song title into the 
        "spotify-this-song" command to search songs, enter a movie name into the "movie-this" command to search movies, or enter the command 
        "do-what-it-says" to have the Node.js file system read a txt file and apply what every commmand is inside of theat files to the applications 
        functionality.  The app makes use of the Spotify, Twitter, and OMDB APIs along with the ability to log your previous search results in a .txt 
        file with Node.js FS.`,
      shortDescription: "LIRI Bot is a Node.js application run in the terminal that allows you to interact with multiple awesome APIs like Twitter!",
      frontEndTech: ["Javascript"],
      BackEndTech: ["Node.js", "Node.js FS", "dotenv"],
      otherTech: ["Twitter API", "OMDB API", "node-spotify-api", "Github"],
      skillsLearned: ["Learned how to access and use multiple APIs in a backend based application",
        "Learned how to read and write to .txt files with Node.js File System",
        "Learned how to protect API keys and use environment variables"],
      dateCreated: "December, 2017",
      liveUrl: "#",
      codeUrl: "https://github.com/dacup72/LIRI-Bot"
    },

    {
      name: "Crystal Collector",
      image: "crystalCollector.png",
      description: `Crystal Collector is a game designed to give the user 4 different crystals 
        (each with randomly generated numbers associated to them) to click on in order to add the 
        crystals value to an accumulatin score. There is a large target score to reach and if the user 
        is able to match the target score with their accumulated score then the user wins. If the user 
        goes over the target score with their accumulated score then the user loses.`,
      shortDescription: "Javascript based game using random numbers to challenge users!",
      frontEndTech: ["HTML", "CSS", "Javascript", "jQuery", "Webflow"],
      BackEndTech: [],
      otherTech: ["GitHub"],
      skillsLearned: ["Learned how to utilize Webflow styling.",
        "Made use of objects to store hidden numeric values on crystals."],
      dateCreated: "October, 2017",
      liveUrl: "https://dacup72.github.io/Crystal-Collector-Game/",
      codeUrl: "https://github.com/dacup72/Crystal-Collector-Game"
    },
    {
      name: "Trivia Game",
      image: "triviaGame.png",
      description: `This Trivia Game presents the player with a series of timed random trive questions to 
        answer.  If the user fails to answer any current question in the available time then the game will 
        count it as incorrect and move you to the next question.  At the end of the game you will be presented 
        with your total scores. Good luck!`,
      shortDescription: "Trivia game app using javascript timers to present a challenge!",
      frontEndTech: ["HTML", "CSS", "Javascript", "jQuery"],
      BackEndTech: [],
      otherTech: ["GitHub"],
      skillsLearned: ["Learned how to used object based javascript for functions and data",
        "Implemented a well controlled javascript timer"],
      dateCreated: "Janurary, 2018",
      liveUrl: "https://dacup72.github.io/Trivia-Game/",
      codeUrl: "https://github.com/dacup72/Trivia-Game"
    },
    {
      name: "Giftastic",
      image: "giftastic.png",
      description: `Giftastic is a simple application making use of the [Giphy API](https://developers.giphy.com/) 
        to display gifs to users and allow users to pick which gifs they want to save as their favorites.  
        The app uses an AJAX call to get a json response from the giphy api and then displays each gif recieved 
        back on the page.  The gifs can toggle their animation by clicking on them or saved to a favorites 
        section by double clicking on them.  Users can also create their own buttons to search for different 
        gifs.`,
      shortDescription: "App for searching through giphys utilizing Giphy API!",
      frontEndTech: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery", "AJAX"],
      BackEndTech: [],
      otherTech: ["GitHub", "Giphy API"],
      skillsLearned: ["Learned to use AJAX calls to recieve data from APIs",
        "Learned how to create a double click event with DATE object in Javascript"],
      dateCreated: "February, 2018",
      liveUrl: "https://dacup72.github.io/Giftastic/",
      codeUrl: "https://github.com/dacup72/Giftastic"
    },
    {
      name: "Train Scheduler",
      image: "trainScheduler.png",
      description: `Train Scheduler is an application that allows users to submit train information to a 
        database and observe the train arrival time update in realtime.  I used Firebase as the realtime 
        database to store the train information and Moment.js to work with dates and time more easily and 
        display them to the user.  Anytime the database is updates with a new train or the page is refreshed 
        the train times will be updated.`,
      shortDescription: "Train time scheduling app using moment.js and Firebase Database",
      frontEndTech: ["HTML", "Bootstrap", "Javascript", "jQuery", "Moment.js"],
      BackEndTech: ["Firebase Database"],
      otherTech: ["Github"],
      skillsLearned: ["Learned how to interact with a realtime database in Javascript",
        "Learned how to manipulate dates and time with Moment.js"],
      dateCreated: "February, 2018",
      liveUrl: "https://dacup72.github.io/trainScheduler/",
      codeUrl: "https://github.com/dacup72/trainScheduler"
    },




  ]

  // Constructor
  for (let i = 0; i < modalData.length; i++) {
    const element = modalData[i];
    let frontEnd = "";
    let backEnd = "";
    let other = "";
    let learned = "";

    for (let i = 0; i < element.frontEndTech.length; i++) {
      const skill = element.frontEndTech[i];
      frontEnd += `<li>${skill}</li>`;
    }
    for (let i = 0; i < element.BackEndTech.length; i++) {
      const skill = element.BackEndTech[i];
      backEnd += `<li>${skill}</li>`;
    }
    for (let i = 0; i < element.otherTech.length; i++) {
      const skill = element.otherTech[i];
      other += `<li>${skill}</li>`;
    }
    for (let i = 0; i < element.skillsLearned.length; i++) {
      const skill = element.skillsLearned[i];
      learned += `<li>${skill}</li>`;
    }



    // Modals
    let newModal =
      `
  <!-- Modal 1 / ${element.name}-->
  <div class="portfolio-modal modal fade" id="portfolioModal${i}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${element.name}</h2>
                <br>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${element.image}" alt="${element.name}">
                <p class="Pstyle"><h5><u>Description</u></h5></p>
                <p class="ULstyle">${element.description}</p>
                <hr>
                <p class="Pstyle"><h5><u>Tech Used</u></h5></p>
                <div class="row">
                  <div class="col-lg-4 techBorder">
                    <p>
                      <u>Front-End</u>
                    </p>
                    <ul>
                      ${frontEnd}
                    </ul>
                  </div>
                  <div class="col-lg-4 techBorder">
                    <p>
                      <u>Back-End</u>
                    </p>
                    <ul>
                      ${backEnd}
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <p>
                      <u>Other</u>
                    </p>
                    <ul>
                      ${other}
                    </ul>
                  </div>
                </div>
                <p>
                  <hr>
                </p>
                <p class="Pstyle"><h5><u>Skills Learned</u></h5></p>
                <ul class="ULstyle LIstyle">
                  ${learned}
                </ul>
                <p>
                  <hr>
                </p>
                <ul class="list-inline">
                  <li>Created By: Dylan Acup</li>
                  <li>Date Created: ${element.dateCreated}</li>
                </ul>
                <a href="${element.liveUrl}" target="_blank">
                  <button class="btn btn-primary" type="button" style="background-color: black; border-color: black;">
                    <i class="fa fa-caret-square-o-right"></i>
                    View Project Live
                  </button>
                </a>
                <a href="${element.codeUrl}" target="_blank">
                  <button class="btn btn-primary" type="button" style="background-color: black; border-color: black;">
                    <i class="fa fa-file-code-o"></i>
                    View GitHub Code
                  </button>
                </a>
                <button class="btn btn-primary" data-dismiss="modal" type="button" style="background-color: black; border-color: black;">
                  <i class="fa fa-times"></i>
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
    $("#modalContainer").append(newModal);

    // Projects
    let newProject =
      `
  <!-- ${element.name} -->
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${i}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid projectImage" src="img/portfolio/${element.image}" alt="${element.name}">
          </a>
          <div class="portfolio-caption">
            <h4>${element.name}</h4>
            <hr>
            <p class="text-muted">${element.shortDescription}</p>
          </div>
        </div>
  `;
    $("#projectsContainer").append(newProject);
  }

}