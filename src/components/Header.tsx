/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
interface image {
  src: string;
}

const imgLoader = ({ src }: image) => {
  return `/images/common/${src}`;
};

const animation = keyframes`
  from {
    left:20%; 
    width:0;
    background:#fff;
    opacity:0
    /* transform : rotate(0deg); */
  }
  to {
    left:50%;
    width:100%;
    opacity:1;
    /* transform : rotate(360deg); */
  }
`;

const CloseButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  position: relative;
  width: 40px;
  height: 40px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 18px;
    left: 0;
    right: 0;
    height: 4px;
    background: #fff;
    border-radius: 4px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

const LinkMenu = styled.a`
  &:hover {
    &:before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      width: 100%;
      height: 2px;
      margin-left: -35px;
      background-color: #f7bf18;
      animation: ${animation} 0.3s;
    }
  }
`;

const Navi = styled.ul<{ beforeBox: boolean }>`
  ${(props) =>
    props.beforeBox &&
    css`
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 90px;
        width: 100%;
        height: 344px;
        display: block;
        background-color: #ffcb31;
      }
    `}
`;

const Header = () => {
  const menus = [
    {
      title: "회사소개",
      link: "#",
      subMenus: [
        { title: "회사개요", link: "#" },
        { title: "대표인사말", link: "#" },
        { title: "회사비전 및 연혁", link: "#" },
        { title: "고객만족경영", link: "#" },
        { title: "윤리경영", link: "#" },
        { title: "CI소개", link: "#" },
        { title: "위치안내", link: "#" },
      ],
    },
    {
      title: "투자정보",
      link: "#",
      subMenus: [
        { title: "주가정보", link: "#" },
        { title: "재무정보", link: "#" },
        { title: "공시정보", link: "#" },
        { title: "공고사항", link: "#" },
      ],
    },
    {
      title: "대리점안내",
      link: "#",
      subMenus: [
        { title: "대리점소개", link: "#" },
        { title: "지원프로그램", link: "#" },
        { title: "개설절차 및 문의", link: "#" },
        { title: "대리점 개설 신청", link: "#" },
        { title: "계약해지점 안내", link: "#" },
      ],
    },
    {
      title: "홍보센터",
      link: "#",
      subMenus: [
        { title: "사회공헌", link: "#" },
        { title: "영상뉴스", link: "#" },
        { title: "보도기사", link: "#" },
      ],
    },
    {
      title: "채용정보",
      link: "#",
      subMenus: [
        { title: "인재상", link: "#" },
        { title: "채용정보", link: "#" },
        { title: "FAQ", link: "#" },
      ],
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleClick = () => {
    setIsMobileMenu((current) => !current);
  };
  console.log(isMobileMenu);

  return (
    <div className='w-full sm:pl-[15px] pr-[15px]'>
      <div className='lg:flex md:flex sm:hidden flex-row justify-end items-center pt-[7px] lg:max-w-[1200px] m-auto'>
        <div className='relative w-[130px] h-[10px]'>
          <Image
            loader={imgLoader}
            src='logo_kosdaq.png'
            layout='fill'
            objectFit='cover'
            alt='코스닥상장법인'
          />
        </div>
        <Link href='#'>
          <a className='text-[13px] leading-none ml-[20px]'>찾아오시는길</a>
        </Link>
      </div>
      <div className='flex lg:max-w-[1200px] lg:m-auto justify-between leading-none items-center pt-[12px]'>
        <h1>
          <Link href='#'>
            <a className='block relative leading-none w-[155px] h-[42px]'>
              <Image
                loader={imgLoader}
                src='logo.png'
                layout='fill'
                objectFit='cover'
                alt='노랑풍선'
              />
            </a>
          </Link>
        </h1>
        <Navi
          className='items-center w-full justify-end sm:hidden md:flex lg:flex'
          onMouseLeave={() => setIsActive(false)}
          beforeBox={isActive}
        >
          {menus.map((menuData, index) => {
            return (
              <li
                className='relative py-[20px] px-[50px] text-center md:px-[20px]'
                key={index}
              >
                <LinkMenu
                  href={menuData.link}
                  className='relative text-center text-lg leading-none font-noto_m'
                  onMouseOver={() => setIsActive(true)}
                >
                  {menuData.title}
                </LinkMenu>
                {isActive ? (
                  <ul className='absolute inset-y-[59px] left-0 w-full pt-[25px] pb-[25px] h-[344px] bg-[#ffcb31] hover:bg-[#f7bf18]'>
                    {menuData.subMenus.map((subMenuData, index) => {
                      return (
                        <li key={index} className='pt-[10px] pb-[10px]'>
                          <Link href={subMenuData.link}>
                            <a className='block text-[15px] text-center hover:border-b-black'>
                              {subMenuData.title}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </Navi>
        <div
          className='space-y-2 sm:block md:hidden lg:hidden ml-auto'
          onClick={handleClick}
        >
          <div className='w-8 h-0.5 bg-stone-900'></div>
          <div className='w-8 h-0.5 bg-stone-900'></div>
          <div className='w-8 h-0.5 bg-stone-900'></div>
        </div>
        <div
          className={
            "fixed w-full top-0 h-screen z-50 bg-gray-700 p-5 flex flex-col space-y-5 text-white duration-300 " +
            (isMobileMenu ? "translate-x-0" : "translate-x-full")
          }
        >
          <div className='flex justify-between'>
            <Link href='#'>
              <a className='block relative leading-none w-[155px] h-[42px]'>
                <Image
                  loader={imgLoader}
                  src='logo.png'
                  layout='fill'
                  objectFit='cover'
                  alt='노랑풍선'
                />
              </a>
            </Link>
            <CloseButton onClick={handleClick}>
              <span className='sr-only'>메뉴닫기</span>
            </CloseButton>
          </div>
          {menus.map((menuData, index) => {
            return (
              <>
                <ul>
                  <li key={index}>{menuData.title}</li>
                </ul>
                <ul>
                  <li>
                    <Link href={menuData.link}>
                      <a>{menuData.title}</a>
                    </Link>
                  </li>

                  {menuData.subMenus.map((subMenuData, index) => {
                    return (
                      <li key={index}>
                        <Link href={subMenuData.link}>
                          <a>{subMenuData.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
