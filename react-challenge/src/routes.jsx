import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Projects from "./components/ProjectsPage/ProjectsPage";
import ReactDemoPage from "./components/ReactDemoPage/ReactDemoPage";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "reactdemo",
        element: <ReactDemoPage />,
      }
    ],
  },
];

export default routes;
