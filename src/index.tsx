import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const About = lazy(() => import("./about"));
const Home = lazy(() => import("./home"));
const Contacts = lazy(() => import("./contacts"));

const App: FC = () => (
  <div
    style={{
      display: "grid",
      gridTemplateRows: "min-content 1fr",
      height: "100%",
      position: "absolute",
      width: "100%",
    }}
  >
    <Suspense fallback={"Carregando..."}>
      <BrowserRouter>
        <header
          style={{
            display: "flex",
            padding: "20px",
            justifyContent: "space-around",
            backgroundColor: "cyan",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          <Link
            to={`${
              location.pathname === "/microfrontend-partial"
                ? "/microfrontend-partial"
                : "/"
            }`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Home
          </Link>
          <Link
            to={`${
              location.pathname === "/"
                ? "/about"
                : `${location.pathname}/about`
            }`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            About
          </Link>
          <Link
            to={`${
              location.pathname === "/"
                ? "/contacts"
                : `${location.pathname}/contacts`
            }`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Contacts
          </Link>
          {location.pathname.includes("/microfrontend-partial") && (
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Microfrontend
            </Link>
          )}
        </header>
        <section
          style={{
            display: "flex",
            flexShrink: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
          }}
        >
          <Switch>
            <Route
              exact
              path={["/", "/microfrontend-partial"]}
              component={Home}
            />
            <Route
              path={["/about", "/microfrontend-partial/about"]}
              component={About}
            />
            <Route
              path={["/contacts", "/microfrontend-partial/contacts"]}
              component={Contacts}
            />
          </Switch>
        </section>
      </BrowserRouter>
    </Suspense>
  </div>
);

export default App;
