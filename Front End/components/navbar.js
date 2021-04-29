import Link from 'next/link'

const Navbar = () => (
    <div class="bo">
        <nav>  
        <ul className="a">
        <li className="a1">
        <Link href="/"><a claaaName="active"> Home </a></Link> 
        <Link href="/register"><a> Register </a></Link>  
        <Link href="/login"><a> Login </a></Link> 
        <Link href="/profile"><a> Profile </a></Link> 
        <Link href="/cat"><a> Cat </a></Link> 
        <Link href="/mydiary"><a> Diary Cat </a></Link> 
        <Link href="/touchCat"><a> Touch Cat </a></Link>
        <Link href="/getConfig"><a> Config </a></Link> 
        <Link href="/logout"><a> Logout </a></Link> 


        </li>
        </ul>
        </nav>
    </div>
)

export default Navbar
