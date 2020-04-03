const events = require('events')
events.EventEmitter.defaultMaxListeners = 50
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/timeline-merger': {
        target: 'http://timeline-merger-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/timeline-merger': '/'
        }
      },
      '/entry-view': {
        target: 'https://entry-view-storage-api-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/entry-view': '/'
        }
      },
      '/hot-topic-comment-wrapper': {
        target: 'https://hot-topic-comment-wrapper-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/hot-topic-comment-wrapper': '/'
        }
      },
      '/short-msg': {
        target: 'https://short-msg-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/short-msg': '/'
        }
      },
      '/xiaoce-cache': {
        target: 'https://xiaoce-cache-api-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/xiaoce-cache': '/'
        }
      },
      '/xiaoce-timeline': {
        target: 'https://xiaoce-timeline-api-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/xiaoce-timeline': '/'
        }
      },

      '/comment-wrapper-ms': {
        target: 'https://comment-wrapper-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/comment-wrapper-ms': '/'
        }
      },
      '/event-storage': {
        target: 'https://event-storage-api-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/event-storage': '/'
        }
      },
      '/auth-center': {
        target: 'https://auth-center-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          '/auth-center': '/'
        }
      }
    },
  }
}