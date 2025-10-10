<script lang="ts">
import '../app.css'

import Logo from '$lib/assets/images/bird.png'
import Button from '$lib/components/ui/button/button.svelte'
import { Menu, X } from '@lucide/svelte'

let pages = [
	{ name: 'Team', href: 'team' },
	{ name: 'Wiki', href: 'https://wiki.starlingrp.fr' }
]

let menuState = $state(false)
let { children } = $props()
</script>

<header>
  <nav
    class="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur-sm md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
  >
    <div class="m-auto max-w-5xl px-6">
      <div
        class="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4"
      >
        <div class="flex w-full justify-between lg:w-auto">
          <a href="/" aria-label="home" class="flex items-center space-x-2">
            <img class="w-16 h-16" src={Logo} alt="logo" />
          </a>

          <button
            onclick={() => (menuState = !menuState)}
            aria-label={menuState == true ? "Close Menu" : "Open Menu"}
            class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
          >
            <Menu
              class={[
                "m-auto size-6 duration-200",
                menuState && "rotate-180 scale-0 opacity-0",
              ]}
            />
            <X
              class={[
                "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                menuState && "rotate-0 scale-100 opacity-100",
              ]}
            />
          </button>
        </div>

        <div
          class={[
            "bg-background  mb-6  w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
            menuState ? "block lg:flex" : "hidden",
          ]}
        >
          <div class="lg:pr-4">
            <ul
              class="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm"
            >
              {#each pages as item}
                <li>
                  <a
                    href={item.href}
                    class="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>

          <div
            class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6"
          >
            <Button size="sm" href="https://discord.gg/VkURFbj5JX">
              <span class="text-nowrap">Discord</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
{@render children()}
<footer class="py-16 md:py-32">
  <div class="mx-auto max-w-5xl px-6">
    <div class="my-8 flex flex-wrap justify-center gap-6 text-sm">
      {#each pages as item}
        <a
          href={item.href}
          class="text-muted-foreground hover:text-primary block duration-150"
        >
          <span>{item.name}</span>
        </a>
      {/each}
    </div>
    <div class="my-8 flex flex-wrap justify-center gap-6 text-sm">
      <a
        href="https://www.instagram.com/starling_cityrp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        class="text-muted-foreground hover:text-primary block"
      >
        <svg
          class="size-6"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          ></path>
        </svg>
      </a>
      <a
        href="https://www.tiktok.com/@starling.city.rp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        class="text-muted-foreground hover:text-primary block"
      >
        <svg
          class="size-6"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
          ></path>
        </svg>
      </a>
    </div>
    <span class="text-muted-foreground block text-center text-sm">
      © {new Date().getFullYear()} Starling City, All rights reserved</span
    >
  </div>
</footer>
