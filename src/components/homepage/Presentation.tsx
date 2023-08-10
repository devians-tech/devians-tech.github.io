import Image from "next/image";

export default function Presentation() {
    return (
        <section className="font-preahvihear pl-32">
        <div className="flex pl-32">
          <Image
            src="/images/arrow-down.svg"
            width={50}
            height={50}
            alt="arrow-down"
          />
          <p>Olá! Somos a <span className="text-second-color">Devians Tech</span></p>
        </div>
        <div className="flex">
        <Image
            src="/images/dev-icon.svg"
            width={200}
            height={200}
            alt="arrow-down"
          />
          <div className="w-3/5 flex flex-col gap-2">
            <p className="text-3xl">Desenvolvedores de software a seu dispor</p>
            <p className="text-6xl">Seu sucesso, nosso <span className="text-second-color">código</span>!</p>

          </div>
        </div>
      </section>
    )
}