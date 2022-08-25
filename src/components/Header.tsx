import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface image {
  src: string;
}

const GnbSub = styled.ul<{ hide: boolean }>`
  ${(props) => {
    if (props.hide) {
      return `
        display: block;
        height: 450px;
        width: 100%;
      `;
    } else {
      return `
        display: none;
      `;
    }
  }}
`;

const GnbSubItem = styled.li``;

const imgLoader = ({ src }: image) => {
  return `/images/common/${src}`;
};

const Header = () => {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  return (
    <div className='w-full'>
      <div className='flex lg:w-[1200px] lg:m-auto justify-between'>
        <h1>
          <a href='#'>
            <Image
              loader={imgLoader}
              src='logo.png'
              width={155}
              height={42}
              alt='노랑풍선'
            />
          </a>
        </h1>
        <ul className='flex' onMouseOver={() => setIsHover(!isHover)}>
          <li>
            <a href='#'>회사소개test</a>
            <GnbSub hide={isHover}>
              <GnbSubItem>
                <a href='#'>회사개요</a>
              </GnbSubItem>
              <GnbSubItem>
                <a href='#'>대표인사말</a>
              </GnbSubItem>
              <GnbSubItem>
                <a href='#'>회사비전 및 연혁</a>
              </GnbSubItem>
              <GnbSubItem>
                <a href='#'>고객만족경영</a>
              </GnbSubItem>
              <GnbSubItem>
                <a href='#'>윤리경영</a>
              </GnbSubItem>
              <GnbSubItem>
                <a href='#'>CI소개</a>
              </GnbSubItem>
              <GnbSubItem>
                <a href='#'>위치안내</a>
              </GnbSubItem>
            </GnbSub>
            <ul></ul>
          </li>
          <li>
            <a href='#'>투자정보</a>
            {/* <ul>
              <li>
                <a href='#'>주가정보</a>
              </li>
              <li>
                <a href='#'>재무정보</a>
              </li>
              <li>
                <a href='#'>공시정보</a>
              </li>
              <li>
                <a href='#'>공고사항</a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href='#'>대리점안내</a>
            {/* <ul>
              <li>
                <a href='#'>대리점소개</a>
              </li>
              <li>
                <a href='#'>지원프로그램</a>
              </li>
              <li>
                <a href='#'>개설절차 및 문의</a>
              </li>
              <li>
                <a href='#'>대리점 개설 신청</a>
              </li>
              <li>
                <a href='#'>계약해지점 안내</a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href='#'>홍보센터</a>
            {/* <ul>
              <li>
                <a href='#'>사회공헌</a>
              </li>
              <li>
                <a href='#'>영상뉴스</a>
              </li>
              <li>
                <a href='#'>보도기사</a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href='#'>채용정보</a>
            {/* <ul>
              <li>
                <a href='#'>인재상</a>
              </li>
              <li>
                <a href='#'>채용정보</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
