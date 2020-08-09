import Layout from "../components/Layout/Layout";
import Flags from "country-flag-icons/react/3x2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
//console.log(Flags);
const skills = (props) => (
  <div>
    <h1> {`Skills`}</h1>
    <div className="timeline">
      <div className="entry">
        <div className="left">
          <p className="year">Technical skiils</p>
        </div>
        <div className="right">
          <p>
            HTML, CSS, JS, React.js, Node.js, Next.js, React-Native, MS Office,
            MySQL, MongoDB
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
          <p>Personal skiils</p>
        </div>
        <div className="right">
          <p className="">
            Good communication skills developed through work experience, work
            well as a member of a team in isolation, open to different ideas,
            working practices, and cultures
          </p>
        </div>
      </div>

      <div className="entry">
        <div className="left">
          <p>Language skiils</p>
        </div>
        <div className="right">
          <p>English, German, Ukrainian, Russian</p>
          <div className="flags">
            <Flags.GB title="England" className="flag" />
            <Flags.DE title="German" className="flag" />
            <Flags.UA title="Ukraine" className="flag" />
            <Flags.RU title="Russian" className="flag" />
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      /*    h1 {
        color: #96488b;
        text-shadow: 2px 0px 15px rgba(150, 72, 139, 0.65);
      } */
      /* div::before {
        margin-top: -40px;
        height: 100%;
        width: 100%;
        content: "";
        position: absolute;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(150, 72, 139, 1);
        -moz-box-shadow: 0px 0px 15px 4px rgba(150, 72, 139, 1);
        box-shadow: 0px 0px 15px 4px rgba(150, 72, 139, 1);
      } */
    `}</style>
  </div>
);

export default skills;
