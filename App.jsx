// import React from "react";
// import "./App.css";
// import Card from "./components/Card";
// import User from "./components/user";
// // import { BookMark } from "lucide-react";
// const jobs = [
//   {
//     brandlogo: "https://cdn.simpleicons.org/google/4285F4",
//     name: "Google",
//     datePosted: "5 days ago",
//     post: "Frontend Developer",
//     tag: "Full Time",
//     tag2: "Junior Level",
//     pay: "$45/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/amazon/FF9900",
//     name: "Amazon",
//     datePosted: "10 days ago",
//     post: "Backend Developer",
//     tag: "Full Time",
//     tag2: "Senior Level",
//     pay: "$60/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/meta/0866FF",
//     name: "Meta",
//     datePosted: "2 weeks ago",
//     post: "React Developer",
//     tag: "Part Time",
//     tag2: "Junior Level",
//     pay: "$40/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/apple/000000",
//     name: "Apple",
//     datePosted: "3 days ago",
//     post: "iOS Developer",
//     tag: "Full Time",
//     tag2: "Senior Level",
//     pay: "$65/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/netflix/E50914",
//     name: "Netflix",
//     datePosted: "1 week ago",
//     post: "UI/UX Designer",
//     tag: "Part Time",
//     tag2: "Junior Level",
//     pay: "$35/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/microsoft/00A4EF",
//     name: "Microsoft",
//     datePosted: "4 days ago",
//     post: "Software Engineer",
//     tag: "Full Time",
//     tag2: "Senior Level",
//     pay: "$55/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/nvidia/76B900",
//     name: "NVIDIA",
//     datePosted: "6 days ago",
//     post: "AI/ML Engineer",
//     tag: "Full Time",
//     tag2: "Junior Level",
//     pay: "$50/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/adobe/FF0000",
//     name: "Adobe",
//     datePosted: "2 weeks ago",
//     post: "Graphic Designer",
//     tag: "Part Time",
//     tag2: "Senior Level",
//     pay: "$45/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/ibm/052FAD",
//     name: "IBM",
//     datePosted: "8 days ago",
//     post: "Cloud Engineer",
//     tag: "Full Time",
//     tag2: "Junior Level",
//     pay: "$38/hour",
//     location: "Mumbai, India",
//   },
//   {
//     brandlogo: "https://cdn.simpleicons.org/oracle/F80000",
//     name: "Oracle",
//     datePosted: "12 days ago",
//     post: "Database Administrator",
//     tag: "Full Time",
//     tag2: "Senior Level",
//     pay: "$58/hour",
//     location: "Mumbai, India",
//   },
// ];
// function App() {
//   return (
//     <div>
//       {jobs.map((elem, index) => (
//         <div key={index}>
//           <img src={elem.brandlogo} width="50" />

//           <h2>{elem.name}</h2>
//           <p>{elem.datePosted}</p>
//           <h3>{elem.post}</h3>
//           <p>{elem.tag}</p>
//           <p>{elem.tag2}</p>
//           <p>{elem.pay}</p>
//           <p>{elem.location}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandlogo: "https://cdn.simpleicons.org/google/4285F4",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/amazon/FF9900",
      name: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/meta/0866FF",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/apple/000000",
      name: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/netflix/E50914",
      name: "Netflix",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/microsoft/00A4EF",
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/nvidia/76B900",
      name: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI/ML Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/adobe/FF0000",
      name: "Adobe",
      datePosted: "2 weeks ago",
      post: "Graphic Designer",
      tag: "Part Time",
      tag2: "Senior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/ibm/052FAD",
      name: "IBM",
      datePosted: "8 days ago",
      post: "Cloud Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://cdn.simpleicons.org/oracle/F80000",
      name: "Oracle",
      datePosted: "12 days ago",
      post: "Database Administrator",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$58/hr",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((elem, index) => (
        <Card key={elem.name} elem={elem} />
      ))}{" "}
    </div>
  );
};

export default App;
