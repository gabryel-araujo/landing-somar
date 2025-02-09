import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Antes do Somar Equipes, acompanhar minha equipe externa era um{" "}
              <Mark>grande desafio</Mark>. Agora, tenho tudo na palma da mão, em
              tempo real.Simplesmente indispensável!
            </p>

            <Avatar
              image={userOneImg}
              name="Ricardo L."
              title="Engenheiro Civil"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              <Mark>Perdíamos muito tempo</Mark> organizando informações e
              montando relatórios no Word. Com o Somar Equipes, os relatórios
              são gerados automaticamente.{" "}
              <Mark>Mais controle, menos dor de cabeça!</Mark>
            </p>

            <Avatar
              image={userTwoImg}
              name="Fernanda B."
              title="Coordenadora de procesos"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Com o Somar Equipes, a comunicação com meus funcionários{" "}
              <Mark>melhorou muito</Mark>. Sei onde estão e o que estão fazendo,
              sem precisar ligar o tempo todo.{" "}
              <Mark>O sistema é intuitivo</Mark> e melhorou nosso desempenho!
            </p>

            <Avatar
              image={userThreeImg}
              name="Anderson C."
              title="Supervisor"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={props.image} alt="Avatar" placeholder="blur" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-sky-800 bg-sky-100 rounded-md ring-sky-100 ring-4 dark:ring-sky-900 dark:bg-sky-900 dark:text-sky-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
