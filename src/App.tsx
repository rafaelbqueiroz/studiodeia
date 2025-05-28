import React, { useState } from 'react';
import { X } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Função apenas para feedback visual
  const handleSubmit = (e: React.FormEvent) => {
    setStatus('loading');
    // O formulário será enviado naturalmente pelo HTML
  };

  // Função para mostrar sucesso após o envio
  const handleLoad = () => {
    setEmail('');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div style={{ minHeight: '100vh', height: '100vh', overflow: 'hidden', backgroundColor: '#1C2128', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Header */}
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '148px' }}>
          <img src="/images/logo.svg" alt="Studio DEIA" style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="https://wa.me/5554981060142"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#DC0017',
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
            onMouseLeave={(e) => {
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
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 400,
              whiteSpace: 'nowrap'
            }}>
              Demo
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style={{ width: '22.5px', height: '22.5px', display: 'block', fill: 'currentColor', flexShrink: 0, color: '#FFFFFF' }}>
                <g style={{ strokeWidth: "thin" }}>
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
              fontSize: window.innerWidth < 768 ? '48px' : '64px',
              lineHeight: '100%',
            }}>
              GuardAgent™: IA segura, auditável e compliance by design
            </span>
            <span className="framer-text block" style={{
              color: '#FCF6F2',
              fontSize: window.innerWidth < 768 ? '48px' : '64px',
              lineHeight: '100%',
            }}>
              Rastreável e pronta para o mundo real.
            </span>
          </h1>

          <div style={{ marginBottom: '64px', fontSize: '16px' }}>
            <span className="text-[#8B949E]">Rastreável e pronta para o mundo real.</span>
          </div>

          {/* Form Section */}
          <div className="max-w-xl mx-auto">
            <p style={{ color: '#8B949E', marginBottom: '12px', fontSize: '16px' }}>
            Seja o primeiro a conhecer o GuardAgent™ quando nosso novo site for lançado.
            </p>
            <form 
              onSubmit={handleSubmit}
              method="post"
              target="hiddenFrame"
              action="https://app.loops.so/api/newsletter-form/cm60tnsb803wacm4gfez9lybc"
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
                disabled={status === 'loading'}
                style={{
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  width: '100%',
                  outline: 'none',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  padding: '16px',
                  borderRadius: '16px',
                  fontWeight: 400,
                  fontSize: '15px',
                  fontStyle: 'normal',
                  letterSpacing: '0px',
                  lineHeight: '1.5',
                  background: 'transparent',
                  color: status === 'error' ? '#DC0017' : 
                         status === 'success' ? '#00FF9D' : 
                         'rgb(252, 246, 242)',
                  border: 'none',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: status === 'loading' ? 0.7 : 1,
                  transition: 'color 0.3s ease'
                }}
                className="hover:bg-white/10 transition-colors"
              >
                <span style={{ 
                  fontSize: '15px', 
                  whiteSpace: 'nowrap',
                }}>
                  {status === 'loading' ? 'Enviando...' : 
                   status === 'success' ? 'Cadastrado com sucesso!' : 
                   status === 'error' ? 'Erro ao cadastrar. Tente novamente.' : 
                  'Cadastre seu e-mail e receba o aviso de lançamento'}
                </span>
                <span style={{ 
                  fontSize: '15px',
                  color: status === 'error' ? '#DC0017' : 
                          status === 'success' ? '#00FF9D' : 
                          'rgb(252, 246, 242)'
                }}>→</span>
              </button>
            </form>
            <iframe 
              name="hiddenFrame"
              style={{ display: 'none' }}
              onLoad={handleLoad}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
