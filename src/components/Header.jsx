import React from 'react'

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div>
        <h1>RUN SHOP</h1>
        <p className="cart">장바구니 <b>{cartCount}</b></p>
      </div>
    </header>
  )
}
