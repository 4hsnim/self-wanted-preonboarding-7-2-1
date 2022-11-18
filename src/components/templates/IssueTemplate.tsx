import { useCallback, useEffect, useState } from "react";
import Atoms from "../atoms";
import Molecules from "../molecules";
import request from "../../utils/api/axios";

const IssueTemplate = () => {
  type ResponseIssue = {
    id: string;
    number: string;
    comments: string;
    title: string;
    user: { login: string };
    created_at: string;
  };

  type Issue = {
    issueId: number;
    issueNumber: number;
    comments: number;
    issueTitle: string;
    user: string;
    createdDate: string;
  };

  const [issues, setIssues] = useState([]);
  const getData = useCallback(async () => {
    try {
      //   const data = await request.get("/issues?sort=comments&direction=desc");
      const response = await request.get("/issues", {
        params: { sort: "comments", direction: "desc" },
      });
      const data = response.data.map((issue: ResponseIssue): Issue => {
        return {
          issueId: Number(issue.id),
          issueNumber: Number(issue.number),
          comments: Number(issue.comments),
          issueTitle: issue.title,
          user: issue.user.login,
          createdDate: issue.created_at,
        };
      });
      console.log(data);
      setIssues(data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Atoms.Container>
      <Atoms.HeaderWrapper>
        <Atoms.Title>Angular/Angular-cli</Atoms.Title>
      </Atoms.HeaderWrapper>
      {issues.map((element: Issue) => (
        <Molecules.Issue
          key={element.issueId}
          issueNumber={element.issueNumber}
          comments={element.comments}
          issueTitle={element.issueTitle}
          user={element.user}
          createdDate={element.createdDate}
        />
      ))}
    </Atoms.Container>
  );
};

export default IssueTemplate;
