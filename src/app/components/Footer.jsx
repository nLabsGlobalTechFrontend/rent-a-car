"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

// link / react scroll
import { Link } from "react-scroll";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-20 z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* Logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image
                src={"/icons/logo.png"}
                width={200}
                height={200}
                alt="Footer Logo"
              />
            </Link>
            <div className="text-secondary">
              Haydi, BudemiCar ile yeni rota ve deneyimlere adım atın. Özgürlüğü
              hissedin, anılar biriktirin ve yolculuğun tadını çıkarın!
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">+90 (555)555-5555</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@budemicar.com</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            <div className="flex flex-col items-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
              <h3 className="h3 font-bold mb-8">Yararlı Linkler</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">Istanbul</a>
                </li>
                <li>
                  <a href="">Kariyer</a>
                </li>
                <li>
                  <a href="">Mobil Uygulama</a>
                </li>
                <li>
                  <a href="">Bizimle Çalış</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            <div className="flex flex-col items-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
              <h3 className="h3 font-bold mb-8">Çalışma Saatleri</h3>
              <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-2">
                  <div className="text-secondary">Pzt-Sal:</div>
                  <div className="text-bold">09:00 - 17:00</div>
                </div>
                <div className="flex gap-x-2">
                  <div className="text-secondary">Çar-Per:</div>
                  <div className="text-bold">09:00 - 17:00</div>
                </div>
                <div className="flex gap-x-2">
                  <div className="text-secondary">Cuma:</div>
                  <div className="text-bold">09:00 - 17:00</div>
                </div>
                <div className="flex gap-x-2">
                  <div className="text-secondary">Cmt-Pzr:</div>
                  <div className="text-bold">Kapalı</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
