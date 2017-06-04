module.exports = {
    block: 'page',
    title: 'Медиа-бизнес',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'media' },
    mix: [
        {block: 'reset'},
        {block: 'normalize'},
        {block: 'bootstrap'}
    ],
    content: [
        {
            block: 'header',
            mix: {
                block: 'container'
            },
            content: 'header'
        },
        {
            block: 'content',
            mix: {
                block: 'container'
            },
            content: {
                block: 'fa',
                mods: {
                    icon: 'check'
                }
            }
        },
        {
            block: 'footer',
            mix: {
                block: 'container'
            },
            content: 'footer'
        }
    ]
};
