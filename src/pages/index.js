import Image from "next/image";
import { Inter } from "next/font/google";
import YoutubeVideo from "@/components/player";
import { useEffect, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }
  }, []);
  return (
    <main className="bg-black">
      <div>
        <Head>
          <title>Saindo do ZERO</title>
          <meta
            name="description"
            content="Construa sua liberdade financeira e geográfica!"
          />
        </Head>
      </div>

      <div className="flex justify-center items-center">
        <h1 className="flex text-red-700 text-6xl md:text-9xl p-4 outline-text ">
          <span className="outline-text">ZERO</span>
        </h1>
        <h2 className="absolute text-white text-2xl md:text-4xl">SAINDO DO</h2>
      </div>

      <div className="flex justify-center items-center flex-col font-bold mb-8">
        <p>Construa sua liberdade financeira e geográfica!</p>
        <p>Única coisa que cai do céu é chuva</p>
      </div>

      <div className="bg-black flex justify-center items-center">
        <YoutubeVideo width={width} />
      </div>

      <div className="flex justify-center items-center flex-col font-bold m-4 p-4">
        <span className="flex items-center justify-center mb-2">
          Vagas limitadas, depois que acabarem não venham dizer que eu não
          avisei!
        </span>
        CLICK no link ABAIXO!
      </div>

      <div className="flex w-full items-center animate-bounce mt-4 justify-center">
        <button className="bg-orange-500 text-black mx-auto rounded-full px-2 py-1 text-xl font-bold p-4 m-4 ">
          Clique Aqui
        </button>
      </div>

      <div className="flex justify-center items-center flex-col font-bold m-2 p-2">
        <p>Depoimento dos meus alunos</p>
      </div>
      <div className="flex w-full justify-center items-center">
        <div className="flex mb-8 overflow-x-scroll md:w-2/4 h-[400px] gap-3 m-2 ">
          <Image
            src="/whatsapp1.jpg"
            height={800}
            width={1000}
            alt="whatsapp-image1"
          />

          <Image
            src="/whatsapp2.jpg"
            height={800}
            width={1000}
            alt="whatsapp-image2"
          />

          <Image
            src="/whatsapp2.jpg"
            height={800}
            width={1000}
            alt="whatsapp-image2"
          />
          <Image
            src="/whatsapp2.jpg"
            height={800}
            width={1000}
            alt="whatsapp-image2"
          />
          <Image
            src="/whatsapp2.jpg"
            height={800}
            width={1000}
            alt="whatsapp-image2"
          />
          <Image
            src="/whatsapp2.jpg"
            height={800}
            width={1000}
            alt="whatsapp-image2"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/apresentacao-daniel.jpg"
          height={400}
          width={400}
          alt="whatsapp-image2"
        />
      </div>

      <div className="flex justify-center items-center flex-col font-bold mb-8 mt-1 text-yellow-500 text-xl">
        <p>Prazer, Daniel Klinsman</p>
      </div>

      {/* <div className='flex justify-center items-center flex-col font-bold'> */}
      <div className="flex flex-col gap-5 justify-center items-center m-4 font-bold">
        <span className="flex items-center justify-center md:w-2/4">
          <p>
            Olá! Meu nome é Daniel, trabalho com o marketing digital. Desde que
            comecei a estudar o assunto, há cerca de 4 anos, sempre gostei muito
            da ideia de ser meu próprio chefe e não ter que trabalhar sempre no
            mesmo lugar.
          </p>
        </span>
        <span className="flex items-center justify-center md:w-2/4">
          <p>
            Investi muito tempo para aprender e aprimorar minhas habilidades em
            marketing digital. Foi um processo desafiador, mas muito
            gratificante, que me me permitiu descobrir os segredos e mistérios
            desse universo.
          </p>
        </span>
        <span className="flex items-center justify-center md:w-2/4">
          <p>
            Hoje, sinto que tenho um bom conhecimento para compartilhar e
            pretendo. ajudar outras pessoas a entender e utilizar o marketing
            digital em suas vidas e negócios. Por isso, quero repassar a
            informação da forma mais barata possível, para que todos possam ter
            acesso a esse conhecimento valioso.
          </p>
        </span>
      </div>
      <div className="flex justify-center items-center bg-white text-black text-xl font-bold">
        <h5>FAQ-PERGUNTAS FREQUENTES</h5>
      </div>

      <div className="flex justify-center items-center bg-white text-black text-xl font-bold">
        <ul>
          <li className="mt-4 mb-6">1- Quais as formas de pagamento?</li>
          <li className="mb-6">2- Como terei acesso as aulas?</li>
          <li className="mb-6">3- Como posso tirar minhas dúvidas?</li>
        </ul>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center m-4 font-bold">
        <span className="flex items-center justify-center md:w-2/4">
          <p>
            Saindo de zero é um curso que tem como objetivo ajudar pessoas a
            obterem resultados financeiros utilizando o poder da internet
            através de cursos digitais. Os depoimentos mostrados são negócios e
            vão variar com base no seu esforço, no conhecimento que você
            adquirir e nas forças do mercado que estão além do controle de
            qualquer pessoa.
          </p>
        </span>
      </div>

      <div className="flex justify-center items-center">
        <footer className="flex justify-center items-center ">
          Políticas de privacidade
        </footer>
      </div>
    </main>
  );
}
