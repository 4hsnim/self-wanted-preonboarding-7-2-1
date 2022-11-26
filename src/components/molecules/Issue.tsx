import Atoms from "../atoms";
import { formatDate } from "../../utils/feature/date";

type Issues = {
  issueNumber: number;
  comments: number;
  issueTitle: string;
  user: string;
  createdDate: string;
};

const Issue = ({
  issueNumber,
  issueTitle,
  user,
  createdDate,
  comments,
}: Issues) => {
  const cutString = (string: string) => {
    if (string.length > 30) {
      string = string.slice(0, 30) + ".....";
    }
    return string;
  };

  const formattedCreatedDate = formatDate(createdDate);

  return (
    <Atoms.IssueWrapper>
      <div style={{ width: "500px" }}>
        <Atoms.IssueText issueTitle>{issueNumber}</Atoms.IssueText>
        <Atoms.IssueText issueTitle>{cutString(issueTitle)}</Atoms.IssueText>
        <Atoms.IssueText issueBody>작성자: {user}</Atoms.IssueText>
        <Atoms.IssueText issueBody>
          작성일: {formattedCreatedDate}
        </Atoms.IssueText>
      </div>
      <Atoms.IssueText issueBody display="inline-block">
        코멘트: {comments}
      </Atoms.IssueText>
    </Atoms.IssueWrapper>
  );
};

export default Issue;
