import styled from "styled-components";

const Button = ({ color, title, onClick, disabled }) => {
  return (
    <ButtonContainer color={color} onClick={onClick} disabled={disabled}>
      <div className="button">{title}</div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  font-weight: 500;
  position: relative;
  background-color: ${(props) =>
    props.color === "orange" && (({ theme }) => theme.orange)};
  width: 136px;
  height: 46px;
  cursor: pointer;

  .button {
    background: transparent;
    color: ${({ theme }) => theme.black};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default Button;
