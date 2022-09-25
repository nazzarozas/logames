const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Desplegar un menu de opciones"),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`selectrol`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `Opción #1`,
          value: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        }),
        new SelectMenuOptionBuilder({
          label: `Opción #2`,
          value: `https://www.youtube.com/watch?v=VfeGV-fIs0Q`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
