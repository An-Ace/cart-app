"use client"
import React from "react"
import Menu from "./menu"
import Search from "./search"
import Cart from "./cart"

String.prototype.fuzzy = function (s) {
  var hay = this.toLowerCase(), i = 0, n = -1, l;
  s = s.toLowerCase();
  for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false;
  return true;
};

export default function Home() {
  const [cart, setCart] = React.useState([])
  const [data, setData] = React.useState(initData)

  const addItem = React.useCallback(function (id, count) {
    const findIndex = cart.findIndex(item => item.id == id)
    if (findIndex == -1) {
      setCart([...cart, {...initData.find(item => id == item.id), count: count ?? 1}])
    } else {
      var item = [...cart] 
      if (count == 0) {
        item = cart.filter(itm => itm.id != id)
      } else if (count) {
        item[findIndex].count = count
      } else {
        item[findIndex].count += 1
      }
      setCart(item)
    }
  }, [cart])
  return (
    <div className="hide-print flex flex-row h-screen antialiased text-gray-700 bg-gray-200/50">
      <div className="flex-grow sm:flex">
        <div className="flex flex-col h-full w-full py-4">
          <Search onChange={(e) => setData(searchFilter(e.target.value))}/>
          <Menu data={data} onSelect={(id) => addItem(id)}/>
        </div>
      <Cart data={cart} onChange={(id, c) => addItem(id,c)} onClear={() => setCart([])}/>
    </div>
  </div>
  )
}

function searchFilter (query) {
  return initData.filter(item => item.name.fuzzy(query))
}


function test () {
  return []
}

const initData = [
  {
    id: 1,
    name: "Beef Burger",
    price: 45000,
    img: "/img/beef-burger.png",
  },
  {
    id: 2,
    name: "Sandwich",
    price: 32000,
    img: "/img/sandwich.png",
  },
  {
    id: 3,
    name: "Sawarma",
    price: 30000,
    img: "/img/sawarma.png",
  },
  {
    id: 4,
    name: "Croissant",
    price: 16000,
    img: "/img/croissant.png",
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    price: 20000,
    img: "/img/cinnamon-roll.png",
  },
  {
    id: 6,
    name: "Choco Glaze Donut with Peanut",
    price: 10000,
    img: "/img/choco-glaze-donut-peanut.png",
  },
  {
    id: 7,
    name: "Choco Glazed Donut",
    price: 10000,
    img: "/img/choco-glaze-donut.png",
  },
  {
    id: 8,
    name: "Red Glazed Donut",
    price: 10000,
    img: "/img/red-glaze-donut.png",
  },
  {
    id: 9,
    name: "Iced Coffee Latte",
    price: 25000,
    img: "/img/coffee-latte.png",
  },
  {
    id: 10,
    name: "Iced Chocolate",
    price: 20000,
    img: "/img/ice-chocolate.png",
  },
  {
    id: 11,
    name: "Iced Tea",
    price: 15000,
    img: "/img/ice-tea.png",
  },
  {
    id: 12,
    name: "Iced Matcha Latte",
    price: 22000,
    img: "/img/matcha-latte.png",
  }
]