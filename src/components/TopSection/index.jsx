"use client";

import Image from "next/image";

import {
  Wrapper,
  LogoTitle,
  LogoWrapper,
  LogoCaption,
  MetaSection,
  MetaSectionTitle,
  MetaSectionCaption,
  CallToActionsWrapper,
} from "./TopSection.styled";
import { Button } from "@/components/Base/Button";

import LogoImage from "/public/images/logo.png";

export const TopSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <LogoWrapper>
          <Image src={LogoImage} width={140} height={120} alt="logo" />
          <LogoTitle>Lead Generation</LogoTitle>
          <LogoCaption>Company</LogoCaption>
        </LogoWrapper>

        <MetaSection>
          <MetaSectionTitle>
            به راحتی خدمات مورد نیاز خودت رو پیدا کن
          </MetaSectionTitle>
          <MetaSectionCaption>
            اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما
            چیست و چه کارهایی انجام میده
          </MetaSectionCaption>
        </MetaSection>

        <CallToActionsWrapper>
          <Button>مشاوره می‌خوام</Button>
          <Button color="secondary">فرم تماس با ما</Button>
        </CallToActionsWrapper>
      </div>
    </Wrapper>
  );
};
