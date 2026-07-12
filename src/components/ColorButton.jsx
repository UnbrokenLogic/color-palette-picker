function ColorButton({ color, onClick, isSelected }) {
  return (
    <button
      type="button"
      className={`color-button ${isSelected ? 'color-button--selected' : ''}`}
      onClick={onClick}
      aria-pressed={isSelected}
      style={{ '--color': color.value }}
    >
      <span aria-hidden="true">{color.emoji}</span>
      <span>{color.name}</span>
      {isSelected && <span className="selection-mark" aria-label="Selected">✓</span>}
    </button>
  )
}

export default ColorButton
