import React from 'react'
import Image from 'next/image'

export default function Products ({ data, onSelect }) {
  return <div className="h-full overflow-hidden mt-4">
    <div className="h-full overflow-y-auto px-2">
      {
        data ? <Menu data={data} onSelect={onSelect}/> : <Empty/>
      }
    </div>
  </div>
}

function Menu ({ data, onSelect }) {
  return data.length ? <div
      className="grid grid-cols-3 sm:grid-cols-4 gap-4 pb-3"
    >
      {
        data.map((data, i) => (<ProductList key={i} onSelect={onSelect} {...data}/>))
      }
    </div> : <div
      className="select-none bg-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25"
    >
      <div className="w-full text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <p className="text-xl">
          EMPTY SEARCH RESULT
          <br />
          &qout;<span x-text="keyword" className="font-semibold" />&qout;
        </p>
      </div>
    </div>
}

function ProductList(data) {
  return <div
    role="button"
    className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
    title={data.name}
    onClick={()=>data.onSelect(data.id)}
  >
    <Image src={data.img} alt={data.name} width="205" height="205"/>
    <div className="flex pb-3 px-3 text-sm -mt-3">
      <p className="flex-grow truncate mr-1 w-1/2" x-text="product.name">
        {data.name}
      </p>
      <p className="nowrap font-semibold" x-text="priceFormat(product.price)">
        Rp. {data.price}
      </p>
    </div>
  </div>
}

function Empty () {
  return <div
    className="select-none bg-gray-400/75 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25"
  >
    <div className="w-full text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 inline-block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
      <p className="text-xl">
        YOU DON&apos;T HAVE
        <br />
        ANY PRODUCTS TO SHOW
      </p>
    </div>
  </div>
}