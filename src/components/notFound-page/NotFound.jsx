import { NavLink } from "react-router";
import imgNotFound from "../../assets/images/pageNotFound.png";
import { Footer } from "../footer/Footer";

function NotFound() {
  return (
    <div
      style={{
        margin: "0px auto",
        maxWidth: "500px",
        padding: "20px",
        backgroundColor: "#182c47",
        border: "2px solid #ec7329",
        borderRadius: "10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          maxWidth: "400px",
          height: "auto",
        }}
        src={imgNotFound}
        alt="Page not found"
      />

      <p
        style={{
          width: "100%",
          margin: "0px",
          marginBottom: "20px",
          fontSize: "26px",
          textAlign: "center"
        }}
      >
        Ooooops! Page not found.
      </p>
      <NavLink
        style={{
          backgroundColor: "#ec7329",
          padding: "20px",
          borderRadius: "10px",
        }}
        to="/"
        end
      >
        Go Home
      </NavLink>
    </div>
  );
}

export { NotFound };
