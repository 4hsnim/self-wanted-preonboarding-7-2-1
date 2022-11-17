import { useEffect, useState } from "react";
import Atoms from "../atoms";
import Molecules from "../molecules";
import request from "../utils/api/axios";

const IssueTemplate = () => {
  const [issues, setIssues] = useState([]);
  const getData = async () => {
    try {
      const data = await request.get("/issues?sort=comments&direction=desc");
      //   setIssues(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Atoms.Container>
      <Atoms.HeaderWrapper>
        <Atoms.Title>Angular/Angular-cli</Atoms.Title>
      </Atoms.HeaderWrapper>
      <Molecules.Issue />
    </Atoms.Container>
  );
};

export default IssueTemplate;
