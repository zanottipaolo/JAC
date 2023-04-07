function Header() {
  const menu = [
    {
      label: "Home",
      link: "/",
    },
  ]

  return (
    <header className='App'>
      {menu.map((item) => (
        <p>{item.label}</p>
      ))}
    </header>
  )
}

export default Header
