import e from"../utils/classSet";import t from"./Framework";export default class o extends t{constructor(e){super(Object.assign({},{formClass:"fv-plugins-mui",messageClass:"fv-help-block",rowInvalidClass:"fv-invalid-row",rowPattern:/^(.*)mui-col-(xs|md|lg|xl)(-offset)*-[0-9]+(.*)$/,rowSelector:".mui-row",rowValidClass:"fv-valid-row"},e))}onIconPlaced(t){const o=t.element.getAttribute("type");const l=t.element.parentElement;if("checkbox"===o||"radio"===o){l.parentElement.insertBefore(t.iconElement,l.nextSibling);e(t.iconElement,{"fv-plugins-icon-check":true})}}}