import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../store/modules/alloc";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { IoCalendarOutline } from "react-icons/io5";
import { ko } from "date-fns/locale";
import { getMonth, getYear } from "date-fns";
import { yearList, monthList } from "../../../constant/calendar";
import "react-datepicker/dist/react-datepicker.css";

const START_DATE = localStorage.getItem("startDate");
const END_DATE = localStorage.getItem("endDate");

const SetPeriod = () => {
  const [startDate, setStartDate] = useState(
    new Date(START_DATE ? START_DATE : "2003-01-01")
  );
  const [endDate, setEndDate] = useState(
    END_DATE ? new Date(END_DATE) : new Date()
  );
  // const dispatch = useDispatch();
  // const { startDate, endDate } = useSelector((state) => state.alloc);

  const handleStart = (date) => {
    // dispatch(
    //   setAlloc({
    //     type: "startDate",
    //     value: date,
    //   })
    // );
    setStartDate(date);
    localStorage.setItem("startDate", date);
  };

  const handleEnd = (date) => {
    // dispatch(
    //   setAlloc({
    //     type: "endDate",
    //     value: date,
    //   })
    // );
    setEndDate(date);
    localStorage.setItem("endDate", date);
  };

  return (
    <SetPeriodContainer>
      <div className="setting-wrapper">
        <h3>시작일 설정</h3>
        <Calendar
          renderCustomHeader={({ date, changeYear, changeMonth }) => (
            <div className="calendar-header">
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(Number(value))}
              >
                {yearList.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={monthList[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(monthList.indexOf(value))
                }
              >
                {monthList.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
          shouldCloseOnSelect
          dateFormat="yyyy.MM.dd"
          selected={startDate}
          locale={ko}
          onChange={(date) => handleStart(date)}
        />
        <div className="icon">
          <IoCalendarOutline />
        </div>
      </div>
      <div className="setting-wrapper">
        <h3>종료일 설정</h3>
        <Calendar
          renderCustomHeader={({ date, changeYear, changeMonth }) => (
            <div className="calendar-header">
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(Number(value))}
              >
                {yearList.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={monthList[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(monthList.indexOf(value))
                }
              >
                {monthList.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
          shouldCloseOnSelect
          dateFormat="yyyy.MM.dd"
          selected={endDate}
          locale={ko}
          onChange={(date) => handleEnd(date)}
          maxDate={new Date()}
        />
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

    .react-datepicker__header,
    .react-datepicker__header--custom {
      background: ${({ theme }) => theme.borderColor};
    }

    .react-datepicker__month-container {
      width: 320px;
      height: 300px;
      padding: 15px;
      background: ${({ theme }) => theme.borderColor};
      border: 0.5px solid ${({ theme }) => theme.darkGray};
      border-radius: 6px;
    }

    .calendar-header {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      background: ${({ theme }) => theme.borderColor};
      font-weight: 500;

      select {
        background: ${({ theme }) => theme.borderColor};
        border: none;
        outline: none;
        color: ${({ theme }) => theme.textColor};
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
      }

      select:hover {
        background-color: rgb(62, 62, 62);
        border-radius: 10px;
      }

      select + select {
        margin-left: 10px;
      }
    }

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__header {
      margin-bottom: 10px;
      border: none;
      background: ${({ theme }) => theme.borderColor};
    }

    .react-datepicker__month {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0;
      background: ${({ theme }) => theme.borderColor};
    }

    .react-datepicker__week {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background: ${({ theme }) => theme.borderColor};
      font-size: 60px;
    }

    .react-datepicker__day-names {
      display: flex;
      justify-content: space-between;
      background: ${({ theme }) => theme.borderColor};
    }

    .react-datepicker__day-name {
      background: ${({ theme }) => theme.borderColor};
      color: ${({ theme }) => theme.lightGray};
      font-size: 12px;
      font-weight: 700;
    }

    .react-datepicker__day {
      background: ${({ theme }) => theme.borderColor};
      color: ${({ theme }) => theme.lightGray};
      font-size: 13px;
      font-weight: 300;
    }

    .react-datepicker__day--selected {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #ec612680;
      border-radius: 50%;
      font-weight: 500;
    }

    .react-datepicker__day--today {
      color: ${({ theme }) => theme.red};
    }

    .react-datepicker__day--disabled {
      opacity: 0.2;
    }

    .react-datepicker__day--outside-month {
      opacity: 0;
    }
  }
`;

const Calendar = styled(DatePicker)`
  width: 320px;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 6px;
  color: ${({ theme }) => theme.selectTextColor};
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  cursor: text;

  &:hover {
    border: 1px solid ${({ theme }) => theme.textColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.orange};
  }
`;

export default SetPeriod;
