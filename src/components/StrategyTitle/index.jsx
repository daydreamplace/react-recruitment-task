import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setAlloc } from "../../store/modules/alloc";
import styled from "styled-components";
import Button from "../Button";

const STRATEGY_TITLE = localStorage.getItem("strategyTitle");

const StrategyTitle = () => {
  const [isTitle, setIsTitle] = useState(Boolean(STRATEGY_TITLE));
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.alloc);

  useEffect(() => {
    localStorage.setItem("strategyTitle", title);
  }, [title, isTitle]);

  const handleTitle = (e) => {
    let title = e.target.value;
    dispatch(setAlloc({ type: "title", value: title }));
    title.length >= 1 ? setIsTitle(true) : setIsTitle(false);
  };

  const strategySave = async () => {
    try {
      const data = await axios.post();
    } catch (error) {}
  };

  return (
    <StrategyTitleArea>
      <div className="strategy-area-wrapper">
        <div className="strategy-area">
          <div className="input-wrapper">
            <input
              placeholder="전략 이름을 입력해주세요."
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className="button-wrapper">
            <Button
              title="전략 저장"
              color={isTitle ? "orange" : "dark-gray"}
              onClick={() => {
                console.log(1);
              }}
              disabled={isTitle}
            />
          </div>
        </div>
      </div>
    </StrategyTitleArea>
  );
};

const StrategyTitleArea = styled.div`
  position: sticky;
  top: 138px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  height: 100px;

  .strategy-area-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 50px;
    margin-top: 25px;

    .strategy-area {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      .input-wrapper {
        border-bottom: 2px solid ${({ theme }) => theme.textColor};

        input {
          width: 800px;
          height: 45px;
          background: none;
          border: none;
          font-size: 28px;
          font-weight: bold;
          color: ${({ theme }) => theme.textColor};
        }
      }

      .button-wrapper {
      }
    }
  }
`;

export default StrategyTitle;
