import styled from "styled-components";
import AssetAllocationSetting from "./AssetAllocationSetting";
import AssetGroupsAdd from "./AssetGroupsAdd";
import SetPeriod from "./SetPeriod";
import SettingInitailization from "./SettingInitialization";
import ProgressBar from "./ProgressBar";

const AssetAllocation = () => {
  return (
    <AssetAllocationContainer>
      <h3 className="title">자산배분 설정</h3>
      <AssetAllocationSetting />
      <h3 className="title margin">자산군 추가</h3>
      <AssetGroupsAdd />
      <h3 className="title margin">기간 설정</h3>
      <SetPeriod />
      <SettingInitailization />
      <ProgressBar />
    </AssetAllocationContainer>
  );
};

const AssetAllocationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 50px 0;

  .title {
    color: ${({ theme }) => theme.textColor};
    font-size: 19px;
    font-weight: 500;
  }

  .margin {
    margin: 80px 0px 16px;
  }

  .progress-bar {
    position: relative;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 210px;
    height: 53px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 6px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.orange},
      ${({ theme }) => theme.red}
    );
    color: ${({ theme }) => theme.black};
    font-size: 1;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default AssetAllocation;
