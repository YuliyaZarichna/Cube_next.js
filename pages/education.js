import Layout from "../components/Layout/Layout";
const education = (props) => {
  console.log("education", props);
  return (
    <div>
      <h1>{`Education`}</h1>
      <h3>
        Bacherlor of Science: <br />
        International Media and Computing
      </h3>
      <h5>
        Oct 2016-Apr 2020 | University of Applied Sciences | Berlin, Germany 
      </h5>

      <h3>
        Bachelor of Science: <br />
        Computer Technologies and System of Publication and Printing Production
      </h3>
      <h5>Sep 2005-dec 2010 | Ukrainian Academy of Printing | Lviv, Ukraine</h5>
      <style jsx>{`
        /*  h1 {
          color: #005b18;
          text-shadow: 2px 0px 15px rgba(0, 91, 24, 0.65);
        } */
        div::before {
          margin-top: -40px;
          height: 100%;
          width: 100%;
          content: "";
          position: absolute;
          -webkit-box-shadow: 0px 0px 15px 4px rgba(0, 91, 24, 1);
          -moz-box-shadow: 0px 0px 15px 4px rgba(0, 91, 24, 1);
          box-shadow: 0px 0px 15px 4px rgba(0, 91, 24, 1);
        }
      `}</style>
    </div>
  );
};

export default education;
