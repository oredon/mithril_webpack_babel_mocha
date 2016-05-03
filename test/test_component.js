import MyModel from '../modules/MyModel'
import MyComponent from '../modules/MyComponent'
import assert from 'power-assert'
import m from 'mithril'
import render from 'mithril-node-render'
import mq from 'mithril-query'

describe("mithril-query test.", function () {
    //fake controller for test.
    var controller;
    beforeEach(function () {
        controller = {
            viewModel: {
                dataList: m.prop([])
            }
        };
    });

    it("has items.", function () {
        controller.viewModel.dataList(["a", "b", "c", "d"].map(function (d) {
            return new MyModel({text: d});
        }));
        var view = mq(MyComponent.view(controller));
        assert(view.has("ul"));
        assert(view.contains("b"));
    });
});
