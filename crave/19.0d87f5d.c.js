(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1079:function(e,t,i){"use strict";i.r(t);var n=i(242),o=i(243),a=i(247),s=i.n(a),r=i(289),c=i(400),u=i(251),l=i(244),p=(i(943),new l.a("common-message")),m=function(e){var t=e.children,i=e.title,n=e.text,a=e.textValues,s=e.titleValues;return o.createElement("div",{className:p.b()},o.createElement("div",{className:p.e("container")},t||o.createElement("div",null,i&&o.createElement(u.a,{tagName:"div",className:p.e("title"),values:s},i),n&&o.createElement(u.a,{tagName:"div",className:p.e("text"),values:a},n))))},h=i(290),d=i(275),f=i(266),g=i(252),v=i(283),b=i(296),y=function(e){function t(t){return e.call(this,t)||this}return Object(n.c)(t,e),t.prototype.componentWillUnmount=function(){clearTimeout(this.refreshTimer)},t.prototype.componentDidUpdate=function(e){this.getExpirationTime(e)<=this.getExpirationTime(this.props)&&(clearTimeout(this.refreshTimer),this.fetchLiveScheduleTimer(this.props.entries))},t.prototype.getExpirationTime=function(e){return(null==e?void 0:e.expiryTime)||0},t.prototype.fetchLiveScheduleTimer=function(e){var t=this;if(e&&e[0]){var i=this.getExpirationTime(this.props),n=i&&i.getTime()-Date.now()||0;n>0&&n<b.f&&(this.refreshTimer=setTimeout((function(){t.props.refreshPageRequest()}),n))}},t.prototype.render=function(){return Object(v.g)({enablePackagesSubscriptions:g.a.ENABLE_PACKAGES_SUBSCRIPTIONS,subscriptionPackages:g.a.getAvailableSubscriptions()})?o.createElement(m,{title:"@{live_not_allowed_title}",text:"@{live_not_allowed_text}",textValues:{br:"<br />"},titleValues:{br:"<br />"}}):o.createElement("div",{className:s()("content-margin","live-page")},this.props.renderEntries())},t}(o.Component);t.default=Object(r.b)(y,{template:f.Category,key:d.Live,entryRenderers:c.a,mapStateToProps:function(e){var t;return{expiryTime:null===(t=null==e?void 0:e.ctvSchedule)||void 0===t?void 0:t.expiryTime}},mapDispatchToProps:function(e){return{refreshPageRequest:function(){return e(Object(h.h)())}}}})},274:function(e,t,i){"use strict";var n=i(242),o=i(243),a=i(245),s=i(247),r=i.n(s),c=i(244),u=i(271),l=i(249),p=i(253),m=i(251),h=i(269),d=i(246),f=i(350),g=(i(305),new c.a("h10")),H10Text=function(e){function H10Text(t){var i=e.call(this,t)||this;return i.updateStyles=function(e){if(e){var t=i.props.customFields,n=t.backgroundColor,o=t.textColor;i.ref.style.backgroundColor=Object(l.D)(n,"#000"),i.ref.style.color=Object(l.D)(o,"#fff")}},i.onRef=function(e){i.ref=e},i.state={focused:!1},i.focusableRow=new p.c(10),i}return Object(n.c)(H10Text,e),H10Text.prototype.componentDidMount=function(){var e=this.props,t=e.customFields,i=e.template,n=e.index,o=t,a=o.subheading,s=o.intlHeading,r=this.context.focusNav.getRowEntry(n);r||(r=this.ref),Object(h.a)(r,t),this.focusableRow.ref=this.ref,this.focusableRow.template=i;var c=d.a.h10LessHeight;s?c=d.a.liveComingUpHeaderHeight:a&&(c=d.a.h10Height),this.focusableRow.height=c,this.focusableRow.entryProps=this.props,this.updateStyles(t),this.context.focusNav.registerRow(this.focusableRow)},H10Text.prototype.componentWillUnmount=function(){this.context.focusNav.unregisterRow(this.focusableRow)},H10Text.prototype.componentDidUpdate=function(e){this.props.customFields!==e.customFields&&this.updateStyles(this.props.customFields)},H10Text.prototype.render=function(){var e,t=this.props,i=t.text,n=t.template,a=t.customFields,s=t.list,c=a,p=c.subheading,h=c.textHorizontalAlignment,d=c.intlHeading,v=[g.b(),g.b(d?"hasIntl":p?"hasSub":""),"full-bleed","txt-".concat(Object(l.C)(h))];v.indexOf(n)||v.unshift(n.toLowerCase());var b=r.a.apply(void 0,v),y=s&&s.size||0,w=!!(null===(e=null==s?void 0:s.customFields)||void 0===e?void 0:e.isFromListPage),E=!Object(u.q)(s)&&w&&!Object(u.s)(s);return o.createElement("div",{className:b,ref:this.onRef},o.createElement("div",{className:"content-margin"},!d&&o.createElement("div",{className:g.e("heading",{"list-page-header":w})},o.createElement(m.a,null,i),E&&o.createElement(f.a,{count:y})),this.renderSubheading(p),this.renderCustomIntlHeading(d)))},H10Text.prototype.renderCustomIntlHeading=function(e){if(e)return o.createElement("div",{className:g.e("intl-heading-container")},o.createElement("div",{className:g.e("dividing-line")}),o.createElement(m.a,{tagName:"span",className:g.e("intl-heading")},e))},H10Text.prototype.renderSubheading=function(e){if(e)return o.createElement("div",{className:g.e("subHeading")},e)},H10Text.contextTypes={focusNav:a.object.isRequired},H10Text}(o.PureComponent);t.a=H10Text},305:function(e,t,i){},393:function(e,t,i){},400:function(e,t,i){"use strict";var H1Standard=i(391),H2Peeking=i(392),H5Thumbnails=i(448),H7Mosaic=i(447),H9Image=i(351),H10Text=i(274),H11PageTitle=i(306),P1Standard=i(348),n=i(242),o=i(243),a=i(245),s=i(250),r=i(248),c=i(246),u=i(269),l=i(244),p=i(284),m=i(265),h=(i(393),i(276)),d=new l.a("pr1"),f=function(e){function Pr1Banner(t){var i=e.call(this,t)||this;return i.setFocus=function(e){return i.setState({isFocused:e}),!0},i.handleMouseEnter=function(){i.context.focusNav.handleRowMouseEnter(i.focusableRow.index)},i.handleMouseLeave=function(){i.setFocus(!1)},i.state={isFocused:!1},i.focusableRow={focusable:!0,index:10*(t.index+1),dynamicHeight:!0,height:1,template:t.template,restoreSavedState:function(){},setFocus:i.setFocus,moveLeft:r.e,moveRight:r.e,moveUp:r.c,moveDown:r.c,exec:r.d},i}return Object(n.c)(Pr1Banner,e),Pr1Banner.prototype.componentDidMount=function(){var e=this.context.focusNav.getRowEntry(this.props.index);e||(e=this.ref),Object(u.a)(e,this.props.customFields),this.focusableRow.ref=this.ref,this.context.focusNav.registerRow(this.focusableRow),this.props.getPromotion()},Pr1Banner.prototype.componentWillUnmount=function(){this.context.focusNav.unregisterRow(this.focusableRow)},Pr1Banner.prototype.render=function(){var e=this;if(!Object(m.t)())return o.createElement("div",null);var t=this.props.promotionDetail.images["10foot"];if(void 0===t)return o.createElement("div",null);var i=c.a.pr1Height,n=c.a.pr1Height;return o.createElement("div",{className:d.b(),style:{height:n},ref:function(t){return e.ref=t},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},o.createElement(p.a,{className:d.e("image",{focused:this.state.isFocused},"full-size"),src:t,height:i}))},Pr1Banner.fnName="Pr1Banner",Pr1Banner.contextTypes={router:a.object.isRequired,focusNav:a.object.isRequired},Pr1Banner}(o.Component);var g=Object(s.connect)((function(e){return{promotionDetail:e.session&&e.session.promotionDetail}}),(function(e){return{dispatch:e,getPromotion:function(t,i){return e(Object(h.A)(t,i))}}}))(f),P2Large=i(423),Pb1Cover=i(424),v=i(263),b=i(249),y=function(e){function Pb4Image(){return null!==e&&e.apply(this,arguments)||this}return Object(n.c)(Pb4Image,e),Pb4Image.prototype.render=function(){return o.createElement(v.a,Object(n.a)({},this.props,{imageType:"poster",imageWidth:c.a.posterImageWidth,rowType:"pb4",firstImageWidth:c.a.tbFirstImageWidth,listHeight:c.a.pbImageListHeight,isImage:!0,listBrandImageType:"custom",listBGImageType:"wallpaper",hasPaddingLeft:!0,rowHeight:c.a.pb4ImageHeight,verticalMargin:c.a.pb4ImageMarginTop,entryImageDetails:Object(b.i)(this.props.list.images,"custom")}))},Pb4Image}(o.Component),B1Standard=i(394),B2Large=i(425),B3Double=i(426),T1Standard=i(365),T2Large=i(427),T3Double=i(428),T4DoubleLarge=i(429),T5DoubleFeatured=i(430),Tb1Cover=i(431),Tb4Image=i(432),Tl1Standard=i(395),S1Standard=i(366),S2Large=i(433),S3Double=i(434),Sb1Cover=i(435),Sb4Image=i(436),Ed1Image=i(369),Ed2Text=i(370),Tx1Links=i(402),U1Poster=i(437),U2Tile=i(372),U3Block=i(373),U4Square=i(374),w=i(438),Epg3=i(399);t.a=[H1Standard.a,H2Peeking.a,H5Thumbnails.a,H7Mosaic.a,H9Image.a,H10Text.a,H11PageTitle.a,P1Standard.default,P2Large.a,Pb1Cover.a,y,B1Standard.a,B2Large.a,B3Double.a,T1Standard.default,T2Large.a,T3Double.a,T4DoubleLarge.a,T5DoubleFeatured.a,Tb1Cover.a,Tb4Image.a,Tl1Standard.a,S1Standard.default,S2Large.a,S3Double.a,Sb1Cover.a,Sb4Image.a,Ed1Image.a,Ed2Text.a,Tx1Links.a,g,U1Poster.a,U2Tile.a,U3Block.a,U4Square.a,w.a,Epg3.a]},943:function(e,t,i){}}]);