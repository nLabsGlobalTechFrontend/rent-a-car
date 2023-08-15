"use client";

// next image
import Image from "next/image";
// framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "/variants";
// icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Araç Kiralama Deneyimini Yeniden Tanımlıyoruz
          <br />
          <span className="text-bold text-accent-default">BudemiCar</span> ile
          Konforlu ve Kolay Seyahat
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          <span className="text-1xl text-accent-default">BudemiCar</span> ile
          seyahat etmenin avantajlarını yaşayın. Konforlu iç mekanlar, son
          teknoloji güvenlik özellikleri ve kullanıcı dostu rezervasyon
          sistemimizle, seyahatinizin her anını en üst düzeyde
          deneyimleyeceksiniz. Araçlarımız düzenli bakıma tabi tutulur ve her
          yolculuk öncesinde titizlikle temizlenir, böylece güvenli ve hijyenik
          bir sürüş deneyimi yaşamanızı sağlarız.
          <br />
          <span className="text-1xl text-accent-default"> BudemiCar </span>{" "}
          olarak, sizin ihtiyaçlarınızı anlamak ve onları karşılamak en büyük
          önceliğimizdir. Farklı model ve segmentlerdeki araçlarımızla, bireysel
          veya ailecek seyahat eden herkesin gereksinimlerini karşılayacak
          seçeneklere sahibiz. Uygun fiyat politikamız ve esnek rezervasyon
          seçeneklerimizle, her bütçeye uygun çözümler sunarız.
        </motion.p>
        {/* car image */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image src={"/images/why/car.svg"} width={1060} height={420} alt="" />
        </motion.div>
        {/* grid items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent-default mb-4" />
            <h3 className="h3">Araç Kiralamanın Sunduğu Özgürlük</h3>
            <p className="hidden xl:flex">
              BudemiCar, Hayalini kurduğunuz rotalara ulaşmanın en kolay ve hızlı
              yolu olan araç kiralama ile sizlere konforlu bir yolculuk deneyimi
              sunuyoruz.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] text-accent-default mb-4" />
            <h3 className="h3">Müşteri Memnuniyeti Odaklı Hizmet</h3>
            <p className="hidden xl:flex">
              BudemiCar olarak en büyük önceliğimiz müşteri memnuniyetidir.
              Profesyonel ve deneyimli ekibimiz, sizlere en iyi hizmeti sunmak
              için her zaman hazır ve isteklidir.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent-default mb-4" />
            <h3 className="h3">Uygun Fiyatlar, Kaliteli Hizmet</h3>
            <p className="hidden xl:flex">
              BudemiCar olarak, kaliteli hizmetin uygun fiyatlarla
              buluşabileceğine inanıyoruz. Bütçenizi sarsmadan lüks ve konforlu
              bir araç kiralama deneyimi yaşamanızı sağlıyoruz.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
