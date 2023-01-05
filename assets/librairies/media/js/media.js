(() => {
  var e = {
      7757: (e, t, r) => {
        e.exports = r(5666);
      },
      3746: (e, t, r) => {
        "use strict";
        r.d(t, { O: () => n, s: () => i });
        var n = $.parseJSON(localStorage.getItem("MediaConfig")) || {},
          a = {
            app_key: "483a0xyzytz1242c0d520426e8ba366c530c3d9d3xm",
            request_params: {
              view_type: "tiles",
              filter: "everything",
              view_in: "all_media",
              sort_by: "created_at-desc",
              folder_id: 0,
            },
            hide_details_pane: !1,
            icons: { folder: "fa fa-folder" },
            actions_list: {
              basic: [
                {
                  icon: "fa fa-eye",
                  name: "Preview",
                  action: "preview",
                  order: 0,
                  class: "rv-action-preview",
                },
              ],
              file: [
                {
                  icon: "fa fa-link",
                  name: "Copy link",
                  action: "copy_link",
                  order: 0,
                  class: "rv-action-copy-link",
                },
                {
                  icon: "far fa-edit",
                  name: "Rename",
                  action: "rename",
                  order: 1,
                  class: "rv-action-rename",
                },
                {
                  icon: "fa fa-copy",
                  name: "Make a copy",
                  action: "make_copy",
                  order: 2,
                  class: "rv-action-make-copy",
                },
              ],
              user: [
                {
                  icon: "fa fa-star",
                  name: "Favorite",
                  action: "favorite",
                  order: 2,
                  class: "rv-action-favorite",
                },
                {
                  icon: "fa fa-star",
                  name: "Remove favorite",
                  action: "remove_favorite",
                  order: 3,
                  class: "rv-action-favorite",
                },
              ],
              other: [
                {
                  icon: "fa fa-download",
                  name: "Download",
                  action: "download",
                  order: 0,
                  class: "rv-action-download",
                },
                {
                  icon: "fa fa-trash",
                  name: "Move to trash",
                  action: "trash",
                  order: 1,
                  class: "rv-action-trash",
                },
                {
                  icon: "fa fa-eraser",
                  name: "Delete permanently",
                  action: "delete",
                  order: 2,
                  class: "rv-action-delete",
                },
                {
                  icon: "fa fa-undo",
                  name: "Restore",
                  action: "restore",
                  order: 3,
                  class: "rv-action-restore",
                },
              ],
            },
          };
        (n.app_key && n.app_key === a.app_key) || (n = a),
          (n.request_params.search = "");
        var i = $.parseJSON(localStorage.getItem("RecentItems")) || [];
      },
      3341: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => i });
        var n = r(3746);
        function a(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var i = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var t, r;
          return (
            (t = e),
            (r = [
              {
                key: "getUrlParam",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  t || (t = window.location.search);
                  var r = new RegExp("(?:[?&]|&)" + e + "=([^&]+)", "i"),
                    n = t.match(r);
                  return n && n.length > 1 ? n[1] : null;
                },
              },
              {
                key: "asset",
                value: function (e) {
                  if (
                    "//" === e.substring(0, 2) ||
                    "http://" === e.substring(0, 7) ||
                    "https://" === e.substring(0, 8)
                  )
                    return e;
                  var t =
                    "/" !== RV_MEDIA_URL.base_url.substr(-1, 1)
                      ? RV_MEDIA_URL.base_url + "/"
                      : RV_MEDIA_URL.base_url;
                  return "/" === e.substring(0, 1) ? t + e.substring(1) : t + e;
                },
              },
              {
                key: "showAjaxLoading",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : $(".rv-media-main");
                  e.addClass("on-loading").append(
                    $("#rv_media_loading").html()
                  );
                },
              },
              {
                key: "hideAjaxLoading",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : $(".rv-media-main");
                  e.removeClass("on-loading").find(".loading-wrapper").remove();
                },
              },
              {
                key: "isOnAjaxLoading",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : $(".rv-media-items");
                  return e.hasClass("on-loading");
                },
              },
              {
                key: "jsonEncode",
                value: function (e) {
                  return void 0 === e && (e = null), JSON.stringify(e);
                },
              },
              {
                key: "jsonDecode",
                value: function (e, t) {
                  if (!e) return t;
                  if ("string" == typeof e) {
                    var r;
                    try {
                      r = $.parseJSON(e);
                    } catch (e) {
                      r = t;
                    }
                    return r;
                  }
                  return e;
                },
              },
              {
                key: "getRequestParams",
                value: function () {
                  return window.rvMedia.options &&
                    "modal" === window.rvMedia.options.open_in
                    ? $.extend(
                        !0,
                        n.O.request_params,
                        window.rvMedia.options || {}
                      )
                    : n.O.request_params;
                },
              },
              {
                key: "setSelectedFile",
                value: function (e) {
                  void 0 !== window.rvMedia.options
                    ? (window.rvMedia.options.selected_file_id = e)
                    : (n.O.request_params.selected_file_id = e);
                },
              },
              {
                key: "getConfigs",
                value: function () {
                  return n.O;
                },
              },
              {
                key: "storeConfig",
                value: function () {
                  localStorage.setItem("MediaConfig", e.jsonEncode(n.O));
                },
              },
              {
                key: "storeRecentItems",
                value: function () {
                  localStorage.setItem("RecentItems", e.jsonEncode(n.s));
                },
              },
              {
                key: "addToRecent",
                value: function (e) {
                  e instanceof Array
                    ? _.each(e, function (e) {
                        n.s.push(e);
                      })
                    : (n.s.push(e), this.storeRecentItems());
                },
              },
              {
                key: "getItems",
                value: function () {
                  var e = [];
                  return (
                    $(".js-media-list-title").each(function (t, r) {
                      var n = $(r),
                        a = n.data() || {};
                      (a.index_key = n.index()), e.push(a);
                    }),
                    e
                  );
                },
              },
              {
                key: "getSelectedItems",
                value: function () {
                  var e = [];
                  return (
                    $(".js-media-list-title input[type=checkbox]:checked").each(
                      function (t, r) {
                        var n = $(r).closest(".js-media-list-title"),
                          a = n.data() || {};
                        (a.index_key = n.index()), e.push(a);
                      }
                    ),
                    e
                  );
                },
              },
              {
                key: "getSelectedFiles",
                value: function () {
                  var e = [];
                  return (
                    $(
                      ".js-media-list-title[data-context=file] input[type=checkbox]:checked"
                    ).each(function (t, r) {
                      var n = $(r).closest(".js-media-list-title"),
                        a = n.data() || {};
                      (a.index_key = n.index()), e.push(a);
                    }),
                    e
                  );
                },
              },
              {
                key: "getSelectedFolder",
                value: function () {
                  var e = [];
                  return (
                    $(
                      ".js-media-list-title[data-context=folder] input[type=checkbox]:checked"
                    ).each(function (t, r) {
                      var n = $(r).closest(".js-media-list-title"),
                        a = n.data() || {};
                      (a.index_key = n.index()), e.push(a);
                    }),
                    e
                  );
                },
              },
              {
                key: "isUseInModal",
                value: function () {
                  return (
                    "select-files" === e.getUrlParam("media-action") ||
                    (window.rvMedia &&
                      window.rvMedia.options &&
                      "modal" === window.rvMedia.options.open_in)
                  );
                },
              },
              {
                key: "resetPagination",
                value: function () {
                  RV_MEDIA_CONFIG.pagination = {
                    paged: 1,
                    posts_per_page: 40,
                    in_process_get_media: !1,
                    has_more: !0,
                  };
                },
              },
            ]),
            null && a(t.prototype, null),
            r && a(t, r),
            e
          );
        })();
      },
      99: (e, t, r) => {
        "use strict";
        r.d(t, { b: () => s });
        var n = r(3746),
          a = r(3341),
          i = r(7705);
        function o(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var s = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var t, r;
          return (
            (t = e),
            (r = [
              {
                key: "handleDropdown",
                value: function () {
                  var t = _.size(a.Z.getSelectedItems());
                  e.renderActions(),
                    t > 0
                      ? $(".rv-dropdown-actions").removeClass("disabled")
                      : $(".rv-dropdown-actions").addClass("disabled");
                },
              },
              {
                key: "handlePreview",
                value: function () {
                  var e = [];
                  _.each(a.Z.getSelectedFiles(), function (t) {
                    _.includes(["image", "pdf", "text", "video"], t.type) &&
                      (e.push({ src: t.full_url }), n.s.push(t.id));
                  }),
                    _.size(e) > 0
                      ? ($.fancybox.open(e), a.Z.storeRecentItems())
                      : this.handleGlobalAction("download");
                },
              },
              {
                key: "handleCopyLink",
                value: function () {
                  var e = "";
                  _.each(a.Z.getSelectedFiles(), function (t) {
                    _.isEmpty(e) || (e += "\n"), (e += t.full_url);
                  });
                  var t = $(".js-rv-clipboard-temp");
                  t.data("clipboard-text", e),
                    new Clipboard(".js-rv-clipboard-temp", {
                      text: function () {
                        return e;
                      },
                    }),
                    i.e.showMessage(
                      "success",
                      RV_MEDIA_CONFIG.translations.clipboard.success,
                      RV_MEDIA_CONFIG.translations.message.success_header
                    ),
                    t.trigger("click");
                },
              },
              {
                key: "handleGlobalAction",
                value: function (t, r) {
                  var n = [];
                  switch (
                    (_.each(a.Z.getSelectedItems(), function (e) {
                      n.push({
                        is_folder: e.is_folder,
                        id: e.id,
                        full_url: e.full_url,
                      });
                    }),
                    t)
                  ) {
                    case "rename":
                      $("#modal_rename_items")
                        .modal("show")
                        .find("form.rv-form")
                        .data("action", t);
                      break;
                    case "copy_link":
                      e.handleCopyLink();
                      break;
                    case "preview":
                      e.handlePreview();
                      break;
                    case "trash":
                      $("#modal_trash_items")
                        .modal("show")
                        .find("form.rv-form")
                        .data("action", t);
                      break;
                    case "delete":
                      $("#modal_delete_items")
                        .modal("show")
                        .find("form.rv-form")
                        .data("action", t);
                      break;
                    case "empty_trash":
                      $("#modal_empty_trash")
                        .modal("show")
                        .find("form.rv-form")
                        .data("action", t);
                      break;
                    case "download":
                      var o = RV_MEDIA_URL.download,
                        s = 0;
                      _.each(a.Z.getSelectedItems(), function (e) {
                        _.includes(
                          a.Z.getConfigs().denied_download,
                          e.mime_type
                        ) ||
                          ((o +=
                            (0 === s ? "?" : "&") +
                            "selected[" +
                            s +
                            "][is_folder]=" +
                            e.is_folder +
                            "&selected[" +
                            s +
                            "][id]=" +
                            e.id),
                          s++);
                      }),
                        o !== RV_MEDIA_URL.download
                          ? window.open(o, "_blank")
                          : i.e.showMessage(
                              "error",
                              RV_MEDIA_CONFIG.translations.download.error,
                              RV_MEDIA_CONFIG.translations.message.error_header
                            );
                      break;
                    default:
                      e.processAction({ selected: n, action: t }, r);
                  }
                },
              },
              {
                key: "processAction",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  $.ajax({
                    url: RV_MEDIA_URL.global_actions,
                    type: "POST",
                    data: e,
                    dataType: "json",
                    beforeSend: function () {
                      a.Z.showAjaxLoading();
                    },
                    success: function (e) {
                      a.Z.resetPagination(),
                        e.error
                          ? i.e.showMessage(
                              "error",
                              e.message,
                              RV_MEDIA_CONFIG.translations.message.error_header
                            )
                          : i.e.showMessage(
                              "success",
                              e.message,
                              RV_MEDIA_CONFIG.translations.message
                                .success_header
                            ),
                        t && t(e);
                    },
                    complete: function () {
                      a.Z.hideAjaxLoading();
                    },
                    error: function (e) {
                      i.e.handleError(e);
                    },
                  });
                },
              },
              {
                key: "renderRenameItems",
                value: function () {
                  var e = $("#rv_media_rename_item").html(),
                    t = $("#modal_rename_items .rename-items").empty();
                  _.each(a.Z.getSelectedItems(), function (r) {
                    var n = e
                        .replace(/__icon__/gi, r.icon || "fa fa-file")
                        .replace(/__placeholder__/gi, "Input file name")
                        .replace(/__value__/gi, r.name),
                      a = $(n);
                    a.data("id", r.id),
                      a.data("is_folder", r.is_folder),
                      a.data("name", r.name),
                      t.append(a);
                  });
                },
              },
              {
                key: "renderActions",
                value: function () {
                  var e = a.Z.getSelectedFolder().length > 0,
                    t = $("#rv_action_item").html(),
                    r = 0,
                    n = $(".rv-dropdown-actions .dropdown-menu");
                  n.empty();
                  var i = $.extend({}, !0, a.Z.getConfigs().actions_list);
                  e &&
                    ((i.basic = _.reject(i.basic, function (e) {
                      return "preview" === e.action;
                    })),
                    (i.file = _.reject(i.file, function (e) {
                      return "copy_link" === e.action;
                    })),
                    _.includes(RV_MEDIA_CONFIG.permissions, "folders.create") ||
                      (i.file = _.reject(i.file, function (e) {
                        return "make_copy" === e.action;
                      })),
                    _.includes(RV_MEDIA_CONFIG.permissions, "folders.edit") ||
                      ((i.file = _.reject(i.file, function (e) {
                        return _.includes(["rename"], e.action);
                      })),
                      (i.user = _.reject(i.user, function (e) {
                        return _.includes(["rename"], e.action);
                      }))),
                    _.includes(RV_MEDIA_CONFIG.permissions, "folders.trash") ||
                      (i.other = _.reject(i.other, function (e) {
                        return _.includes(["trash", "restore"], e.action);
                      })),
                    _.includes(
                      RV_MEDIA_CONFIG.permissions,
                      "folders.destroy"
                    ) ||
                      (i.other = _.reject(i.other, function (e) {
                        return _.includes(["delete"], e.action);
                      })),
                    _.includes(
                      RV_MEDIA_CONFIG.permissions,
                      "folders.favorite"
                    ) ||
                      (i.other = _.reject(i.other, function (e) {
                        return _.includes(
                          ["favorite", "remove_favorite"],
                          e.action
                        );
                      })));
                  var o = a.Z.getSelectedFiles(),
                    s = !1;
                  _.each(o, function (e) {
                    _.includes(["image", "pdf", "text", "video"], e.type) &&
                      (s = !0);
                  }),
                    s ||
                      (i.basic = _.reject(i.basic, function (e) {
                        return "preview" === e.action;
                      })),
                    o.length > 0 &&
                      (_.includes(
                        RV_MEDIA_CONFIG.permissions,
                        "files.create"
                      ) ||
                        (i.file = _.reject(i.file, function (e) {
                          return "make_copy" === e.action;
                        })),
                      _.includes(RV_MEDIA_CONFIG.permissions, "files.edit") ||
                        (i.file = _.reject(i.file, function (e) {
                          return _.includes(["rename"], e.action);
                        })),
                      _.includes(RV_MEDIA_CONFIG.permissions, "files.trash") ||
                        (i.other = _.reject(i.other, function (e) {
                          return _.includes(["trash", "restore"], e.action);
                        })),
                      _.includes(
                        RV_MEDIA_CONFIG.permissions,
                        "files.destroy"
                      ) ||
                        (i.other = _.reject(i.other, function (e) {
                          return _.includes(["delete"], e.action);
                        })),
                      _.includes(
                        RV_MEDIA_CONFIG.permissions,
                        "files.favorite"
                      ) ||
                        (i.other = _.reject(i.other, function (e) {
                          return _.includes(
                            ["favorite", "remove_favorite"],
                            e.action
                          );
                        }))),
                    _.each(i, function (e, i) {
                      _.each(e, function (e, o) {
                        var s = !1;
                        switch (a.Z.getRequestParams().view_in) {
                          case "all_media":
                            _.includes(
                              ["remove_favorite", "delete", "restore"],
                              e.action
                            ) && (s = !0);
                            break;
                          case "recent":
                            _.includes(
                              [
                                "remove_favorite",
                                "delete",
                                "restore",
                                "make_copy",
                              ],
                              e.action
                            ) && (s = !0);
                            break;
                          case "favorites":
                            _.includes(
                              ["favorite", "delete", "restore", "make_copy"],
                              e.action
                            ) && (s = !0);
                            break;
                          case "trash":
                            _.includes(
                              [
                                "preview",
                                "delete",
                                "restore",
                                "rename",
                                "download",
                              ],
                              e.action
                            ) || (s = !0);
                        }
                        if (!s) {
                          var l = t
                            .replace(/__action__/gi, e.action || "")
                            .replace(/__icon__/gi, e.icon || "")
                            .replace(
                              /__name__/gi,
                              RV_MEDIA_CONFIG.translations.actions_list[i][
                                e.action
                              ] || e.name
                            );
                          !o &&
                            r &&
                            (l =
                              '<li role="separator" class="divider"></li>' + l),
                            n.append(l);
                        }
                      }),
                        e.length > 0 && r++;
                    });
                },
              },
            ]),
            null && o(t.prototype, null),
            r && o(t, r),
            e
          );
        })();
      },
      4669: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => o });
        var n = r(99),
          a = r(3341);
        function i(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var o = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var t, r;
          return (
            (t = e),
            (r = [
              {
                key: "initContext",
                value: function () {
                  jQuery().contextMenu &&
                    ($.contextMenu({
                      selector: '.js-context-menu[data-context="file"]',
                      build: function () {
                        return { items: e._fileContextMenu() };
                      },
                    }),
                    $.contextMenu({
                      selector: '.js-context-menu[data-context="folder"]',
                      build: function () {
                        return { items: e._folderContextMenu() };
                      },
                    }));
                },
              },
              {
                key: "_fileContextMenu",
                value: function () {
                  var e = {
                    preview: {
                      name: "Preview",
                      icon: function (e, t, r, n) {
                        return (
                          t.html(
                            '<i class="fa fa-eye" aria-hidden="true"></i> ' +
                              n.name
                          ),
                          "context-menu-icon-updated"
                        );
                      },
                      callback: function () {
                        n.b.handlePreview();
                      },
                    },
                  };
                  _.each(a.Z.getConfigs().actions_list, function (t, r) {
                    _.each(t, function (t) {
                      e[t.action] = {
                        name: t.name,
                        icon: function (e, n, a, i) {
                          return (
                            n.html(
                              '<i class="' +
                                t.icon +
                                '" aria-hidden="true"></i> ' +
                                (RV_MEDIA_CONFIG.translations.actions_list[r][
                                  t.action
                                ] || i.name)
                            ),
                            "context-menu-icon-updated"
                          );
                        },
                        callback: function () {
                          $(
                            '.js-files-action[data-action="' + t.action + '"]'
                          ).trigger("click");
                        },
                      };
                    });
                  });
                  var t = [];
                  switch (a.Z.getRequestParams().view_in) {
                    case "all_media":
                      t = ["remove_favorite", "delete", "restore"];
                      break;
                    case "recent":
                      t = ["remove_favorite", "delete", "restore", "make_copy"];
                      break;
                    case "favorites":
                      t = ["favorite", "delete", "restore", "make_copy"];
                      break;
                    case "trash":
                      e = {
                        preview: e.preview,
                        rename: e.rename,
                        download: e.download,
                        delete: e.delete,
                        restore: e.restore,
                      };
                  }
                  _.each(t, function (t) {
                    e[t] = void 0;
                  }),
                    a.Z.getSelectedFolder().length > 0 &&
                      ((e.preview = void 0),
                      (e.copy_link = void 0),
                      _.includes(
                        RV_MEDIA_CONFIG.permissions,
                        "folders.create"
                      ) || (e.make_copy = void 0),
                      _.includes(RV_MEDIA_CONFIG.permissions, "folders.edit") ||
                        (e.rename = void 0),
                      _.includes(
                        RV_MEDIA_CONFIG.permissions,
                        "folders.trash"
                      ) || ((e.trash = void 0), (e.restore = void 0)),
                      _.includes(
                        RV_MEDIA_CONFIG.permissions,
                        "folders.destroy"
                      ) || (e.delete = void 0),
                      _.includes(
                        RV_MEDIA_CONFIG.permissions,
                        "folders.favorite"
                      ) ||
                        ((e.favorite = void 0), (e.remove_favorite = void 0)));
                  var r = a.Z.getSelectedFiles();
                  r.length > 0 &&
                    (_.includes(RV_MEDIA_CONFIG.permissions, "files.create") ||
                      (e.make_copy = void 0),
                    _.includes(RV_MEDIA_CONFIG.permissions, "files.edit") ||
                      (e.rename = void 0),
                    _.includes(RV_MEDIA_CONFIG.permissions, "files.trash") ||
                      ((e.trash = void 0), (e.restore = void 0)),
                    _.includes(RV_MEDIA_CONFIG.permissions, "files.destroy") ||
                      (e.delete = void 0),
                    _.includes(RV_MEDIA_CONFIG.permissions, "files.favorite") ||
                      ((e.favorite = void 0), (e.remove_favorite = void 0)));
                  var i = !1;
                  return (
                    _.each(r, function (e) {
                      _.includes(["image", "pdf", "text", "video"], e.type) &&
                        (i = !0);
                    }),
                    i || (e.preview = void 0),
                    e
                  );
                },
              },
              {
                key: "_folderContextMenu",
                value: function () {
                  var t = e._fileContextMenu();
                  return (t.preview = void 0), (t.copy_link = void 0), t;
                },
              },
              {
                key: "destroyContext",
                value: function () {
                  jQuery().contextMenu && $.contextMenu("destroy");
                },
              },
            ]),
            null && i(t.prototype, null),
            r && i(t, r),
            e
          );
        })();
      },
      7705: (e, t, r) => {
        "use strict";
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        r.d(t, { e: () => a });
        var a = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var t, r;
          return (
            (t = e),
            (r = [
              {
                key: "showMessage",
                value: function (e, t) {
                  toastr.options = {
                    closeButton: !0,
                    progressBar: !0,
                    positionClass: "toast-bottom-right",
                    onclick: null,
                    showDuration: 1e3,
                    hideDuration: 1e3,
                    timeOut: 1e4,
                    extendedTimeOut: 1e3,
                    showEasing: "swing",
                    hideEasing: "linear",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut",
                  };
                  var r = "";
                  switch (e) {
                    case "error":
                      r = RV_MEDIA_CONFIG.translations.message.error_header;
                      break;
                    case "success":
                      r = RV_MEDIA_CONFIG.translations.message.success_header;
                  }
                  toastr[e](t, r);
                },
              },
              {
                key: "handleError",
                value: function (t) {
                  void 0 === t.responseJSON || _.isArray(t.errors)
                    ? void 0 !== t.responseJSON
                      ? void 0 !== t.responseJSON.errors
                        ? 422 === t.status &&
                          e.handleValidationError(t.responseJSON.errors)
                        : void 0 !== t.responseJSON.message
                        ? e.showMessage("error", t.responseJSON.message)
                        : $.each(t.responseJSON, function (t, r) {
                            $.each(r, function (t, r) {
                              e.showMessage("error", r);
                            });
                          })
                      : e.showMessage("error", t.statusText)
                    : e.handleValidationError(t.responseJSON.errors);
                },
              },
              {
                key: "handleValidationError",
                value: function (t) {
                  var r = "";
                  $.each(t, function (e, t) {
                    (r += t + "<br />"),
                      $('*[name="' + e + '"]').addClass("field-has-error"),
                      $('*[name$="[' + e + ']"]').addClass("field-has-error");
                  }),
                    e.showMessage("error", r);
                },
              },
            ]),
            null && n(t.prototype, null),
            r && n(t, r),
            e
          );
        })();
      },
      5841: (e, t, r) => {
        "use strict";
        r.d(t, { G: () => l });
        var n = r(3341),
          a = r(3746),
          i = r(4669);
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var l = (function () {
            function e() {
              o(this, e);
            }
            var t, r;
            return (
              (t = e),
              (r = [
                {
                  key: "editorSelectFile",
                  value: function (e) {
                    var t =
                      n.Z.getUrlParam("CKEditor") ||
                      n.Z.getUrlParam("CKEditorFuncNum");
                    if (window.opener && t) {
                      var r = _.first(e);
                      window.opener.CKEDITOR.tools.callFunction(
                        n.Z.getUrlParam("CKEditorFuncNum"),
                        r.full_url
                      ),
                        window.opener && window.close();
                    }
                  },
                },
              ]),
              null && s(t.prototype, null),
              r && s(t, r),
              e
            );
          })(),
          c = function e(t, r) {
            o(this, e), (window.rvMedia = window.rvMedia || {});
            var s = $("body");
            r = $.extend(
              !0,
              { multiple: !0, type: "*", onSelectFiles: function (e, t) {} },
              r
            );
            var l = function (e) {
              e.preventDefault();
              var t = $(e.currentTarget);
              $("#rv_media_modal").modal(),
                (window.rvMedia.options = r),
                (window.rvMedia.options.open_in = "modal"),
                (window.rvMedia.$el = t),
                (a.O.request_params.filter = "everything"),
                n.Z.storeConfig();
              var o = window.rvMedia.$el.data("rv-media");
              void 0 !== o &&
                o.length > 0 &&
                ((o = o[0]),
                (window.rvMedia.options = $.extend(
                  !0,
                  window.rvMedia.options,
                  o || {}
                )),
                void 0 !== o.selected_file_id
                  ? (window.rvMedia.options.is_popup = !0)
                  : void 0 !== window.rvMedia.options.is_popup &&
                    (window.rvMedia.options.is_popup = void 0)),
                0 === $("#rv_media_body .rv-media-container").length
                  ? $("#rv_media_body").load(RV_MEDIA_URL.popup, function (e) {
                      e.error && alert(e.message),
                        $("#rv_media_body")
                          .removeClass("media-modal-loading")
                          .closest(".modal-content")
                          .removeClass("bb-loading"),
                        $(document)
                          .find(
                            ".rv-media-container .js-change-action[data-type=refresh]"
                          )
                          .trigger("click"),
                        "everything" !== n.Z.getRequestParams().filter &&
                          $(
                            ".rv-media-actions .btn.js-rv-media-change-filter-group.js-filter-by-type"
                          ).hide(),
                        i.L.destroyContext(),
                        i.L.initContext();
                    })
                  : $(document)
                      .find(
                        ".rv-media-container .js-change-action[data-type=refresh]"
                      )
                      .trigger("click");
            };
            "string" == typeof t
              ? s.off("click", t).on("click", t, l)
              : t.off("click").on("click", l);
          };
        (window.RvMediaStandAlone = c),
          $(".js-insert-to-editor")
            .off("click")
            .on("click", function (e) {
              e.preventDefault();
              var t = n.Z.getSelectedFiles();
              _.size(t) > 0 && l.editorSelectFile(t);
            }),
          ($.fn.rvMedia = function (e) {
            var t = $(this);
            (a.O.request_params.filter = "everything"),
              $(document)
                .find(".js-insert-to-editor")
                .prop("disabled", "trash" === a.O.request_params.view_in),
              n.Z.storeConfig(),
              new c(t, e);
          });
      },
      5666: (e) => {
        var t = (function (e) {
          "use strict";
          var t,
            r = Object.prototype,
            n = r.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            o = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function l(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function c(e, t, r, n) {
            var a = t && t.prototype instanceof _ ? t : _,
              i = Object.create(a.prototype),
              o = new E(n || []);
            return (
              (i._invoke = (function (e, t, r) {
                var n = u;
                return function (a, i) {
                  if (n === p) throw new Error("Generator is already running");
                  if (n === v) {
                    if ("throw" === a) throw i;
                    return j();
                  }
                  for (r.method = a, r.arg = i; ; ) {
                    var o = r.delegate;
                    if (o) {
                      var s = I(o, r);
                      if (s) {
                        if (s === m) continue;
                        return s;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === u) throw ((n = v), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = p;
                    var l = d(e, t, r);
                    if ("normal" === l.type) {
                      if (((n = r.done ? v : f), l.arg === m)) continue;
                      return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type &&
                      ((n = v), (r.method = "throw"), (r.arg = l.arg));
                  }
                };
              })(e, r, o)),
              i
            );
          }
          function d(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = c;
          var u = "suspendedStart",
            f = "suspendedYield",
            p = "executing",
            v = "completed",
            m = {};
          function _() {}
          function h() {}
          function g() {}
          var y = {};
          y[i] = function () {
            return this;
          };
          var w = Object.getPrototypeOf,
            b = w && w(w(O([])));
          b && b !== r && n.call(b, i) && (y = b);
          var k = (g.prototype = _.prototype = Object.create(y));
          function M(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function $(e, t) {
            function r(a, i, o, s) {
              var l = d(e[a], e, i);
              if ("throw" !== l.type) {
                var c = l.arg,
                  u = c.value;
                return u && "object" == typeof u && n.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        r("next", e, o, s);
                      },
                      function (e) {
                        r("throw", e, o, s);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (c.value = e), o(c);
                      },
                      function (e) {
                        return r("throw", e, o, s);
                      }
                    );
              }
              s(l.arg);
            }
            var a;
            this._invoke = function (e, n) {
              function i() {
                return new t(function (t, a) {
                  r(e, n, t, a);
                });
              }
              return (a = a ? a.then(i, i) : i());
            };
          }
          function I(e, r) {
            var n = e.iterator[r.method];
            if (n === t) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  I(e, r),
                  "throw" === r.method)
                )
                  return m;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return m;
            }
            var a = d(n, e.iterator, r.arg);
            if ("throw" === a.type)
              return (
                (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), m
              );
            var i = a.arg;
            return i
              ? i.done
                ? ((r[e.resultName] = i.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  m)
                : i
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                m);
          }
          function C(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function x(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function E(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(C, this),
              this.reset(!0);
          }
          function O(e) {
            if (e) {
              var r = e[i];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  o = function r() {
                    for (; ++a < e.length; )
                      if (n.call(e, a))
                        return (r.value = e[a]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (o.next = o);
              }
            }
            return { next: j };
          }
          function j() {
            return { value: t, done: !0 };
          }
          return (
            (h.prototype = k.constructor = g),
            (g.constructor = h),
            (h.displayName = l(g, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === h || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, g)
                  : ((e.__proto__ = g), l(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(k)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            M($.prototype),
            ($.prototype[o] = function () {
              return this;
            }),
            (e.AsyncIterator = $),
            (e.async = function (t, r, n, a, i) {
              void 0 === i && (i = Promise);
              var o = new $(c(t, r, n, a), i);
              return e.isGeneratorFunction(r)
                ? o
                : o.next().then(function (e) {
                    return e.done ? e.value : o.next();
                  });
            }),
            M(k),
            l(k, s, "Generator"),
            (k[i] = function () {
              return this;
            }),
            (k.toString = function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = O),
            (E.prototype = {
              constructor: E,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(x),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function a(n, a) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (r.next = n),
                    a && ((r.method = "next"), (r.arg = t)),
                    !!a
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    s = o.completion;
                  if ("root" === o.tryLoc) return a("end");
                  if (o.tryLoc <= this.prev) {
                    var l = n.call(o, "catchLoc"),
                      c = n.call(o, "finallyLoc");
                    if (l && c) {
                      if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                    } else if (l) {
                      if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r];
                  if (
                    a.tryLoc <= this.prev &&
                    n.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var i = a;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var o = i ? i.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                    : this.complete(o)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  m
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), x(r), m;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var a = n.arg;
                      x(r);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: O(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  m
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          Function("r", "regeneratorRuntime = r")(t);
        }
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = r(7757),
        t = r.n(e),
        n = r(3746),
        a = r(3341),
        i = r(7705),
        o = r(99),
        s = r(4669);
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var c = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.group = {}),
            (this.group.list = $("#rv_media_items_list").html()),
            (this.group.tiles = $("#rv_media_items_tiles").html()),
            (this.item = {}),
            (this.item.list = $("#rv_media_items_list_element").html()),
            (this.item.tiles = $("#rv_media_items_tiles_element").html()),
            (this.$groupContainer = $(".rv-media-items"));
        }
        var t, r;
        return (
          (t = e),
          (r = [
            {
              key: "renderData",
              value: function (e) {
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  n = this,
                  i = a.Z.getConfigs(),
                  s = n.group[a.Z.getRequestParams().view_type],
                  l = a.Z.getRequestParams().view_in;
                _.includes(
                  ["all_media", "public", "trash", "favorites", "recent"],
                  l
                ) || (l = "all_media"),
                  (s = s
                    .replace(
                      /__noItemIcon__/gi,
                      RV_MEDIA_CONFIG.translations.no_item[l].icon || ""
                    )
                    .replace(
                      /__noItemTitle__/gi,
                      RV_MEDIA_CONFIG.translations.no_item[l].title || ""
                    )
                    .replace(
                      /__noItemMessage__/gi,
                      RV_MEDIA_CONFIG.translations.no_item[l].message || ""
                    ));
                var c = $(s),
                  d = c.find("ul");
                r &&
                  this.$groupContainer.find(".rv-media-grid ul").length > 0 &&
                  (d = this.$groupContainer.find(".rv-media-grid ul")),
                  _.size(e.folders) > 0 || _.size(e.files) > 0 || r
                    ? $(".rv-media-items").addClass("has-items")
                    : $(".rv-media-items").removeClass("has-items"),
                  _.forEach(e.folders, function (e) {
                    var t = n.item[a.Z.getRequestParams().view_type];
                    t = t
                      .replace(/__type__/gi, "folder")
                      .replace(/__id__/gi, e.id)
                      .replace(/__name__/gi, e.name || "")
                      .replace(/__size__/gi, "")
                      .replace(/__date__/gi, e.created_at || "")
                      .replace(/__thumb__/gi, '<i class="fa fa-folder"></i>');
                    var r = $(t);
                    _.forEach(e, function (e, t) {
                      r.data(t, e);
                    }),
                      r.data("is_folder", !0),
                      r.data("icon", i.icons.folder),
                      d.append(r);
                  }),
                  _.forEach(e.files, function (e) {
                    var t = n.item[a.Z.getRequestParams().view_type];
                    (t = t
                      .replace(/__type__/gi, "file")
                      .replace(/__id__/gi, e.id)
                      .replace(/__name__/gi, e.name || "")
                      .replace(/__size__/gi, e.size || "")
                      .replace(/__date__/gi, e.created_at || "")),
                      (t =
                        "list" === a.Z.getRequestParams().view_type
                          ? t.replace(
                              /__thumb__/gi,
                              '<i class="' + e.icon + '"></i>'
                            )
                          : t.replace(
                              /__thumb__/gi,
                              e.thumb
                                ? '<img src="' +
                                    e.thumb +
                                    '" alt="' +
                                    e.name +
                                    '">'
                                : '<i class="' + e.icon + '"></i>'
                            ));
                    var r = $(t);
                    r.data("is_folder", !1),
                      _.forEach(e, function (e, t) {
                        r.data(t, e);
                      }),
                      d.append(r);
                  }),
                  !1 !== t && n.$groupContainer.empty(),
                  (r &&
                    this.$groupContainer.find(".rv-media-grid ul").length >
                      0) ||
                    n.$groupContainer.append(c),
                  n.$groupContainer.find(".loading-wrapper").remove(),
                  o.b.handleDropdown(),
                  $(
                    ".js-media-list-title[data-id=" + e.selected_file_id + "]"
                  ).trigger("click");
              },
            },
          ]) && l(t.prototype, r),
          e
        );
      })();
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var u = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.$detailsWrapper = $(".rv-media-main .rv-media-details")),
            (this.descriptionItemTemplate =
              '<div class="rv-media-name"><p>__title__</p>__url__</div>'),
            (this.onlyFields = [
              "name",
              "full_url",
              "size",
              "mime_type",
              "created_at",
              "updated_at",
              "nothing_selected",
            ]);
        }
        var t, r;
        return (
          (t = e),
          (r = [
            {
              key: "renderData",
              value: function (e) {
                var t = this,
                  r = this,
                  n =
                    "image" === e.type
                      ? '<img src="' + e.full_url + '" alt="' + e.name + '">'
                      : '<i class="' + e.icon + '"></i>',
                  i = "",
                  o = !1;
                _.forEach(e, function (e, t) {
                  _.includes(r.onlyFields, t) &&
                    (_.includes(["size", "mime_type"], t) ||
                      ((i += r.descriptionItemTemplate
                        .replace(/__title__/gi, RV_MEDIA_CONFIG.translations[t])
                        .replace(
                          /__url__/gi,
                          e
                            ? "full_url" === t
                              ? '<div class="input-group"><input id="file_details_url" type="text" value="' +
                                e +
                                '" class="form-control"><span class="input-group-prepend"><button class="btn btn-default js-btn-copy-to-clipboard" type="button" data-clipboard-target="#file_details_url" title="Copied"><img class="clippy" src="' +
                                a.Z.asset(
                                  "/vendor/core/core/media/images/clippy.svg"
                                ) +
                                '" width="13" alt="Copy to clipboard"></button></span></div>'
                              : '<span title="' + e + '">' + e + "</span>"
                            : ""
                        )),
                      "full_url" === t && (o = !0)));
                }),
                  r.$detailsWrapper.find(".rv-media-thumbnail").html(n),
                  r.$detailsWrapper.find(".rv-media-description").html(i),
                  o &&
                    (new Clipboard(".js-btn-copy-to-clipboard"),
                    $(".js-btn-copy-to-clipboard")
                      .tooltip()
                      .on("mouseenter", function () {
                        $(t).tooltip("hide");
                      })
                      .on("mouseleave", function () {
                        $(t).tooltip("hide");
                      }));
              },
            },
          ]) && d(t.prototype, r),
          e
        );
      })();
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var p = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.MediaList = new c()),
            (this.MediaDetails = new u()),
            (this.breadcrumbTemplate = $("#rv_media_breadcrumb_item").html());
        }
        var t, r, l;
        return (
          (t = e),
          (l = [
            {
              key: "refreshFilter",
              value: function () {
                var e = $(".rv-media-container"),
                  t = a.Z.getRequestParams().view_in;
                "all_media" === t || a.Z.getRequestParams().folder_id
                  ? ($(
                      '.rv-media-actions .btn:not([data-type="refresh"]):not(label)'
                    ).removeClass("disabled"),
                    e.attr("data-allow-upload", "true"))
                  : ($(
                      '.rv-media-actions .btn:not([data-type="refresh"]):not(label)'
                    ).addClass("disabled"),
                    e.attr("data-allow-upload", "false")),
                  $(
                    ".rv-media-actions .btn.js-rv-media-change-filter-group"
                  ).removeClass("disabled");
                var r = $('.rv-media-actions .btn[data-action="empty_trash"]');
                "trash" === t
                  ? (r.removeClass("hidden").removeClass("disabled"),
                    _.size(a.Z.getItems()) ||
                      r.addClass("hidden").addClass("disabled"))
                  : r.addClass("hidden"),
                  s.L.destroyContext(),
                  s.L.initContext(),
                  e.attr("data-view-in", t);
              },
            },
          ]),
          (r = [
            {
              key: "getMedia",
              value: function () {
                var t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  r =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  s =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                if (void 0 !== RV_MEDIA_CONFIG.pagination) {
                  if (RV_MEDIA_CONFIG.pagination.in_process_get_media) return;
                  RV_MEDIA_CONFIG.pagination.in_process_get_media = !0;
                }
                var l = this;
                l.getFileDetails({
                  icon: "far fa-image",
                  nothing_selected: "",
                });
                var c = a.Z.getRequestParams();
                "recent" === c.view_in && (c.recent_items = n.s),
                  (c.is_popup = !0 === r || void 0),
                  (c.onSelectFiles = void 0),
                  void 0 !== c.search &&
                    "" != c.search &&
                    void 0 !== c.selected_file_id &&
                    (c.selected_file_id = void 0),
                  (c.load_more_file = s),
                  void 0 !== RV_MEDIA_CONFIG.pagination &&
                    ((c.paged = RV_MEDIA_CONFIG.pagination.paged),
                    (c.posts_per_page =
                      RV_MEDIA_CONFIG.pagination.posts_per_page)),
                  $.ajax({
                    url: RV_MEDIA_URL.get_media,
                    type: "GET",
                    data: c,
                    dataType: "json",
                    beforeSend: function () {
                      a.Z.showAjaxLoading();
                    },
                    success: function (r) {
                      l.MediaList.renderData(r.data, t, s),
                        l.renderBreadcrumbs(r.data.breadcrumbs),
                        e.refreshFilter(),
                        o.b.renderActions(),
                        void 0 !== RV_MEDIA_CONFIG.pagination &&
                          (void 0 !== RV_MEDIA_CONFIG.pagination.paged &&
                            (RV_MEDIA_CONFIG.pagination.paged += 1),
                          void 0 !==
                            RV_MEDIA_CONFIG.pagination.in_process_get_media &&
                            (RV_MEDIA_CONFIG.pagination.in_process_get_media =
                              !1),
                          void 0 !==
                            RV_MEDIA_CONFIG.pagination.posts_per_page &&
                            r.data.files.length + r.data.folders.length <
                              RV_MEDIA_CONFIG.pagination.posts_per_page &&
                            void 0 !== RV_MEDIA_CONFIG.pagination.has_more &&
                            (RV_MEDIA_CONFIG.pagination.has_more = !1));
                    },
                    complete: function () {
                      a.Z.hideAjaxLoading();
                    },
                    error: function (e) {
                      i.e.handleError(e);
                    },
                  });
              },
            },
            {
              key: "getFileDetails",
              value: function (e) {
                this.MediaDetails.renderData(e);
              },
            },
            {
              key: "renderBreadcrumbs",
              value: function (e) {
                var t = this,
                  r = $(".rv-media-breadcrumb .breadcrumb");
                r.find("li").remove(),
                  _.each(e, function (e) {
                    var n = t.breadcrumbTemplate;
                    (n = n
                      .replace(/__name__/gi, e.name || "")
                      .replace(
                        /__icon__/gi,
                        e.icon ? '<i class="' + e.icon + '"></i>' : ""
                      )
                      .replace(/__folderId__/gi, e.id || 0)),
                      r.append($(n));
                  }),
                  $(".rv-media-container").attr(
                    "data-breadcrumb-count",
                    _.size(e)
                  );
              },
            },
          ]) && f(t.prototype, r),
          l && f(t, l),
          e
        );
      })();
      function v(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var m = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.MediaService = new p()),
            $("body").on("shown.bs.modal", "#modal_add_folder", function (e) {
              $(e.currentTarget)
                .find(".form-add-folder input[type=text]")
                .focus();
            });
        }
        var t, r, o;
        return (
          (t = e),
          (o = [
            {
              key: "closeModal",
              value: function () {
                $(document).find("#modal_add_folder").modal("hide");
              },
            },
          ]),
          (r = [
            {
              key: "create",
              value: function (t) {
                var r = this;
                $.ajax({
                  url: RV_MEDIA_URL.create_folder,
                  type: "POST",
                  data: {
                    parent_id: a.Z.getRequestParams().folder_id,
                    name: t,
                  },
                  dataType: "json",
                  beforeSend: function () {
                    a.Z.showAjaxLoading();
                  },
                  success: function (t) {
                    t.error
                      ? i.e.showMessage(
                          "error",
                          t.message,
                          RV_MEDIA_CONFIG.translations.message.error_header
                        )
                      : (i.e.showMessage(
                          "success",
                          t.message,
                          RV_MEDIA_CONFIG.translations.message.success_header
                        ),
                        a.Z.resetPagination(),
                        r.MediaService.getMedia(!0),
                        e.closeModal());
                  },
                  complete: function () {
                    a.Z.hideAjaxLoading();
                  },
                  error: function (e) {
                    i.e.handleError(e);
                  },
                });
              },
            },
            {
              key: "changeFolder",
              value: function (e) {
                (n.O.request_params.folder_id = e),
                  a.Z.storeConfig(),
                  this.MediaService.getMedia(!0);
              },
            },
          ]) && v(t.prototype, r),
          o && v(t, o),
          e
        );
      })();
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                y(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function y(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function w(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var b = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.$body = $("body")),
            (this.dropZone = null),
            (this.uploadUrl = RV_MEDIA_URL.upload_file),
            (this.uploadProgressBox = $(".rv-upload-progress")),
            (this.uploadProgressContainer = $(
              ".rv-upload-progress .rv-upload-progress-table"
            )),
            (this.uploadProgressTemplate = $(
              "#rv_media_upload_progress_item"
            ).html()),
            (this.totalQueued = 1),
            (this.MediaService = new p()),
            (this.totalError = 0);
        }
        var t, r, n;
        return (
          (t = e),
          (n = [
            {
              key: "formatFileSize",
              value: function (e) {
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = t ? 1e3 : 1024;
                if (Math.abs(e) < r) return e + " B";
                var n = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                  a = -1;
                do {
                  (e /= r), ++a;
                } while (Math.abs(e) >= r && a < n.length - 1);
                return e.toFixed(1) + " " + n[a];
              },
            },
          ]),
          (r = [
            {
              key: "init",
              value: function () {
                _.includes(RV_MEDIA_CONFIG.permissions, "files.create") &&
                  $(".rv-media-items").length > 0 &&
                  this.setupDropZone(),
                  this.handleEvents();
              },
            },
            {
              key: "setupDropZone",
              value: function () {
                var e = this,
                  t = this.getDropZoneConfig();
                (e.filesUpload = 0),
                  e.dropZone && e.dropZone.destroy(),
                  (e.dropZone = new Dropzone(
                    document.querySelector(".rv-media-items"),
                    g(
                      g({}, t),
                      {},
                      {
                        thumbnailWidth: !1,
                        thumbnailHeight: !1,
                        parallelUploads: 1,
                        autoQueue: !0,
                        clickable: ".js-dropzone-upload",
                        previewTemplate: !1,
                        previewsContainer: !1,
                        sending: function (e, t, r) {
                          r.append(
                            "_token",
                            $('meta[name="csrf-token"]').attr("content")
                          ),
                            r.append(
                              "folder_id",
                              a.Z.getRequestParams().folder_id
                            ),
                            r.append("view_in", a.Z.getRequestParams().view_in),
                            r.append("path", e.fullPath);
                        },
                        chunksUploaded: function (t, r) {
                          e.uploadProgressContainer
                            .find(".progress-percent")
                            .html("100%"),
                            r();
                        },
                        accept: function (t, r) {
                          e.filesUpload++, (e.totalError = 0), r();
                        },
                        uploadprogress: function (t, r, n) {
                          var a = (n / t.size) * 100;
                          t.upload.chunked && a > 99 && (a -= 1);
                          var i = (a > 100 ? "100" : parseInt(a)) + "%";
                          e.uploadProgressContainer
                            .find("li")
                            .eq(t.index - 1)
                            .find(".progress-percent")
                            .html(i);
                        },
                      }
                    )
                  )),
                  e.dropZone.on("addedfile", function (t) {
                    (t.index = e.totalQueued), e.totalQueued++;
                  }),
                  e.dropZone.on("sending", function (t) {
                    e.initProgress(t.name, t.size);
                  }),
                  e.dropZone.on("complete", function (t) {
                    t.accepted && e.changeProgressStatus(t),
                      (e.filesUpload = 0);
                  }),
                  e.dropZone.on("queuecomplete", function () {
                    a.Z.resetPagination(),
                      e.MediaService.getMedia(!0),
                      0 === e.totalError &&
                        setTimeout(function () {
                          $(".rv-upload-progress .close-pane").trigger("click");
                        }, 5e3);
                  });
              },
            },
            {
              key: "handleEvents",
              value: function () {
                var e = this;
                e.$body
                  .off("click", ".rv-upload-progress .close-pane")
                  .on("click", ".rv-upload-progress .close-pane", function (t) {
                    t.preventDefault(),
                      $(".rv-upload-progress").addClass("hide-the-pane"),
                      (e.totalError = 0),
                      setTimeout(function () {
                        $(".rv-upload-progress li").remove(),
                          (e.totalQueued = 1);
                      }, 300);
                  });
              },
            },
            {
              key: "initProgress",
              value: function (t, r) {
                var n = this.uploadProgressTemplate
                  .replace(/__fileName__/gi, t)
                  .replace(/__fileSize__/gi, e.formatFileSize(r))
                  .replace(/__status__/gi, "warning")
                  .replace(/__message__/gi, "Uploading");
                (this.checkUploadTotalProgress() &&
                  this.uploadProgressContainer.find("li").length >= 1) ||
                  (this.uploadProgressContainer.append(n),
                  this.uploadProgressBox.removeClass("hide-the-pane"),
                  this.uploadProgressBox
                    .find(".panel-body")
                    .animate(
                      { scrollTop: this.uploadProgressContainer.height() },
                      150
                    ));
              },
            },
            {
              key: "changeProgressStatus",
              value: function (e) {
                var t = this,
                  r = t.uploadProgressContainer.find(
                    "li:nth-child(" + e.index + ")"
                  );
                this.checkUploadTotalProgress() &&
                  (r = t.uploadProgressContainer.find("li:first"));
                var n = r.find(".label");
                n.removeClass("label-success label-danger label-warning");
                var i = a.Z.jsonDecode(e.xhr.responseText || "", {});
                if (
                  ((t.totalError =
                    t.totalError +
                    (!0 === i.error || "error" === e.status ? 1 : 0)),
                  n.addClass(
                    !0 === i.error || "error" === e.status
                      ? "label-danger"
                      : "label-success"
                  ),
                  n.html(
                    !0 === i.error || "error" === e.status
                      ? "Error"
                      : "Uploaded"
                  ),
                  "error" === e.status)
                )
                  if (422 === e.xhr.status) {
                    var o = "";
                    $.each(i.errors, function (e, t) {
                      o += '<span class="text-danger">' + t + "</span><br>";
                    }),
                      r.find(".file-error").html(o);
                  } else
                    500 === e.xhr.status &&
                      r
                        .find(".file-error")
                        .html(
                          '<span class="text-danger">' +
                            e.xhr.statusText +
                            "</span>"
                        );
                else
                  i.error
                    ? r
                        .find(".file-error")
                        .html(
                          '<span class="text-danger">' + i.message + "</span>"
                        )
                    : (a.Z.addToRecent(i.data.id),
                      a.Z.setSelectedFile(i.data.id));
              },
            },
            {
              key: "getDropZoneConfig",
              value: function () {
                return {
                  url: this.uploadUrl,
                  uploadMultiple: !RV_MEDIA_CONFIG.chunk.enabled,
                  chunking: RV_MEDIA_CONFIG.chunk.enabled,
                  forceChunking: !0,
                  parallelChunkUploads: !1,
                  chunkSize: RV_MEDIA_CONFIG.chunk.chunk_size,
                  retryChunks: !0,
                  retryChunksLimit: 3,
                  timeout: 0,
                  maxFilesize: RV_MEDIA_CONFIG.chunk.max_file_size,
                  maxFiles: null,
                };
              },
            },
            {
              key: "checkUploadTotalProgress",
              value: function () {
                return 1 === this.filesUpload;
              },
            },
          ]) && w(t.prototype, r),
          n && w(t, n),
          e
        );
      })();
      function k(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return M(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? M(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function I(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            l = s.value;
        } catch (e) {
          return void r(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function C(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var x = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.MediaService = new p()),
              $("body").on(
                "shown.bs.modal",
                "#modal_download_url",
                function (e) {
                  $(e.currentTarget)
                    .find(".form-download-url input[type=text]")
                    .focus();
                }
              );
          }
          var r, n, o, s, l;
          return (
            (r = e),
            (n = [
              {
                key: "download",
                value:
                  ((s = t().mark(function r(n, o) {
                    var s, l, c, d, u, f;
                    return t().wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              (s = this),
                                (n = $.trim(n).split(/\r?\n/)),
                                (l = 0),
                                (c = !1),
                                (d = k(n)),
                                (r.prev = 5),
                                (f = t().mark(function e() {
                                  var r, s, d;
                                  return t().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          (r = u.value), (s = "");
                                          try {
                                            s = new URL(r).pathname
                                              .split("/")
                                              .pop();
                                          } catch (e) {
                                            s = r;
                                          }
                                          return (
                                            (d = o(
                                              ""
                                                .concat(l, " / ")
                                                .concat(n.length),
                                              s,
                                              r
                                            )),
                                            (e.next = 6),
                                            new Promise(function (e) {
                                              $.ajax({
                                                url: RV_MEDIA_URL.download_url,
                                                type: "POST",
                                                data: {
                                                  folderId:
                                                    a.Z.getRequestParams()
                                                      .folder_id,
                                                  url: r,
                                                },
                                                dataType: "json",
                                                success: function (t) {
                                                  var r, n, a, i;
                                                  t.error
                                                    ? ((c = !0),
                                                      d(
                                                        !1,
                                                        null !==
                                                          (r = t.message) &&
                                                          void 0 !== r
                                                          ? r
                                                          : null ===
                                                              (n = t.data) ||
                                                            void 0 === n
                                                          ? void 0
                                                          : n.message
                                                      ))
                                                    : d(
                                                        !0,
                                                        null !==
                                                          (a = t.message) &&
                                                          void 0 !== a
                                                          ? a
                                                          : null ===
                                                              (i = t.data) ||
                                                            void 0 === i
                                                          ? void 0
                                                          : i.message
                                                      ),
                                                    e();
                                                },
                                                error: function (e) {
                                                  i.e.handleError(e);
                                                },
                                              });
                                            })
                                          );
                                        case 6:
                                          l += 1;
                                        case 7:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })),
                                d.s();
                            case 8:
                              if ((u = d.n()).done) {
                                r.next = 12;
                                break;
                              }
                              return r.delegateYield(f(), "t0", 10);
                            case 10:
                              r.next = 8;
                              break;
                            case 12:
                              r.next = 17;
                              break;
                            case 14:
                              (r.prev = 14), (r.t1 = r.catch(5)), d.e(r.t1);
                            case 17:
                              return (r.prev = 17), d.f(), r.finish(17);
                            case 20:
                              a.Z.resetPagination(),
                                s.MediaService.getMedia(!0),
                                c ||
                                  (e.closeModal(),
                                  i.e.showMessage(
                                    "success",
                                    RV_MEDIA_CONFIG.translations.message
                                      .success_header
                                  ));
                            case 23:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      this,
                      [[5, 14, 17, 20]]
                    );
                  })),
                  (l = function () {
                    var e = this,
                      t = arguments;
                    return new Promise(function (r, n) {
                      var a = s.apply(e, t);
                      function i(e) {
                        I(a, r, n, i, o, "next", e);
                      }
                      function o(e) {
                        I(a, r, n, i, o, "throw", e);
                      }
                      i(void 0);
                    });
                  }),
                  function (e, t) {
                    return l.apply(this, arguments);
                  }),
              },
            ]),
            (o = [
              {
                key: "closeModal",
                value: function () {
                  $(document).find("#modal_download_url").modal("hide");
                },
              },
            ]),
            n && C(r.prototype, n),
            o && C(r, o),
            e
          );
        })(),
        E = r(5841);
      function O(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            l = s.value;
        } catch (e) {
          return void r(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function j(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var D = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.MediaService = new p()),
            (this.UploadService = new b()),
            (this.FolderService = new m()),
            (this.DownloadService = new x()),
            (this.$body = $("body"));
        }
        var r, i, s;
        return (
          (r = e),
          (s = [
            {
              key: "setupSecurity",
              value: function () {
                $.ajaxSetup({
                  headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                      "content"
                    ),
                  },
                });
              },
            },
          ]),
          (i = [
            {
              key: "init",
              value: function () {
                a.Z.resetPagination(),
                  this.setupLayout(),
                  this.handleMediaList(),
                  this.changeViewType(),
                  this.changeFilter(),
                  this.search(),
                  this.handleActions(),
                  this.UploadService.init(),
                  this.handleModals(),
                  this.scrollGetMore();
              },
            },
            {
              key: "setupLayout",
              value: function () {
                var e = $(
                  '.js-rv-media-change-filter[data-type="filter"][data-value="' +
                    a.Z.getRequestParams().filter +
                    '"]'
                );
                e.closest("li")
                  .addClass("active")
                  .closest(".dropdown")
                  .find(".js-rv-media-filter-current")
                  .html("(" + e.html() + ")");
                var t = $(
                  '.js-rv-media-change-filter[data-type="view_in"][data-value="' +
                    a.Z.getRequestParams().view_in +
                    '"]'
                );
                t
                  .closest("li")
                  .addClass("active")
                  .closest(".dropdown")
                  .find(".js-rv-media-filter-current")
                  .html("(" + t.html() + ")"),
                  a.Z.isUseInModal() &&
                    $(".rv-media-footer").removeClass("hidden"),
                  $(
                    '.js-rv-media-change-filter[data-type="sort_by"][data-value="' +
                      a.Z.getRequestParams().sort_by +
                      '"]'
                  )
                    .closest("li")
                    .addClass("active");
                var r = $("#media_details_collapse");
                r.prop("checked", n.O.hide_details_pane || !1),
                  setTimeout(function () {
                    $(".rv-media-details").removeClass("hidden");
                  }, 300),
                  r.on("change", function (e) {
                    e.preventDefault(),
                      (n.O.hide_details_pane = $(e.currentTarget).is(
                        ":checked"
                      )),
                      a.Z.storeConfig();
                  }),
                  $(document)
                    .off("click", "button[data-dismiss-modal]")
                    .on("click", "button[data-dismiss-modal]", function (e) {
                      var t = $(e.currentTarget).data("dismiss-modal");
                      $(t).modal("hide");
                    });
              },
            },
            {
              key: "handleMediaList",
              value: function () {
                var e = this,
                  t = !1,
                  r = !1,
                  n = !1;
                $(document).on("keyup keydown", function (e) {
                  (t = e.ctrlKey), (r = e.metaKey), (n = e.shiftKey);
                }),
                  e.$body
                    .off("click", ".js-media-list-title")
                    .on("click", ".js-media-list-title", function (i) {
                      i.preventDefault();
                      var s = $(i.currentTarget);
                      if (n) {
                        var l = _.first(a.Z.getSelectedItems());
                        if (l) {
                          var c = l.index_key,
                            d = s.index();
                          $(".rv-media-items li").each(function (e, t) {
                            e > c &&
                              e <= d &&
                              $(t)
                                .find("input[type=checkbox]")
                                .prop("checked", !0);
                          });
                        }
                      } else
                        t ||
                          r ||
                          s
                            .closest(".rv-media-items")
                            .find("input[type=checkbox]")
                            .prop("checked", !1);
                      s.find("input[type=checkbox]").prop("checked", !0),
                        o.b.handleDropdown(),
                        e.MediaService.getFileDetails(s.data());
                    })
                    .on("dblclick", ".js-media-list-title", function (t) {
                      t.preventDefault();
                      var r = $(t.currentTarget).data();
                      if (!0 === r.is_folder)
                        a.Z.resetPagination(),
                          e.FolderService.changeFolder(r.id);
                      else if (a.Z.isUseInModal()) {
                        if (
                          "trash" !== a.Z.getConfigs().request_params.view_in
                        ) {
                          var n = a.Z.getSelectedFiles();
                          _.size(n) > 0 && E.G.editorSelectFile(n);
                        }
                      } else o.b.handlePreview();
                    })
                    .on("dblclick", ".js-up-one-level", function (e) {
                      e.preventDefault();
                      var t = $(".rv-media-breadcrumb .breadcrumb li").length;
                      $(
                        ".rv-media-breadcrumb .breadcrumb li:nth-child(" +
                          (t - 1) +
                          ") a"
                      ).trigger("click");
                    })
                    .on("contextmenu", ".js-context-menu", function (e) {
                      $(e.currentTarget)
                        .find("input[type=checkbox]")
                        .is(":checked") || $(e.currentTarget).trigger("click");
                    })
                    .on("click contextmenu", ".rv-media-items", function (t) {
                      _.size(t.target.closest(".js-context-menu")) ||
                        ($('.rv-media-items input[type="checkbox"]').prop(
                          "checked",
                          !1
                        ),
                        $(".rv-dropdown-actions").addClass("disabled"),
                        e.MediaService.getFileDetails({
                          icon: "far fa-image",
                          nothing_selected: "",
                        }));
                    });
              },
            },
            {
              key: "changeViewType",
              value: function () {
                var e = this;
                e.$body
                  .off("click", ".js-rv-media-change-view-type .btn")
                  .on(
                    "click",
                    ".js-rv-media-change-view-type .btn",
                    function (t) {
                      t.preventDefault();
                      var r = $(t.currentTarget);
                      r.hasClass("active") ||
                        (r
                          .closest(".js-rv-media-change-view-type")
                          .find(".btn")
                          .removeClass("active"),
                        r.addClass("active"),
                        (n.O.request_params.view_type = r.data("type")),
                        "trash" === r.data("type")
                          ? $(document)
                              .find(".js-insert-to-editor")
                              .prop("disabled", !0)
                          : $(document)
                              .find(".js-insert-to-editor")
                              .prop("disabled", !1),
                        a.Z.storeConfig(),
                        void 0 !== RV_MEDIA_CONFIG.pagination &&
                          void 0 !== RV_MEDIA_CONFIG.pagination.paged &&
                          (RV_MEDIA_CONFIG.pagination.paged = 1),
                        e.MediaService.getMedia(!0, !1));
                    }
                  ),
                  $(
                    '.js-rv-media-change-view-type .btn[data-type="' +
                      a.Z.getRequestParams().view_type +
                      '"]'
                  ).trigger("click"),
                  this.bindIntegrateModalEvents();
              },
            },
            {
              key: "changeFilter",
              value: function () {
                var e = this;
                e.$body
                  .off("click", ".js-rv-media-change-filter")
                  .on("click", ".js-rv-media-change-filter", function (t) {
                    if ((t.preventDefault(), !a.Z.isOnAjaxLoading())) {
                      var r = $(t.currentTarget),
                        i = r.closest("ul"),
                        o = r.data();
                      (n.O.request_params[o.type] = o.value),
                        "view_in" === o.type &&
                          ((n.O.request_params.folder_id = 0),
                          "trash" === o.value
                            ? $(document)
                                .find(".js-insert-to-editor")
                                .prop("disabled", !0)
                            : $(document)
                                .find(".js-insert-to-editor")
                                .prop("disabled", !1)),
                        r
                          .closest(".dropdown")
                          .find(".js-rv-media-filter-current")
                          .html("(" + r.html() + ")"),
                        a.Z.storeConfig(),
                        p.refreshFilter(),
                        a.Z.resetPagination(),
                        e.MediaService.getMedia(!0),
                        i.find("> li").removeClass("active"),
                        r.closest("li").addClass("active");
                    }
                  });
              },
            },
            {
              key: "search",
              value: function () {
                var e = this;
                $('.input-search-wrapper input[type="text"]').val(
                  a.Z.getRequestParams().search || ""
                ),
                  e.$body
                    .off("submit", ".input-search-wrapper")
                    .on("submit", ".input-search-wrapper", function (t) {
                      t.preventDefault(),
                        (n.O.request_params.search = $(t.currentTarget)
                          .find('input[type="text"]')
                          .val()),
                        a.Z.storeConfig(),
                        a.Z.resetPagination(),
                        e.MediaService.getMedia(!0);
                    });
              },
            },
            {
              key: "handleActions",
              value: function () {
                var e = this;
                e.$body
                  .off(
                    "click",
                    '.rv-media-actions .js-change-action[data-type="refresh"]'
                  )
                  .on(
                    "click",
                    '.rv-media-actions .js-change-action[data-type="refresh"]',
                    function (t) {
                      t.preventDefault(), a.Z.resetPagination();
                      var r =
                        void 0 !== window.rvMedia.$el
                          ? window.rvMedia.$el.data("rv-media")
                          : void 0;
                      void 0 !== r &&
                      r.length > 0 &&
                      void 0 !== r[0].selected_file_id
                        ? e.MediaService.getMedia(!0, !0)
                        : e.MediaService.getMedia(!0, !1);
                    }
                  )
                  .off("click", ".rv-media-items li.no-items")
                  .on("click", ".rv-media-items li.no-items", function (e) {
                    e.preventDefault(),
                      $(
                        ".rv-media-header .rv-media-top-header .rv-media-actions .js-dropzone-upload"
                      ).trigger("click");
                  })
                  .off("submit", ".form-add-folder")
                  .on("submit", ".form-add-folder", function (t) {
                    t.preventDefault();
                    var r = $(t.currentTarget).find("input[type=text]"),
                      n = r.val();
                    return e.FolderService.create(n), r.val(""), !1;
                  })
                  .off("click", ".js-change-folder")
                  .on("click", ".js-change-folder", function (t) {
                    t.preventDefault();
                    var r = $(t.currentTarget).data("folder");
                    a.Z.resetPagination(), e.FolderService.changeFolder(r);
                  })
                  .off("click", ".js-files-action")
                  .on("click", ".js-files-action", function (t) {
                    t.preventDefault(),
                      o.b.handleGlobalAction(
                        $(t.currentTarget).data("action"),
                        function () {
                          a.Z.resetPagination(), e.MediaService.getMedia(!0);
                        }
                      );
                  })
                  .off("submit", ".form-download-url")
                  .on(
                    "submit",
                    ".form-download-url",
                    (function () {
                      var r,
                        n =
                          ((r = t().mark(function r(n) {
                            var a, i, o, s, l, c, d, u;
                            return t().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (a = $("#modal_download_url")),
                                      (i = a.find("#download-form-wrapper")),
                                      (o = a.find("#modal-notice").empty()),
                                      n.preventDefault(),
                                      (s = a.find(".modal-title")),
                                      (l = a
                                        .find('textarea[name="urls"]')
                                        .prop("disabled", !0)),
                                      (c = a
                                        .find('[type="submit"]')
                                        .addClass("button-loading")
                                        .prop("disabled", !0)),
                                      (d = l.val()),
                                      (u = []),
                                      i.slideUp(),
                                      (t.next = 10),
                                      e.DownloadService.download(
                                        d,
                                        function (e, t, r) {
                                          var n = $(
                                            '\n                        <div class="p-2 text-primary">\n                            <i class="fa fa-info-circle"></i>\n                            <span>'.concat(
                                              t,
                                              "</span>\n                        </div>\n                    "
                                            )
                                          );
                                          return (
                                            o
                                              .append(n)
                                              .scrollTop(o[0].scrollHeight),
                                            s.html(
                                              '<i class="fas fa-cloud-download-alt"></i> '
                                                .concat(
                                                  s.data("downloading"),
                                                  " ("
                                                )
                                                .concat(e, ")")
                                            ),
                                            function (e) {
                                              var a =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                  ? arguments[1]
                                                  : "";
                                              e || u.push(r),
                                                n
                                                  .find("span")
                                                  .text(
                                                    "".concat(t, ": ").concat(a)
                                                  ),
                                                n
                                                  .attr(
                                                    "class",
                                                    "p-2 text-".concat(
                                                      e ? "success" : "danger"
                                                    )
                                                  )
                                                  .find("i")
                                                  .attr(
                                                    "class",
                                                    e
                                                      ? "fas fa-check-circle"
                                                      : "fas fa-times-circle"
                                                  );
                                            }
                                          );
                                        }
                                      )
                                    );
                                  case 10:
                                    return (
                                      i.slideDown(),
                                      l.val(u.join("\n")).prop("disabled", !1),
                                      s.html(
                                        '<i class="fas fa-cloud-download-alt"></i> '.concat(
                                          s.data("text")
                                        )
                                      ),
                                      c
                                        .removeClass("button-loading")
                                        .prop("disabled", !1),
                                      t.abrupt("return", !1)
                                    );
                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, r);
                          })),
                          function () {
                            var e = this,
                              t = arguments;
                            return new Promise(function (n, a) {
                              var i = r.apply(e, t);
                              function o(e) {
                                O(i, n, a, o, s, "next", e);
                              }
                              function s(e) {
                                O(i, n, a, o, s, "throw", e);
                              }
                              o(void 0);
                            });
                          });
                      return function (e) {
                        return n.apply(this, arguments);
                      };
                    })()
                  );
              },
            },
            {
              key: "handleModals",
              value: function () {
                var e = this;
                e.$body.on("show.bs.modal", "#modal_rename_items", function () {
                  o.b.renderRenameItems();
                }),
                  e.$body.on(
                    "hidden.bs.modal",
                    "#modal_download_url",
                    function () {
                      var e = $("#modal_download_url");
                      e.find("textarea").val(""),
                        e.find("#modal-notice").empty();
                    }
                  ),
                  e.$body
                    .off("submit", "#modal_rename_items .form-rename")
                    .on(
                      "submit",
                      "#modal_rename_items .form-rename",
                      function (t) {
                        t.preventDefault();
                        var r = [],
                          n = $(t.currentTarget);
                        $("#modal_rename_items .form-control").each(function (
                          e,
                          t
                        ) {
                          var n = $(t),
                            a = n.closest(".form-group").data();
                          (a.name = n.val()), r.push(a);
                        }),
                          o.b.processAction(
                            { action: n.data("action"), selected: r },
                            function (t) {
                              t.error
                                ? $("#modal_rename_items .form-group").each(
                                    function (e, r) {
                                      var n = $(r);
                                      _.includes(t.data, n.data("id"))
                                        ? n.addClass("has-error")
                                        : n.removeClass("has-error");
                                    }
                                  )
                                : (n.closest(".modal").modal("hide"),
                                  e.MediaService.getMedia(!0));
                            }
                          );
                      }
                    ),
                  e.$body
                    .off("submit", ".form-delete-items")
                    .on("submit", ".form-delete-items", function (t) {
                      t.preventDefault();
                      var r = [],
                        n = $(t.currentTarget);
                      _.each(a.Z.getSelectedItems(), function (e) {
                        r.push({ id: e.id, is_folder: e.is_folder });
                      }),
                        o.b.processAction(
                          { action: n.data("action"), selected: r },
                          function (t) {
                            n.closest(".modal").modal("hide"),
                              t.error || e.MediaService.getMedia(!0);
                          }
                        );
                    }),
                  e.$body
                    .off("submit", "#modal_empty_trash .rv-form")
                    .on("submit", "#modal_empty_trash .rv-form", function (t) {
                      t.preventDefault();
                      var r = $(t.currentTarget);
                      o.b.processAction(
                        { action: r.data("action") },
                        function () {
                          r.closest(".modal").modal("hide"),
                            e.MediaService.getMedia(!0);
                        }
                      );
                    }),
                  "trash" === n.O.request_params.view_in
                    ? $(document)
                        .find(".js-insert-to-editor")
                        .prop("disabled", !0)
                    : $(document)
                        .find(".js-insert-to-editor")
                        .prop("disabled", !1),
                  this.bindIntegrateModalEvents();
              },
            },
            {
              key: "checkFileTypeSelect",
              value: function (e) {
                if (void 0 !== window.rvMedia.$el) {
                  var t = _.first(e),
                    r = window.rvMedia.$el.data("rv-media");
                  if (
                    void 0 !== r &&
                    void 0 !== r[0] &&
                    void 0 !== r[0].file_type &&
                    "undefined" !== t &&
                    "undefined" !== t.type
                  ) {
                    if (!r[0].file_type.match(t.type)) return !1;
                    if (
                      void 0 !== r[0].ext_allowed &&
                      $.isArray(r[0].ext_allowed) &&
                      -1 === $.inArray(t.mime_type, r[0].ext_allowed)
                    )
                      return !1;
                  }
                }
                return !0;
              },
            },
            {
              key: "bindIntegrateModalEvents",
              value: function () {
                var e = $("#rv_media_modal"),
                  t = this;
                e
                  .off("click", ".js-insert-to-editor")
                  .on("click", ".js-insert-to-editor", function (r) {
                    r.preventDefault();
                    var n = a.Z.getSelectedFiles();
                    _.size(n) > 0 &&
                      (window.rvMedia.options.onSelectFiles(
                        n,
                        window.rvMedia.$el
                      ),
                      t.checkFileTypeSelect(n) &&
                        e.find(".close").trigger("click"));
                  }),
                  e
                    .off("dblclick", ".js-media-list-title")
                    .on("dblclick", ".js-media-list-title", function (r) {
                      if (
                        (r.preventDefault(),
                        "trash" !== a.Z.getConfigs().request_params.view_in)
                      ) {
                        var n = a.Z.getSelectedFiles();
                        _.size(n) > 0 &&
                          (window.rvMedia.options.onSelectFiles(
                            n,
                            window.rvMedia.$el
                          ),
                          t.checkFileTypeSelect(n) &&
                            e.find(".close").trigger("click"));
                      } else o.b.handlePreview();
                    });
              },
            },
            {
              key: "scrollGetMore",
              value: function () {
                var e = this;
                $(".rv-media-main .rv-media-items").bind(
                  "DOMMouseScroll mousewheel",
                  function (t) {
                    (t.originalEvent.detail > 0 ||
                      t.originalEvent.wheelDelta < 0) &&
                      ($(t.currentTarget).closest(".media-modal").length > 0
                        ? $(t.currentTarget).scrollTop() +
                            $(t.currentTarget).innerHeight() / 2 >=
                          $(t.currentTarget)[0].scrollHeight - 450
                        : $(t.currentTarget).scrollTop() +
                            $(t.currentTarget).innerHeight() >=
                          $(t.currentTarget)[0].scrollHeight - 150) &&
                      void 0 !== RV_MEDIA_CONFIG.pagination &&
                      RV_MEDIA_CONFIG.pagination.has_more &&
                      e.MediaService.getMedia(!1, !1, !0);
                  }
                );
              },
            },
          ]) && j(r.prototype, i),
          s && j(r, s),
          e
        );
      })();
      $(document).ready(function () {
        (window.rvMedia = window.rvMedia || {}),
          D.setupSecurity(),
          new D().init();
      });
    })();
})();
