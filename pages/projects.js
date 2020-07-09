import Layout from "../components/Layout/Layout";
const project = (props) => (
  <div>
    <h1>{`Project`}</h1>
    <style jsx>{`
      /*   h1 {
        color: #457bf5;
        text-shadow: 2px 0px 15px rgba(69, 123, 245, 0.65);
      } */
      div::before {
        margin-top: -40px;
        height: 100%;
        width: 100%;
        content: "";
        position: absolute;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(69, 123, 245, 1);
        -moz-box-shadow: 0px 0px 15px 4px rgba(69, 123, 245, 1);
        box-shadow: 0px 0px 15px 4px rgba(69, 123, 245, 1);
      }
    `}</style>
  </div>
);

export default project;
