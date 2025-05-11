
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';

const AI = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#0D0D18] text-white">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Habla con Antonio IA</h1>
              <p className="text-gray-400">
                Asistente virtual especializado en inversiones y análisis del mercado financiero.
                Puedes hacerle preguntas sobre estrategias de inversión, análisis técnico o conceptos financieros.
              </p>
            </div>

            <div className="bg-techstock-gray/30 rounded-xl p-6 mb-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-techstock-gold">¿Qué puedes preguntarle a Antonio?</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Estrategias de inversión para principiantes</li>
                  <li>• Análisis de tendencias del mercado</li>
                  <li>• Explicación de conceptos financieros</li>
                  <li>• Consejos sobre diversificación de carteras</li>
                  <li>• Opiniones sobre sectores específicos del mercado</li>
                </ul>
              </div>
            </div>

            <div className="elevenlabs-widget-container rounded-xl overflow-hidden" style={{ height: "600px" }}>
              <elevenlabs-convai agent-id="WJctkJic1dOUZI6f5LzN"></elevenlabs-convai>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AI;
