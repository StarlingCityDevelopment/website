import axios from "axios";
import { API_KEY_BOT } from '$env/static/private';

const teams = {
  Leadership: [
    "447685920423149579",
    "265114006845521920",
    "594547541798813716",
  ],
};

export async function load() {
  let allTeam = [];

  for (const team in teams) {
    const members: {
      name: string;
      avatar: string;
    }[] = [];

    for (const member of teams[team as keyof typeof teams]) {
      const response = await axios.request({
        method: "get",
        maxBodyLength: Infinity,
        url: "https://protectbot.starlingrp.fr/api/users/" + member,
        headers: {
          Authorization:
            "Bearer " + API_KEY_BOT,
        },
      });
      if (!response.status || response.status !== 200) continue;
      if (response.data.success) {

        members.push({
          name: response.data.user.globalName,
          avatar: response.data.user.avatarURL,
        });
      } else {
        console.log("Error: " + response.data.message);
      }
    }

    allTeam.push({
      name: team,
      members: members,
    });
  }

  return {
    allTeam,
  };
}
