const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: {
        name: `sevendays`
    },
    async execute(interaction, client) {
        const role = interaction.guild.roles.cache.get('1014230018534150294');
        if (interaction.member.roles.cache.has(role.id)) {
                const member = interaction.member;
                await member.roles.remove(role);
            const embed = new EmbedBuilder()
                .setColor(0xff3333)
                .setTitle('7 DAYS TO DIE se ha removido de tus roles.')
            await interaction.reply({
                embeds: [embed], ephemeral: true
            });
        } else {
            const member = interaction.member;
            await member.roles.add(role);
            const embed = new EmbedBuilder()
                .setColor(0x33ff33)
                .setTitle('7 DAYS TO DIE se ha añadido a tus roles.')
            await interaction.reply({
                embeds: [embed], ephemeral: true
            });
        }
    }
}
