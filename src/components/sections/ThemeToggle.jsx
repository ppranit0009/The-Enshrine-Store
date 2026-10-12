function ThemeToggle({ currentTheme, toggleTheme }) {
  return (
    <button className="theme-btn" onClick={toggleTheme} title="Switch between HER and HIM themes">
      <span>{currentTheme === 'female' ? 'HER' : 'HIM'}</span> <span>↻</span>
    </button>
  )
}

export default ThemeToggle
