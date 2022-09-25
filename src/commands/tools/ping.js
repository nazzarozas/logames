const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('pong'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('🏓 PONG')
            .setDescription(`𝐀𝐏𝐈 Latency: \`${client.ws.ping}ms\`.`)
            .setColor(0xfc0303)
            await interaction.reply({
                embeds: [embed]
            });
    },
};