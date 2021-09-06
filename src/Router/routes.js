import React from "react";
import SurveyBody from "../components/SurveyBody";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Survey",
    toolbar: () => <p className="text-white">JTI EAS One To One</p>,
    main: () => <SurveyBody />,
  },
];

export default routes;
