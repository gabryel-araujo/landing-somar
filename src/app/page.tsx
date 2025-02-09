import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Benefícios do Somar"
        title="Por que você deveria usar nosso sistema?"
      >
        O Somar Equipes é um sistema totalmente baseado na nuvem, eliminando a
        necessidade de ocupar espaço no celular dos funcionários ou no
        computador da gestão. Por operar na nuvem, oferece um processamento mais
        eficiente, garantindo maior agilidade e desempenho para o seu dia a dia.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle
        preTitle="Depoimentos"
        title="Veja o que nossos usuários dizem"
      ></SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Dúvidas comuns"></SectionTitle>

      <Faq />
    </Container>
  );
}
