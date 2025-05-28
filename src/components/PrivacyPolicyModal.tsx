import React from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#1C2128',
        padding: '32px',
        borderRadius: '16px',
        maxWidth: '800px',
        maxHeight: '80vh',
        overflow: 'auto',
        position: 'relative',
        color: '#FCF6F2'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#FCF6F2',
            cursor: 'pointer',
            fontSize: '24px'
          }}
        >
          ×
        </button>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>Política de Privacidade – Studio de IA</h2>
        
        <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>1. Introdução</h3>
            <p>Esta Política de Privacidade descreve como o Studio de IA ("nós", "nosso", "Studio") coleta, usa, compartilha e protege os dados pessoais que você fornece ao acessar nosso site, preencher formulários de contato ou se inscrever para receber avisos e materiais (coletivamente, "Serviços").</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>2. Controlador de Dados</h3>
            <p>Studio de IA<br />
            CNPJ: 60.398.053/0001-34<br />
            Endereço: Avenida Carlos Gomes, 700, Sala 606, Andar 5, Bairro Boa Vista, CEP: 90480-000, Porto Alegre – RS, Brasil<br />
            E-mail: contato@studiodeia.com.br</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>3. Dados que Coletamos</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Dados de Identificação: nome, e-mail, telefone, cargo.</li>
              <li>Dados de Navegação: IP, tipo de dispositivo, browser, páginas acessadas e tempo de permanência (via cookies).</li>
              <li>Consentimentos: registro de aceite desta Política e de comunicações de marketing.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>4. Finalidades do Tratamento</h3>
            <p>Tratamos seus dados para:</p>
            <ol style={{ paddingLeft: '20px' }}>
              <li>Informá-lo sobre o lançamento do GuardAgent™ e novidades do Studio;</li>
              <li>Enviar materiais educativos (white papers, newsletters, convites);</li>
              <li>Responder suas solicitações e prestar suporte;</li>
              <li>Analisar uso do site para melhorar nossos Serviços;</li>
              <li>Cumprir obrigações legais, regulatórias e contratuais.</li>
            </ol>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>5. Base Legal</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Consentimento (LGPD Art. 7º, I): para envio de comunicações e materiais de marketing.</li>
              <li>Execução de contrato ou pré-contratual (LGPD Art. 7º, V): para atender solicitações e fornecer Serviços.</li>
              <li>Obrigação legal ou regulatória (LGPD Art. 7º, II): quando exigido por lei.</li>
              <li>Legítimo interesse (LGPD Art. 7º, IX): para melhorar a experiência de uso do site, desde que respeitados seus direitos.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>6. Compartilhamento de Dados</h3>
            <p>Seus dados poderão ser compartilhados com:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Plataformas de envio de e-mail marketing (ex.: Mailchimp);</li>
              <li>Provedores de analytics e hospedagem (ex.: Google Analytics, AWS);</li>
              <li>Parceiros contratados para entrega de materiais ou eventos.</li>
            </ul>
            <p>Em todos os casos, sob cláusulas contratuais de confidencialidade e segurança.</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>7. Segurança dos Dados</h3>
            <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Criptografia de formulários e conexões (HTTPS/TLS);</li>
              <li>Armazenamento seguro em servidores com controle de acesso;</li>
              <li>Políticas internas de acesso mínimo e treinamentos periódicos;</li>
            </ul>
            <p>Realizamos avaliações regulares de riscos e, quando necessário, Relatórios de Impacto à Proteção de Dados (RIPD), conforme exigido pela LGPD.</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>8. Retenção de Dados</h3>
            <p>Reteremos seus dados pessoais enquanto houver propósito para o qual foram coletados ou até que você solicite exclusão. Informações necessárias para cumprimento de obrigação legal poderão ser mantidas pelo prazo exigido pela lei.</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>9. Seus Direitos</h3>
            <p>Você pode, a qualquer momento e sem custos:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Confirmar a existência de tratamento;</li>
              <li>Acessar seus dados pessoais;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portar seus dados para outro fornecedor;</li>
              <li>Revogar consentimento;</li>
              <li>Opor-se a tratamentos baseados em legítimo interesse.</li>
            </ul>
            <p>Para exercer seus direitos, envie e-mail para: contato@studiodeia.com.br</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>10. Cookies e Tecnologias Similares</h3>
            <p>Usamos cookies estritamente necessários e de analytics para melhorar a navegação. Você pode gerenciar suas preferências de cookies no banner exibido ao acessar o site.</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>11. Transferência Internacional de Dados</h3>
            <p>Quando necessário, transferimos seus dados para prestadores de serviços localizados fora do Brasil, observando cláusulas contratuais padrão e demais salvaguardas exigidas pela LGPD e pelo GDPR.</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>12. Atualizações desta Política</h3>
            <p>Podemos revisar esta Política periodicamente. A versão atualizada será publicada em nosso site com data de revisão. Revisões mais significativas serão comunicadas por e-mail.</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>13. Contato</h3>
            <p>Em caso de dúvidas, comentários ou reclamações sobre esta Política ou sobre o tratamento de seus dados, entre em contato:</p>
            <p>📧 dpo@studiodeia.com.br<br />📞 +55 (54) 9 9346-1322</p>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '12px' }}>14. Encarregado pelo Tratamento de Dados Pessoais (DPO)</h3>
            <p>O Studio de IA nomeou um Encarregado (DPO), responsável por atuar como canal de comunicação entre o Studio, os titulares de dados e a ANPD.</p>
            <p>📧 E-mail para contato: dpo@studiodeia.com.br</p>
          </section>

          <p style={{ marginTop: '24px', fontSize: '12px', color: '#8B949E' }}>Última atualização: 28 de maio de 2025</p>
        </div>
      </div>
    </div>
  );
}
