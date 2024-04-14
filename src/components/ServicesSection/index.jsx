"use client";

import {
  Wrapper,
  ServiceBox,
  MetaSection,
  ServicesWrapper,
  MetaSectionTitle,
  ServiceBoxSection,
  MetaSectionCaption,
  ServiceBoxSectionTitle,
  ServiceBoxSectionBadge,
  ServiceBoxSectionCaption,
  ServiceBoxSectionBadgeWrapper,
} from "./ServicesSection.styled";
import { ServicesSectionImage } from "./ServicesSectionImage";

import services from "./services";

export const ServicesSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <MetaSection>
          <MetaSectionTitle>
            ما خدمات زیادی به مشتریان بزرگمان ارائه میدهیم
          </MetaSectionTitle>
          <MetaSectionCaption>
            از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
            خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود
            را ویرایش کنید
          </MetaSectionCaption>
        </MetaSection>

        <ServicesWrapper>
          {services.map((item, index) => (
            <ServiceBox key={index}>
              <ServicesSectionImage
                alt=""
                width={400}
                height={250}
                src={item.image}
                style={{ objectFit: "cover" }}
              />

              <ServiceBoxSection>
                <ServiceBoxSectionTitle>{item.title}</ServiceBoxSectionTitle>
                <ServiceBoxSectionCaption>
                  {item.caption}
                </ServiceBoxSectionCaption>
                <ServiceBoxSectionBadgeWrapper>
                  {item.badges.map((badge, bagdeIndex) => (
                    <ServiceBoxSectionBadge
                      key={bagdeIndex}
                      color={badge.color}
                    >
                      {badge.name}
                    </ServiceBoxSectionBadge>
                  ))}
                </ServiceBoxSectionBadgeWrapper>
              </ServiceBoxSection>
            </ServiceBox>
          ))}
        </ServicesWrapper>
      </div>
    </Wrapper>
  );
};
