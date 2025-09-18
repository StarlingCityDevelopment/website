<script>
import Button from '$lib/components/ui/button/button.svelte'
import { ArrowRight, Rocket } from '@lucide/svelte'
let { data } = $props()
</script>

<main class="overflow-hidden">
  <section>
    <div class="relative pt-42">
      <div class="mx-auto max-w-7xl px-6">
        <div
          class="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5"
        >
          <a
            href="/"
            class="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
          >
            <span
              class="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs"
              >Beta</span
            >
            <span class="text-sm">Ouverture prochainement</span>
            <span class="bg-(--color-border) block h-4 w-px"></span>

            <ArrowRight class="size-4" />
          </a>

          <h1
            class="mt-8 text-balance text-4xl font-semibold md:text-5xl xl:text-6xl xl:[line-height:1.125]"
          >
            Starling City
          </h1>
          <p class="mx-auto mt-8 max-w-2xl text-wrap text-lg">
            Plonge dans un roleplay réinventé, porté par un gameplay riche et une communauté vivante.
          </p>
          <div class="mt-8">
            <Button size="lg" href="https://discord.gg/VkURFbj5JX">
              <Rocket class="relative size-4" />
              <span class="text-nowrap">Nous rejoindre</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-12 md:py-20">
    <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div class="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <div class="space-y-4">
                <div class="text-5xl font-bold">{data.members}</div>
                <p>Membres</p>
            </div>
            <div class="space-y-4">
                <div class="text-5xl font-bold">{data.connected}</div>
                <p>Joueurs connecté</p>
            </div>
            <div class="space-y-4">
                <div class="text-5xl font-bold">{data.slots}</div>
                <p>Slots</p>
            </div>
        </div>
    </div>
  </section>
</main>
