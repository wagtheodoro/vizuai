
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [step, setStep] = useState("intro");
  const [selectedVisual, setSelectedVisual] = useState("cabeloFeminino");

  const steps = {
    intro: (
      <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-12">
        <img src="/logo-vizuai.png" width={180} className="mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-2">VizuAI</h1>
        <p className="mb-6">Transforme seu visual com inteligência</p>
        <button onClick={() => setStep("home")}>Entrar no App</button>
      </motion.div>
    ),
    home: (
      <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-12">
        <h1 className="text-4xl font-bold mb-2">VizuAI</h1>
        <p className="mb-6">Transforme seu visual com inteligência</p>
        <button onClick={() => setStep("onboarding")}>Começar</button>
      </motion.div>
    ),
    onboarding: (
      <motion.div key="onboarding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-12">
        <h2 className="text-2xl font-semibold mb-4">Mude seu visual</h2>
        <div className="space-x-2">
          <button onClick={() => setSelectedVisual("cabeloFeminino")}>Cabelo Feminino</button>
          <button onClick={() => setSelectedVisual("cabeloMasculino")}>Cabelo Masculino</button>
          <button onClick={() => setSelectedVisual("barba")}>Barba</button>
          <button onClick={() => setSelectedVisual("maquiagem")}>Maquiagem</button>
        </div>
        <button className="mt-6" onClick={() => setStep("simulacao")}>Avançar</button>
      </motion.div>
    ),
    simulacao: (
      <motion.div key="simulacao" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-12">
        <h2 className="text-2xl font-semibold mb-4">Simulação de Estilo</h2>
        <img src={`/simulacoes/${selectedVisual}.png`} alt="Visual" className="mx-auto rounded-xl" width={320} />
        <div className="mt-4 space-x-4">
          <button onClick={() => setStep("favoritos")}>Salvar Visual</button>
          <button onClick={() => setStep("agendamento")}>Próximo</button>
        </div>
      </motion.div>
    ),
    favoritos: (
      <motion.div key="favoritos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-12">
        <h2 className="text-2xl font-semibold mb-4">Visual salvo com sucesso!</h2>
        <button onClick={() => setStep("home")}>Voltar ao início</button>
      </motion.div>
    ),
    agendamento: (
      <motion.div key="agendamento" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-12">
        <h2 className="text-2xl font-semibold mb-4">Agende com um profissional</h2>
        <p className="mb-4">Escolha um dia e horário para atendimento</p>
        <button onClick={() => setStep("home")}>Agendar</button>
      </motion.div>
    )
  };

  return <div>{steps[step]}</div>;
}import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao VizuAI</h1>
      <Image src="/logo.png" alt="Logo do VizuAI" width={200} height={100} />
    </div>
  );
}

