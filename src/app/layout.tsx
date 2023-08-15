import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BudemiCar | Premium Car Rentals",
  applicationName: "BudemiCar",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Premium araç kiralama",
    "Lüks otomobil kiralama",
    "BudemiCar premium araç kiralama",
    "En iyi lüks araç kiralama",
    "Uygun fiyatlı premium araçlar",
    "Lüks araç kiralama hizmetleri",
    "Premium otomobil kiralama fiyatları",
    "Lüks araç kiralama avantajları",
    "Online premium araç rezervasyonu",
    "BudemiCar premium kiralık araç seçenekleri",
  ],
  creator: "Enes Şahin",
  authors: [{ name: "Enes" }, { name: "Şahin", url: "https://enessahin.dev" }],
  description:
    "Yolculuğunuzu Özgürce Planlayın: BudemiCar İle Aradığınız Araç Burada Hızlı ve Güvenilir Araç Kiralama Deneyimi - BudemiCar Anahtarları Alın, Maceraya Başlayın: BudemiCar İle Rüya Gibi Bir Sürüş Sizi Bekliyor! Kiralık Araçta Konforun Adı: BudemiCar'ın Geniş Araç Filosunu Keşfedin BudemiCar ile Yeni Rotalara Yelken Açın: Kiralık Araçlarımızla Hayallerinizi Gerçekleştirin Seyahat Etmenin En Akıllı Yolu: BudemiCar Kiralık Araç Hizmeti Uygun Fiyatlarla Lüksün Keyfini Çıkarın: BudemiCar Premium Araç Kiralama Araç Kiralama Deneyimini Yeniden Tanımlıyoruz: BudemiCar ile Konforlu ve Kolay Seyahat BudemiCar ile Yolculuklarınızı Kişiselleştirin: Size Özel Kiralık Araç Seçenekleri Sadece Bir Anahtar Uzağınızda: BudemiCar İle Tatilinizden En İyi Şekilde Yararlanın",
};

import { SearchContextProvider } from "./context/search";
import { Metadata } from "next";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
