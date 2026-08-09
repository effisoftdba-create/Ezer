export function errorHandler(err, req, res, next) {
  console.error('[EZER Backend Internal Error]:', err);
  res.status(500).json({
    success: false,
    error: 'An unexpected internal error occurred'
  });
}

export default errorHandler;
