import Layout from "../components/Layout/Layout";
const hobby = (props) => (
  <div>
    <h1> {`Hobby`}</h1>
    <p style={{ marginTop: "40px" }}>Reading</p>
    <p style={{ marginTop: "40px" }}>Exploring</p>
    <p style={{ marginTop: "40px" }}>Ukulele</p>
    <p style={{ marginTop: "40px" }}>Yoga</p>
    <p style={{ marginTop: "40px" }}>Swimming</p>
    <p style={{ marginTop: "40px" }}>Cycling</p>

    <p style={{ marginTop: "40px", color: "red" }}>VALORANT :)</p>
    <style jsx>{`
      /*   h1 {
        color: #fff200;
        text-shadow: 2px 0px 15px rgba(255, 242, 0, 0.65);
      } */
      /* div::before {
        margin-top: -40px;
        height: 100%;
        width: 100%;
        content: "";
        position: absolute;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(255, 242, 0, 1);
        -moz-box-shadow: 0px 0px 15px 4px rgba(255, 242, 0, 1);
        box-shadow: 0px 0px 15px 4px rgba(255, 242, 0, 1);
      } */
    `}</style>
  </div>
);

export default hobby;
