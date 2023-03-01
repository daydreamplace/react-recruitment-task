import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { IoCalendarOutline } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";

const SetPeriod = () => {
  const [startDate, setStartDate] = useState(new Date("2003/01/01"));
  const [endDate, setEndDate] = useState(new Date("2023/03/01"));

  return (
    <SetPeriodContainer>
      <div className="setting-wrapper">
        <h3>시작일 설정</h3>
        <Calendar dateFormat="yyyy.MM.dd" selected={startDate} />
        <div className="icon">
          <IoCalendarOutline />
        </div>
      </div>
      <div className="setting-wrapper">
        <h3>종료일 설정</h3>
        <Calendar dateFormat="yyyy.MM.dd" selected={endDate} />
        <div className="icon">
          <IoCalendarOutline />
        </div>
      </div>
    </SetPeriodContainer>
  );
};

const SetPeriodContainer = styled.div`
  display: flex;

  .setting-wrapper {
    position: relative;

    h3 {
      margin: 18px 0px;
      color: ${({ theme }) => theme.textColor};
      font-size: 16px;
      font-weight: 300;
    }

    .icon {
      position: absolute;
      bottom: 1px;
      right: 20px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 46px;
      background: transparent;

      svg {
        color: ${({ theme }) => theme.red};
      }
    }
  }
`;

const Calendar = styled(DatePicker)`
  height: 46px;
  background: rgb(14, 14, 14);
  border: 1px solid rgb(159, 159, 159);
  border-radius: 6px;
  font-size: 16px;
  color: rgb(230, 230, 230);
  cursor: text;
  width: 320px;
  font-weight: 300;
  text-align: center;
`;

export default SetPeriod;
