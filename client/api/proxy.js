const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: "http://114.132.221.182:5001/",
  changeOrigin: true,
  pathRewrite: {
    '^/todos/': '/'
  }
});

// Expose the proxy on the "/api/*" endpoint.
export default function (req, res) {
  return apiProxy(req, res);
};