const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "disconnect",
  description: "Para a música e se desconecta do canal de voz.",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["leave", "exit", "quit", "disconectar","sair", "stop"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **Você precisa estar em um canal de voz para usar esse comando*");
    if (!player) return client.sendTime(message.channel,"❌ | **Não há nada sendo tocado nesse momento...**");
    await client.sendTime(message.channel,":notes: | **Disconectado!**");
    await message.react("✅");
    player.destroy();
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
      const guild = client.guilds.cache.get(interaction.guild_id);
      const member = guild.members.cache.get(interaction.member.user.id);

      if (!member.voice.channel)
        return client.sendTime(
          interaction,
          "❌ | **Você precisa estar em um canal de voz para usar esse comando.**"
        );
      if (
        guild.me.voice.channel &&
        !guild.me.voice.channel.equals(member.voice.channel)
      )
        return client.sendTime(
          interaction,
          `❌ | **Você deve estár no canal ${guild.me.voice.channel} para usar esse comando.**`
        );

      let player = await client.Manager.get(interaction.guild_id);
      if (!player)
        return client.sendTime(
          interaction,
          "❌ | **Não há nada sendo tocado...**"
        );
      player.destroy();
      client.sendTime(
        interaction,
        ":notes: | **Desconectado!**"
      );
    },
  },
};
