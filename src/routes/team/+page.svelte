<script lang="ts">
	import TeamMember from "$lib/components/team-member.svelte";

	const members = [
		{
			name: "codexis",
			avatar: "https://cdn.discordapp.com/avatars/447685920423149579/a_e1a863b92377e38d7ef11bba4656ff74.gif?size=256",
			description: "(CEO) Directeur général / Fondateur",
			links: [
				{
					url: "#",
					icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
				}
			]
		},
		{
			name: "LeKaléïdoscope",
			avatar: "https://cdn.discordapp.com/avatars/265114006845521920/cab9ee8fc14fe13da759d23b1eadf304.png?size=256",
			description: "(COO) Directeur des opérations",
			links: [
				{
					url: "#",
					icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
				}
			]
		},
		{
			name: "Kishimitsu",
			avatar: "https://cdn.discordapp.com/avatars/594547541798813716/a_dfdcca41e45be8e82224e892872cb2cf.gif?size=256",
			description: "(CMO) Directeur marketing",
			links: [
				{
					url: "#",
					icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
				}
			]
		},
		{
			name: "Koyuki",
			avatar: "https://cdn.discordapp.com/avatars/446024374429024286/1afceca96ef3075899a59527692527da.png?size=256",
			description: "(CHRO) Directrice des ressources humaines",
			links: [
				{
					url: "#",
					icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
				}
			]
		}
	]
</script>

<section class="bg-dark pt-24">
	<div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
		<div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
			<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
				Notre team
			</h2>
			<p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
				Depuis 2022, l'équipe de Codexis met tout en œuvre pour vous offrir une expérience de jeu inégalée sur notre serveur. Grâce à notre expertise et à une gestion rigoureuse, nous veillons à ce que chaque joueur profite des meilleures conditions possibles. Votre aventure est entre de bonnes mains.
			</p>
		</div>
        <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:gap-16 my-12">
			{#each members.slice(0, 1) as { name, avatar, description, links }}
				<TeamMember {name} {avatar} {description} {links} />
			{/each}
		</div>
		<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-16">
			{#each members.slice(1, 4) as { name, avatar, description, links }}
				<TeamMember {name} {avatar} {description} {links} />
			{/each}
		</div>
	</div>
</section>
