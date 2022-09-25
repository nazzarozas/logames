const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mobaroles')
        .setDescription('Lista de roles Mobaroles'),
    async execute(interaction, client) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('smite')
					.setLabel('SMITE')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('lol')
					.setLabel('LEAGUE OF LEGENDS')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('dota')
					.setLabel('DOTA')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('paladins')
					.setLabel('PALADINS')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setURL('https://discord.com/channels/753011508040171541/897550128544624650')
					.setLabel('SUGERILO!')
					.setStyle(ButtonStyle.Link),
			);
        const embed = new EmbedBuilder()
			.setColor(0xD2F000)
			.setTitle('𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐑𝐎𝐋𝐄𝐒')
			.setDescription('𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗜𝗔: 𝙈𝙊𝘽𝘼');

            await interaction.reply({
                embeds: [embed],
				components: [row]
            });
            
        
    },
};