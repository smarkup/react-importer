function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Papa = _interopDefault(require('papaparse'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactDropzone = require('react-dropzone');
var Select = _interopDefault(require('react-select'));
var agGridReact = require('ag-grid-react');
require('ag-grid-community/dist/styles/ag-grid.css');
require('ag-grid-community/dist/styles/ag-theme-alpine.css');
var reactCircularProgressbar = require('react-circular-progressbar');
require('react-circular-progressbar/dist/styles.css');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var TextEnd = styled__default.section(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  text-align: right;\n  margin-bottom: 20px;\n"])));
var BreadcrumbItem = styled__default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  font-weight: thin;\n  margin-left: 20px;\n  ", ";\n"])), function (props) {
  if (props.active) {
    return styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        font-weight: bold;\n      "])));
  }
  if (props.past) {
    return styled.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n        font-weight: bold;\n        color: ", ";\n      "])), function (props) {
      return props.theme.colors.success;
    });
  }
});
var Aligned = styled__default.svg(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  margin-left: 20px;\n  fill: grey;\n"])));
var Header = function Header(_ref) {
  var steps = _ref.steps,
    currentStep = _ref.currentStep;
  return /*#__PURE__*/React__default.createElement(TextEnd, {
    id: "csv-importer-nav-header"
  }, steps.map(function (step, index) {
    var past = currentStep > index;
    var active = currentStep === index;
    var last = index === steps.length - 1;
    return /*#__PURE__*/React__default.createElement(BreadcrumbItem, {
      key: index,
      past: past,
      active: active
    }, step, !last && /*#__PURE__*/React__default.createElement(Aligned, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      fill: "currentColor",
      className: "bi bi-chevron-right",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React__default.createElement("path", {
      fillRule: "evenodd",
      d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    })));
  }));
};

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
var Container = styled__default.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  margin: 0 auto;\n  max-width: 1200px;\n"])));
var TextStyled = styled__default.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  var styles = {};
  if (props.muted) {
    styles['color'] = props.theme.colors.secondary;
  }
  if (props.danger) {
    styles['color'] = props.theme.colors.danger;
  }
  if (props.bold) {
    styles['fontWeight'] = "bold";
  }
  return styles;
});
var Root = styled__default.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  animation : none;\n  animation-delay : 0;\n  animation-direction : normal;\n  animation-duration : 0;\n  animation-fill-mode : none;\n  animation-iteration-count : 1;\n  animation-name : none;\n  animation-play-state : running;\n  animation-timing-function : ease;\n  backface-visibility : visible;\n  background : 0;\n  background-attachment : scroll;\n  background-clip : border-box;\n  background-color : transparent;\n  background-image : none;\n  background-origin : padding-box;\n  background-position : 0 0;\n  background-position-x : 0;\n  background-position-y : 0;\n  background-repeat : repeat;\n  background-size : auto auto;\n  border : 0;\n  border-style : none;\n  border-width : medium;\n  border-color : inherit;\n  border-bottom : 0;\n  border-bottom-color : inherit;\n  border-bottom-left-radius : 0;\n  border-bottom-right-radius : 0;\n  border-bottom-style : none;\n  border-bottom-width : medium;\n  border-collapse : separate;\n  border-image : none;\n  border-left : 0;\n  border-left-color : inherit;\n  border-left-style : none;\n  border-left-width : medium;\n  border-radius : 0;\n  border-right : 0;\n  border-right-color : inherit;\n  border-right-style : none;\n  border-right-width : medium;\n  border-spacing : 0;\n  border-top : 0;\n  border-top-color : inherit;\n  border-top-left-radius : 0;\n  border-top-right-radius : 0;\n  border-top-style : none;\n  border-top-width : medium;\n  bottom : auto;\n  box-shadow : none;\n  box-sizing : content-box;\n  caption-side : top;\n  clear : none;\n  clip : auto;\n  color : inherit;\n  columns : auto;\n  column-count : auto;\n  column-fill : balance;\n  column-gap : normal;\n  column-rule : medium none currentColor;\n  column-rule-color : currentColor;\n  column-rule-style : none;\n  column-rule-width : none;\n  column-span : 1;\n  column-width : auto;\n  content : normal;\n  counter-increment : none;\n  counter-reset : none;\n  cursor : auto;\n  direction : ltr;\n  display : inline;\n  empty-cells : show;\n  float : none;\n  font : normal;\n  font-family : inherit;\n  font-size : 16px !important;\n  font-style : normal;\n  font-variant : normal;\n  font-weight : normal;\n  height : auto;\n  hyphens : none;\n  left : auto;\n  letter-spacing : normal;\n  line-height : normal;\n  list-style : none;\n  list-style-image : none;\n  list-style-position : outside;\n  list-style-type : disc;\n  margin : 0;\n  margin-bottom : 0;\n  margin-left : 0;\n  margin-right : 0;\n  margin-top : 0;\n  max-height : none;\n  max-width : none;\n  min-height : 0;\n  min-width : 0;\n  opacity : 1;\n  orphans : 0;\n  outline : 0;\n  outline-color : invert;\n  outline-style : none;\n  outline-width : medium;\n  overflow : visible;\n  overflow-x : visible;\n  overflow-y : visible;\n  padding : 0;\n  padding-bottom : 0;\n  padding-left : 0;\n  padding-right : 0;\n  padding-top : 0;\n  page-break-after : auto;\n  page-break-before : auto;\n  page-break-inside : auto;\n  perspective : none;\n  perspective-origin : 50% 50%;\n  position : static;\n  right : auto;\n  tab-size : 8;\n  table-layout : auto;\n  text-align : inherit;\n  text-align-last : auto;\n  text-decoration : none;\n  text-decoration-color : inherit;\n  text-decoration-line : none;\n  text-decoration-style : solid;\n  text-indent : 0;\n  text-shadow : none;\n  text-transform : none;\n  top : auto;\n  transform : none;\n  transform-style : flat;\n  transition : none;\n  transition-delay : 0s;\n  transition-duration : 0s;\n  transition-property : none;\n  transition-timing-function : ease;\n  unicode-bidi : normal;\n  vertical-align : baseline;\n  visibility : visible;\n  white-space : normal;\n  widows : 0;\n  width : auto;\n  word-spacing : normal;\n  z-index : auto;\n  all: initial;\n  all: unset;\n"])));
var Card = styled__default.div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  padding: 10px;\n  border-radius: 5px;\n"])));
var Align = styled__default.div(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n", "\n"])), function (props) {
  if (props.right) {
    return styled.css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["text-align: right"])));
  } else if (props.center) {
    return styled.css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["text-align: center"])));
  }
});
var Margin = styled__default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return styled.css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n        margin: ", ";\n      "])), props.margin);
});
var Padded = styled__default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return styled.css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n        padding: ", ";\n      "])), props.padding);
});
var Table = styled__default.table(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  border: 1px solid #aaa;\n  width: 100%;\n  th, td {\n    border: 1px solid #aaa;\n  }\n"])));
var Row = styled__default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  flex-direction: row;\n  display: flex;\n"])));
var Col = styled__default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  var customCss = {};
  if (props.flex) {
    customCss['flex'] = props.flex;
  } else {
    customCss['flex'] = 1;
  }
  if (props.verticallyCenter) {
    customCss['display'] = 'flex';
    customCss['alignItems'] = 'center';
  }
  if (props.spaceBetween) {
    customCss['display'] = 'flex';
    customCss['justifyContent'] = 'space-between';
  }
  return customCss;
});
var Button = styled__default.button(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  border: none;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  font-weight: bold;\n  border-radius: 5px;\n\n  ", "\n"])), function (props) {
  var color = props.theme.colors.primary;
  if (props.variant === 'success') {
    color = props.theme.colors.success;
  } else if (props.variant === 'danger') {
    color = props.theme.colors.danger;
  } else if (props.variant === "secondary") {
    color = props.theme.colors.secondary;
  } else if (props.variant === "warning") {
    color = props.theme.colors.warning;
  }
  if (props.disabled) {
    color += 'bb';
  }
  if (props.outline) {
    return styled.css(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n        border: 1px solid ", ";\n        color: ", ";\n      "])), color, color);
  } else {
    return styled.css(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n        color: white;\n        background-color: ", ";\n        border: 1px solid ", ";\n      "])), color, color);
  }
});
var rotate = styled.keyframes(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  from {\n    stroke-dashoffset: 360;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n"])));
var PendingProgress = styled__default.circle(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n  ", "\n\n  stroke: ", ";\n  transition: all 1s ease;\n\n  fill: none;\n  stroke-width: 5px;\n  stroke-linecap: round;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n  cx: 50;\n  cy: 50;\n"])), function (props) {
  var styles = {};
  styles['r'] = props.radius || 45;
  styles['stroke-dasharray'] = styles['r'] * 2 * Math.PI;
  var inverseProgress = 1 - props.progress / 100;
  styles['stroke-dashoffset'] = inverseProgress * styles['stroke-dasharray'] || styles['stroke-dasharray'];
  return styles;
}, function (props) {
  return props.theme.colors.success;
});
var CircleProgress = styled__default.circle(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n  stroke-dasharray: 360;\n  stroke-dashoffset: 0;\n  stroke: ", ";\n  animation: ", " 1s ease-out;\n\n  fill: none;\n  stroke-width: 5px;\n  stroke-linecap: round;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n  cx: 50;\n  cy: 50;\n  r: 45;\n"])), function (props) {
  return props.theme.colors.success;
}, rotate);

var FileUploader = function FileUploader(_ref) {
  var setFile = _ref.setFile;
  var _useDropzone = reactDropzone.useDropzone(),
    acceptedFiles = _useDropzone.acceptedFiles,
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    isDragAccept = _useDropzone.isDragAccept;
  React.useEffect(function () {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, [acceptedFiles]);
  var backgroundColor = isDragAccept ? "rgb(236, 240, 241)" : "rgb(250, 250, 250)";
  var theme = styled.useTheme();
  return /*#__PURE__*/React__default.createElement(Card, _extends({}, getRootProps(), {
    style: {
      cursor: 'pointer',
      backgroundColor: backgroundColor
    }
  }), /*#__PURE__*/React__default.createElement(Padded, {
    padding: "30px"
  }, /*#__PURE__*/React__default.createElement("input", getInputProps()), /*#__PURE__*/React__default.createElement(Margin, {
    margin: "0 0 30px 0"
  }, /*#__PURE__*/React__default.createElement(TextStyled, {
    muted: true
  }, "Pick a file")), /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, {
    flex: "3"
  }, /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, {
    flex: "1"
  }, /*#__PURE__*/React__default.createElement("svg", {
    style: {
      marginRight: "20px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: theme.colors.secondary,
    className: "bi bi-cloud-arrow-up",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
  }))), /*#__PURE__*/React__default.createElement(Col, {
    flex: "6"
  }, /*#__PURE__*/React__default.createElement("h5", {
    style: {
      marginBottom: "10px"
    }
  }, "Drag and drop your file here"), /*#__PURE__*/React__default.createElement(TextStyled, {
    muted: true
  }, "Limit 20MB \u2022 CSV")))), /*#__PURE__*/React__default.createElement(Col, {
    flex: "1"
  }, /*#__PURE__*/React__default.createElement(Align, {
    right: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "secondary",
    outline: true
  }, "Browse Files"))))));
};

