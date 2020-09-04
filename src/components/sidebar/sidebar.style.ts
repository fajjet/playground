import styled from "@emotion/styled";

export const Root = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  background: #1c1c1c;

  &:after {
    content: "P";
    position: absolute;
    color: white;
    font-weight: 900;
    top: 0;
    left: 0;
    height: var(--headerHeight);
    width: 100%;
    background-color: #1a548b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }
`;
