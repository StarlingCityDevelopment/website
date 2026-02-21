import 'dotenv/config'

import axios from 'axios'

const teams = {
	Leadership: ['447685920423149579', '265114006845521920', '594547541798813716']
}

export async function load() {
	let allTeam = []

	for (const team in teams) {
		const memberPromises = teams[team as keyof typeof teams].map(async (member) => {
			try {
				const response = await axios.request({
					method: 'get',
					maxBodyLength: Infinity,
					url: `https://protect.starlingrp.fr/api/users/${member}`,
					headers: {
						Authorization: `Bearer ${process.env.API_KEY_BOT}`
					}
				})
				if (!response.status || response.status !== 200) return null
				if (response.data.success) {
					return {
						name: response.data.user.globalName,
						avatar: response.data.user.avatarURL
					}
				} else {
					console.log(`Request failed: ${response.data.message}`)
					return null
				}
			} catch (error) {
				console.log(`Request failed: ${error}`)
				return null
			}
		})

		const results = await Promise.all(memberPromises)
		const members = results.filter((member) => member !== null) as { name: string; avatar: string }[]

		allTeam.push({
			name: team,
			members: members
		})
	}

	return {
		allTeam
	}
}
