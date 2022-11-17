import styled from "styled-components";
import { css } from "styled-components";

type Props = {
  issueTitle?: boolean;
  issueBody?: boolean;
};

const IssueText = styled.span<Props>`
  margin-right: 1.6rem;
  ${({ issueTitle }) =>
    issueTitle &&
    css`
      ${({ theme }) => theme.fontStyles.issueTitle}
    `}

  ${({ issueBody }) =>
    issueBody &&
    css`
      ${({ theme }) => theme.fontStyles.issueBody}
    `}
`;

export default IssueText;
/* ${({ theme }) => theme.fontStyles.issueTitle} */
