import Container from "@/app/global-components/Container/Container";
import FooterForm from "@/app/global-components/FooterForm/FooterForm";
import Image from "next/image";

export default function Footer() {
  return (
    <section
      id="footer"
      className="bg-black w-full lg:fixed lg:bottom-0 lg:z-[-1] lg:h-[26rem]"
    >
      <footer className="w-full">
        <div className="py-16">
          <Container customClasses="flex flex-col lg:items-center lg:flex-row">
            <div className="basis-2/3 text-white">
              <Image
                src={"/glbitm_logo.png"}
                width={250}
                height={250}
                alt="GL Bajaj"
                className="inline mr-2"
              />
              <Image
                src={"/logo_circle.png"}
                width={80}
                height={80}
                alt="GL Bajaj"
                className="inline mr-2"
              />
              <p className="my-2">CodeClash - a hackathon by GL Bajaj where coders meet, clash and innovate.</p>
            </div>
            <div className="flex items-cente w-full mt-2.5 lg:mt-0 lg:basis-1/3 lg:justify-end">
              <FooterForm />
            </div>
          </Container>
        </div>
        <div className="bg-fluo-green pt-3 relative z-[100]">
          <Container customClasses="flex justify-between items-center">
            <Image
              className="max-w-[10rem] lg:max-w-[15rem] h-auto"
              src="/logo-landscape.png"
              width={815}
              height={144}
              alt="Footer logo"
            />
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://discord.gg/n86fKrPNGG"
                // className="max-w-[1.5rem] h-auto lg:max-w-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/discord.svg"}
                  width={52}
                  height={52}
                  alt="discord"
                />
              </a>
              <a
                href="https://www.instagram.com/codeclash_glbajaj/"
                // className="max-w-[1.5rem] h-auto lg:max-w-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/instagram.svg"}
                  width={39}
                  height={39}
                  alt="instagram"
                />
              </a>
              <a
                href="https://x.com/CodeClashGLB"
                // className="max-w-[1.5rem] h-auto lg:max-w-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/x-twitter.svg"}
                  width={42}
                  height={42}
                  alt="twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/code-clash/"
                // className="max-w-[1.5rem] h-auto lg:max-w-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/linkedin.svg"}
                  width={38}
                  height={38}
                  alt="linkedin"
                />
              </a>
            </div>
          </Container>
          <div className="bg-black text-white mt-2 py-2">
            <p className="text-[0.7rem] text-center leading-tight mb-1">
              Copyright © {new Date().getFullYear()} - All right reserved by{" "}
              <a
                className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600"
                // href=""
                target="_blank"
                rel="noreferrer"
              >
                CodeClash Team
              </a>{" "}
              ❤️
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
