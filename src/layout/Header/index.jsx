import { Link } from "react-router-dom";
import styled from "styled-components";
import { levelList } from "../../constant/level";
import logo from "../../assets/logo.png";

const Header = () => {
  const handleLevel = () => {
    console.log(1);
  };

  return (
    <Positioner>
      <HeaderContainer>
        <header>
          <img src={logo} alt="logo" />
          <div className="button-wrapper">
            <div className="level">
              {levelList.map((level) => (
                <div
                  key={level.level}
                  className={level.name}
                  onClick={handleLevel}
                >
                  {level.level}
                </div>
              ))}
            </div>
            <div className="login-wrapper">
              <Link to="login">로그인 하러가기</Link>
            </div>
          </div>
        </header>
      </HeaderContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  position: sticky;
  left: 0px;
  top: 0px;
  z-index: 99;
  width: 100%;
  background: rgb(14, 14, 14);
`;

const HeaderContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgb(30, 30, 30);

  header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 1020px;
    height: 85px;

    img {
      width: 156px;
      cursor: pointer;
    }

    .button-wrapper {
      display: flex;
      align-items: center;

      .level {
        display: flex;
        width: 211px;
        height: 30px;
        margin-right: 32px;
        margin-top: 8px;
        border-radius: 35px;
        background-color: rgb(30, 30, 30);
        text-align: center;

        .beginner,
        .intermediate,
        .advanced {
          width: 33.3%;
          height: 30px;
          padding-top: 6px;
          border-radius: 35px;
          background-color: inherit;
          font-size: 14px;
          font-weight: 300;
          cursor: pointer;
        }
      }

      .login-wrapper {
        a {
          height: 20px;
          font-size: 14px;
          font-weight: 500;
          color: rgb(236, 38, 38);
          cursor: pointer;
        }
      }
    }
  }
`;

export default Header;
