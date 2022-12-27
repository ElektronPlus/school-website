module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
  navigation: {
    enabled: true,
    gql: {
      navigationItemRelated: ['Entry'],
  },
  }
});