import Home from "@/views/m-library/Home";
import Join from "@/views/m-library/Join";
import Main from "@/views/m-library/Main";
import Course from "@/views/m-library/Course";

const m_library_route = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/course/:course",
    name: "Course",
    component: Course,
  },
];

export default m_library_route;
