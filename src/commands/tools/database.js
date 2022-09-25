const Guild = require("../../schemas/guild");
const { SlashCommandBuilder } = require("discord.js");
const mongoose = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("database")
    .setDescription("Devuelve informacion de la base de datos"),
  async execute(interaction, client) {
    let guildProfile = await Guild.findOne({ guildId: interaction.guild.id });
    if (!guildProfile) {
      guildProfile = await new Guild({
        _id: mongoose.Types.ObjectId(),
        guilId: interaction.guild.id,
        guildName: interaction.guild.name,
        guildIcon: interaction.guild.iconURL()
          ? interaction.guild.iconURL()
          : "None.",
      });

      await guildProfile.save().catch(console.error);
      await interaction.reply({
        content: `Nombre del Servidor: ${guildProfile.guildName}`,
      });
      console.log(guildProfile);
    } else {
      await interaction.reply({
        content: `ID del Servidor: ${guildProfile.guildId}`,
      });
      console.log(guildProfile);
    }
  },
};
