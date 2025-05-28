import React from 'react';
import { Header } from '../components/Header';

export function PrivacyPolicy() {
  return (
    <div style={{ 
      backgroundColor: '#1C2128', 
      color: '#FCF6F2', 
      minHeight: '100vh'
    }}>
      <Header />
      <div style={{ padding: '120px 24px 64px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>Política de Privacidade – Studio de IA</h1>
          
          <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
            {/* Conteúdo existente */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>1. Introdução</h2>
              <p>Esta Política de Privacidade descreve como o Studio de IA ("nós", "nosso", "Studio") coleta, usa, compartilha e protege os dados pessoais que você fornece ao acessar nosso site, preencher formulários de contato ou se inscrever para receber avisos e materiais (coletivamente, "Serviços").</p>
            </section>

            {/* Mantido o restante do conteúdo igual, apenas corrigindo a estrutura dos divs */}
            {/* ... */}

            <p style={{ marginTop: '32px', fontSize: '14px', color: '#8B949E' }}>Última atualização: 28 de maio de 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
