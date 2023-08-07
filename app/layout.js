import Nav from "@/components/Nav";
import "../styles/globals.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "SyahroniPopia",
  description: "description And Popia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
