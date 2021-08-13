import HomeIcon from "../../img/Home.png";
import ScoreboardIcon from "../../img/scoreboard.png";
import ProfileIcon from "../../img/profile.png";
import HistoryIcon from "../../img/history.png";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: { HomeIcon },
    cName: "nav-text",
    id: 1,
  },
  {
    title: "Scoreboard",
    path: "/scoreboard",
    icon: { ScoreboardIcon },
    cName: "nav-text",
    id: 2,
  },
  {
    title: "History",
    path: "/history",
    icon: { HistoryIcon },
    cName: "nav-text",
    id: 3,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: { ProfileIcon },
    cName: "nav-text",
    id: 4,
  },
  // {
  //   title: "Login",
  //   path: "/login",
  //   icon: { ProfileIcon },
  //   cName: "nav-text",
  //   id: 5,
  // },
];
