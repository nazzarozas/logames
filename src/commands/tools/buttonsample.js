const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Envía un boton'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('rol-uno')
            .setLabel(`Rol1`)
            .setStyle(ButtonStyle.Primary);

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    },
};