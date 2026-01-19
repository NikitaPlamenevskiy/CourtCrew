import { NavLink } from "react-router";
import imgNotFound from "../../assets/images/pageNotFound.png";

function NotFound() {
  return (
    <div
      style={{
        margin: "0px auto",
        maxWidth: "500px",
        padding: "20px",
        background: "linear-gradient(#182c47, #161616)",
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
          maxWidth: "100%",
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
          textAlign: "center",
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
