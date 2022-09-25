module.exports = {
  data: {
    name: `selectrol`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Seleccionaste: ${interaction.values[0]}`,
    });
  },
};
