import styled from "styled-components";
import AssetAllocationAlgorithm from "./AssetAllocationAlgorithm";
import PeriodRebalancing from "./PeriodicRebalancing";
import BandRebalancing from "./BandRebalancing";

const AssetAllocationSetting = () => {
  return (
    <AssetAllocationSettingContainer>
      <AssetAllocationAlgorithm />
      <PeriodRebalancing />
      <BandRebalancing />
      <p>0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)</p>
    </AssetAllocationSettingContainer>
  );
};

const AssetAllocationSettingContainer = styled.div`
  .sub-title {
    margin-top: 38px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
    font-weight: 300;
  }

  p {
    margin: 18px 0;
    color: ${({ theme }) => theme.lightGray};
    font-size: 12px;
  }
`;

export default AssetAllocationSetting;
