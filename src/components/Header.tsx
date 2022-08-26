/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";

interface image {
  src: string;
}

const imgLoader = ({ src }: image) => {
  return `/images/common/${src}`;
};

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
        <ul className='flex items-center'>
          {menus.map((v, index) => {
            return (
              <li className='relative group' key={index}>
                <a href={v.link}>{v.title}</a>
                <ul className='absolute hidden group-hover:block'>
                  {v.subMenus.map((s, index) => {
                    return (
                      <li key={index}>
                        <a href={s.link} className='block'>
                          {s.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
