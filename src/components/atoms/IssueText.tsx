import styled from "styled-components";
import { css } from "styled-components";

type Props = {
  issueTitle?: boolean;
  issueBody?: boolean;
  display?: string;
};

const IssueText = styled.span<Props>`
  display: ${({ display }) => display};
  width: 8rem;
  margin-right: 1.6rem;

  ${({ issueTitle, theme }) => {
    if (issueTitle) {
      return theme.fontStyles.issueTitle;
    }
  }}

  ${({ issueBody }) =>
    issueBody &&
    css`
      ${({ theme }) => theme.fontStyles.issueBody}
    `}
`;

export default IssueText;
/* ${({ theme }) => theme.fontStyles.issueTitle} */
// ${({ issueTitle }) =>
// issueTitle &&
// css`
//   ${({ theme }) => theme.fontStyles.issueTitle}
// `}
