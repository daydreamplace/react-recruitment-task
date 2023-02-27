import styled from "styled-components";
import StrategyTitle from "../../components/StrategyTitle";

const Alloc = () => {
  return (
    <Positioner>
      <AllocContainer>
        <StrategyTitle />
      </AllocContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  width: 1020px;
  margin: 0 auto;
`;

const AllocContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 900px;
  background: rgb(14, 14, 14);
`;

export default Alloc;
