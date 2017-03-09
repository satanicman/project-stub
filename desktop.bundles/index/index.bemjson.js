module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'base' },
    content: [
        {
            block: 'header',
            content: {
                block: 'row',
                content: [
                    'header content goes here'
                ]
            }
        },
        {
            block: 'content',
            content: {
              block: 'row',
              content: [
                {
                  elem: 'col',
                  elemMods: {
                      mw: 3,
                      type: 'left'
                  },
                  content: 'left column'
                },
                  {
                      elem: 'col',
                      elemMods: {
                          mw: 6,
                          type: 'center'
                      },
                      content: [
                          'center column'
                      ]
                  },
                {
                  elem: 'col',
                  elemMods: {
                      mw: 3,
                      type: 'right'
                  },
                  content: 'right column'
                }
              ]
            }
        },
        {
            block: 'footer',
            content: {
                block: 'row',
                content: [
                    'footer content'
                ]
            }
        }
    ]
};
