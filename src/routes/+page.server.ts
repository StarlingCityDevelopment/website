import 'dotenv/config'

import axios from 'axios'

export async function load() {
	let members = 0
	let connected = 0
	let slots = 128

	try {
		await axios
			.request({
				method: 'get',
				maxBodyLength: Infinity,
				url: 'https://protectbot.starlingrp.fr/api/guilds/919277067693076560/members/count',
				headers: {
					Authorization: `Bearer ${process.env.API_KEY_BOT}`
				}
			})
			.then((response) => {
				if (response.status === 200 && response.data.success) {
					members = response.data.memberCount
				}
			})
			.catch((error) => {
				console.error(`Get guild members count error: ${error}`)
			})

		await axios
			.request({
				method: 'get',
				maxBodyLength: Infinity,
				url: 'https://fmprod.starlingrp.fr/restfx/players/count',
				headers: {
					Authorization: `Bearer ${process.env.API_KEY_SERVER}`
				}
			})
			.then((response) => {
				if (response.status === 200 && response.data.success) {
					members = response.data
				}
			})
			.catch((error) => {
				console.error(`Get players count error: ${error}`)
			})

		await axios
			.request({
				method: 'get',
				maxBodyLength: Infinity,
				url: 'https://fmprod.starlingrp.fr/restfx/players/max',
				headers: {
					Authorization: `Bearer ${process.env.API_KEY_SERVER}`
				}
			})
			.then((response) => {
				if (response.status === 200 && response.data.success) {
					members = response.data
				}
			})
			.catch((error) => {
				console.error(`Get players max error: ${error}`)
			})
	} catch (error) {
		console.error(`Error in requests: ${error}`)
	}

	return {
		members,
		connected,
		slots
	}
}
