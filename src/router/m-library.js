import Home from "@/views/m-library/Home";
import Join from "@/views/m-library/Join";
import Main from "@/views/m-library/Main";

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
];

export default m_library_route;
