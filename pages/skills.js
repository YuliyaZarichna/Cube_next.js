import Layout from "../components/Layout/Layout";
const skills = (props) => (
  <Layout>
    <h1> {`Skills`}</h1>

    <h3>Technical skiils</h3>
    <h5>
      HTML, CSS, JS, React.js, Node.js, Next.js, React-Native, MS Office, MySQL,
      MongoDB
    </h5>

    <h3>Personal skiils</h3>
    <h5>
      good communication skills developed through work experience, work well as
      a member of a team in isolation, open to different ideas, working
      practices, and cultures
    </h5>

    <h3>Language skiils</h3>
    <h5>English, German, Ukrainian, Russian</h5>

    <style jsx>{`
      h1 {
        color: #96488b;
        text-shadow: 2px 0px 15px rgba(150, 72, 139, 0.65);
      }
    `}</style>
  </Layout>
);

export default skills;
