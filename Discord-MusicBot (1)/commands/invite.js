const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Me convide para seu servidor",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["inv","convidar"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Convide o " + client.user.tag + " para o seu servidor!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `Você pode me convidar clicando [aqui](https://discord.com/oauth2/authorize?client_id=878655550055936000&permissions=2205280576&scope=bot%20identify%20guilds%20applications.commands&redirect_url=none)`
      );
    message.channel.send(embed);
  },
  SlashCommand: {
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, interaction, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Convide o " + client.user.tag + " para o seu servidor!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `Você pode me convidar clicando [aqui](https://discord.com/oauth2/authorize?client_id=878655550055936000&permissions=2205280576&scope=bot%20identify%20guilds%20applications.commands&redirect_url=none)`
      );
    interaction.send(embed);
  },
  },
};
