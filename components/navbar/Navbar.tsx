// rafc para crear el componente:

import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink';


const navItems=[
  {path:'/about',text:'About'},
  {path:'/contact',text:'Contact'},
  {path:'/pricing',text:'Pricing'}
]
 // Paranoia que hace FH que podemos ver abajo.

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href="/" className='flex items-center'>
        <HomeIcon className='mr-2'/>
        <span>Home</span>
        </Link>
    <div className="flex flex-1"></div>

{
navItems.map(navItem =>(
  <ActiveLink key={navItem.path} path={navItem.path} text={navItem.text} />
  /*<Link key={navItem.path} className="mr-2" href={navItem.path}> 
  {navItem.text} 
  </Link>*/
  ))
}
    </nav>
  )
}
/*


        <Link className="mr-2" href="/about">About</Link>
        <Link className="mr-2" href="/contact">Contact</Link>
        <Link className="mr-2" href="/pricing">Pricing</Link>
 

<a className="mr-2" href="/about">About</a>
<a className="mr-2" href="/contact">Contact</a>
<a className="mr-2" href="/pricing">Pricing</a>
Usamos el componente Link de Next para precargar las webs al pasar el ratón por encima.
Hace un preFetch.

Usamos iconos de Ocicons: 
https://primer.style/design/foundations/icons/
https://www.npmjs.com/package/@primer/octicons-react
*/