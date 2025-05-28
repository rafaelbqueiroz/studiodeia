import React from 'react';

export function Header() {
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1C2128' }}>
      <div style={{ width: '148px' }}>
        <img src="/images/logo.svg" alt="Studio DEIA" style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a
          href="https://wa.me/5554993461322"
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
  );
}
