const { ActivityType } = require('discord.js');

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Watching,
        text: "Tutoriales",
        status: "online",
      },
      {
        type: ActivityType.Playing,
        text: "con tu señora",
        status: "online",
      },
      {
        type: ActivityType.Streaming,
        text: "Minecraft",
        status: "online",
      },
    ];
    const option = Math.floor(Math.random() * options.length);

    client.user.setPresence({
      activities: [
        {
          name: options[option].text,
          type: options[option].type,
        },
      ],
      status: options[option].status,
    });
  };
};
