const Protobuf = require('protobufjs');
const path = require('path');

const root = new Protobuf.Root();
const protoPath = path.join(__dirname, './test.proto');
const parsedProto = root.loadSync(protoPath);
parsedProto.resolveAll();
