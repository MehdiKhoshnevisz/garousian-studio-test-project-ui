"use client";

import Image from "next/image";

import {
  Wrapper,
  Content,
  VideoBox,
  VideoMeta,
  VideoMetaList,
  VideoMetaTitle,
  VideoMetaListItem,
} from "./VideoSection.syled";

import PlayIcon from "/public/icons/play.svg";

export const VideoSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <Content>
          <VideoBox>
            <Image src={PlayIcon} width={46} height={46} alt="" />
          </VideoBox>
          <VideoMeta>
            <VideoMetaTitle>ویدئو معرفی ما را تماشا کنید</VideoMetaTitle>
            <VideoMetaList>
              <VideoMetaListItem>
                از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با
                محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت
                میتوانید متن خود را ویرایش کنید
              </VideoMetaListItem>
              <VideoMetaListItem>
                از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با
                محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت
                میتوانید متن خود را ویرایش کنید
              </VideoMetaListItem>
            </VideoMetaList>
          </VideoMeta>
        </Content>
      </div>
    </Wrapper>
  );
};
