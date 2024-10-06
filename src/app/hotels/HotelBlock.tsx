"use client";

import Image from "next/image";

type HotelBlockProps = {
  id: string;
  name: string;
  capacity: number | string;
};

export default function HotelBlock({ id, name, capacity }: HotelBlockProps) {
  const imageLoader = ({ src }: { src: string }) => {
    return `/hotels/${src}.jpeg`;
  };

  return (
    <div className="hotel-block">
      <h2 className="hotel-name">{name}</h2>
      <p className="hotel-capacity">Capacity: {capacity}</p>
      <Image
        src={id} // `id` is used as the image source filename
        alt={`${name} Hotel`}
        width={300}
        height={300}
        loader={imageLoader}
      />
    </div>
  );
}
