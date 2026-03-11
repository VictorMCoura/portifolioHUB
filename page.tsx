import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Cabeçalho / Perfil */}
        <header className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition hover:shadow-md">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Victor Coura</h1>
          <h2 className="text-xl font-medium text-slate-500 mb-5">Desenvolvedor de Software</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Sou um desenvolvedor apaixonado por tecnologia, com foco em engenharia de software e forte interesse em áreas inovadoras como deep learning. Busco constantemente resolver problemas reais através de código limpo, escalável e eficiente.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium">
            <a href="mailto:victor.mcoura@hotmail.com" className="flex items-center text-blue-600 hover:text-blue-800 transition">
              📧 victor.mcoura@hotmail.com
            </a>
            <a href="https://github.com/VictorMCoura" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition">
              🐙 GitHub
            </a>
            <a href="https://www.linkedin.com/in/victor-coura-7ab497286?" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition">
              💼 LinkedIn
            </a>
          </div>
        </header>

        {/* Currículo */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition hover:shadow-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-5 border-b pb-2">Currículo</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong className="text-slate-900">Idiomas:</strong> Português (Nativo), Inglês (Avançado).
            </p>
            <p>
              <strong className="text-slate-900">Experiências:</strong> Sólida experiência prática com diversas linguagens de programação e desenvolvimento de projetos, aplicando boas práticas de código e ferramentas modernas.
            </p>
          </div>
        </section>

        {/* Projetos */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition hover:shadow-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-5 border-b pb-2">Projetos Desenvolvidos</h2>
          
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">TrilhasBrasil</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Projeto full-stack criado em <strong>Next.js</strong> que engloba o ciclo completo de desenvolvimento de software. A aplicação demonstra domínio desde a concepção de requisitos e design estrutural até a fase final de deploy e publicação na nuvem.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://trilhasbrasil.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center shadow-sm"
              >
                🌐 Acessar Aplicação (Live)
              </a>
              <a 
                href="https://github.com/VictorMCoura/TrilhasBrasil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 text-white px-5 py-2.5 rounded-lg hover:bg-slate-900 transition font-semibold flex items-center shadow-sm"
              >
                🐙 Ver Repositório
              </a>
            </div>
          </div>
        </section>

        {/* Habilidades e Apresentação */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition hover:shadow-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-5 border-b pb-2">Habilidades e Competências</h2>
          <p className="text-slate-700 mb-6">Abaixo, confira uma apresentação visual das minhas principais tecnologias e ferramentas de trabalho:</p>
          
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner flex items-center justify-center">
            {/* Substitua o src abaixo pelo link real do seu slide */}
            <iframe 
              src="LINK_DE_INCORPORACAO_DOS_SEUS_SLIDES_AQUI" 
              className="w-full h-[400px] md:h-[500px]" 
              frameBorder="0" 
              allowFullScreen
              title="Apresentação de Habilidades Técnicas"
            ></iframe>
          </div>
        </section>

        {/* Recomendações */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition hover:shadow-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-5 border-b pb-2">Recomendações e Testemunhos</h2>
          <blockquote className="border-l-4 border-blue-500 pl-5 py-2 italic text-slate-600 bg-slate-50 rounded-r-lg">
            "O Victor é um desenvolvedor muito dedicado e com grande facilidade para aprender novas tecnologias."
          </blockquote>
        </section>

      </div>
    </div>
  );
};

export default Portfolio;