var percentage = function percentage(a, b) {
  return Math.round(a / b * 100 * 10) / 10;
};
var MappingStatistics = function MappingStatistics(_ref) {
  var _fieldStatistics$stat, _fieldStatistics$stat2;
  var fieldStatistics = _ref.fieldStatistics,
    selectedField = _ref.selectedField;
  var total = fieldStatistics.total;
  var counts = (_fieldStatistics$stat = fieldStatistics.statistics) === null || _fieldStatistics$stat === void 0 ? void 0 : _fieldStatistics$stat.counts;
  var errorTypeCounts = (_fieldStatistics$stat2 = fieldStatistics.statistics) === null || _fieldStatistics$stat2 === void 0 ? void 0 : _fieldStatistics$stat2.errorTypeCounts;
  if (!counts || !errorTypeCounts) {
    return /*#__PURE__*/React__default.createElement("div", null);
  }
  var theme = styled.useTheme();
  return /*#__PURE__*/React__default.createElement("div", null, selectedField && /*#__PURE__*/React__default.createElement("div", null, "Matched to ", /*#__PURE__*/React__default.createElement("b", null, selectedField.label)), !selectedField && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("b", null, "No match detected")), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("svg", {
    style: {
      marginRight: "10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: theme.colors.warning,
    className: "bi bi-info-circle-fill",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  })), /*#__PURE__*/React__default.createElement("b", null, percentage(total - counts.isNull, total), "%"), " of your rows have a value for this column"), errorTypeCounts.total === 0 && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("svg", {
    style: {
      marginRight: "10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: theme.colors.success,
    className: "bi bi-check-lg",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"
  })), "All rows pass validation for this column."), errorTypeCounts.total > 0 && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("svg", {
    style: {
      marginRight: "10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: theme.colors.danger,
    className: "bi bi-exclamation-diamond-fill",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  })), errorTypeCounts.total / total < 0.02 && /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("b", null, errorTypeCounts.total), " rows fail validation (repair on next step)"), errorTypeCounts.total / total >= 0.02 && /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("b", null, percentage(errorTypeCounts.total, total), "%"), " of rows fail validation (repair on next step)")));
};
var HeaderMapperSelection = function HeaderMapperSelection(_ref2) {
  var header = _ref2.header,
    examples = _ref2.examples,
    setHeader = _ref2.setHeader,
    selectedHeader = _ref2.selectedHeader,
    options = _ref2.options;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Margin, {
    margin: "20px 0"
  }, /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, {
    verticallyCenter: true,
    spaceBetween: true
  }, /*#__PURE__*/React__default.createElement(Margin, {
    margin: "0 10px"
  }, header.slice(0, 30)), /*#__PURE__*/React__default.createElement(Padded, {
    padding: "0 20px"
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-arrow-right",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    fillRule: "evenodd",
    d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
  })))), /*#__PURE__*/React__default.createElement(Col, null, /*#__PURE__*/React__default.createElement(Select, {
    isClearable: true,
    isSearchable: true,
    value: selectedHeader,
    options: options,
    onChange: setHeader
  })))), /*#__PURE__*/React__default.createElement(Table, null, /*#__PURE__*/React__default.createElement("tbody", null, examples.map(function (e, idx) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: idx
    }, /*#__PURE__*/React__default.createElement("td", {
      style: {
        backgroundColor: '#ecf0f1',
        textAlign: 'center',
        width: "40px"
      }
    }, idx), /*#__PURE__*/React__default.createElement("td", {
      style: {
        padding: '10px 20px'
      }
    }, e || /*#__PURE__*/React__default.createElement("i", null, "No Data")));
  }))));
};
var HeaderMapperRow = function HeaderMapperRow(_ref3) {
  var options = _ref3.options,
    header = _ref3.header,
    examples = _ref3.examples,
    headerMapping = _ref3.headerMapping,
    setHeaderMapping = _ref3.setHeaderMapping,
    fieldStatistics = _ref3.fieldStatistics;
  var block = null;
  var theme = styled.useTheme();
  if (headerMapping.confirmed) {
    block = /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, null, /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, {
      verticallyCenter: true,
      spaceBetween: true
    }, /*#__PURE__*/React__default.createElement(Margin, {
      margin: "0 10px"
    }, header.slice(0, 30)), /*#__PURE__*/React__default.createElement(Padded, {
      padding: "0 20px"
    }, /*#__PURE__*/React__default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-arrow-right",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React__default.createElement("path", {
      fillRule: "evenodd",
      d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
    })))), /*#__PURE__*/React__default.createElement(Col, null, /*#__PURE__*/React__default.createElement(Select, {
      isDisabled: true,
      value: headerMapping.selectedField
    })))), /*#__PURE__*/React__default.createElement(Col, {
      spaceBetween: true,
      verticallyCenter: true
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("svg", {
      style: {
        margin: "-2px 10px"
      },
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: theme.colors.success,
      className: "bi bi-check-lg",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"
    })), "Confirmed"), /*#__PURE__*/React__default.createElement(Button, {
      onClick: function onClick() {
        setHeaderMapping(_extends({}, headerMapping, {
          confirmed: false
        }));
      }
    }, "Edit")));
  } else if (headerMapping.ignored) {
    block = /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, {
      verticallyCenter: true
    }, /*#__PURE__*/React__default.createElement(Margin, {
      margin: "0 10px"
    }, header)), /*#__PURE__*/React__default.createElement(Col, {
      spaceBetween: true,
      verticallyCenter: true
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("svg", {
      style: {
        margin: "-2px 10px"
      },
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      className: "bi bi-eye-slash-fill",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
    })), "Ignored"), /*#__PURE__*/React__default.createElement(Button, {
      onClick: function onClick() {
        setHeaderMapping(_extends({}, headerMapping, {
          selectedField: null,
          ignored: false,
          name: null
        }));
      }
    }, "Edit")));
  } else {
    block = /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, null, /*#__PURE__*/React__default.createElement(HeaderMapperSelection, {
      options: options,
      header: header,
      examples: examples,
      selectedHeader: headerMapping.selectedField,
      setHeader: function setHeader(selectedField) {
        setHeaderMapping(_extends({}, headerMapping, {
          selectedField: selectedField,
          ignored: false,
          name: header
        }));
      }
    })), /*#__PURE__*/React__default.createElement(Col, null, /*#__PURE__*/React__default.createElement(Padded, {
      padding: "20px 0 0 20px",
      style: {
        display: "flex",
        flexDirection: "column",
        height: "90%",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React__default.createElement("div", null, headerMapping.selectedField && /*#__PURE__*/React__default.createElement(MappingStatistics, {
      selectedField: headerMapping.selectedField,
      fieldStatistics: fieldStatistics
    })), /*#__PURE__*/React__default.createElement("div", null, headerMapping.selectedField && /*#__PURE__*/React__default.createElement(Button, {
      style: {
        marginRight: '10px'
      },
      variant: "success",
      onClick: function onClick() {
        setHeaderMapping(_extends({}, headerMapping, {
          confirmed: true
        }));
      }
    }, "Confirm mapping"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "secondary",
      outline: true,
      onClick: function onClick() {
        setHeaderMapping(_extends({}, headerMapping, {
          ignored: true
        }));
      }
    }, "Ignore this column")))));
  }
  return /*#__PURE__*/React__default.createElement(Margin, {
    margin: "20px 0"
  }, /*#__PURE__*/React__default.createElement(Card, null, block));
};

