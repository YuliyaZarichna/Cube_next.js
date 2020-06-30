import Layout from "../components/Layout/Layout";
const about = (props) => (
  <Layout>
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

    <style jsx>{`
      h1 {
        color: #3bb8bd;
        text-shadow: 2px 0px 15px rgba(59, 184, 189, 0.65);
      }
    `}</style>
  </Layout>
);

export default about;
