import styled from "styled-components";
import logo from "../../assets/logo.png";
import { footerList } from "../../constant/footer";

const Footer = () => {
  return (
    <Positioner>
      <FooterContainer>
        <div className="content-wrapper">
          <div className="info-wrapper">
            <img src={logo} alt="logo" />
            <p className="title">주식회사 퀀터스테크놀로지스</p>
            <p>
              대표자명: 이재민 ┃ 주소: 서울특별시 강남구 선릉로 93길 54, 6층
              6062호 (역삼동, 일환빌딩)
            </p>
            <p>사업자등록번호: 245-88-02569</p>
            <p>문의: info@quantus.kr</p>
            <p>
              Tel: 070-4193-5192 (평일 10:00 ~ 17:00, 휴게시간: 12:00 ~ 13:30,
              주말 및 공휴일 휴무)
            </p>
            <p className="copy-right">
              © 2023 Quantus Technologies. All rights reserved.
            </p>
          </div>
          <div className="link-wrapper">
            {footerList.map((el) => (
              <a
                key={el.title}
                href={el.link}
                className={el.className}
                target="_blank"
              >
                {el.title}
              </a>
            ))}
          </div>
        </div>
      </FooterContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  display: flex;
  width: 100%;
  height: 374px;
  background: ${({ theme }) => theme.black};
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  width: 1020px;

  .content-wrapper {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: ${({ theme }) => theme.black};

    .info-wrapper {
      margin-top: 50px;
      background: inherit;

      img {
        width: 156px;
        cursor: pointer;
      }

      .title {
        margin-top: 28px;
        margin-bottom: 16px;
        font-size: 17px;
        font-weight: 500;
        background: inherit;
      }

      p {
        margin: 14px 0;
        background: inherit;
        color: ${({ theme }) => theme.lightGray};
        font-size: 14px;
        font-weight: 300;
      }

      .copy-right {
        margin: 28px 0px 50px;
        background: inherit;
        color: ${({ theme }) => theme.darkGray};
      }
    }

    .link-wrapper {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 340px;
      height: 100%;
      margin-top: 50px;

      .cafe-link {
        border-bottom: 1px solid ${({ theme }) => theme.darkGray};
        color: ${({ theme }) => theme.darkGray};
        text-decoration: none;
        text-align: start;
        font-size: 14px;
        font-weight: 400;
      }

      .link {
        display: block;
        text-align: end;
        color: ${({ theme }) => theme.darkGray};
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
      }
    }
  }
`;

export default Footer;