var HeaderMapper = function HeaderMapper(_ref) {
  var parsed = _ref.parsed,
    fields = _ref.fields,
    statistics = _ref.statistics,
    headerMappings = _ref.headerMappings,
    setHeaderMappings = _ref.setHeaderMappings,
    missingRequiredFields = _ref.missingRequiredFields,
    onComplete = _ref.onComplete,
    restart = _ref.restart;
  var data = parsed.data;
  var options = fields.map(function (f) {
    return {
      label: f.label,
      value: f.key
    };
  });
  var hasMissingRequiredFields = missingRequiredFields.length > 0;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h5", null, parsed.data.length - 1, " Rows Imported")), data[0].map(function (header, columnIndex) {
    var _headerMapping$select;
    var examples = data.slice(1, 4).map(function (d) {
      return d[columnIndex];
    });
    var headerMapping = headerMappings[columnIndex] || {};
    var fieldStatistics = {
      total: statistics.total,
      statistics: statistics.statisticsByFieldKey[(_headerMapping$select = headerMapping.selectedField) === null || _headerMapping$select === void 0 ? void 0 : _headerMapping$select.value]
    };
    return /*#__PURE__*/React__default.createElement(HeaderMapperRow, {
      key: columnIndex,
      columnIndex: columnIndex,
      header: header,
      examples: examples,
      headerMapping: headerMapping,
      setHeaderMapping: function setHeaderMapping(headerMapping) {
        var newMappings = _extends({}, headerMappings);
        headerMapping.columnIndex = columnIndex;
        newMappings[columnIndex] = headerMapping;
        setHeaderMappings(newMappings);
      },
      options: options,
      fieldStatistics: fieldStatistics
    });
  }), /*#__PURE__*/React__default.createElement(Margin, {
    margin: "20px 0"
  }, /*#__PURE__*/React__default.createElement(Align, {
    right: true
  }, hasMissingRequiredFields && missingRequiredFields.map(function (f) {
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(TextStyled, {
      style: {
        marginBottom: "15px"
      },
      danger: true,
      bold: true
    }, "Missing mapping for ", f.label, /*#__PURE__*/React__default.createElement("svg", {
      style: {
        marginLeft: "10px"
      },
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "#e74c3c",
      className: "bi bi-exclamation-circle-fill",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
    }))));
  })), /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, null, /*#__PURE__*/React__default.createElement(Button, {
    onClick: restart,
    outline: true
  }, "Back")), /*#__PURE__*/React__default.createElement(Col, null, /*#__PURE__*/React__default.createElement(Align, {
    right: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    onClick: onComplete,
    variant: hasMissingRequiredFields ? "danger" : "primary"
  }, hasMissingRequiredFields && "Proceed Anyways", !hasMissingRequiredFields && "Review"))))));
};

