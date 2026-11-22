import test from"node:test";import assert from"node:assert/strict";import{parseRange}from"../public/ranges.js";
test("closed range",()=>assert.deepEqual(parseRange("bytes=10-19",100),{status:206,start:10,end:19,length:10,contentRange:"bytes 10-19/100",note:"The server would return only the selected byte interval."}));
test("open ended range clamps to size",()=>assert.equal(parseRange("bytes=95-",100).end,99));
test("suffix range",()=>assert.equal(parseRange("bytes=-8",100).start,92));
test("valid but unsatisfiable range returns 416",()=>assert.equal(parseRange("bytes=100-110",100).status,416));
test("no range selects full response without Content-Range",()=>assert.equal(parseRange("",12).contentRange,null));
test("malformed range is ignored by the model",()=>assert.equal(parseRange("bytes=bad",12).status,200));
test("multi-range is explicitly not simulated",()=>assert.equal(parseRange("bytes=0-2,5-8",12).status,"UNSUPPORTED"));
