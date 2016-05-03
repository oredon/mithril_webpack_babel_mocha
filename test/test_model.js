import MyModel from '../modules/MyModel'
import assert from 'power-assert'
import sinon from 'sinon'
import m from 'mithril'

sinon.xhr.supportsCORS = true;

describe("ModelTest AJAX", function(){
  var server;
  beforeEach(function () {
      server = sinon.fakeServer.create();
      server.respondImmediately = true;
      m.deps({ XMLHttpRequest: server.xhr });
  });

  afterEach(function () {
      server.restore();
  });

  it("get ajax", function () {
      server.respondWith("GET", "/ajax", [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify({
              text: "this is sinon text."
          })
      ]);
      return MyModel.getData().then(function (obj) {
          assert(obj.text() === "this is sinon text.");
      });
  });

  it("set ajax", function () {
      MyModel.setData([new MyModel({text: "test"})]);

      var req = server.requests[0];
      var json = JSON.parse(req.requestBody);

      assert(req.method === "POST");
      assert(req.url === "/ajax");
      assert(json[0].text === "test");
  });
})
