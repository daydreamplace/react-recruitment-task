import styled from "styled-components";
import AssetAllocationSetting from "./AssetAllocationSetting";
import AssetGroupsAdd from "./AssetGroupsAdd";
import SetPeriod from "./SetPeriod";

const AssetAllocation = () => {
  return (
    <AssetAllocationContainer>
      <h3 className="title">자산배분 설정</h3>
      <AssetAllocationSetting />
      <h3 className="title margin">자산군 추가</h3>
      <AssetGroupsAdd />
      <h3 className="title margin">기간 설정</h3>
      <SetPeriod />
    </AssetAllocationContainer>
  );
};

const AssetAllocationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 50px 0;

  .title {
    font-size: 19px;
    font-weight: 500;
  }

  .margin {
    margin: 80px 0px 16px;
  }
`;

export default AssetAllocation;