var isUndefinedOrNull = function isUndefinedOrNull(a) {
  return a === null || a === undefined;
};
var isPresent = function isPresent(a) {
  return !isUndefinedOrNull(a);
};
var formatData = function formatData(headerMappings, data) {
  var output = [];
  var _loop = function _loop(rowIndex) {
    var item = {};
    var row = data[rowIndex];
    Object.keys(headerMappings).forEach(function (k) {
      var headerMapping = headerMappings[k];
      var columnIndex = headerMapping.columnIndex;
      if (headerMapping.selectedField) {
        item[headerMapping.selectedField.value] = row[columnIndex];
      }
    });
    item.rowIndex = rowIndex - 1;
    output.push(item);
  };
  for (var rowIndex = 1; rowIndex < data.length; rowIndex++) {
    _loop(rowIndex);
  }
  return output;
};
var buildSuggestedHeaderMappings = function buildSuggestedHeaderMappings(fields, headers) {
  var headerMappings = {};
  headers.forEach(function (header, columnIndex) {
    var foundField = fields.find(function (f) {
      var normalizedKey = f.key.toLowerCase().replace('_', '').replace(' ', '');
      var normalizedHeader = header.toLowerCase().replace('_', '').replace(' ', '');
      return normalizedKey === normalizedHeader;
    });
    if (!foundField) {
      return;
    }
    headerMappings[columnIndex] = {
      columnIndex: columnIndex,
      name: header,
      selectedField: {
        value: foundField.key,
        label: foundField.label
      }
    };
  });
  return headerMappings;
};
var filterEmptyRows = function filterEmptyRows(formattedData) {
  return formattedData.filter(function (d) {
    return Object.keys(d).filter(function (k) {
      return k !== 'rowIndex';
    }).length > 0;
  });
};
var filterInvalidRows = function filterInvalidRows(formattedData, validationResult) {
  return formattedData;
};
var removeTemporaryKeys = function removeTemporaryKeys(formattedData) {
  formattedData.forEach(function (f) {
    delete f.rowIndex;
  });
  return formattedData;
};
var fieldIsRequired = function fieldIsRequired(field) {
  if (field.validators && field.validators.length > 0) {
    var isRequired = field.validators.find(function (v) {
      return v.validate === 'required';
    });
    return !!isRequired;
  }
  return false;
};
var buildFinalData = function buildFinalData(formattedData, validationResult) {
  return removeTemporaryKeys(filterInvalidRows(filterEmptyRows(formattedData)));
};
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) return target;
  var source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        var _Object$assign;
        if (!target[key]) Object.assign(target, (_Object$assign = {}, _Object$assign[key] = {}, _Object$assign));
        mergeDeep(target[key], source[key]);
      } else {
        var _Object$assign2;
        Object.assign(target, (_Object$assign2 = {}, _Object$assign2[key] = source[key], _Object$assign2));
      }
    }
  }
  return mergeDeep.apply(void 0, [target].concat(sources));
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var DataEditor = function DataEditor(_ref) {
  var formattedData = _ref.formattedData,
    fields = _ref.fields,
    onSubmit = _ref.onSubmit,
    onBack = _ref.onBack,
    validationResult = _ref.validationResult,
    setRowData = _ref.setRowData;
  var _useState = React.useState(null),
    gridApi = _useState[0],
    setGridApi = _useState[1];
  var _useState2 = React.useState(null),
    setGridColumnApi = _useState2[1];
  var validationRef = React.useRef(validationResult);
  validationRef.current = validationResult;
  React.useEffect(function () {
    setTimeout(function () {
      gridApi === null || gridApi === void 0 ? void 0 : gridApi.redrawRows();
    }, 0);
  }, [validationResult]);
  var onGridReady = function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };
  var _useState3 = React.useState(false),
    onlyShowErrors = _useState3[0],
    _setOnlyShowErrors = _useState3[1];
  var computeCellStyle = function computeCellStyle(params) {
    if (isPresent(params.column.colDef.field) && isPresent(params.data.rowIndex) && validationRef.current.hasError(params.column.colDef.field, params.data.rowIndex)) {
      return {
        color: 'rgba(192, 57, 43, 1.0)',
        backgroundColor: 'rgba(231, 76, 60, 0.3)',
        border: '1px solid rgba(192, 57, 43, 1.0)'
      };
    }
    return null;
  };
  var setOnlyShowErrors = function setOnlyShowErrors(newValue) {
    _setOnlyShowErrors(newValue);
    var newRowData;
    if (newValue) {
      var rowIndexesWithErrors = validationResult.rowIndexesWithErrors();
      newRowData = formattedData.filter(function (_, index) {
        return rowIndexesWithErrors.has(index);
      });
    } else {
      newRowData = formattedData;
    }
    gridApi.setRowData(newRowData);
  };
  var onCellValueChanged = function onCellValueChanged(params) {
    setRowData(params.data, params.rowIndex);
  };
  var hasData = function hasData() {
    return filterEmptyRows(formattedData).length > 0;
  };
  var hasErrors = Object.keys(validationResult.errorsByFieldKeyByRowIndex).length > 0;
  var theme = styled.useTheme();
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Margin, {
    margin: "20px 0"
  }, (!hasData() || hasErrors) && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("input", {
    checked: onlyShowErrors,
    onChange: function onChange(e) {
      setOnlyShowErrors(e.target.checked);
    },
    type: "checkbox",
    name: "row-errors",
    id: "row-errors"
  }), /*#__PURE__*/React__default.createElement("label", {
    style: {
      marginLeft: '10px'
    },
    htmlFor: "row-errors"
  }, "Only show rows with errors")), hasData() && !hasErrors && /*#__PURE__*/React__default.createElement("div", {
    style: {
      color: theme.colors.success,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    "class": "bi bi-check-lg",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  })), "All rows pass validation!")), /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: 500,
      width: '100%'
    },
    className: "ag-theme-alpine"
  }, /*#__PURE__*/React__default.createElement(agGridReact.AgGridReact, {
    onCellValueChanged: onCellValueChanged,
    rowData: formattedData,
    tooltipShowDelay: 0,
    defaultColDef: {
      flex: 1,
      minWidth: 100,
      editable: true
    },
    onGridReady: onGridReady
  }, fields.map(function (field) {
    return /*#__PURE__*/React__default.createElement(agGridReact.AgGridColumn, {
      resizable: true,
      cellStyle: computeCellStyle,
      key: field.key,
      headerName: field.label,
      tooltipValueGetter: function tooltipValueGetter(params) {
        var rowIndex = params.rowIndex;
        var columnName = params.colDef.field;
        if (validationRef.current.hasError(columnName, rowIndex)) {
          var errors = validationRef.current.getErrors(columnName, rowIndex);
          return errors.map(function (e) {
            return e.message;
          }).join(", ");
        }
      },
      field: field.key
    });
  }))), /*#__PURE__*/React__default.createElement(Margin, {
    margin: "20px 0"
  }, /*#__PURE__*/React__default.createElement(Row, null, /*#__PURE__*/React__default.createElement(Col, null, onBack && /*#__PURE__*/React__default.createElement(Button, {
    onClick: onBack,
    outline: true
  }, "Back")), /*#__PURE__*/React__default.createElement(Col, null, /*#__PURE__*/React__default.createElement(Align, {
    right: true
  }, hasData() && /*#__PURE__*/React__default.createElement(Button, {
    onClick: onSubmit
  }, validationResult.hasErrors() && "Upload Rows Without Errors", !validationResult.hasErrors() && "Upload"))))));
};

