"use client";

import {
  Wrapper,
  MetaSection,
  MetaSectionTitle,
  MetaSectionCaption,
  CallToActionsWrapper,
} from "./ContactUsSection.styled";
import { Button } from "@/components/Base/Button";

export const ContactUsSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <MetaSection>
          <MetaSectionTitle>
            اگر علاقه‌مند به همکاری با ما هستی
          </MetaSectionTitle>
          <MetaSectionCaption>
            از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
            خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود
            را ویرایش کنید
          </MetaSectionCaption>
        </MetaSection>

        <CallToActionsWrapper>
          <Button>ارسال رزومه</Button>
          <Button color="secondary">فرم تماس با ما</Button>
        </CallToActionsWrapper>
      </div>
    </Wrapper>
  );
};
