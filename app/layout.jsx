import './globals.css'

export const metadata = {
  title: 'Cart-App (Demo)',
  description: 'Created By Muhammad Nasrulloh',
}

// import Sidebar from "./sidebar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Sidebar/> */}
        {children}
      </body>
    </html>
  )
}