var Failed = function Failed() {
  var theme = styled.useTheme();
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Margin, {
    margin: "60px",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "100px",
      height: "100px",
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React__default.createElement("svg", {
    style: {
      position: "absolute",
      margin: "auto",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "64",
    fill: theme.colors.danger,
    className: "bi bi-x-lg",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  }))), /*#__PURE__*/React__default.createElement("h2", {
    style: {
      fontSize: "2em"
    }
  }, "Something went wrong")));
};
var Uploading = function Uploading(_ref) {
  var progress = _ref.progress,
    pending = _ref.pending;
  var theme = styled.useTheme();
  var _hexToRgb = hexToRgb(theme.colors.success),
    r = _hexToRgb.r,
    g = _hexToRgb.g,
    b = _hexToRgb.b;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Margin, {
    margin: "60px",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "100px",
      height: "100px",
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React__default.createElement(reactCircularProgressbar.CircularProgressbarWithChildren, {
    value: progress,
    strokeWidth: 5,
    styles: reactCircularProgressbar.buildStyles({
      pathColor: "rgba(" + r + ", " + g + ", " + b + ", " + progress / 100 + ")"
    })
  }, !pending && /*#__PURE__*/React__default.createElement(SuccessIcon, null), pending && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("b", {
    style: {
      fontSize: '1.2em'
    }
  }, progress, "%")))), pending && /*#__PURE__*/React__default.createElement("h2", {
    style: {
      fontSize: "2em"
    }
  }, "Uploading"), !pending && /*#__PURE__*/React__default.createElement("h2", {
    style: {
      fontSize: "2em"
    }
  }, "Success")));
};
var SuccessIcon = function SuccessIcon() {
  var theme = styled.useTheme();
  return /*#__PURE__*/React__default.createElement("svg", {
    style: {
      position: "absolute",
      margin: "auto",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "64",
    fill: theme.colors.success,
    "class": "bi bi-check-lg",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
  }));
};
var Completed = function Completed(_ref2) {
  var formattedData = _ref2.formattedData,
    progress = _ref2.progress,
    pending = _ref2.pending,
    failed = _ref2.failed;
  if (failed) {
    return /*#__PURE__*/React__default.createElement(Failed, null);
  }
  return /*#__PURE__*/React__default.createElement(Uploading, {
    progress: progress,
    formattedData: formattedData,
    pending: pending
  });
};

function has(collection, value) {
  return collection.indexOf(value) !== -1;
}
function eachWithObject(collection, callback) {
  var obj = {};
  collection.forEach(function (item) {
    callback(item, obj);
  });
  return obj;
}
function hasData(row) {
  var data = _extends({}, row);
  delete data.rowIndex;
  var values = Object.values(data);
  return values.length > 0;
}

