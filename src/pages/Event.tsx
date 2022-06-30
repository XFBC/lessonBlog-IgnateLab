import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect, useState } from 'react';
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleToggleMobileMenuOpen() {
    setMobileMenuOpen((state) => !state);
  }

  useEffect(() => {
    document.body.style.overflowY = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header open={mobileMenuOpen} toggleOpen={handleToggleMobileMenuOpen} />
      <main className="flex flex-1 flex-col lg:flex-row">
      { slug  ? '' : (
      <div>
         <h1 className="lg:ml-[25px] ml-16 mt-4 lg:text-[2.5rem] lg:leading-tight md:text-3xl text-3xl relative mr-[10px] ">
               Bem vindo ao <strong className="text-blue-500"> Ignate Lab</strong>, <br />
                 Selecione a  <strong className="text-blue-500"> Aula </strong> para iniciar. <br />
                 Bom Estudo !
         </h1>
         <img  className="lg:pl-22 lg:w-full" src="/src/assets/ReactJS-icon.png" alt="bg-react" />
      </div>
      )}

      
        {slug ?
         <Video lessonSlug={slug}/> 
         : <div className="flex-1"></div>}








        <Sidebar open={mobileMenuOpen} />  
      </main>
    </div>
  )
}