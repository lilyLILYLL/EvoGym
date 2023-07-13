import React from "react";
import Logo from "../assets/Logo.png";
type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="w-full bg-primary-100">
      <div className="justify-between w-5/6 gap-10 py-10 mx-auto md:flex md:flex-row">
        <div className="flex flex-col justify-between gap-4 md:basis-2/5">
          <img alt="Logo" src={Logo} className="w-24 h-6" />
          <p className="text-sm">
            Nullam sed porttitor sapien, et suscipit diam. Sed et eros sit amet
            neque elementum aliquet. Donec commodo dolor non neque congue, et
            ultrices tortor efficitur.
          </p>
          <p>Evogym All Rights Reversed.</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold">Links</p>
          <p className="text-sm">Nullam sed porttitor</p>
          <p className="text-sm">Donec commodo dolor</p>
          <p className="text-sm">Utrices tortor efficitur</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold">Contact Us</p>
          <p className="text-sm">
            Nullam sed porttitor sapien, et suscipit diam.
          </p>
          <p className="text-sm">333425-6825</p>
        </div>
      </div>
    </div>
  );
};
