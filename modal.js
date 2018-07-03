

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




window.onload = function () {

  const modalData = [
    {
      name: "Friend Finder",
      image: "peopleImage.jpg",
      description: `This full-stack site takes in user surveys and compares their answers with those from other users. 
        The app then displays the name and picture of the user with the best overall match.`,
      shortDescription: "Take the survey and find friends similar to you!",
      frontEndTech: ["HTML", "CSS", "Javascript"],
      BackEndTech: ["test", "test"],
      otherTech: ["test", "test", "test"],
      skillsLearned: [
        "GET, USE, and POST routing through Express.",
        "Use of JSON obejects array to store data.",
        "Ability to pull data from object array and display it to user in a readable format."
      ],
      dateCreated: "August, 2017",
      liveUrl: "https://radiant-coast-57514.herokuapp.com/",
      codeUrl: "https://github.com/dacup72/FriendFinder"
    },
    {
      name: "Eat The Burger",
      image: "burgerImage.jpg",
      description: `This is a burger creater / logger that allowes users to create their own custom burger and to interact with
        those burger by placing them in seperate "available" and "devoured" lists. Node and MySQL are used to query
        and route data in the app while handlebars is used to generate HTML.`,
        shortDescription: "Create your favorite burger and consume all you can!",
      frontEndTech: ["HTML", "CSS", "Javascript"],
      BackEndTech: ["test", "test"],
      otherTech: ["test", "test", "test"],
      skillsLearned: [
        "MySQL database integration.",
        "Deployment of application on Heroku.",
        "Using Object Oriented Models to construct objects."
      ],
      dateCreated: "September, 2017",
      liveUrl: "https://shielded-anchorage-88746.herokuapp.com/",
      codeUrl: "https://github.com/dacup72/burger"
    },
    {
      name: "Foodgram",
      image: "foodImage.jpeg",
      description: `A social media platform to share delicious food images and discover new food dishes at nearby restruants.
        Users add and share photos a the clickof a button, allowing TensorFlow AI to identify and categorize the
        food. In addition the user can search for food items around them by image and use google places / geolocate
        to discover to foods posted by other users to try. (This project is a collaboration of 4 people)`,
      shortDescription: "Share and discover new food dishes from restruants around you!",
      frontEndTech: ["test"],
      BackEndTech: ["test"],
      otherTech: ["test"],
      skillsLearned: [
        "React.js file structure and meteor framework integration.",
        "Integration of MongoDB.",
        "Using multiple APIs and NPM package in conjunction with React.js."
      ],
      dateCreated: "October, 2017",
      liveUrl: "#",
      codeUrl: "https://github.com/daj757/foodgram"
    },
    {
      name: "Crystal Collector",
      image: "crystalCollector.jpg",
      description: `Crystal Collector is a game designed to give the user 4 different crystals 
        (each with randomly generated numbers associated to them) to click on in order to add the 
        crystals value to an accumulatin score. There is a large target score to reach and if the user 
        is able to match the target score with their accumulated score then the user wins. If the user 
        goes over the target score with their accumulated score then the user loses.`,
      shortDescription: "A game to collect crystals wthout going over your limit!",
      frontEndTech: ["HTML", "CSS", "Javascript"],
      BackEndTech: [],
      otherTech: ["GitHub"],
      skillsLearned: ["#"],
      dateCreated: "June, 2017",
      liveUrl: "https://dacup72.github.io/Crystal-Collector-Game/",
      codeUrl: "https://github.com/dacup72/Crystal-Collector-Game"
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