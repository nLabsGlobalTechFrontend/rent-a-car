"use client";

// next image
import Image from "next/image";
// icons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

// count up
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "/variants";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/car01.png"}
              width={600}
              height={448}
              alt="About Car"
            />
          </motion.div>
          {/* Text & Stats */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Konfor, Güvenlik ve Kolaylık Bir Arada
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                BudemiCar'ın kullanıcı dostu online rezervasyon sistemi
                sayesinde, araç kiralamak hiç bu kadar kolay olmamıştı. Sadece
                birkaç adımda istediğiniz aracı seçin, tarihleri belirleyin ve
                rezervasyonunuzu tamamlayın. Seyahatinizin anahtarları artık çok
                yakınınızda. BudemiCar olarak, sadece bir araba kiralama hizmeti
                sunmuyoruz, aynı zamanda yeni rotaların, anıların ve maceraların
                kapılarını aralıyoruz. Siz de BudemiCar ailesine katılın,
                yolculuklarınızı anahtarlarımızla özgürce yaşayın. Unutulmaz bir
                sürüş deneyimi için bugün bize katılın! BudemiCar ile her
                yolculuk, özgürlüğün ve keyfin birleştiği bir maceraya dönüşür.
                Siz de bu maceraya ortak olun, anahtarları teslim alın ve
                hayatınıza yeni bir yön verin.
              </motion.p>
              {/* stats */}
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent-default mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Araç <br /> Çeşitliliği
                  </div>
                </div>
                {/* rental outles */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent-default mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={350} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Kiralanmış <br /> Araçlar
                  </div>
                </div>
                {/* repair points */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent-default mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={350} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    Geçer not <br /> alan araçlar
                  </div>
                </div>
              </motion.div>
              {/* button */}
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent-default hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                Araçları Gör
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