var Validator = /*#__PURE__*/function () {
  function Validator(definition) {
    this.definition = definition;
  }
  var _proto = Validator.prototype;
  _proto.isValid = function isValid(fieldValue, row) {
    throw new Error('Not Implemented');
  };
  Validator.buildFromDefinition = function buildFromDefinition(definition) {
    var mapping = {
      regex_matches: RegexValidator,
      required: RequiredValidator,
      unique: UniqueValidator,
      includes: IncludesValidator,
      multi_includes: MultiIncludesValidator,
      is_integer: IntegerValidator,
      custom: CustomValidator
    };
    if (!(definition.validate in mapping)) {
      throw new Error("Missing validator for " + definition.validate + ". Valid validator options are " + Object.keys(mapping).join(", "));
    }
    var FoundValidator = mapping[definition.validate];
    return new FoundValidator(definition);
  };
  return Validator;
}();
var MultiIncludesValidator = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(MultiIncludesValidator, _Validator);
  function MultiIncludesValidator(definition) {
    var _this;
    _this = _Validator.call(this, definition) || this;
    _this.delimiter = definition.delimiter || /[,|]/;
    _this.values = definition.values;
    if (!_this.values) {
      throw new Error("Missing values for `multi_includes` validator");
    }
    return _this;
  }
  var _proto2 = MultiIncludesValidator.prototype;
  _proto2.isValid = function isValid(fieldValue) {
    var _this2 = this;
    var values = fieldValue.split(this.delimiter);
    if (values.some(function (value) {
      return !_this2.values.includes(value.trim());
    })) {
      return {
        valid: false,
        message: this.definition.error || 'This value is not valid',
        errorType: 'includes'
      };
    }
    return {
      valid: true
    };
  };
  return MultiIncludesValidator;
}(Validator);
var IncludesValidator = /*#__PURE__*/function (_Validator2) {
  _inheritsLoose(IncludesValidator, _Validator2);
  function IncludesValidator(definition) {
    var _this3;
    _this3 = _Validator2.call(this, definition) || this;
    _this3.values = definition.values;
    if (!_this3.values) {
      throw new Error("Missing `values` for `includes` validator");
    }
    return _this3;
  }
  var _proto3 = IncludesValidator.prototype;
  _proto3.isValid = function isValid(fieldValue) {
    if (!this.values.includes(fieldValue)) {
      return {
        valid: false,
        message: this.definition.error || 'This value is not valid',
        errorType: 'includes'
      };
    }
    return {
      valid: true
    };
  };
  return IncludesValidator;
}(Validator);
var CustomValidator = /*#__PURE__*/function (_Validator3) {
  _inheritsLoose(CustomValidator, _Validator3);
  function CustomValidator(definition) {
    var _this4;
    _this4 = _Validator3.call(this, definition) || this;
    var key = definition.key,
      validateFn = definition.validateFn;
    _this4.key = key;
    _this4.validateFn = validateFn;
    return _this4;
  }
  var _proto4 = CustomValidator.prototype;
  _proto4.isValid = function isValid(fieldValue, row) {
    var result = this.validateFn(fieldValue, row);
    var valid = !!!result;
    return {
      valid: valid,
      message: (result === null || result === void 0 ? void 0 : result.message) || this.definition.error,
      errorType: (result === null || result === void 0 ? void 0 : result.key) || this.key
    };
  };
  return CustomValidator;
}(Validator);
var IntegerValidator = /*#__PURE__*/function (_Validator4) {
  _inheritsLoose(IntegerValidator, _Validator4);
  function IntegerValidator() {
    return _Validator4.apply(this, arguments) || this;
  }
  var _proto5 = IntegerValidator.prototype;
  _proto5.isValid = function isValid(fieldValue) {
    return {
      valid: !isNaN(fieldValue) && fieldValue !== null && fieldValue !== undefined,
      message: this.definition.error || 'This is not a valid number',
      errorType: 'is_integer'
    };
  };
  return IntegerValidator;
}(Validator);
var UniqueValidator = /*#__PURE__*/function (_Validator5) {
  _inheritsLoose(UniqueValidator, _Validator5);
  function UniqueValidator(definition) {
    var _this5;
    _this5 = _Validator5.call(this, definition) || this;
    _this5.seen = {};
    return _this5;
  }
  var _proto6 = UniqueValidator.prototype;
  _proto6.isValid = function isValid(fieldValue) {
    if (fieldValue in this.seen) {
      return {
        valid: false,
        message: this.definition.error || 'This value is not unique',
        errorType: 'unique'
      };
    }
    this.seen[fieldValue] = true;
    return {
      valid: true
    };
  };
  return UniqueValidator;
}(Validator);
function escapeStringRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}
var RegexValidator = /*#__PURE__*/function (_Validator6) {
  _inheritsLoose(RegexValidator, _Validator6);
  function RegexValidator(definition) {
    var _this6;
    _this6 = _Validator6.call(this, definition) || this;
    if (typeof _this6.definition.regex === 'object') {
      _this6.regexp = _this6.definition.regex;
    } else {
      _this6.regexp = new RegExp(escapeStringRegExp(_this6.definition.regex));
    }
    _this6.seen = {};
    return _this6;
  }
  var _proto7 = RegexValidator.prototype;
  _proto7.isValid = function isValid(fieldValue) {
    var matches = this.regexp.test(fieldValue);
    if (!matches) {
      return {
        valid: false,
        message: 'This value is invalid' ,
        errorType: 'regex'
      };
    }
    return {
      valid: true
    };
  };
  return RegexValidator;
}(Validator);
var RequiredValidator = /*#__PURE__*/function (_Validator7) {
  _inheritsLoose(RequiredValidator, _Validator7);
  function RequiredValidator() {
    return _Validator7.apply(this, arguments) || this;
  }
  var _proto8 = RequiredValidator.prototype;
  _proto8.isValid = function isValid(fieldValue, row) {
    if (!fieldValue) {
      return {
        valid: false,
        message: this.definition.error || 'This value is required',
        errorType: 'required'
      };
    }
    return {
      valid: true
    };
  };
  return RequiredValidator;
}(Validator);
var ValidationResult = /*#__PURE__*/function () {
  function ValidationResult() {
    this.errorsByFieldKeyByRowIndex = {};
  }
  var _proto9 = ValidationResult.prototype;
  _proto9.hasErrors = function hasErrors() {
    var _this7 = this;
    return Object.keys(this.errorsByFieldKeyByRowIndex).filter(function (fieldKey) {
      return Object.keys(_this7.errorsByFieldKeyByRowIndex[fieldKey]).length > 0;
    }).length > 0;
  };
  _proto9.rowIndexesWithErrors = function rowIndexesWithErrors() {
    var _this8 = this;
    var allRowIndexes = [];
    Object.keys(this.errorsByFieldKeyByRowIndex).forEach(function (fieldKey) {
      var rowIndexes = Object.keys(_this8.errorsByFieldKeyByRowIndex[fieldKey]);
      allRowIndexes = allRowIndexes.concat(rowIndexes.map(function (r) {
        return parseInt(r, 10);
      }));
    });
    return new Set(allRowIndexes);
  };
  _proto9.addError = function addError(fieldKey, rowIndex, error) {
    fieldKey = fieldKey.toString();
    rowIndex = rowIndex.toString();
    if (!(fieldKey in this.errorsByFieldKeyByRowIndex)) {
      this.errorsByFieldKeyByRowIndex[fieldKey] = {};
    }
    if (!(rowIndex in this.errorsByFieldKeyByRowIndex[fieldKey])) {
      this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex] = [];
    }
    this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex].push(error);
  };
  _proto9.hasError = function hasError(fieldKey, rowIndex) {
    fieldKey = fieldKey.toString();
    rowIndex = rowIndex.toString();
    return fieldKey in this.errorsByFieldKeyByRowIndex && rowIndex in this.errorsByFieldKeyByRowIndex[fieldKey];
  };
  _proto9.getErrors = function getErrors(fieldKey, rowIndex) {
    fieldKey = fieldKey.toString();
    rowIndex = rowIndex.toString();
    return this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex];
  };
  return ValidationResult;
}();
var applyValidation = function applyValidation(formattedData, fields) {
  var validatorsByFieldKey = eachWithObject(fields, function (field, obj) {
    obj[field.key] = [];
    if (!field.validators) return;
    field.validators.forEach(function (validatorDefinition) {
      obj[field.key].push(Validator.buildFromDefinition(validatorDefinition));
    });
  });
  var validationResult = new ValidationResult();
  fields.forEach(function (field) {
    formattedData.forEach(function (row, rowIndex) {
      if (!hasData(row)) {
        return;
      }
      if (!(field.key in row) && !fieldIsRequired(field)) {
        return;
      }
      var value = row[field.key];
      var validators = validatorsByFieldKey[field.key];
      validators.forEach(function (v) {
        var result = v.isValid(value, row);
        if (!result.valid) {
          validationResult.addError(field.key, rowIndex, result);
        }
      });
    });
  });
  return validationResult;
};
var computeStatisticsForField = function computeStatisticsForField(fieldKey, formattedData, errorsByRowIndex) {
  var errorTypeCounts = {
    total: 0
  };
  var counts = {
    isNull: 0
  };
  formattedData.forEach(function (d) {
    if (!d[fieldKey]) {
      counts.isNull += 1;
    }
  });
  Object.keys(errorsByRowIndex).forEach(function (rowIndex) {
    var errors = errorsByRowIndex[rowIndex];
    if (errors && errors.length > 0) {
      errorTypeCounts.total += 1;
    }
    errors.forEach(function (error) {
      if (error.errorType in errorTypeCounts) {
        errorTypeCounts[error.errorType] += 1;
      } else {
        errorTypeCounts[error.errorType] = 1;
      }
    });
  });
  return {
    errorTypeCounts: errorTypeCounts,
    counts: counts
  };
};
var computeStatistics = function computeStatistics(formattedData, headerMappings, validationResult) {
  var statisticsByFieldKey = {};
  var headers = Object.keys(headerMappings).map(function (k) {
    return headerMappings[k];
  });
  headers.forEach(function (headerMapping) {
    if (!headerMapping.selectedField) {
      return;
    }
    var fieldKey = headerMapping.selectedField.value;
    statisticsByFieldKey[fieldKey] = computeStatisticsForField(fieldKey, formattedData, validationResult.errorsByFieldKeyByRowIndex[fieldKey] || {});
  });
  return {
    statisticsByFieldKey: statisticsByFieldKey,
    total: formattedData.length
  };
};

var STATE_TO_CODES = [['Arizona', 'AZ'], ['Alabama', 'AL'], ['Alaska', 'AK'], ['Arkansas', 'AR'], ['California', 'CA'], ['Colorado', 'CO'], ['Connecticut', 'CT'], ['Delaware', 'DE'], ['Florida', 'FL'], ['Georgia', 'GA'], ['Hawaii', 'HI'], ['Idaho', 'ID'], ['Illinois', 'IL'], ['Indiana', 'IN'], ['Iowa', 'IA'], ['Kansas', 'KS'], ['Kentucky', 'KY'], ['Louisiana', 'LA'], ['Maine', 'ME'], ['Maryland', 'MD'], ['Massachusetts', 'MA'], ['Michigan', 'MI'], ['Minnesota', 'MN'], ['Mississippi', 'MS'], ['Missouri', 'MO'], ['Montana', 'MT'], ['Nebraska', 'NE'], ['Nevada', 'NV'], ['New Hampshire', 'NH'], ['New Jersey', 'NJ'], ['New Mexico', 'NM'], ['New York', 'NY'], ['North Carolina', 'NC'], ['North Dakota', 'ND'], ['Ohio', 'OH'], ['Oklahoma', 'OK'], ['Oregon', 'OR'], ['Pennsylvania', 'PA'], ['Rhode Island', 'RI'], ['South Carolina', 'SC'], ['South Dakota', 'SD'], ['Tennessee', 'TN'], ['Texas', 'TX'], ['Utah', 'UT'], ['Vermont', 'VT'], ['Virginia', 'VA'], ['Washington', 'WA'], ['West Virginia', 'WV'], ['Wisconsin', 'WI'], ['Wyoming', 'WY']];

