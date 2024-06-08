import image1 from "../Images/tool.png";
import image2 from "../Images/tool.png";
import image3 from "../Images/tool.png";
import image4 from "../Images/soft.png";
import image5 from "../Images/image1.jpg";
import image6 from "../Images/movie.png";
import image7 from "../Images/Todo.png";
import image8 from "../Images/screenshot.png";
import image9 from "../Images/hotel.png";

export const SKILLS = [
    {
        title: "Frontend",
        icon: image4,
        skills: [
            { skill: "HTML5 & CSS", percentage: "80%"},
            { skill: "Bootstrap", percentage: "98%"},
            { skill: "Javascript", percentage: "75%"},
            { skill: "React.js", percentage: "88%"}
        ],
    },
    {
        title: "Backend",
        icon: image4,
        skills: [
            { skill: "Node.js", percentage: "70%"},
            { skill: "Python", percentage: "65%"},
            { skill: "Express.js", percentage: "80%"},
            { skill: "Javascript", percentage: "85%"},
        ],
    },
    {
        title: "Tools",
        icon: image4,
        skills: [
            { skill: "Git & Github", percentage: "85%"},
            { skill: "Visual Studio Code", percentage: "75%"},
            { skill: "Webpack", percentage: "60%"},
            { skill: "Responsive Design", percentage: "88%"}
        ],
    },
    {
        title: "Soft Skills",
        icon: image4,
        skills: [
            { skill: "Problem-solving", percentage: "80%"},
            { skill: "Collaboration", percentage: "98%"},
            { skill: "Attention to Detail", percentage: "75%"},
            { skill: "Team-work", percentage: "90%"}
        ],
    },
    {
        title: "Databases",
        icon: image4,
        skills: [
            { skill: "MY SQL", percentage: "80%"},
            { skill: "Mongo DB", percentage: "90%"},
            { skill: "Postgres", percentage: "75%"},
            // { skill: "", percentage: "90%"}
        ],
    },
    {
        title: "Cloud-Services",
        icon: image4,
        skills: [
            { skill: "AWS", percentage: "80%"},
            { skill: "Google Cloud", percentage: "90%"},
            { skill: "Vercel", percentage: "75%"},
            { skill: "Firebase", percentage: "90%"}
        ],
    },
];
export const WORK_EXPERIENCE = [
    {
        title: "Senior Frontend Developer at Tech Innovators",
        date: "January 2022 - Present",
        responsibilities: [
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
        ],
    },
    {
        title: "Junior Web Developer at Digital Solutions",
        date: "June 2020 - December 2021",
        responsibilities: [
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
        ],
    },
    {
        title: "Frontend Intern at Web Studio",
        date: "May 2019 - August 2019",
        responsibilities: [
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
        ],
    },
    {
        title: "React Developer at Glitex Solutions",
        date: "January 2022 - September 2022",
        responsibilities: [
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
        ],
    },
];
export const PROJECTS = [
    { name: 'Movie App', description: 'A React App that uses TvMazeApi API to fetch and display movies. One is also able to play the movie by being directed to their official site, or download the movie', 
    image: image6, link: 'https://movies-elx3ictfs-neemamwendes-projects.vercel.app/' },
    { name: 'Todo-List App', description: 'A todo list react app that enables one to manage their daily activities in an orderly manner.', 
        image: image7, link: 'https://todo-app-teal-phi-64.vercel.app/' },
    { name: 'Coffee App', description: 'A React coffee App designed to showcase the different variaties of the brands of coffee.' 
        , image: image8, link: 'https://coffee-app-chi.vercel.app/' },
    { name: 'Hotel App', description: 'A Hotel coffee App designed to showcase the different variaties of the brands of coffee.' 
            , image: image9, link: 'https://coffee-app-chi.vercel.app/' },
  ];