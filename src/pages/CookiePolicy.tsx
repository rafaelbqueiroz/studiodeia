import React from 'react';
import { Header } from '../components/Header';

export function CookiePolicy() {
  return (
    <div style={{ 
      backgroundColor: '#1C2128', 
      color: '#FCF6F2', 
      minHeight: '100vh'
    }}>
      <Header />
      <div style={{ padding: '120px 24px 64px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>Política de Cookies – Studio de IA</h1>
          
          <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '32px' }}>
              Esta Política de Cookies descreve como o Studio de IA ("nós", "nosso", "Studio") utiliza cookies e tecnologias similares em seu site e landing pages.
            </p>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>1. O que são Cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados em seu navegador quando você visita um site. 
                Eles são amplamente utilizados para garantir o funcionamento adequado do site, personalizar conteúdo, 
                coletar informações estatísticas e lembrar preferências do usuário.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>2. Tipos de Cookies que Utilizamos</h2>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <strong>Estritamente necessários</strong>
                  <p>Essenciais para funcionamento do site e recursos de segurança.</p>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <strong>Analíticos</strong>
                  <p>Ajudam a entender como os visitantes interagem com o site (ex: Google Analytics).</p>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <strong>Funcionais</strong>
                  <p>Memorizar preferências como idioma, localização ou nome.</p>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <strong>Marketing</strong>
                  <p>Usados para criar perfis e exibir anúncios relevantes.</p>
                </div>
              </div>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>3. Cookies de Terceiros</h2>
              <p>
                Utilizamos cookies de terceiros como Google, Meta e ferramentas de automação de marketing. 
                Esses cookies estão sujeitos às políticas desses provedores.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>4. Consentimento</h2>
              <p>
                Ao acessar o site pela primeira vez, você poderá escolher os tipos de cookies que deseja permitir 
                por meio do banner de consentimento. Você pode alterar suas preferências a qualquer momento.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>5. Como Gerenciar Cookies</h2>
              <p>
                Você pode gerenciar ou desabilitar cookies diretamente em seu navegador. 
                Note que isso pode impactar funcionalidades do site.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>6. Contato</h2>
              <p>Dúvidas sobre esta política? Entre em contato:</p>
              <p>📧 contato@studiodeia.com.br</p>
            </section>

            <p style={{ marginTop: '32px', fontSize: '14px', color: '#8B949E' }}>Última atualização: 28 de maio de 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
