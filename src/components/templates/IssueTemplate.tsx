import Atoms from "../atoms";
import Organisms from "../organisms";

const IssueTemplate = () => {
  return (
    <Atoms.Container>
      <Atoms.HeaderWrapper>
        <Atoms.Title>Angular/Angular-cli</Atoms.Title>
      </Atoms.HeaderWrapper>
      <Organisms.Issues />
    </Atoms.Container>
  );
};

export default IssueTemplate;
