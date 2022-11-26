cookieController = {};

cookieController.setSSIDCookie = (req, res) => {
  try {
    res.cookie('ssid', res.locals.id, {
      httpOnly: true,
      overwrite: true
    })
    console.log(res.cookie.ssid, 'SSID COOKIE')
    return next();
  } catch (e) {
    const errorObject = {
      log: 'error in cookieController.setSSIDCookie',
      status: 400,
      message: {err: e}
    }
    return next(errorObject);
  }
}

module.exports = cookieController;