module.exports = ({ env }) => {
    return {
        ckeditor: {
            enabled: true,
        },
        seo: {
            enabled: true,
        },
        navigation: {
            enabled: true,
        },
        placeholder: {
            enabled: true,
            config: {
                size: 10,
            }
        },
        publisher: {
            enabled: true,
        },
        graphql: {
            enabled: true,
        },
        i18n: {
            enabled: false
        },
        'users-permissions': {
            enabled: true,
        },
        'url-alias': {
            enabled: true
        },
        meilisearch: {
            enabled: true,
            config: {
                host: env('MEILI_HOST'),
                apiKey: env('MEILI_MASTER_KEY'),
            }
        }
    }
}
