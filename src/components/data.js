import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  DocumentIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/screenshots/dasboard-main.png";
import benefitTwoImg from "../../public/screenshots/dashboard-visitas.png";

const benefitOne = {
  title: "Alguns de nossos benefícios",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Acompanhamento de clientes",
      desc: "Acompanhe o andamento de seus clientes com relátórios de visita.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Controle e eficiência na gestão",
      desc: "Dashboard para acompanhar indicadores.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Acesso remoto a arquivos",
      desc: "Upload de arquivos para a equipe técnica acessar de qualquer lugar.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Mais alguns benefícios",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Aplicativo sem ocupar espaço do celular",
      desc: "Somar é projetado para não ocupar memória do seu dispositivo.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Controle de Check-in e Check-out",
      desc: "Acompanhe o horário da chegada e saída de sua equipe",
      icon: <ClockIcon />,
    },
    {
      title: "Relatórios em PDF",
      desc: "Relatório de fotos assinado pelo cliente após finalização do serviço.",
      icon: <DocumentIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
