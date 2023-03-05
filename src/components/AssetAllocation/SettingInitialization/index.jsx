import styled from "styled-components";
import Button from "../../Button";

const SettingInitailization = () => {
  const handleSetting = () => {
    localStorage.removeItem("strategyTitle");
    localStorage.removeItem("isAsset");
    localStorage.removeItem("algorithm");
    localStorage.removeItem("periodic");
    localStorage.removeItem("band");
  };

  return (
    <Positioner>
      <SettingInitializaionContainer>
        <Button
          title="↩ 설정 값 초기화"
          color="black"
          className="reset-button"
          onClick={handleSetting}
        />
      </SettingInitializaionContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  display: inline-block;
  width: 100%;
  position: sticky;
  top: 1120px;
  margin-left: 1030px;
`;

const SettingInitializaionContainer = styled.div`
  position: relative;

  .reset-button {
    width: 160px;
    height: 42px;
    border: 1px solid ${({ theme }) => theme.orange};
    border-radius: 25px;
    box-shadow: rgb(62 62 62) 0px 1px 2px 1px;
    color: rgb(207, 207, 207);
    font-size: 16px;
    background-color: ${({ theme }) => theme.backgroundColor};
    cursor: pointer;
  }
`;

export default SettingInitailization;
