const { Schema, model, Types } = require('mongoose');

const StyleSchema = new Schema(
  {
    bgColor: { type: String, required: true },
    patternColor: { type: String, required: true },
    type: { type: String, required: true },
  },
  { _id: false },
);

const LogoSchema = new Schema(
  {
    src: { type: String },
  },
  { _id: false },
);

const schema = new Schema({
  name: { type: String },
  link: { type: String, required: true },
  style: { type: StyleSchema, required: true },
  logo: { type: LogoSchema },
  transitions: { type: Number, default: 0 },
  shortLink: { type: String },
  user: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('qrcode', schema);
