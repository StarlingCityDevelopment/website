<script lang="ts">
import { cn } from '@/utils'

let { data } = $props()
</script>

<section class="py-32">
  <div class="mx-auto max-w-3xl px-8 lg:px-0">
    <h2 class="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Notre team</h2>
    {#each data.allTeam as { name, members }, index}
      <div class={cn(index != 0 && "mt-6")}>
        <h3 class="mb-6 text-lg font-medium">{name}</h3>
        <div class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
          {#each members as member}
            <div>
              <div
                class="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5"
              >
                <img
                  class="aspect-square rounded-full object-cover"
                  src={member.avatar}
                  alt={member.name}
                  height="460"
                  width="460"
                  loading="lazy"
                />
              </div>
              <span class="mt-2 block text-sm">{member.name}</span>
              <!-- <span class="text-muted-foreground block text-xs"
                >{member.role}</span
              > -->
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
