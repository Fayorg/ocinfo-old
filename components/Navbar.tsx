'use client';

import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './Menu';
import { cn } from '@/lib/utils';
import { ModeToggle } from './theme-toggle';
import { SocialMedias } from './social';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="h-14 w-screen bg-background sticky top-0 z-40 border-b">
			<div className="h-full container flex items-center justify-between">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
												{/* <Icons.logo className="h-6 w-6" /> */}
												<div className="mb-2 mt-4 text-lg font-medium">Item 1</div>
												<p className="text-sm leading-tight text-muted-foreground">Item desc 1</p>
											</a>
										</NavigationMenuLink>
									</li>
									<ListItem href="/docs" title="Item 2">
										Item desc 2
									</ListItem>
									<ListItem href="/docs/installation" title="Item 3">
										Item desc 3
									</ListItem>
									<ListItem href="/docs/primitives/typography" title="Item 4">
										Item desc 4
									</ListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Exercices</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
												{/* <Icons.logo className="h-6 w-6" /> */}
												<div className="mb-2 mt-4 text-lg font-medium">Item 1</div>
												<p className="text-sm leading-tight text-muted-foreground">Item desc 1</p>
											</a>
										</NavigationMenuLink>
									</li>
									<ListItem href="/docs" title="item 2">
										Item desc 2
									</ListItem>
									<ListItem href="/docs/installation" title="Item 3">
										Item desc 3
									</ListItem>
									<ListItem href="/docs/primitives/typography" title="Item 4">
										Item desc 4
									</ListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/docs" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Exercices (exam)</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						{/* <NavigationMenuItem>
							<ModeToggle />
						</NavigationMenuItem>
						<NavigationMenuItem>
							<SocialMedias />
						</NavigationMenuItem> */}
					</NavigationMenuList>
				</NavigationMenu>

				<div className="flex items-center flex-row-reverse gap-4">
					<ModeToggle />
					<div className="w-10 h-10 relative rounded-full overflow-hidden">
						<Image src="https://cdn.aketechnology.com/aketechnology/user/ElieBaier-2.jpeg" alt="Elie Baier" fill objectFit="cover" />
					</div>
					<h3>Elie Baier</h3>
				</div>
			</div>
		</nav>
	);
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a ref={ref} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className)} {...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});

ListItem.displayName = 'Nav item';
