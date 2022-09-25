const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("autocomplete")
    .setDescription("Devuelve un autocomplete.")
    .addStringOption((option) =>
      option
        .setName("colour")
        .setDescription("A colour based on autocomplete.")
        .setAutocomplete(true)
        .setRequired(true)
    ),
  async autocomplete(interaction, client) {

  },
  async execute(interaction, client) {
    const option = interaction.option.getString('colour');
    await interaction.reply({ content: `You told me, "${option}"`});
  },
};
