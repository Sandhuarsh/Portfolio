
import news from "../assets/news.jpg";
import text from "../assets/text.jpg";
import spotify from "../assets/spotify.jpg";
import portfolio from "../assets/portfolio.jpeg";
import restaurant from "../assets/restaurant.jpg"
import todo from "../assets/todo.jpg"
const ProjectCardData=[
    {
        imgsrc:portfolio,
        title:"Portfolio",
        text:"Created A Portfolio Website Which Contains Information regarding me like my skills, my projects ,my contact details etc. This Website is created with the help of technologies like React js and manymore.",
        view:"<Link to="/"></Link>", 
        source:"https://github.com/Sandhuarsh/Portfolio"
    },
    {
        imgsrc:news,
        title:"News Website",
        text:"NewsBytes is a news app which can be used to grab quick daily news bites. This App include all types of News like Entertainment, Sports, Technology, Business and manymore.",
        view:"https://github.com/Sandhuarsh/NewsBytes",
        source:"https://github.com/Sandhuarsh/NewsBytes",
    },
    {
        imgsrc:restaurant,
        title:"Restaurant Website",
        text:"Created A Restaurant Website using various technologies like React Js, API, Bootstrap etc.This app contains various food Items..",
        view:"https://restaurant-website-murex.vercel.app/",
        source:"https://github.com/Sandhuarsh/Restaurant-Website"
    },
    {
        imgsrc:text,
        title:"TextUtils",
        text:"TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from Uppercase to lowercase and lowercase to Uppercase.",
        view:"https://text-utils-lime.vercel.app/",
        source:"https://github.com/Sandhuarsh/TextUtils",
    },
    {
        imgsrc:todo,
        title:"Todo List App",
        text:"Created a ToDo list app Using technologies like React Js , Bootstrap etc",
        view:"https://todo-list-app3.netlify.app/",
        source:"https://github.com/Sandhuarsh/Todo-list"
    },
    {
        imgsrc:spotify,
        title:"Spotify Clone",
        text:"Created a Spotify Clone Using HTML,CSS & JavaScript Only.",
        view:"https://sparkly-lily-4d5ec8.netlify.app/",
        source:"https://github.com/Sandhuarsh/Spotify-Clone"
    },
];

export default ProjectCardData;