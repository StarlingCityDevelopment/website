import 'dotenv/config'

import axios from 'axios'

export async function load() {
	let members = 0
	let connected = 0
	let slots = 128

	try {
		const [membersRes, connectedRes, slotsRes] = await Promise.allSettled([
			axios.get('https://protect.starlingrp.fr/api/guilds/919277067693076560/members/count', {
				headers: { Authorization: `Bearer ${process.env.API_KEY_BOT}` }
			}),
			axios.get('https://fmprod.starlingrp.fr/restfx/players/count', {
				headers: { Authorization: `Bearer ${process.env.API_KEY_SERVER}` }
			}),
			axios.get('https://fmprod.starlingrp.fr/restfx/players/max', {
				headers: { Authorization: `Bearer ${process.env.API_KEY_SERVER}` }
			})
		])

		if (membersRes.status === 'fulfilled' && membersRes.value.status === 200 && membersRes.value.data?.success) {
			members = membersRes.value.data.memberCount
		} else if (membersRes.status === 'rejected') {
			console.error(`Get guild members count error: ${membersRes.reason}`)
		}

		if (connectedRes.status === 'fulfilled' && connectedRes.value.status === 200) {
			// Some APIs might wrap in success. Assuming plain data or fallback to success wrapper pattern.
			connected = connectedRes.value.data?.success !== undefined ? connectedRes.value.data?.data ?? connectedRes.value.data?.count : connectedRes.value.data
			if (isNaN(Number(connected))) connected = 0
		} else if (connectedRes.status === 'rejected') {
			console.error(`Get players count error: ${connectedRes.reason}`)
		}

		if (slotsRes.status === 'fulfilled' && slotsRes.value.status === 200) {
			slots = slotsRes.value.data?.success !== undefined ? slotsRes.value.data?.data ?? slotsRes.value.data?.count : slotsRes.value.data
			if (isNaN(Number(slots))) slots = 128
		} else if (slotsRes.status === 'rejected') {
			console.error(`Get players max error: ${slotsRes.reason}`)
		}
	} catch (error) {
		console.error(`Error in requests: ${error}`)
	}

	return {
		members,
		connected,
		slots
	}
}
