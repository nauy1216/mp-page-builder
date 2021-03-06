module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-recess-order"],
  "plugins": ["stylelint-order", "stylelint-scss"],
  "rules": {
    // at-rule-no-unknown: 屏蔽一些scss等语法检查
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [ "include", "mixin", "extend", "content", "each", "if", "else", "at-root", "function", "return" ]
      }
    ],
    "unit-allowed-list": ["vh", "vw", "em", "rem", "%", "s", "px", "upx", "rpx"],
    "unit-no-unknown": [true, {
      ignoreUnits: ["rpx"]
    }],
    "selector-type-no-unknown": null
  },
}
