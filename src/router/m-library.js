import Home from "@/views/m-library/Home";
import Join from "@/views/m-library/Join";
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
];

export default m_library_route;
