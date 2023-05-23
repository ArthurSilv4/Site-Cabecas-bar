import Link from 'next/link'

export function Logo() {
    return (
        <>
            <Link href="#home" className='h-full w-full'>
                <img
                    src="../logo.svg"
                    alt="Logo"
                    className='h-full w-full'
                />
            </Link>

        </>
    )
}