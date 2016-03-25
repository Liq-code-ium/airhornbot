export default {
  GITHUB_URL: 'https://github.com/hammerandchisel/airhornbot',
  DISCORD_URL: 'https://discordapp.com',
  AIRHORN_URL: 'https://airhorn.solutions',
  SMALL_ISLAND_COUNT: 12,
  UNIQUE_SMALL_ISLAND_COUNT: 6,
  CLOUD_COUNT: 8,
  UNIQUE_CLOUD_COUNT: 4,
  VIDEO_LENGTH: 1700,

  Image: {
    AIRHORN_COUNTER: require('./images/airhorn-counter.svg'),
    ICON_PLAYS: require('./images/icon-plays.svg'),
    ICON_USERS: require('./images/icon-users.svg'),
    ICON_SERVERS: require('./images/icon-servers.svg'),
    ICON_CHANNELS: require('./images/icon-channels.svg'),
    ICON_SECERT: require('./images/icon-secret.svg'),
    ICON_CLOSE: require('./images/icon-close.svg'),
    ICON_ABOUT: require('./images/icon-about.svg'),
    ICON_FACEBOOK: require('./images/icon-facebook.svg'),
    ICON_TWITTER: require('./images/icon-twitter.svg'),
    ISLAND_AIRHORN: require('./images/island-airhorn.png'),
    ISLAND_AIRHORN_MOBILE: require('./images/island-airhorn-mobile.svg'),
    ISLAND_SMALL_1: require('./images/island-small-01.png'),
    ISLAND_SMALL_2: require('./images/island-small-02.png'),
    ISLAND_SMALL_3: require('./images/island-small-03.png'),
    ISLAND_SMALL_4: require('./images/island-small-04.png'),
    ISLAND_SMALL_5: require('./images/island-small-05.png'),
    ISLAND_SMALL_6: require('./images/island-small-06.png')
  },

  Video: {
    AIRHORN: require('./videos/airhorn.mp4')
  },

  Audio: {
    AIRHORN: require('../../audio/airhorn_default.wav')
  },

  Animation: {
    COUNT_CHANGE_TIME: 200
  },

  Event: {
    STATS_PANEL_SHOW: 'EVENT_STATS_PANEL_SHOW',
    STATS_PANEL_HIDE: 'EVENT_STATS_PANEL_HIDE',
    STATS_PANEL_TOGGLE: 'EVENT_STATS_PANEL_TOGGLE',

    OAUTH_START: 'EVENT_OAUTH_START',
    OAUTH_END: 'EVENT_OAUTH_END',
    OAUTH_PLAYED_VIDEO: 'EVENT_OAUTH_PLAYED_VIDEO',
    OAUTH_REDIRECTED_FROM: 'EVENT_OAUTH_REDIRECTED_FROM',

    RESPONSIVE_RESIZE: 'EVENT_RESPONSIVE_RESIZE'
  },

  Message: {
    OAUTH_ADDED: 'MESSAGE_OAUTH_ADDED'
  },

  MediaQuery: {
    PHONE: 690
  },

  Social: {
    MESSAGE_TWITTER: 'This Discord bot makes airhorn sounds ayy lmao peep dis:',
    MESSAGE_FACEBOOK: ''
  }
};
