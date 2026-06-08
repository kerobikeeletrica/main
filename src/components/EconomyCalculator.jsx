import React, { useState } from 'react'
import '../styles/economy-calculator.css'

function EconomyCalculator() {
  const [gasolinaCost, setGasolinaCost] = useState(450)
  const [monthlyKm, setMonthlyKm] = useState(800)

  const electricCostPerKm = 0.07 // R$/km
  const electricMonthly = monthlyKm * electricCostPerKm
  const maintenanceSaving = 0.85

  const monthlySaving = gasolinaCost - electricMonthly
  const yearlySaving = Math.round(monthlySaving * 12)

  const gasolinaFill = ((gasolinaCost - 100) / (1500 - 100)) * 100
  const kmFill = ((monthlyKm - 100) / (3000 - 100)) * 100

  return (
    <section className="economy-calculator" id="economia">
      <div className="calculator-wrapper">
        <div className="calculator-glow-top" />
        <div className="calculator-glow-bottom" />

        <div className="calculator-grid">
          {/* Left */}
          <div className="calc-left">
            <div className="calc-header">
              <span className="section-label">Calculadora de economia</span>
              <h2 className="section-title">
                Pare de queimar<br />
                <span style={{ color: 'var(--brand)', fontStyle: 'italic' }}>dinheiro.</span>
              </h2>
              <p className="calc-description">
                Veja quanto você economiza trocando sua moto a combustão por uma moto da Kero Bike. Tudo em tempo real.
              </p>
            </div>

            <div className="calc-sliders">
              {/* Slider 1 */}
              <div className="calc-slider-group">
                <span className="calc-slider-label">Gasto mensal com gasolina</span>
                <span className="calc-slider-value">R$ {gasolinaCost}</span>
                <div className="calc-range-track">
                  <div className="calc-range-fill" style={{ width: `${gasolinaFill}%` }} />
                  <input
                    type="range" min="100" max="1500" step="10"
                    value={gasolinaCost}
                    onChange={e => setGasolinaCost(parseInt(e.target.value))}
                    className="calc-range-input"
                    aria-label="Gasto mensal com gasolina"
                  />
                  <div className="calc-range-thumb" style={{ left: `${gasolinaFill}%` }} />
                </div>
                <div className="calc-range-limits">
                  <span>R$ 100</span>
                  <span>R$ 1500</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="calc-slider-group">
                <span className="calc-slider-label">Km rodados por mês</span>
                <span className="calc-slider-value">{monthlyKm} km</span>
                <div className="calc-range-track">
                  <div className="calc-range-fill" style={{ width: `${kmFill}%` }} />
                  <input
                    type="range" min="100" max="3000" step="50"
                    value={monthlyKm}
                    onChange={e => setMonthlyKm(parseInt(e.target.value))}
                    className="calc-range-input"
                    aria-label="Km rodados por mês"
                  />
                  <div className="calc-range-thumb" style={{ left: `${kmFill}%` }} />
                </div>
                <div className="calc-range-limits">
                  <span>100 km</span>
                  <span>3000 km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="calc-result-card">
            <p className="calc-result-label">Economia anual estimada</p>
            <div className="calc-result-amount">
              R$ {yearlySaving > 0 ? yearlySaving.toLocaleString('pt-BR') : '0'}
            </div>
            <p className="calc-result-note">
              Sua moto se paga em menos de 12 meses apenas com a economia de combustível.
            </p>

            <div className="calc-result-divider" />

            <div className="calc-result-stats">
              <div className="calc-stat-item">
                <span className="calc-stat-label">Por mês</span>
                <span className="calc-stat-value">R$ {Math.max(0, Math.round(monthlySaving)).toLocaleString('pt-BR')}</span>
              </div>
              <div className="calc-stat-item">
                <span className="calc-stat-label">Custo elétrico</span>
                <span className="calc-stat-value">R$ {Math.round(electricMonthly)}</span>
              </div>
              <div className="calc-stat-item">
                <span className="calc-stat-label">Manutenção</span>
                <span className="calc-stat-value green">-85%</span>
              </div>
            </div>

            <a href="#modelos" className="calc-cta-link">
              Quero economizar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EconomyCalculator
