import ServiceImage from "/public/images/services-3.png";

const services = [
  {
    image: ServiceImage.src,
    title: "طراحی جدید",
    caption:
      "اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید",
    badges: [
      {
        name: "Marketing",
        color: "primary",
      },
      {
        name: "SEO",
        color: "primary",
      },
    ],
  },
  {
    image: ServiceImage.src,
    title: "خدمات مالی",
    caption:
      "اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید",
    badges: [
      {
        name: "Saftey Pay",
        color: "success",
      },
      {
        name: "Best Invest",
        color: "success",
      },
    ],
  },
  {
    image: ServiceImage.src,
    title: "طراحی جدید",
    caption:
      "اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید",
    badges: [
      {
        name: "IT Solution",
        color: "warning",
      },
      {
        name: "Web Design",
        color: "warning",
      },
    ],
  },
];

export default services;
