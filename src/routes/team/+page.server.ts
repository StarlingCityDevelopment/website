import 'dotenv/config'

import axios from 'axios'

const teams = {
	Leadership: ['447685920423149579', '265114006845521920', '594547541798813716']
}

export async function load() {
	let allTeam = []

	for (const team in teams) {
		const members: {
			name: string
			avatar: string
		}[] = []

		for (const member of teams[team as keyof typeof teams]) {
			try {
				const response = await axios.request({
					method: 'get',
					maxBodyLength: Infinity,
					url: `https://protectbot.starlingrp.fr/api/users/${member}`,
					headers: {
						Authorization: `Bearer ${process.env.API_KEY_BOT}`
					}
				})
				if (!response.status || response.status !== 200) continue
				if (response.data.success) {
					members.push({
						name: response.data.user.globalName,
						avatar: response.data.user.avatarURL
					})
				} else {
					console.log(`Request failed: ${response.data.message}`)
				}
			} catch (error) {
				console.log(`Request failed: ${error}`)
			}
		}

		allTeam.push({
			name: team,
			members: members
		})
	}

	return {
		allTeam
	}
}
