"use client";

import {
  Wrapper,
  ClientBox,
  ClientLogo,
  MetaSection,
  ClientsWrapper,
  ClientBoxAvatar,
  ClientBoxComment,
  ClientLogoWrapper,
  ClientBoxUserJob,
  MetaSectionTitle,
  ClientBoxUserName,
  ClientBoxUserInfo,
  MetaSectionCaption,
  ClientBoxCommentMessage,
} from "./ClientsSection.styled";

import clients from "./clients";

import ClientLogo1 from "/public/images/client-logo-1.png";
import ClientLogo2 from "/public/images/client-logo-2.png";
import ClientLogo3 from "/public/images/client-logo-3.png";

export const ClientSection = () => {
  const clientLogos = [
    ClientLogo1,
    ClientLogo2,
    ClientLogo3,
    ClientLogo1,
    ClientLogo2,
    ClientLogo3,
  ];

  return (
    <Wrapper>
      <div className="container">
        <MetaSection>
          <MetaSectionTitle>مشتریان ما در موردمان چه میگویند</MetaSectionTitle>
          <MetaSectionCaption>
            از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
            خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود
            را ویرایش کنید
          </MetaSectionCaption>
        </MetaSection>

        <ClientsWrapper>
          {clients.map((item, index) => (
            <ClientBox key={index}>
              <ClientBoxAvatar
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt={item.user.name}
              />
              <ClientBoxComment>
                <ClientBoxCommentMessage>
                  {item.comment}
                </ClientBoxCommentMessage>
                <ClientBoxUserInfo>
                  <ClientBoxUserName>{item.user.name}</ClientBoxUserName>
                  <ClientBoxUserJob>{item.user.job}</ClientBoxUserJob>
                </ClientBoxUserInfo>
              </ClientBoxComment>
            </ClientBox>
          ))}
        </ClientsWrapper>

        <ClientLogoWrapper>
          {clientLogos.map((logo, index) => (
            <ClientLogo key={index} src={logo} width={80} height={80} alt="" />
          ))}
        </ClientLogoWrapper>
      </div>
    </Wrapper>
  );
};
