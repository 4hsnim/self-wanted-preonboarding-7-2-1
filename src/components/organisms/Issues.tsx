import { useEffect, useState, useCallback } from "react";
import request from "../../utils/api/axios";
import Molecules from "../molecules";

const Issues = () => {
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
    <>
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
    </>
  );
};

export default Issues;
