(() => {
  function e(t) {
    return (e =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(t);
  }
  !(function (t) {
    "use strict";
    var a = function (e, a) {
      (this.options = a),
        t(e).rvMedia({
          multiple: !0,
          onSelectFiles: function (e, r) {
            if (void 0 !== e)
              switch (r.data("editor")) {
                case "summernote":
                  !(function (e, a) {
                    if (0 !== a.length)
                      for (var r = e.data("target"), l = 0; l < a.length; l++)
                        if ("video" === a[l].type) {
                          var i = a[l].full_url;
                          (i = i.replace("watch?v=", "embed/")),
                            t(r).summernote(
                              "pasteHTML",
                              '<iframe width="420" height="315" src="' +
                                i +
                                '" frameborder="0" allowfullscreen></iframe>'
                            );
                        } else
                          "image" === a[l].type
                            ? t(r).summernote(
                                "insertImage",
                                a[l].full_url,
                                a[l].basename
                              )
                            : t(r).summernote(
                                "pasteHTML",
                                '<a href="' +
                                  a[l].full_url +
                                  '">' +
                                  a[l].full_url +
                                  "</a>"
                              );
                  })(r, e);
                  break;
                case "wysihtml5":
                  !(function (e, t) {
                    if (0 !== t.length) {
                      for (var a = "", r = 0; r < t.length; r++)
                        if ("video" === t[r].type) {
                          var l = t[r].full_url;
                          a +=
                            '<iframe width="420" height="315" src="' +
                            (l = l.replace("watch?v=", "embed/")) +
                            '" frameborder="0" allowfullscreen></iframe>';
                        } else
                          "image" === t[r].type
                            ? (a +=
                                '<img src="' +
                                t[r].full_url +
                                '" alt="' +
                                t[r].name +
                                '">')
                            : (a +=
                                '<a href="' +
                                t[r].full_url +
                                '">' +
                                t[r].full_url +
                                "</a>");
                      if (e.getValue().length > 0) {
                        var i = e.getValue();
                        e.composer.commands.exec("insertHTML", a),
                          e.getValue() === i && e.setValue(e.getValue() + a);
                      } else e.setValue(e.getValue() + a);
                    }
                  })(t(a.target).data("wysihtml5").editor, e);
                  break;
                case "ckeditor":
                  !(function (e, a) {
                    var r = e.data("target").replace("#", ""),
                      l = "";
                    t.each(a, function (e, t) {
                      var a = t.full_url;
                      "youtube" === t.type
                        ? ((a = a.replace("watch?v=", "embed/")),
                          (l +=
                            '<iframe width="420" height="315" src="' +
                            a +
                            '" frameborder="0" allowfullscreen></iframe><br />'))
                        : "image" === t.type
                        ? (l +=
                            '<img src="' +
                            a +
                            '" alt="' +
                            t.name +
                            '" /><br />')
                        : (l += '<a href="' + a + '">' + t.name + "</a><br />");
                    }),
                      CKEDITOR.instances[r].insertHtml(l);
                  })(r, e);
                  break;
                case "tinymce":
                  !(function (e) {
                    var a = "";
                    t.each(e, function (e, t) {
                      var r = t.full_url;
                      "youtube" === t.type
                        ? ((r = r.replace("watch?v=", "embed/")),
                          (a +=
                            '<iframe width="420" height="315" src="' +
                            r +
                            '" frameborder="0" allowfullscreen></iframe><br />'))
                        : "image" === t.type
                        ? (a +=
                            '<img src="' +
                            r +
                            '" alt="' +
                            t.name +
                            '" /><br />')
                        : (a += '<a href="' + r + '">' + t.name + "</a><br />");
                    }),
                      tinymce.activeEditor.execCommand(
                        "mceInsertContent",
                        !1,
                        a
                      );
                  })(e);
              }
          },
        });
    };
    function r(r) {
      return this.each(function () {
        var l = t(this),
          i = l.data("bs.media"),
          n = t.extend({}, l.data(), "object" === e(r) && r);
        i || l.data("bs.media", new a(this, n));
      });
    }
    (a.VERSION = "1.1.0"),
      (t.fn.addMedia = r),
      (t.fn.addMedia.Constructor = a),
      t(window).on("load", function () {
        t('[data-type="rv-media"]').each(function () {
          var e = t(this);
          r.call(e, e.data());
        });
      });
  })(jQuery);
})();
