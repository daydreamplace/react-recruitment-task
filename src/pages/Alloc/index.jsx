import styled from "styled-components";
import StrategyTitle from "../../components/StrategyTitle";
import AssetAllocation from "../../components/AssetAllocation";

const Alloc = () => {
  return (
    <Positioner>
      <AllocContainer>
        <StrategyTitle />
        <AssetAllocation />
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
