import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { levelList } from "../../constant/level";
import logo from "../../assets/logo.png";
import Category from "./Category";

const Header = () => {
  const [selectedLevel, setSelectedLevel] = useState(
    parseInt(localStorage.getItem("selectedLevel")) || 1
  );

  useEffect(() => {
    localStorage.setItem("selectedLevel", selectedLevel);
  }, [selectedLevel]);

  const handleLevel = (index) => {
    setSelectedLevel(index);
  };

  return (
    <Positioner>
      <HeaderContainer>
        <header>
          {/* <img src={logo} alt="logo" /> */}
          <div className="button-wrapper">
            <div className="level">
              {levelList.map((level) => (
                <button
                  key={level.id}
                  className={
                    level.name +
                    `${selectedLevel === level.id ? level.active : ""}`
                  }
                  onClick={() => handleLevel(level.id)}
                >
                  {level.level}
                </button>
              ))}
            </div>
            <div className="login-wrapper">
              <Link to="login">로그인 하러가기</Link>
            </div>
          </div>
        </header>
      </HeaderContainer>
      <Category />
    </Positioner>
  );
};

const Positioner = styled.div`
  position: sticky;
  left: 0px;
  top: 0px;
  z-index: 99;
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor};
`;

const HeaderContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

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
        margin-top: 4px;
        border-radius: 35px;
        background-color: ${({ theme }) => theme.borderColor};
        text-align: center;

        .beginner,
        .intermediate,
        .advanced {
          width: 33.3%;
          height: 30px;
          padding-bottom: 3px;
          border-radius: 35px;
          background-color: inherit;
          font-size: 14px;
          font-weight: 300;
          cursor: pointer;
        }

        .beginner-active {
          background-color: ${({ theme }) => theme.yellow};
          color: ${({ theme }) => theme.black};
          font-weight: 500;
        }

        .intermediate-active {
          background-color: ${({ theme }) => theme.orange};
          color: ${({ theme }) => theme.black};
          font-weight: 500;
        }

        .advanced-active {
          background-color: ${({ theme }) => theme.red};
          color: ${({ theme }) => theme.black};
          font-weight: 500;
        }
      }

      .login-wrapper {
        a {
          height: 20px;
          font-size: 14px;
          font-weight: 500;
          color: ${({ theme }) => theme.red};
          cursor: pointer;
        }
      }
    }
  }
`;

export default Header;
