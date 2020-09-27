import Form from "../components/Form/Form";
import { useState } from "react";
const about = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(showForm === false ? true : false);
    console.log(showForm);
  };
  return (
    <div>
      <h1>{`About me`}</h1>
      {!showForm ? (
        <div>
          <p>
            I am a web technology enthusiast, recently graduated from the
            university. I am interested in building websites and learning new
            technologies. I am looking for new opportunities to grow in the
            world of coding and design.
          </p>
          <p>
            Open-minded, enthusiastic, hardworking and flexible. Motivated
            team-worker, eager to learn new skills.
          </p>
          <div className="socialMedia">
            <p className="findMe">Find me in:</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/yuliya-zarichna/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/">Github</a>
              </li>
            </ul>
          </div>
          <button className="ContactButton" onClick={toggleForm}>
            CONTACT ME
          </button>
        </div>
      ) : (
        <Form />
      )}
      {/* {showForm && <Form />} */}
      <style jsx>{`
        /*  h1 {
          color: #3bb8bd;
          text-shadow: 2px 0px 15px rgba(59, 184, 189, 0.65);
        } */
        /* div:first-child::before {
          margin-top: -40px;
          height: 100%;
          width: 100%;
          content: "";
          z-index: -2;
          position: absolute;
          -webkit-box-shadow: 0px 0px 15px 4px rgba(59, 184, 189, 0.45);
          -moz-box-shadow: 0px 0px 15px 4px rgba(59, 184, 189, 0.45);
          box-shadow: 0px 0px 15px 4px rgba(59, 184, 189, 0.45);
        } */
      `}</style>
    </div>
  );
};

export default about;