var applyTransformations = function applyTransformations(formattedData, fields) {
  var newData = [].concat(formattedData);
  var pipelineByFieldKey = eachWithObject(fields, function (field, obj) {
    obj[field.key] = new Pipeline();
    if (!field.transformers) return;
    field.transformers.forEach(function (transformerDefinition) {
      obj[field.key].push(Transformer.buildFromDefinition(transformerDefinition));
    });
  });
  fields.forEach(function (field) {
    var pipeline = pipelineByFieldKey[field.key];
    newData.forEach(function (row) {
      if (!hasData(row)) {
        return;
      }
      if (!(field.key in row)) {
        return;
      }
      row[field.key] = pipeline.transform(row[field.key]);
    });
  });
  return newData;
};
var Pipeline = /*#__PURE__*/function () {
  function Pipeline(steps) {
    if (steps === void 0) {
      steps = [];
    }
    this.steps = steps;
  }
  var _proto = Pipeline.prototype;
  _proto.push = function push(step) {
    this.steps.push(step);
  };
  _proto.transform = function transform(value) {
    var current = value;
    this.steps.forEach(function (step) {
      current = step.transform(current);
    });
    return current;
  };
  return Pipeline;
}();
var Transformer = /*#__PURE__*/function () {
  function Transformer() {}
  Transformer.buildFromDefinition = function buildFromDefinition(definition) {
    var mapping = {
      phone_number: PhoneNumberTransformer,
      postal_code: PostalCodeTransformer,
      state_code: StateCodeTransformer,
      strip: StripTransformer,
      custom: CustomTransformer
    };
    if (!(definition.transformer in mapping)) {
      throw new Error("Missing validator for " + definition.transformer + ". Valid transformer options are " + Object.keys(mapping).join(', '));
    }
    var FoundValidator = mapping[definition.transformer];
    return new FoundValidator(definition);
  };
  var _proto2 = Transformer.prototype;
  _proto2.transform = function transform(value) {
    var newValue = this.parse(value);
    if (newValue) return newValue;
    return value;
  };
  return Transformer;
}();
var StripTransformer = /*#__PURE__*/function (_Transformer) {
  _inheritsLoose(StripTransformer, _Transformer);
  function StripTransformer() {
    return _Transformer.apply(this, arguments) || this;
  }
  var _proto3 = StripTransformer.prototype;
  _proto3.parse = function parse(value) {
    return value.trim();
  };
  return StripTransformer;
}(Transformer);
var CustomTransformer = /*#__PURE__*/function (_Transformer2) {
  _inheritsLoose(CustomTransformer, _Transformer2);
  function CustomTransformer(definition) {
    var _this;
    _this = _Transformer2.call(this, definition) || this;
    var key = definition.key,
      transformFn = definition.transformFn;
    _this.key = key;
    _this.parse = transformFn;
    return _this;
  }
  return CustomTransformer;
}(Transformer);
var PhoneNumberTransformer = /*#__PURE__*/function (_Transformer3) {
  _inheritsLoose(PhoneNumberTransformer, _Transformer3);
  function PhoneNumberTransformer() {
    return _Transformer3.apply(this, arguments) || this;
  }
  var _proto4 = PhoneNumberTransformer.prototype;
  _proto4.parse = function parse(value) {
    return value.replace(/[^0-9]/g, '');
  };
  return PhoneNumberTransformer;
}(Transformer);
var StateCodeTransformer = /*#__PURE__*/function (_Transformer4) {
  _inheritsLoose(StateCodeTransformer, _Transformer4);
  function StateCodeTransformer() {
    return _Transformer4.apply(this, arguments) || this;
  }
  var _proto5 = StateCodeTransformer.prototype;
  _proto5.parse = function parse(value) {
    var states = STATE_TO_CODES.map(function (s2c) {
      return s2c[0].toLowerCase();
    });
    if (has(states, value.toLowerCase())) {
      var index = states.indexOf(value.toLowerCase());
      return STATE_TO_CODES[index][1];
    }
  };
  return StateCodeTransformer;
}(Transformer);
var PostalCodeTransformer = /*#__PURE__*/function (_Transformer5) {
  _inheritsLoose(PostalCodeTransformer, _Transformer5);
  function PostalCodeTransformer() {
    return _Transformer5.apply(this, arguments) || this;
  }
  var _proto6 = PostalCodeTransformer.prototype;
  _proto6.parse = function parse(value) {
    if (has(value, '-')) {
      return value.split('-')[0];
    }
  };
  return PostalCodeTransformer;
}(Transformer);

var delay = function delay(ms) {
  try {
    return Promise.resolve(new Promise(function (resolve) {
      setTimeout(resolve, ms);
    })).then(function () {});
  } catch (e) {
    return Promise.reject(e);
  }
};

var THEME_DEFAULT = {
  colors: {
    primary: "#2980b9",
    secondary: "#7f8c8d",
    success: "#27ae60",
    danger: "#e74c3c",
    info: "#0F81C7",
    warning: "#e67e22",
    light: "#ececec",
    dark: "#222222"
  }
};
var THEME_SIGNAL = {
  colors: {
    primary: "#FF304F",
    secondary: "#CACACA",
    success: "#015668",
    danger: "#06648C",
    info: "#0F81C7",
    warning: "#0DE2EA",
    light: "#ececec",
    dark: "#222222"
  }
};
var THEME_FRESCA = {
  colors: {
    primary: "#07689F",
    secondary: "#C9D6DF",
    success: "#11D3BC",
    danger: "#F67280",
    info: "#A2D5F2",
    warning: "#FF7E67",
    light: "#FAFAFA",
    dark: "#4e4e4e"
  }
};

