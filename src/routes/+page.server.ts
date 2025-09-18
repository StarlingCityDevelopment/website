import axios from 'axios'
import { API_KEY_BOT, API_KEY_SERVER } from '$env/static/private'

export async function load() {
	let members = 0
	let connected = 0
	let slots = 128

	await axios
		.request({
			method: 'get',
			maxBodyLength: Infinity,
			url: 'https://protectbot.starlingrp.fr/api/guilds/919277067693076560/members/count',
			headers: {
				Authorization: `Bearer ${API_KEY_BOT}`
			}
		})
		.then((response) => {
			if (response.status === 200 && response.data.success) {
				members = response.data
			}
		})
		.catch((error) => {
			console.error('Error: ' + error)
		})

	await axios
		.request({
			method: 'get',
			maxBodyLength: Infinity,
			url: 'https://fmprod.starlingrp.fr/restfx/players/count',
			headers: {
				Authorization: `Bearer ${API_KEY_SERVER}`
			}
		})
		.then((response) => {
			if (response.status === 200 && response.data.success) {
				members = response.data
			}
		})
		.catch((error) => {
			console.error('Error: ' + error)
		})

	await axios
		.request({
			method: 'get',
			maxBodyLength: Infinity,
			url: 'https://fmprod.starlingrp.fr/restfx/players/max',
			headers: {
				Authorization: `Bearer ${API_KEY_SERVER}`
			}
		})
		.then((response) => {
			if (response.status === 200 && response.data.success) {
				members = response.data
			}
		})
		.catch((error) => {
			console.error('Error: ' + error)
		})

	return {
		members,
		connected,
		slots
	}
}
