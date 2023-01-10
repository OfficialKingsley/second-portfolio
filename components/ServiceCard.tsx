import Image from "next/image";
import React from "react";
import Divider from "./Divider";
import Paragraph from "./Paragraph";

const ServiceCard = ({ image, title, text }) => {
  return (
    <figure className="text-center bg-gray-900 dark:bg-gray-800 cursor-pointer hover:shadow-2xl p-10 rounded-2xl my-10 grow max-w-sm">
      <Image src={image} alt={title} width={100} height={100} />
      <figcaption>
        <h3 className="text-2xl font-medium pt-8 pb-2 text-white">{title}</h3>
        <Divider />
        <Paragraph type={"red"} style={{ maxWidth: "500px" }}>
          {text}
        </Paragraph>
      </figcaption>
    </figure>
  );
};

export default ServiceCard;
