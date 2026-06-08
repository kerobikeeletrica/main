import React, { useState } from 'react'
import '../styles/economy-calculator.css'

function EconomyCalculator() {
  const [monthlyKm, setMonthlyKm] = useState(500)
  const [currentTransport, setCurrentTransport] = useState('car')

  const costs = {
    car: {
      fuel: 8.5,
      maintenance: 200,
      parking: 300,
      insurance: 150
    },
    motorcycle: {
      fuel: 5,
      maintenance: 100,
      parking: 100,
      insurance: 80
    },
    bus: {
      fuel: 0,
      maintenance: 0,
      parking: 0,
      insurance: 0
    }
  }

  const electricCost = {
    electricity: 0.5,
    maintenance: 30,
    parking: 0,
    insurance: 40
  }

  const currentCost = (() => {
    const transport = costs[currentTransport]
    const fuelCost = (monthlyKm / 12) * transport.fuel
    const monthlyMaintenance = transport.maintenance
    const monthlyParking = transport.parking
    const monthlyInsurance = transport.insurance
    return fuelCost + monthlyMaintenance + monthlyParking + monthlyInsurance
  })()

  const electricMonthlyCost = (() => {
    const electricityCost = (monthlyKm / 100) * electricCost.electricity * 30
    return electricityCost + electricCost.maintenance + electricCost.parking + electricCost.insurance
  })()

  const monthlySavings = currentCost - electricMonthlyCost
  const yearlySavings = monthlySavings * 12

  return (
    <section className="economy-calculator" id="economia">
      <div className="calculator-container">
        <div className="calculator-header">
          <h2>Calcule sua Economia</h2>
          <p>Descubra quanto você pode economizar ao mudar para uma moto elétrica</p>
        </div>

        <div className="calculator-content">
          <div className="calculator-inputs">
            <div className="input-group">
              <label>Quilometragem mensal estimada</label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={monthlyKm}
                onChange={(e) => setMonthlyKm(parseInt(e.target.value))}
              />
              <span className="input-value">{monthlyKm} km/mês</span>
            </div>

            <div className="input-group">
              <label>Seu transporte atual</label>
              <select value={currentTransport} onChange={(e) => setCurrentTransport(e.target.value)}>
                <option value="car">Carro</option>
                <option value="motorcycle">Moto a gasolina</option>
                <option value="bus">Ônibus</option>
              </select>
            </div>
          </div>

          <div className="calculator-results">
            <div className="result-card current">
              <h3>Custo Atual</h3>
              <p className="amount">R$ {currentCost.toFixed(2)}</p>
              <span className="period">por mês</span>
            </div>

            <div className="result-card electric">
              <h3>Com Moto Elétrica</h3>
              <p className="amount">R$ {electricMonthlyCost.toFixed(2)}</p>
              <span className="period">por mês</span>
            </div>

            <div className="result-card savings">
              <h3>Você Economiza</h3>
              <p className="amount">R$ {monthlySavings.toFixed(2)}</p>
              <span className="period">por mês</span>
              <p className="yearly">R$ {yearlySavings.toFixed(2)} por ano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EconomyCalculator
