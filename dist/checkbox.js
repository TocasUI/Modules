// Generated by CoffeeScript 2.0.0-beta4
var TocasCheckbox;

TocasCheckbox = (function() {
  class TocasCheckbox {
    $init({$this, $module}) {
      // 當核取方塊被按下時。
      $this.on('click', function(e) {
        // 如果不是被停用的話。
        if (!$this.find('input').prop('disabled')) {
          // 就切換該核取方塊的勾選狀態。
          return $module.prototype._toggle($this, $module);
        }
      });
      return ts.fn;
    }

    // 呼叫指定函式。
    _event($this, event) {
      return $this.data(event).call($this.get());
    }

    // 切換指定核取方塊的勾選狀態。
    _toggle($this) {
      if ($this.find('input').prop('checked') && !$this.hasClass('radio')) {
        return this._uncheck($this);
      } else {
        return this._check($this);
      }
    }

    // 取得核取方塊是單選項目還是方塊、並回傳相對應的元素。
    _status($this) {
      var checkbox, isRadio;
      // 確認是核取方塊還是單選項目。
      isRadio = $this.hasClass('radio');
      // 依照種類取得該元素。
      checkbox = $selector($this, isRadio ? 'input[type="radio"]' : 'input[type="checkbox"]');
      return {
        isRadio: isRadio,
        checkbox: checkbox
      };
    }

    // 勾選指定方塊。
    _check($this) {
      var checkbox, isRadio, name;
      // 呼叫事件函式。
      if (!this._event($this, 'beforeChecked')) {
        return;
      }
      this._event($this, 'onChecked');
      this._event($this, 'onChange');
      ({isRadio, checkbox} = this._status($this));
      // 如果是單選項目的話。
      if (isRadio) {
        // 取得單選項目的群組名稱。
        name = checkbox.attr('name');
        // 移除所有該群組的單選項目勾選狀態。
        $selector(`input[type='radio'][name='${name}']`).each((element) => {
          return this._uncheck($selector(element).parent());
        });
        // 然後啟用目前的單選項目。
        return checkbox.prop('checked', true);
      } else {
        // 啟用勾選狀態。
        // 如果是複選方塊的話。
        return checkbox.prop('checked', true);
      }
    }

    // 取消勾選指定方塊。
    _uncheck($this) {
      var checkbox;
      // 呼叫事件函式。
      if (!this._event($this, 'beforeUnchecked')) {
        return;
      }
      this._event($this, 'onUnchecked');
      this._event($this, 'onChange');
      ({checkbox} = this._status($this));
      // 取消勾選狀態。
      return checkbox.prop('checked', false);
    }

  };

  TocasCheckbox.prototype.$name = 'checkbox';

  TocasCheckbox.prototype.$options = {
    onChange: function() {}, // 當核取方塊被更改勾選狀態時所呼叫的函式。
    onChecked: function() {}, // 當核取方塊被勾選時所呼叫的函式。
    onUnchecked: function() {}, // 當核取方塊被取消勾選時所呼叫的函式。
    beforeChecked: function() {
      return true; // 當核取方塊被勾選時所呼叫的函式，如果這個函式回傳 `false` 將會阻止勾選動作。
    },
    beforeUnchecked: function() {
      return true; // 當核取方塊被取消勾選時所呼叫的函式，如果這個函式回傳 `false` 將會阻止取消勾選動作。
    },
    onEnable: function() {}, // 當核取方塊被啟用時所呼叫的函式。
    onDisable: function() {} // 當核取方塊被停用時所呼叫的函式。
  };

  TocasCheckbox.prototype.$methods = {
    // 切換核取方塊的勾選狀態。
    toggle: function({$this, $module}) {
      $module.prototype._toggle($this);
      return ts.fn;
    },
    // 勾選指定核取方塊。
    check: function({$this, $module}) {
      $module.prototype._check($this);
      return ts.fn;
    },
    // 取消勾選指定核取方塊。
    uncheck: function({$this, $module}) {
      $module.prototype._uncheck($this);
      return ts.fn;
    },
    // 停用指定核取方塊，使用者將無法手動勾選或取消勾選該方塊。
    disable: function({$this}) {
      this._event($this, 'onDisable');
      $this.find('input').prop('disabled', true);
      return ts.fn;
    },
    // 啟用指定核取方塊，使用者可以對其進行勾選或取消勾選。
    enable: function({$this}) {
      this._event($this, 'onEnable');
      $this.find('input').prop('disabled', false);
      return ts.fn;
    },
    // 回傳一個布林值表示該核取方塊是否已被停用。
    'is disable': function({$this}) {
      return $this.find('input').prop('disabled');
    },
    // 回傳一個布林值表示該核取方塊是否可供使用。
    'is enable': function({$this}) {
      return !$this.find('input').prop('disabled');
    },
    // 取得一個表示核取方塊是否被勾選的布林值。
    'is checked': function({$this}) {
      return $this.find('input').prop('checked');
    },
    // 取得一個表示核取方塊是否沒有被勾選的布林值。
    'is unchecked': function({$this}) {
      return !$this.find('input').prop('checked');
    },
    // 綁定按鈕來觸發這個核取方塊的指定功能。
    'attach events': function({$this}, selector, event) {
      $selector(selector).on('click', function() {
        return ts($this).checkbox(event);
      });
      return ts.fn;
    }
  };

  return TocasCheckbox;

})();

new ts(TocasCheckbox);
