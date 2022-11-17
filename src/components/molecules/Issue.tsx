import Atoms from "../atoms";

const Issue = () => {
  return (
    <Atoms.IssueWrapper>
      <div>
        <Atoms.IssueText issueTitle># 111</Atoms.IssueText>
        <Atoms.IssueText issueTitle># title</Atoms.IssueText>
        <br />
        <Atoms.IssueText issueBody>작성자: name</Atoms.IssueText>
        <Atoms.IssueText issueBody>작성일: 2019년 12월 31일</Atoms.IssueText>
      </div>
      <Atoms.IssueText issueBody>코멘트: 67</Atoms.IssueText>
    </Atoms.IssueWrapper>
  );
};

export default Issue;
