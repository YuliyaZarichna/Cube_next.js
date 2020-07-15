import Layout from "../components/Layout/Layout";

export default function Home() {
  console.log("Index");

  return (
    <div>
      <h1 className="title" style={{ textTransform: "none" }}>
        Hi there, I am Yuliya!
      </h1>
      <p className="clickOnCube">Click on cube sides to know me better :)</p>
    </div>
  );
}
