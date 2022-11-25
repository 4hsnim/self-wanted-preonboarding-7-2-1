import Atoms from "../atoms";
import { forwardRef } from "react";

type Issues = {
  issueNumber: number;
  comments: number;
  issueTitle: string;
  user: string;
  createdDate: string;
  ref?: any;
};

const Issue = ({
  issueNumber,
  issueTitle,
  user,
  createdDate,
  comments,
}: Issues) => {
  return (
    <Atoms.IssueWrapper>
      <div>
        <Atoms.IssueText issueTitle>{issueNumber}</Atoms.IssueText>
        <Atoms.IssueText issueTitle>{issueTitle}</Atoms.IssueText>
        <br />
        <Atoms.IssueText issueBody>작성자: {user}</Atoms.IssueText>
        <Atoms.IssueText issueBody>작성일: {createdDate}</Atoms.IssueText>
      </div>
      <Atoms.IssueText issueBody>코멘트: {comments}</Atoms.IssueText>
    </Atoms.IssueWrapper>
  );
};

export default Issue;
