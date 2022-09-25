const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shotersroles')
        .setDescription('Lista de roles Shooters'),
    async execute(interaction, client) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('csgo')
					.setLabel('CSGO')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('rsix')
					.setLabel('RAINBOWSIX')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('fortnite')
					.setLabel('FORTNITE')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('apex')
					.setLabel('APEX')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('valorant')
					.setLabel('VALORANT')
					.setStyle(ButtonStyle.Secondary),
			);
        const embed = new EmbedBuilder()
			.setColor(0x007bff)
			.setTitle('𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐑𝐎𝐋𝐄𝐒')
			.setDescription('𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗜𝗔: 𝙎𝙃𝙊𝙊𝙏𝙀𝙍𝙎');

            await interaction.reply({
                embeds: [embed],
				components: [row]
            });
            
        
    },
};