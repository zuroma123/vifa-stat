const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Greets you by name')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Your name')
        .setRequired(false)
    ),
  async execute(interaction) {
    const name = interaction.options.getString('name') || interaction.user.displayName;
    await interaction.reply(`Hello, **${name}**! 👋`);
  },
};
