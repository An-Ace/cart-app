var moment = require('moment');
export default function Print ({ data, onClear, cash, totalPrice }) {
  return <div
    className="fixed w-full h-screen left-0 top-0 z-10 flex flex-wrap justify-center content-center p-24"
    id="print-cart"
    style={{ display: "none" }}
  >
    <div
      className="fixed backdrop-blur w-full h-screen left-0 top-0 z-0"
      onClick={() => document.getElementById("print-cart").style.display = "none"}
    />
    <div
      className="w-96 rounded-3xl bg-white shadow-xl overflow-hidden z-10"
    >
      <div
        id="receipt-content"
        className="text-left w-full text-sm p-6 overflow-auto"
        style={{ maxHeight: "70vh" }}
      >
        <div className="text-center">
          <img
            src="img/receipt-logo.png"
            alt="Tailwind POS"
            className="mb-3 w-8 h-8 inline-block"
          />
          <h2 className="text-xl font-semibold">Cart App</h2>
          <p>CABANG MOJOSARI MOJOKERTO</p>
        </div>
        <div className="flex mt-4 text-xs">
          <div className="flex-grow">
            No: <span x-text="receiptNo">CA-KS-1685712134</span>
          </div>
          <div x-text="receiptDate">{moment(Date.now()).format("DD/MM/YY, HH.mm")}</div>
        </div>
        <hr className="my-2" />
        <div>
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="py-1 w-1/12 text-center">#</th>
                <th className="py-1 text-left">Item</th>
                <th className="py-1 w-2/12 text-center">Qty</th>
                <th className="py-1 w-3/12 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(item => <Item item={item} />)
              }
            </tbody>
          </table>
        </div>
        <hr className="my-2" />
        <div>
          <div className="flex font-semibold">
            <div className="flex-grow">TOTAL</div>
            <div >Rp. {totalPrice}</div>
          </div>
          <div className="flex text-xs font-semibold">
            <div className="flex-grow">PAY AMOUNT</div>
            <div >Rp. {cash}</div>
          </div>
          <hr className="my-2" />
          <div className="flex text-xs font-semibold">
            <div className="flex-grow">CHANGE</div>
            <div >Rp. {cash - totalPrice}</div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full">
        <button 
          className="bg-cyan-500 text-white text-lg px-4 py-3 rounded-2xl w-full focus:outline-none"
          onClick={() => {
            document.getElementById("print-cart").style.display = "none"
            onClear()
          }}
        >
          PROCEED
        </button>
      </div>
    </div>
  </div>
}

function Item ({ item }) {
  return <tr>
    <td className="py-2 text-center" x-text="index+1">
      1
    </td>
    <td className="py-2 text-left">
      <span>{item.name}</span>
      <br />
      <small x-text="priceFormat(item.price)">Rp. {item.price}</small>
    </td>
    <td className="py-2 text-center" x-text="item.qty">
      {item.count}
    </td>
    <td
      className="py-2 text-right"
    >
      Rp. {item.count * item.price}
    </td>
  </tr>
}