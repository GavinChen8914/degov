function Error({ statusCode }) {
  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>出错了</h1>
      <p>{statusCode ? `服务端错误码: ${statusCode}` : '客户端渲染错误'}</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 