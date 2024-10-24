// lrc para crear el layout:
// Hay que añadir el children, si no solo se mostrará el layout sin mostrar la propia página.

import { Navbar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <div>
      <h1>LAYOUT GENERAL</h1>
      {children} 
    </div>
    </>
  );
}