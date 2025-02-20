<script lang="ts">
	let { name, avatar, description, links } = $props();
</script>

<div class="text-center text-gray-500 dark:text-gray-400">
    <img
        class="mx-auto mb-4 h-36 w-36 rounded-full"
        src={avatar}
        alt="Avatar"
    />
    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
    </h3>
    <p>{description}</p>
    <!-- <ul class="mt-4 flex justify-center space-x-4">
        {#each links as link}
            <li>
                <a
                    href={link.url}
                    class="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                        ><path
                            fill-rule="evenodd"
                            d={link.icon}
                            clip-rule="evenodd"
                        /></svg
                    >
                </a>
            </li>
        {/each}
    </ul> -->
</div>