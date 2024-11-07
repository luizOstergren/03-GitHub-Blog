import HeaderImage from '../assets/Header.svg'

export function Header() {
    return (
        <header className="flex items-center justify-center w-full">
            <img src={HeaderImage} className='w-full' />
        </header>
    )
}