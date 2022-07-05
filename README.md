# test-protobufjs

Repro for protobufjs issue. 

## Custom enum value options in protofile fail with 

```js
/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/root.js:104
            throw err;
            ^

Error: illegal value '[' (/Users/diana.suvorova/Dev/test-proto/test.proto, line 14)
    at illegal (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:96:16)
    at readValue (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:135:19)
    at parseOptionValue (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:606:33)
    at parseOption (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:585:27)
    at parseInlineOptions (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:638:17)
    at parseEnumValue_line (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:557:13)
    at ifBlock (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:294:17)
    at parseEnumValue (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:547:9)
    at parseEnum_block (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:532:15)
    at ifBlock (/Users/diana.suvorova/Dev/test-proto/node_modules/protobufjs/src/parse.js:290:17)
```

To repro clone the repo &

```
npm install && npm index.js
```

Loading test.proto file will fail. By contrast custom options without enum values can be loaded successfully (testValid.proto).

The difference between the 2 files is 

![Screen Shot 2022-07-05 at 10 49 15 AM](https://user-images.githubusercontent.com/1284223/177386523-726479a6-4d89-43f2-9193-4b56c6b3648c.png)


Lastly I was trying to add a [test](https://github.com/DianaSuvorova/protobuf.js/pull/2/files) to the protobuf lib directly and it passed.

