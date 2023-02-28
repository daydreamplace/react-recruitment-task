import styled from "styled-components";

const DropDown = ({ setIsDropDown }) => {
  return (
    <DropDownContainer>
      <div className="select-option">
        <input readOnly value="1" onClick={() => console.log(11)} />
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
  border: 1px solid ${({ theme }) => theme.darkGray};
  border-radius: 6px;

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

    input:hover {
      border: none;
      background: rgba(255, 255, 255, 0.08);
    }

    input:focus {
      outline: none;
      background: rgba(236, 97, 38, 0.3);
    }
  }
`;

export default DropDown;
