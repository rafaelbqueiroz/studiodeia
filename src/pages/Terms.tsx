import React from 'react';

export function Terms() {
  return (
    <div style={{ 
      backgroundColor: '#1C2128', 
      color: '#FCF6F2', 
      minHeight: '100vh',
      padding: '64px 24px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>Termos de Uso – Studio de IA</h1>
        
        <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '32px' }}>Bem-vindo ao site do Studio de IA. Ao utilizar este site, você concorda com os seguintes termos e condições:</p>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>1. Objeto</h2>
            <p>Este site oferece conteúdos informativos, formulários de contato e inscrição para comunicação institucional. O uso implica aceitação plena desta política.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>2. Propriedade Intelectual</h2>
            <p>Todo o conteúdo deste site, incluindo textos, marcas, logotipos e layout, é de propriedade exclusiva do Studio de IA e protegido pela legislação aplicável.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>3. Responsabilidades do Usuário</h2>
            <p>Você se compromete a:</p>
            <ul style={{ paddingLeft: '20px', listStyle: 'disc', marginTop: '16px' }}>
              <li>Fornecer informações verdadeiras ao se cadastrar;</li>
              <li>Não realizar ações que comprometam a segurança ou integridade do site;</li>
              <li>Não usar o site para fins ilegais ou abusivos.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>4. Privacidade e Dados Pessoais</h2>
            <p>O tratamento de dados é regido por nossa Política de Privacidade, conforme a Lei Geral de Proteção de Dados (LGPD).</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>5. Limitação de Responsabilidade</h2>
            <p>Nos isentamos de responsabilidade por danos diretos ou indiretos causados por falhas técnicas, indisponibilidade do site ou uso inadequado.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>6. Alterações nos Termos</h2>
            <p>Podemos modificar estes Termos a qualquer momento. Recomenda-se verificar esta página regularmente.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>7. Legislação Aplicável</h2>
            <p>Estes Termos são regidos pela legislação brasileira.</p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>8. Contato</h2>
            <p>Em caso de dúvidas, envie e-mail para:<br />
            📧 contato@studiodeia.com.br</p>
          </section>

          <p style={{ marginTop: '32px', fontSize: '14px', color: '#8B949E' }}>Última atualização: 28 de maio de 2025</p>
        </div>
      </div>
    </div>
  );
}
