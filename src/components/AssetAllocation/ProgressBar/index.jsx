import { useState, useEffect, useRef, useCallback } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styled from "styled-components";
import Button from "../../Button";

const ProgressBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isProgress, setIsProgress] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [gauge, setGauge] = useState(0);
  const intervalRef = useRef(null);

  const handleBackTest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsProgress(true);
      handleProgressBar();
    }, [1000]);
    setTimeout(() => {
      setIsCreating(true);
    }, [10000]);
    setTimeout(() => {
      setIsLoading(false);
      setIsProgress(false);
      setIsCreating(false);
    }, [13000]);
  };

  const handleProgressBar = () => {
    intervalRef.current = setInterval(() => {
      if (gauge >= 100) {
        clearInterval(intervalRef.current);
      } else {
        setGauge((prevGauge) => prevGauge + 1);
      }
    }, 100);
  };

  const antIcon = (
    <LoadingOutlined
      className="icon"
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  {
    isCreating ? (
      <Button />
    ) : (
      <Progress style={{ width: `${gauge}%` }} onChange={handleProgressBar} />
    );
  }

  return (
    <ProgressBarContainer>
      <div className="controller" onClick={handleBackTest}>
        {isLoading ? (
          isProgress ? (
            isCreating ? (
              <Button
                title="생성..."
                icon={<Spin className="spin" indicator={antIcon} />}
                color="black"
                className="loading"
              />
            ) : (
              <Progress
                style={{ width: `${gauge}%` }}
                onChange={handleProgressBar}
              />
            )
          ) : (
            <Button
              title="대기중..."
              icon={<Spin className="spin" indicator={antIcon} />}
              color="black"
              className="loading"
            />
          )
        ) : (
          <Button title="백테스트" className="back-test" />
        )}
      </div>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  .controller {
    width: 210px;
    height: 54px;
    margin-top: 110px;

    .back-test {
      width: 100%;
      height: 53px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 6px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.orange},
        ${({ theme }) => theme.red}
      );
      font-size: 1;
      font-weight: 700;
      cursor: pointer;
    }

    .loading {
      width: 100%;
      height: 54px;
      border: 1px solid ${({ theme }) => theme.orange};

      .spin {
        margin-left: 10px;
        margin-right: -20px;
      }
    }
  }
`;

const Progress = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 210px;
  height: 54px;
  background-color: ${({ theme }) => theme.orange};
  border-radius: 6px;
  transition: width 1s;
`;

export default ProgressBar;
