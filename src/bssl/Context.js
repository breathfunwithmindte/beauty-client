import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useContext, useState, useEffect } from "react"
import useFetch from "./useFetch";

const mainContext = createContext();

const style_light = {
  bg0: "#FFFFFF",
  bg1: "#F5F7F9",
  bg2: "#e9e9e9",
  clr: "#212121",
  clr1: "#283034",
  clr2: "#565656",
  h: "rgba(0,0,0,0.14)",
  p: "1.14rem",
  p1: "0.69rem",
  p2: "0.24rem",
  m: "1.4rem",
  m1: "0.69rem",
  m2: "0.14rem",
  borderr: "1.4rem",
  borderr1: "0.69rem",
  borderr2: "2.5px",
  border: "0.14rem solid rgba(0,0,0,0.14)",
  border1: "0.14rem solid #45494E",
  pr: "#C28D70",
  pr1: "#DA9C71",
  pr2: "",
  prh: "#0a493a9c",
  pclr: "#FFFFFF",
  shadow_len: "0.24rem",
  ppadding: "23vw",
  wpg: "calc(100% - var(--whd))",
  whd: "224px"
};

export const ContextProvider = ({children}) => {
  const [data, loading, error, refetch] = useFetch("/");

  console.log(data, loading, error)
  // const [loading, error, data, refech] = useFetch("asidjsaidjiasjd");

  const [user, setUser] = useState(null);
  const [project, setProject] = useState(new Object());
  const [theme, setTheme] = useState({ mode: "light", style: style_light });
  const [mui_theme, set_mui_theme] = useState(createTheme({
    palette: { mode: "light", primary: { main: theme.style.pr, dark: theme.style.pr1, contrastText: theme.style.pclr } }
  }))

  
  useEffect(() => {
    
    return () => {};
  }, []);

  //if(loading) return <p>loading...</p>
  return (
    <mainContext.Provider value={{ theme, user }}>
      <ThemeProvider theme={mui_theme}>
        <div className="AppWrapper" style={createStyle(theme.style)}>{children}</div>
      </ThemeProvider>
    </mainContext.Provider>
  )
}

export default function useMain () {
  const smth = useContext(mainContext);
  return smth;
}

function createStyle(style) {
  let obj = {};

  for (const key in style) {
    if (Object.hasOwnProperty.call(style, key)) {
      obj[`--${key}`] = style[key];
    }
  }

  return obj;
}