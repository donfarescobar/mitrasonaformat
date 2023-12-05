import React from "react";

const Home = React.lazy(() => import ("../pages/home"));
const Gallery = React.lazy(() => import ("../pages/gallery"));
const Location = React.lazy(() => import ("../pages/location"));
const Contact = React.lazy(() => import ("../pages/contact"));
const GeneralInsurance = React.lazy(() => import ("../pages/generalInsurance"));
const Contractor = React.lazy(() => import ("../pages/contractor"));
const AllMarine = React.lazy(() => import ("../pages/marine"));
const Engineering = React.lazy(() => import ("../pages/engineering"));
const MotorVehicle = React.lazy(() => import ("../pages/motorVehicle"));
const Property = React.lazy(() => import ("../pages/property"));
const SuretyBond = React.lazy(() => import ("../pages/suretyBond"));
const Liability = React.lazy(() => import ("../pages/liability"));
const SpecificEngineering = React.lazy(() => import ("../pages/engineeringSpecific"));
const SpecificMarine = React.lazy(() => import ("../pages/marineSpecific"));


export const getPublicRoutes = () => [
  {
    path: "/",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Home />,
  },
  {
    path: "/Contact",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Contact />,
  },
  {
    path: "/Location",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Location />,
  },
  {
    path: "/Gallery",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Gallery />,
  },
  {
    path: "/GeneralInsurance",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <GeneralInsurance />,
  },
  {
    path: "/ContractorInsurance",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Contractor />,
  },
  {
    path: "/Liability",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Liability/>,
  },
  {
    path: "/MotorVehicle",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <MotorVehicle/>,
  },
  {
    path: "/Property",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Property/>,
  },
  {
    path: "/SuretyBond",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <SuretyBond/>,
  },
  {
    path: "/AllMarine",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <AllMarine/>,
  },
  {
    path: "/Engineering",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <Engineering/>,
  },
  {
    path: "/engineering/:engineering_path",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <SpecificEngineering/>,
  },
  
  {
    path: "/All-marine/:marine_path",
    index: true,
    caseSensitive: false,
    isDisabled: false,
    element: <SpecificMarine />,
  },
  
];