function buildInitialState(inject) {
  return _extends({}, inject, {
    currentStep: 0,
    parsed: null,
    pending: true,
    progress: 0,
    failed: false,
    formattedData: [],
    statistics: {
      statisticsByFieldKey: {},
      total: null
    },
    headerMappings: {},
    validationResult: new ValidationResult()
  });
}
var computeMetadata = function computeMetadata(formattedData, fields, headerMappings) {
  var newValidationResult = applyValidation(formattedData, fields);
  var newStatistics = computeStatistics(formattedData, headerMappings, newValidationResult);
  return {
    validationResult: newValidationResult,
    statistics: newStatistics
  };
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'RESTART':
      return buildInitialState({
        fields: state.fields
      });
    case 'DECREMENT_STEP':
      return _extends({}, state, {
        currentStep: state.currentStep - 1
      });
    case 'COMPLETED_MAPPINGS':
      {
        var transformedFormattedData = applyTransformations(state.formattedData, state.fields);
        return _extends({}, state, {
          formattedData: transformedFormattedData,
          currentStep: state.currentStep + 1
        });
      }
    case 'SET_CURRENT_STEP':
      {
        var currentStep = action.payload.currentStep;
        return _extends({}, state, {
          currentStep: currentStep
        });
      }
    case 'FILE_PARSED':
      {
        var automaticHeaderMappings = buildSuggestedHeaderMappings(state.fields, action.payload.parsed.data[0]);
        var formattedData = formatData(automaticHeaderMappings, action.payload.parsed.data);
        return _extends({}, state, computeMetadata(formattedData, state.fields, automaticHeaderMappings), {
          parsed: action.payload.parsed,
          headerMappings: automaticHeaderMappings,
          formattedData: formattedData,
          currentStep: 1
        });
      }
    case 'HEADER_MAPPINGS_CHANGED':
      {
        var newFormattedData = formatData(action.payload.headerMappings, state.parsed.data);
        return _extends({}, state, computeMetadata(newFormattedData, state.fields, action.payload.headerMappings), {
          headerMappings: action.payload.headerMappings,
          formattedData: newFormattedData
        });
      }
    case 'CELL_CHANGED':
      {
        var copy = [].concat(state.formattedData);
        copy[action.payload.index] = action.payload.row;
        return _extends({}, state, computeMetadata(copy, state.fields, state.headerMappings), {
          formattedData: copy
        });
      }
    case 'PROGRESS':
      return _extends({}, state, {
        progress: action.payload.progress
      });
    case 'PENDING':
      return _extends({}, state, {
        currentStep: 3,
        pending: true,
        progress: 0
      });
    case 'COMPLETE':
      return _extends({}, state, {
        currentStep: 3,
        pending: false,
        progress: 100
      });
    case 'FAILED':
      return _extends({}, state, {
        currentStep: 3,
        failed: true
      });
    default:
      return state;
  }
};
var Importer = function Importer(_ref) {
  var _theme$colors;
  var theme = _ref.theme,
    onComplete = _ref.onComplete,
    fields = _ref.fields;
  var _useReducer = React.useReducer(reducer, buildInitialState({
      fields: fields
    })),
    _useReducer$ = _useReducer[0],
    currentStep = _useReducer$.currentStep,
    parsed = _useReducer$.parsed,
    formattedData = _useReducer$.formattedData,
    statistics = _useReducer$.statistics,
    headerMappings = _useReducer$.headerMappings,
    validationResult = _useReducer$.validationResult,
    pending = _useReducer$.pending,
    progress = _useReducer$.progress,
    failed = _useReducer$.failed,
    dispatch = _useReducer[1];
  var restart = function restart() {
    dispatch({
      type: 'RESTART'
    });
  };
  var setFile = function setFile(file) {
    Papa.parse(file, {
      skipEmptyLines: true,
      complete: function complete(newParsed) {
        dispatch({
          type: 'FILE_PARSED',
          payload: {
            parsed: newParsed
          }
        });
      }
    });
  };
  var rowData = [];
  for (var i = 0; i < 100; i++) {
    rowData.push({
      rowIndex: i
    });
  }
  var usedFilters = Object.keys(headerMappings).map(function (h) {
    return headerMappings[h];
  }).filter(function (h) {
    return !h.ignored && h.selectedField;
  }).map(function (h) {
    return h.selectedField.value;
  });
  var unselectedFields = fields.filter(function (filter) {
    return usedFilters.indexOf(filter.key) === -1;
  });
  var headers = Object.keys(headerMappings).map(function (h) {
    return headerMappings[h];
  }).filter(function (h) {
    return h.confirmed;
  }).map(function (h) {
    return h.selectedField.value;
  });
  var selectedFields = fields.filter(function (f) {
    return headers.indexOf(f.key) >= 0;
  });
  var missingRequiredFields = fields.filter(function (f) {
    return fieldIsRequired(f);
  }).filter(function (f) {
    return selectedFields.map(function (f) {
      return f.key;
    }).indexOf(f.key) === -1;
  });
  var finalSelectedFields = fields.filter(function (f) {
    return headers.indexOf(f.key) >= 0 || fieldIsRequired(f);
  });
  var submitWrapper = function submitWrapper() {
    try {
      var _temp3 = function _temp3(_result) {
        return _exit2 ? _result : Promise.resolve(delay(400)).then(function () {
          dispatch({
            type: 'PROGRESS',
            payload: {
              progress: 100
            }
          });
          return Promise.resolve(delay(200)).then(function () {
            dispatch({
              type: 'COMPLETE'
            });
          });
        });
      };
      var _exit2 = false;
      dispatch({
        type: 'PENDING'
      });
      var _temp4 = _catch(function () {
        return Promise.resolve(onComplete(buildFinalData(formattedData, validationResult), function (progress) {
          dispatch({
            type: 'PROGRESS',
            payload: {
              progress: progress
            }
          });
        })).then(function () {});
      }, function () {
        dispatch({
          type: 'FAILED'
        });
        _exit2 = true;
      });
      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var finalTheme = mergeDeep({}, THEME_DEFAULT, theme);
  console.log(theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary, finalTheme.colors.primary);
  return /*#__PURE__*/React__default.createElement(styled.ThemeProvider, {
    theme: finalTheme
  }, /*#__PURE__*/React__default.createElement(Root, null, /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement(Header, {
    steps: ['Upload', 'Match', 'Review', 'Complete'],
    currentStep: currentStep,
    onClick: function onClick(step) {
      if (step === 'Upload') {
        restart();
      } else if (step === 'Match') {
        dispatch({
          type: 'RESTART',
          payload: {
            currentStep: 1
          }
        });
      } else if (step === 'Review') {
        dispatch({
          type: 'RESTART',
          payload: {
            currentStep: 2
          }
        });
      }
    }
  }), currentStep === 0 && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(FileUploader, {
    setFile: setFile
  }), /*#__PURE__*/React__default.createElement(Margin, {
    margin: "40px 0 10px 0"
  }, /*#__PURE__*/React__default.createElement("h6", null, "Or just manually enter your data")), /*#__PURE__*/React__default.createElement(DataEditor, {
    statistics: statistics,
    formattedData: formattedData.length > 0 ? formattedData : rowData,
    fields: fields,
    headerMappings: headerMappings,
    validationResult: validationResult,
    onSubmit: submitWrapper,
    setRowData: function setRowData(row, index) {
      dispatch({
        type: 'CELL_CHANGED',
        payload: {
          index: index,
          row: row
        }
      });
    }
  })), currentStep === 1 && /*#__PURE__*/React__default.createElement(HeaderMapper, {
    statistics: statistics,
    parsed: parsed,
    fields: unselectedFields,
    headerMappings: headerMappings,
    missingRequiredFields: missingRequiredFields,
    setHeaderMappings: function setHeaderMappings(newHeaderMappings) {
      dispatch({
        type: 'HEADER_MAPPINGS_CHANGED',
        payload: {
          headerMappings: newHeaderMappings
        }
      });
    },
    restart: restart,
    onComplete: function onComplete() {
      dispatch({
        type: 'COMPLETED_MAPPINGS'
      });
    }
  }), currentStep === 2 && /*#__PURE__*/React__default.createElement(DataEditor, {
    statistics: statistics,
    formattedData: formattedData,
    fields: finalSelectedFields,
    headerMappings: headerMappings,
    validationResult: validationResult,
    onBack: function onBack() {
      dispatch({
        type: 'DECREMENT_STEP'
      });
    },
    onSubmit: submitWrapper,
    setRowData: function setRowData(row, index) {
      dispatch({
        type: 'CELL_CHANGED',
        payload: {
          index: index,
          row: row
        }
      });
    }
  }), currentStep === 3 && /*#__PURE__*/React__default.createElement(Completed, {
    formattedData: formattedData,
    pending: pending,
    progress: progress,
    failed: failed
  }))));
};

exports.THEME_DEFAULT = THEME_DEFAULT;
exports.THEME_FRESCA = THEME_FRESCA;
exports.THEME_SIGNAL = THEME_SIGNAL;
exports.default = Importer;
//# sourceMappingURL=index.js.map
