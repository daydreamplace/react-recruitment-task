import styled from "styled-components";

const index = () => {
  return (
    <Positioner>
      <AnyContainer></AnyContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  width: 1020px;
  margin: 0 auto;
`;

const AnyContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 900px;
  background: rgb(14, 14, 14);
`;

export default index;
