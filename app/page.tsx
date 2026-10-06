import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import Projects from "./components/ui/Projects";
import Stack from "./components/ui/Stack";
import Experience from "./components/ui/Experience";
import About from "./components/ui/About";
import Contact from "./components/ui/Contact";
import Hud from "./components/ui/Hud";
import SystemProvider from "./components/system/SystemProvider";
import RainCanvas from "./components/system/RainCanvas";
import Cursor from "./components/system/Cursor";
import BootScreen from "./components/system/BootScreen";
import Terminal from "./components/system/Terminal";

export default function Home() {
  return (
    <SystemProvider>
      {/* chuva no fundo de tudo */}
      <RainCanvas />

      {/* brilho quente do ambiente */}
      <div
        aria-hidden
        className="fixed inset-0 z-1 pointer-events-none bg-[#0a0908] bg-[radial-gradient(115%_75%_at_72%_10%,rgba(232,162,74,0.17),rgba(150,80,32,0.08)_42%,rgba(10,9,8,0)_70%),radial-gradient(70%_55%_at_6%_105%,rgba(232,162,74,0.06),rgba(10,9,8,0)_68%)]"
      />

      <Hud />

      <div className="relative z-10 min-h-screen text-[#E6DED3] font-display pb-10.5">
        <Header />
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <About />
        <Contact />
      </div>

      {/* vinheta: escurece as bordas, como o tubo de um CRT */}
      <div
        aria-hidden
        className="fixed inset-0 z-56 pointer-events-none shadow-[inset_0_0_240px_70px_rgba(10,9,8,0.92)]"
      />

      <Terminal />
      <Cursor />
      <BootScreen />
    </SystemProvider>
  );
}
