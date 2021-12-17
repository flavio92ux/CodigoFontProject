const multer = require('multer');

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
      cb(null, 'uploads/');
  },
  filename(req, _file, cb) {
      cb(null, `${req.params.id}.jpeg`);
  },
});

const upload = multer({ storage });

module.exports = upload;