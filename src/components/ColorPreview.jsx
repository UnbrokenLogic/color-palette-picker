function ColorPreview({ color }) {
  return (
    <div className="color-preview">
      <div
        className="preview-swatch"
        style={{ backgroundColor: color.value }}
        aria-label={`${color.name} color preview`}
        role="img"
      />
      <p>Selected color</p>
      <h2>{color.name}</h2>
      <code>{color.value.toUpperCase()}</code>
    </div>
  )
}

export default ColorPreview
