import Layout from "../components/Layout/Layout";
const experience = (props) => (
  <div>
    <h1>{`Experience`}</h1>
    <p style={{ marginTop: "70px" }}>
      Working Student Frontend Developer: <br />
      Scansonic MI GmbH
    </p>
    <h4 style={{ marginTop: "10px" }}>Dec 2018-Present | Berlin, Germany </h4>

    <p style={{ marginTop: "70px" }}>
      Student Internship: Full-Stack Web Development <br />
      IAV Automotive Engineering, Inc
    </p>
    <h4 style={{ marginTop: "10px" }}>Apr 2018-Aug 2010 | Berlin, Germany</h4>

    <style jsx>{`
      /*  h1 {
        color: #ff073a;
        text-shadow: 2px 0px 15px rgba(255, 7, 58, 0.65);
      } */
      div::before {
        margin-top: -40px;
        height: 100%;
        width: 100%;
        content: "";
        position: absolute;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(255, 7, 58, 1);
        -moz-box-shadow: 0px 0px 15px 4px rgba(255, 7, 58, 1);
        box-shadow: 0px 0px 15px 4px rgba(255, 7, 58, 1);
      }
    `}</style>
  </div>
);

export default experience;
