import ClientImage from "/public/images/client.png";

const clients = [
  {
    image: {
      src: ClientImage.src,
      width: 86,
      height: 86,
    },
    comment: `این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک
    کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و
    کاربران .اطلاعات بیشتری بدست آورند`,
    user: {
      name: "سهراب یزدانی",
      job: "عنوان شغل، اسم شرکت",
    },
  },
  {
    image: {
      src: ClientImage.src,
      width: 86,
      height: 86,
    },
    comment: `این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک
    کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و
    کاربران .اطلاعات بیشتری بدست آورند`,
    user: {
      name: "علی جوانمردی",
      job: "عنوان شغل، اسم شرکت",
    },
  },
];

export default clients;
