import styled from "styled-components";

const DropDown = () => {
  return (
    <DropDownContainer>
      <div className="select-option">
        <input readOnly value="1" />
      </div>
      <div className="select-option">
        <input readOnly value="1" />
      </div>
      <div className="select-option">
        <input readOnly value="1" />
      </div>
      <div className="select-option">
        <input readOnly value="1" />
      </div>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 2;
  margin-top: 9px;
  background: ${({ theme }) => theme.backgroundColor};
  border: 1px solid rgb(82, 82, 82);
  border-radius: 4px;

  .select-option {
    position: relative;
    width: 640px;

    input {
      width: 100%;
      height: 36px;
      margin: 0px auto;
      background: ${({ theme }) => theme.selectBoxColor};
      border: 0.5px solid ${({ theme }) => theme.borderColor};
      border-radius: 6px;
      color: ${({ theme }) => theme.selectTextColor};
      text-align: center;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
    }

    input: hover {
      border: none;
      background: rgba(255, 255, 255, 0.08);
    }
  }
`;

export default DropDown;
