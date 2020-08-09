import Layout from "../components/Layout/Layout";
const education = (props) => {
  return (
    <div>
      <h1>{`Education`}</h1>
      <div className="timeline">
        <div className="entry">
          <div className="left">
            <p className="year">Present</p>
          </div>
          <div className="right">
            <p>Continuous Improvement.</p>
            <p>
              <span>Focus: </span>Web, ReactJS, ThreeJS, AWS
            </p>
            {/*      <ul>
            <li>Rerum sit libero possimus amet excepturi</li>
            <li>
              Exercitationem enim dolores sunt praesentium dolorum praesentium
            </li>
            <li>
              Modi aut dolores dignissimos sequi sit ut aliquid molestias
              deserunt illo
            </li>
          </ul> */}
          </div>
        </div>
        <div className="entry">
          <div className="left">
            <p>Oct 2016-Apr 2020</p>
          </div>
          <div className="right">
            <p>
              <span>Bachelor:</span> Medieninformatik HTW Berlin
            </p>
            <p>
              <span>Focus: </span>Web Technologie
            </p>
            <p>
              <span>Thesis: </span>"Dorm Club: Social application of a student
              dormitory"
            </p>
            <p className="rightDescription">
              Designed and implemented a mobile application "Dorm Club" as a
              standard model of information for the residents of the
              dormitories. The goal was to connect all dormitory residents and
              bring them on a platform to interact and exchange information with
              each other.
            </p>
          </div>
        </div>

        <div className="entry">
          <div className="left">
            <p>Sep 2005-dec 2010</p>
          </div>
          <div className="right">
            <p>
              <span>Bachelor:</span> Computer Technologies and System of
              Publication and Printing Production, Ukraine
            </p>
            <p>
              <span>Focus: </span>Prepress, Layout and editing, Color
              reproduction
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        /*  h1 {
          color: #005b18;
          text-shadow: 2px 0px 15px rgba(0, 91, 24, 0.65);
        } */
        /* .container::before {
          margin-top: -40px;
          height: 100%;
          width: 100%;
          content: "";
          position: absolute;
          -webkit-box-shadow: 0px 0px 15px 4px rgba(0, 91, 24, 1);
          -moz-box-shadow: 0px 0px 15px 4px rgba(0, 91, 24, 1);
          box-shadow: 0px 0px 15px 4px rgba(0, 91, 24, 1);
        } */
      `}</style>
    </div>
  );
};

export default education;
