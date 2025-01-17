import React, { useState } from 'react';
import { X } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  // Replace FORM_ID with your actual Loops form ID
  const FORM_ID = 'cm60tnsb803wacm4gfez9lybc';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formBody = `email=${encodeURIComponent(email)}`;

      const response = await fetch("https://app.loops.so/api/newsletter-form/8562539f876179b3d93d19c1210a61e0", {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const data = await response.json();
      
      if (data.success) {
        setEmail('');
        alert('Obrigado por se cadastrar!');
      } else {
        alert(data.message || 'Erro ao se cadastrar. Tente novamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao se cadastrar. Tente novamente.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', height: '100vh', overflow: 'hidden', backgroundColor: '#1C2128', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Header */}
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '148px' }}>
          <svg width="100%" height="100%" viewBox="0 0 593 97" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <path fillRule="evenodd" clipRule="evenodd" d="M206.973 96.896C188.669 96.896 177.277 83.456 177.277 63.872C177.277 44.16 188.797 30.08 207.869 30.08C216.701 30.08 224.509 33.792 228.477 40.064V0H243.965V95.232H229.629L228.605 85.376C224.765 92.672 216.573 96.896 206.973 96.896ZM210.429 82.56C221.309 82.56 228.349 74.752 228.349 63.36C228.349 51.968 221.309 44.032 210.429 44.032C199.549 44.032 192.893 52.096 192.893 63.36C192.893 74.624 199.549 82.56 210.429 82.56ZM258.447 9.85599C258.447 15.104 262.671 19.328 268.047 19.328C273.167 19.328 277.391 15.104 277.391 9.85599C277.391 4.60799 273.167 0.511993 268.047 0.511993C262.671 0.511993 258.447 4.60799 258.447 9.85599ZM260.239 32V95.232H275.855V32H260.239ZM322.069 30.208C302.485 30.208 288.277 43.776 288.277 63.488C288.277 83.2 302.485 96.768 322.069 96.768C341.653 96.768 355.861 83.2 355.861 63.488C355.861 43.776 341.653 30.208 322.069 30.208ZM322.069 82.816C311.317 82.816 303.893 75.008 303.893 63.488C303.893 51.968 311.317 44.16 322.069 44.16C332.821 44.16 340.245 51.968 340.245 63.488C340.245 75.008 332.821 82.816 322.069 82.816ZM166.11 32H150.494V65.152C150.494 77.184 145.758 82.944 135.902 82.944C127.198 82.944 122.462 78.08 122.462 66.048V32H106.846V71.552C106.846 87.04 115.422 96.896 130.014 96.896C138.462 96.896 146.654 92.8 150.494 86.784L151.646 95.232H166.11V32ZM85.618 95.232H70.002V45.056H57.842V32H70.002V12.288H85.618V32H97.906V45.056H85.618V95.232ZM14.848 76.032H0C0 88.448 9.984 96.896 25.728 96.896C41.344 96.896 52.224 88.96 52.224 76.16C52.224 66.432 46.848 61.568 36.224 59.136L24.832 56.448C19.456 55.168 16.64 52.864 16.64 49.28C16.64 44.544 20.224 41.728 26.368 41.728C32.384 41.728 35.968 45.184 36.096 50.56H50.944C50.816 38.272 41.216 30.08 27.008 30.08C12.416 30.08 1.92 37.504 1.92 49.92C1.92 60.032 7.424 65.408 18.816 67.968L30.208 70.656C35.84 71.936 37.504 74.24 37.504 77.44C37.504 82.048 33.536 84.992 26.24 84.992C19.072 84.992 14.976 81.536 14.848 76.032Z" fill="#DC0017"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M365.861 64.64C365.861 82.816 376.101 96.896 394.149 96.896C404.773 96.896 413.605 92.032 418.213 81.536L419.109 95.36H423.845V2.944H417.957V47.232C413.477 37.248 405.029 32.384 394.149 32.384C376.101 32.384 365.861 46.464 365.861 64.64ZM417.829 64.64C417.829 80.256 409.509 91.52 394.789 91.52C380.197 91.52 371.877 80.256 371.877 64.64C371.877 49.152 380.197 37.76 394.789 37.76C409.509 37.76 417.829 49.152 417.829 64.64ZM438.736 64.768C438.736 84.096 450.512 96.896 468.304 96.896C482.128 96.896 490.96 90.368 494.544 77.696H488.528C486.096 86.784 479.184 91.52 468.304 91.52C453.84 91.52 445.136 81.536 444.624 64.768H494.544V60.672C494.544 43.904 483.536 32.384 467.536 32.384C450.384 32.384 438.736 45.568 438.736 64.768ZM444.752 59.904C446.16 46.464 454.992 37.76 467.536 37.76C480.208 37.76 488.528 46.592 488.528 59.904H444.752Z" fill="#FCF6F2"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M504.544 9.85602C504.544 15.104 508.768 19.328 514.144 19.328C519.264 19.328 523.488 15.104 523.488 9.85602C523.488 4.60802 519.264 0.512024 514.144 0.512024C508.768 0.512024 504.544 4.60802 504.544 9.85602ZM506.336 32V95.232H521.952V32H506.336ZM535.27 77.184C535.27 89.088 543.462 96.896 556.902 96.896C566.758 96.896 575.334 92.416 578.022 85.888L579.174 95.232H592.87V56.832C592.87 39.296 582.374 30.08 565.35 30.08C548.198 30.08 536.934 39.04 536.934 52.736H550.246C550.246 46.08 555.366 42.24 564.582 42.24C572.518 42.24 577.638 45.696 577.638 54.272V55.68L558.694 57.088C543.718 58.24 535.27 65.536 535.27 77.184ZM577.766 69.632C577.766 79.36 571.622 85.12 562.022 85.12C554.982 85.12 551.142 82.304 551.142 76.544C551.142 71.424 554.854 68.224 564.582 67.328L577.766 66.304V69.632Z" fill="#DC0017"/>
          </svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="https://wa.me/5554993461322"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              border: '1px solid #DC0017',
              alignContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: '8px',
              height: 'min-content',
              justifyContent: 'flex-end',
              overflow: 'visible',
              padding: '8px 16px',
              position: 'relative',
              textDecoration: 'none',
              width: 'min-content',
            }}
            onMouseEnter={(e) => {
              const button = e.currentTarget;
              button.style.backgroundColor = '#DC0017';
              button.style.borderColor = '#DC0017';
              const textDiv = button.querySelector('div');
              const svg = button.querySelector('svg');
              if (textDiv) {
                textDiv.style.color = '#FFFFFF';
              }
              if (svg) {
                svg.style.color = '#FFFFFF';
              }
            }}
            onMouseLeave={(e) => {
              const button = e.currentTarget;
              button.style.backgroundColor = '#FFFFFF';
              button.style.borderColor = '#DC0017';
              const textDiv = button.querySelector('div');
              const svg = button.querySelector('svg');
              if (textDiv) {
                textDiv.style.color = '#DC0017';
              }
              if (svg) {
                svg.style.color = '#DC0017';
              }
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              color: '#DC0017',
              fontSize: '15px',
              fontWeight: 400,
              whiteSpace: 'nowrap'
            }}>
              Agende uma Demo
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style={{ width: '22.5px', height: '22.5px', display: 'block', fill: 'currentColor', flexShrink: 0, color: '#DC0017' }}>
                <g weight="thin">
                  <path d="M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"/>
                </g>
              </svg>
            </div>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ paddingTop: '96px' }} className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '24px', color: '#FCF6F2', lineHeight: '100%' }}>
            <span className="framer-text block mb-2" style={{
              color: '#FCF6F2',
              fontSize: '64px',
              lineHeight: '100%',
            }}>
              Simplificamos o
            </span>
            <span className="framer-text block" style={{
              color: '#FCF6F2',
              fontSize: '64px',
              lineHeight: '100%',
            }}>
              complexo.
            </span>
          </h1>

          <div style={{ marginBottom: '64px', fontSize: '16px' }}>
            <span className="font-semibold text-white">Agentes IA</span>
            <span className="text-[#8B949E]"> que automatizam tarefas repetitivas e entregam resultados para empresas que querem crescer.</span>
          </div>

          {/* Form Section */}
          <div className="max-w-xl mx-auto">
            <p style={{ color: '#8B949E', marginBottom: '12px', fontSize: '16px' }}>
              Deixe um agente IA lembrar você quando o site for lançado.
            </p>
            <form 
              onSubmit={handleSubmit}
              method="post"
              action="https://app.loops.so/api/newsletter-form/8562539f876179b3d93d19c1210a61e0"
              style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira seu email..."
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '16px',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '15px',
                  border: 'none',
                  outline: 'none'
                }}
                required
              />
              <button
                type="submit"
                style={{
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  width: '100%',
                  outline: 'none',
                  cursor: 'pointer',
                  padding: '16px',
                  borderRadius: '16px',
                  fontWeight: 400,
                  fontSize: '15px',
                  fontStyle: 'normal',
                  letterSpacing: '0px',
                  lineHeight: '1.5',
                  background: 'transparent',
                  color: 'rgb(252, 246, 242)',
                  border: 'none',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                className="hover:bg-white/10 transition-colors"
              >
                <span style={{ fontSize: '15px', whiteSpace: 'nowrap' }}>Cadastre-se</span>
                <span style={{ fontSize: '15px' }}>→</span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;