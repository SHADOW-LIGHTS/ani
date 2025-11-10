import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  const company = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Brand assets",
      href: "#",
    },
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service",
      href: "#",
    },
  ];

  const resources = [
    {
      title: "Blog",
      href: "#",
    },
    {
      title: "Help Center",
      href: "#",
    },
    {
      title: "Contact Support",
      href: "#",
    },
    {
      title: "Community",
      href: "#",
    },
    {
      title: "Security",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      link: "#",
    },
    {
      icon: Github,
      link: "#",
    },
    {
      icon: Instagram,
      link: "#",
    },
    {
      icon: Linkedin,
      link: "#",
    },
    {
      icon: Twitter,
      link: "#",
    },
    {
      icon: Youtube,
      link: "#",
    },
  ];
  return (
    <footer className="relative text-white">
      <div
        className={cn(
          "mx-auto max-w-5xl lg:border-x 2xl:max-w-7xl border-white/10",
          "bg-[radial-gradient(35%_80%_at_30%_0%,rgba(255,255,255,0.1),transparent)]"
        )}
      >
        <div className="absolute inset-x-0 h-px w-full bg-white/10" />
        <div className="grid max-w-5xl 2xl:max-w-7xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-3">
            <a className="w-max" href="#">
              <Image
                src="/threetonesvg.svg"
                alt="ThreeTone Logo"
                width={40}
                height={20}
                className="brightness-0 invert"
              />
            </a>
            <p className="max-w-sm text-balance font-mono text-gray-400 text-sm 2xl:text-base">
              A comprehensive financial technology platform.
            </p>
            <div className="flex gap-2">
              {/* {socialLinks.map((item, index) => (
                <Button
                  key={`social-${item.link}-${index}`}
                  size="icon-sm"
                  variant="outline"
                >
                  <a href={item.link} target="_blank">
                    <item.icon className="size-3.5" />
                  </a>
                </Button>
              ))} */}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-2 md:ml-10">
            <span className="text-gray-500 text-xs 2xl:text-sm">Resources</span>
            <div className="mt-2 flex flex-col gap-2">
              {resources.map(({ href, title }) => (
                <a
                  className="w-max text-sm 2xl:text-base hover:underline"
                  href={href}
                  key={title}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1 md:-ml-2">
            <span className="text-gray-500 text-xs 2xl:text-sm">Company</span>
            <div className="mt-2 flex flex-col gap-2">
              {company.map(({ href, title }) => (
                <a
                  className="w-max text-sm 2xl:text-base hover:underline"
                  href={href}
                  key={title}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 h-px w-full bg-white/10" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 pb-16">
          {/* <p className="text-center font-light text-gray-400 text-sm 2xl:text-base">
            &copy; {new Date().getFullYear()} efferd, All rights reserved
          </p> */}
        </div>
      </div>
    </footer>
  );
}