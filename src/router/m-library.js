import Home from "@/views/m-library/Home";
import Join from "@/views/m-library/Join";
import Main from "@/views/m-library/Main";
import CourseOverview from "@/views/m-library/CourseOverview";

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
    path: "/course/overview/:id",
    name: "CourseOverview",
    component: CourseOverview,
  },
];

export default m_library_route;
