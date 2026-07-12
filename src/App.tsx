import { useState } from 'react'
import ColorButton from './components/ColorButton.jsx'
import ColorPreview from './components/ColorPreview.jsx'
import Card from './components/Card.jsx'
import './App.css'

const colors = [
  { name: 'Red', value: '#ef4444', emoji: '🟥' },
  { name: 'Blue', value: '#3b82f6', emoji: '🟦' },
  { name: 'Green', value: '#22c55e', emoji: '🟩' },
  { name: 'Yellow', value: '#eab308', emoji: '🟨' },
  { name: 'Purple', value: '#a855f7', emoji: '🟪' },
]

type PaletteColor = (typeof colors)[number]

function App() {
  const [selectedColor, setSelectedColor] = useState<PaletteColor | null>(null)

  return (
    <main className="app-shell">
      <Card>
        <header className="app-header">
          <span className="eyebrow">Interactive color tool</span>
          <h1>Color Palette Picker</h1>
          <p>Choose a color to see it come to life.</p>
        </header>

        <section className="picker" aria-labelledby="palette-title">
          <h2 id="palette-title">Pick a color</h2>
          <div className="color-grid">
            {colors.map((color) => (
              <ColorButton
                key={color.name}
                color={color}
                isSelected={selectedColor?.name === color.name}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </section>

        <section className="preview-section" aria-live="polite">
          {selectedColor ? (
            <ColorPreview color={selectedColor} />
          ) : (
            <div className="empty-preview">
              <span aria-hidden="true">🎨</span>
              <p>No color selected yet</p>
              <small>Pick one above to preview it here.</small>
            </div>
          )}
        </section>

        <button
          className="reset-button"
          type="button"
          onClick={() => setSelectedColor(null)}
          disabled={!selectedColor}
        >
          Reset selection
        </button>
      </Card>
    </main>
  )
}

export default App
