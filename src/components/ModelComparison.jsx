import React, { useState } from 'react'
import '../styles/model-comparison.css'

function ModelComparison() {
  const [selectedModels, setSelectedModels] = useState(['x13', 'x11'])

  const models = [
    {
      id: 'x13',
      name: 'X13 Premium',
      price: 8499,
      badge: 'Mais Rápido',
      specs: {
        power: '1000W',
        speed: '32 km/h',
        range: '60 km',
        battery: '60V 20Ah',
        weight: '180 kg',
        charge: '5-6h'
      }
    },
    {
      id: 'x11',
      name: 'X11 Brushless',
      price: 7999,
      badge: 'Melhor Custo-Benefício',
      specs: {
        power: '1000W Brushless',
        speed: '32 km/h',
        range: '50 km',
        battery: '60V 23Ah',
        weight: '150 kg',
        charge: '6-8h'
      }
    },
    {
      id: 'x9',
      name: 'X9 Standard',
      price: 5999,
      badge: 'Mais Acessível',
      specs: {
        power: '800W',
        speed: '25 km/h',
        range: '40 km',
        battery: '60V 15Ah',
        weight: '120 kg',
        charge: '4-5h'
      }
    }
  ]

  const toggleModel = (modelId) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId))
    } else if (selectedModels.length < 3) {
      setSelectedModels([...selectedModels, modelId])
    }
  }

  const selected = models.filter(m => selectedModels.includes(m.id))

  return (
    <section className="model-comparison">
      <div className="comparison-container">
        <div className="comparison-header">
          <h2>Compare os Modelos</h2>
          <p>Escolha até 3 modelos para comparar especificações</p>
        </div>

        <div className="comparison-selector">
          {models.map(model => (
            <button
              key={model.id}
              className={`model-button ${selectedModels.includes(model.id) ? 'active' : ''}`}
              onClick={() => toggleModel(model.id)}
            >
              <span className="model-badge">{model.badge}</span>
              <span className="model-name">{model.name}</span>
              <span className="model-price">R$ {model.price.toLocaleString('pt-BR')}</span>
            </button>
          ))}
        </div>

        {selected.length > 0 && (
          <div className="comparison-table">
            <table>
              <tbody>
                <tr className="header-row">
                  <td>Especificação</td>
                  {selected.map(model => (
                    <td key={model.id} className="model-col">
                      <div className="col-header">
                        <strong>{model.name}</strong>
                        <span className="col-price">R$ {model.price.toLocaleString('pt-BR')}</span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Motor</td>
                  {selected.map(model => (
                    <td key={model.id} className="model-col">{model.specs.power}</td>
                  ))}
                </tr>
                <tr>
                  <td>Velocidade Máxima</td>
                  {selected.map(model => (
                    <td key={model.id} className="model-col">{model.specs.speed}</td>
                  ))}
                </tr>
                <tr>
                  <td>Autonomia</td>
                  {selected.map(model => (
                    <td key={model.id} className="model-col highlight">{model.specs.range}</td>
                  ))}
                </tr>
                <tr>
                  <td>Bateria</td>
                  {selected.map(model => (
                    <td key={model.id} className="model-col">{model.specs.battery}</td>
                  ))}
                </tr>
                <tr>
                  <td>Tempo de Recarga</td>
                  {selected.map(model => (
                    <td key={model.id} className="model-col">{model.specs.charge}</td>
                  ))}
                </tr>
                <tr>
                  <td>Capacidade de Carga</td>
                  {selected.map(model => (
                    <td key={model.id} className="model-col">{model.specs.weight}</td>
                  ))}
                </tr>
                <tr className="action-row">
                  <td></td>
                  {selected.map(model => (
                    <td key={model.id} className="model-col">
                      <button className="btn btn-primary btn-small">Escolher</button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default ModelComparison
