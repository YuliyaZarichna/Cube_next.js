import Form from "../components/Form/Form";
const about = (props) => (
  <div>
    <h1>{`About me`}</h1>
    <p>
      I recently accomplished a bachelor’s degree in “International Media and
      Computing”, at HTW Berlin. Passionare about building web prototypes and
      applications.
    </p>
    <p>Interested in the frontend spectrum.</p>
    <p>
      Open-minded, enthusiastic, hardworking and flexible. Motivated and eager
      to learn new skills.
    </p>

    <div className="socialMedia">
      <p>Find me in:</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/yuliya-zarichna/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yuliya-zarichna/">Facebook</a>
        </li>
      </ul>
    </div>
    <Form />

    <style jsx>{`
      /*  h1 {
          color: #3bb8bd;
          text-shadow: 2px 0px 15px rgba(59, 184, 189, 0.65);
        } */
      div:first-child::before {
        margin-top: -40px;
        height: 100%;
        width: 100%;
        content: "";
        z-index: -2;
        position: absolute;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(59, 184, 189, 0.45);
        -moz-box-shadow: 0px 0px 15px 4px rgba(59, 184, 189, 0.45);
        box-shadow: 0px 0px 15px 4px rgba(59, 184, 189, 0.45);
      }
    `}</style>
  </div>
);

export default about;
