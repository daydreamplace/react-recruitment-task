import styled from "styled-components";
import AssetAllocationSetting from "./AssetAllocationSetting";
import AssetGroupsAdd from "./AssetGroupsAdd";
import SetPeriod from "./SetPeriod";
import Button from "../Button";

const AssetAllocation = () => {
  return (
    <AssetAllocationContainer>
      <h3 className="title">자산배분 설정</h3>
      <AssetAllocationSetting />
      <h3 className="title margin">자산군 추가</h3>
      <AssetGroupsAdd />
      <h3 className="title margin">기간 설정</h3>
      <SetPeriod />
      <div className="button-positioner">
        <div className="button-wrapper">
          <Button
            title="↩ 설정 값 초기화"
            color="black"
            className="reset-button"
          />
        </div>
      </div>
      <div className="progress-bar">백테스트</div>
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

  .button-positioner {
    display: inline-block;
    width: 100%;
    position: sticky;
    top: 1120px;
    margin-left: 1030px;

    .button-wrapper {
      position: relative;

      .reset-button {
        width: 160px;
        height: 42px;
        border: 1px solid rgb(236, 97, 38);
        border-radius: 25px;
        box-shadow: rgb(62 62 62) 0px 1px 2px 1px;
        color: rgb(207, 207, 207);
        font-size: 16px;
        background-color: rgb(14, 14, 14);
        cursor: pointer;
      }
    }
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
    font-weight: 700;
    cursor: pointer;
  }
`;

export default AssetAllocation;
