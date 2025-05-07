import { Link } from 'react-router'
import { Button } from '~/components/ui/button'

export function SiteHeader() {
	const isLoggedIn = false

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-2'>
			<div className='flex h-12 items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Link to='/' className='font-bold text-lg md:text-xl'>
						Airsoft Naptár
					</Link>
				</div>
				<nav className='flex items-center gap-2'>
					{isLoggedIn ? (
						<Button>Kijelentkezés</Button>
					) : (
						<Button variant='outline'>Bejelentkezés</Button>
					)}
				</nav>
			</div>
		</header>
	)
}
