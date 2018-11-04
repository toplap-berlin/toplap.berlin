/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        const separtorIndex = ~slug.indexOf('--') ? slug.indexOf('--') : 0;
        const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

        let contentType = 'page';
        let slugPrefix = '';
        if (node.parent.indexOf('/posts/') > -1) {
            slugPrefix += '/post';
            contentType = 'post';
        }
        createNodeField({
            node,
            name: `slug`,
            value: `${slugPrefix}${separtorIndex ? '/' : ''}${slug.substring(shortSlugStart)}`,
        });
        createNodeField({
            node,
            name: `prefix`,
            value: separtorIndex ? slug.substring(1, separtorIndex) : '',
        });
        createNodeField({
            node,
            name: `contentType`,
            value: contentType,
        });
    }
};
