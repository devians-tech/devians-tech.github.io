import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Presentation from "@/components/homepage/Presentation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary-color h-full text-white flex flex-col gap-16">
      <Header />
      <Presentation />
      <section className="font-preahvihear ml-32 w-3/5 flex flex-col gap-10">
        <h1 className="text-4xl">Desenvolvedores de Software</h1>
        <p className="text-sm leading-8 indent-8">
        Desbravando o futuro digital: bem-vindo(a) a Devians Tech, 
        onde a criatividade encontra a tecnologia e sua visão se torna parte da web. 
        Somos mais que uma empresa de desenvolvimento web, somos artesãos digitais 
        apaixonados por criar experiências virtuais excepcionais. Prezamos pela 
        qualidade de nossas entregas com responsabilidade e respeito aos nossos 
        clientes.
        </p>
      </section>
      <Footer />
    </main>
  );
}
