(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1040:function(e,t,s){"use strict";var i=s(242),o=s(243),a=s(267);var n=s(304),r=s(298);function c(e){if(e)return Object.values(e).reduce((function(e,t){return e+(t.position+"-")}),"")}function l(e){return e.reduce((function(e,t){return e+(t.id+"-")}),"")}function u(e){var t=e.selectedIndex,s=e.offset,i=e.items;return t>=s&&t-s<i.length}var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.c)(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,s=t.isFocused,i=t.selectedIndex,o=t.items,a=t.watchedList,n=u(e);return e.isFocused!==s||n&&e.selectedIndex!==i||n!==this.hasSelection||e.items!==o&&l(e.items)!==this.checksum||e.watchedList!==a&&c(e.watchedList)!==this.checkWatchedPosition},t.prototype.componentDidUpdate=function(){this.hasSelection=u(this.props),this.checksum=l(this.props.items),this.checkWatchedPosition=c(this.props.watchedList)},t.prototype.getItemWatchedPosition=function(e){var t;if(this.props.isEpisodesListPage){var s=Object(a.r)(e.customId);return null===(t=null==s?void 0:s.value)||void 0===t?void 0:t.position}return e.watchedPosition},t.prototype.render=function(){var e=this,t=this.props,s=t.list,a=t.items,c=t.height,l=t.offset,u=t.isFocused,d=t.itemProps,f=t.itemsPerRow,h=t.selectedIndex,m=t.enableItemGrid,p=t.isEpisodesListPage,g=t.showTrailerMetadata,v=t.isAccountWatchedHistoryPage,b=t.isAccountContinueWatchingPage,y=s.id===n.b||s.id===n.c,S=this.props.additionalMetadata||g||b,x=m&&"".concat((100/f).toFixed(5),"%");return o.createElement("div",{style:{position:"relative",height:c+"px"}},a.map((function(t,a){return o.createElement(r.a,Object(i.a)({item:t},d,{index:l+a,key:"".concat(t.id,"-").concat(a),totalAssets:s.size,itemsPerRow:f,isContinuousList:!0,itemGridWidth:x,isEpisodeRow:p,hideItemBadge:p,displayShowTitle:y,additionalMetadata:S,showTrailerMetadata:g,position:e.getItemWatchedPosition(t),watchHistoryRow:v,showProgressBar:b,focused:u&&h===l+a,continueWatchingRow:b}))})))},t}(o.Component);t.a=d},274:function(e,t,s){"use strict";var i=s(242),o=s(243),a=s(245),n=s(247),r=s.n(n),c=s(244),l=s(271),u=s(249),d=s(253),f=s(251),h=s(269),m=s(246),p=s(350),g=(s(305),new c.a("h10")),H10Text=function(e){function H10Text(t){var s=e.call(this,t)||this;return s.updateStyles=function(e){if(e){var t=s.props.customFields,i=t.backgroundColor,o=t.textColor;s.ref.style.backgroundColor=Object(u.D)(i,"#000"),s.ref.style.color=Object(u.D)(o,"#fff")}},s.onRef=function(e){s.ref=e},s.state={focused:!1},s.focusableRow=new d.c(10),s}return Object(i.c)(H10Text,e),H10Text.prototype.componentDidMount=function(){var e=this.props,t=e.customFields,s=e.template,i=e.index,o=t,a=o.subheading,n=o.intlHeading,r=this.context.focusNav.getRowEntry(i);r||(r=this.ref),Object(h.a)(r,t),this.focusableRow.ref=this.ref,this.focusableRow.template=s;var c=m.a.h10LessHeight;n?c=m.a.liveComingUpHeaderHeight:a&&(c=m.a.h10Height),this.focusableRow.height=c,this.focusableRow.entryProps=this.props,this.updateStyles(t),this.context.focusNav.registerRow(this.focusableRow)},H10Text.prototype.componentWillUnmount=function(){this.context.focusNav.unregisterRow(this.focusableRow)},H10Text.prototype.componentDidUpdate=function(e){this.props.customFields!==e.customFields&&this.updateStyles(this.props.customFields)},H10Text.prototype.render=function(){var e,t=this.props,s=t.text,i=t.template,a=t.customFields,n=t.list,c=a,d=c.subheading,h=c.textHorizontalAlignment,m=c.intlHeading,v=[g.b(),g.b(m?"hasIntl":d?"hasSub":""),"full-bleed","txt-".concat(Object(u.C)(h))];v.indexOf(i)||v.unshift(i.toLowerCase());var b=r.a.apply(void 0,v),y=n&&n.size||0,S=!!(null===(e=null==n?void 0:n.customFields)||void 0===e?void 0:e.isFromListPage),x=!Object(l.q)(n)&&S&&!Object(l.s)(n);return o.createElement("div",{className:b,ref:this.onRef},o.createElement("div",{className:"content-margin"},!m&&o.createElement("div",{className:g.e("heading",{"list-page-header":S})},o.createElement(f.a,null,s),x&&o.createElement(p.a,{count:y})),this.renderSubheading(d),this.renderCustomIntlHeading(m)))},H10Text.prototype.renderCustomIntlHeading=function(e){if(e)return o.createElement("div",{className:g.e("intl-heading-container")},o.createElement("div",{className:g.e("dividing-line")}),o.createElement(f.a,{tagName:"span",className:g.e("intl-heading")},e))},H10Text.prototype.renderSubheading=function(e){if(e)return o.createElement("div",{className:g.e("subHeading")},e)},H10Text.contextTypes={focusNav:a.object.isRequired},H10Text}(o.PureComponent);t.a=H10Text},305:function(e,t,s){},307:function(e,t,s){"use strict";(function(e){var i=s(242),o=s(243),a=s(245),n=s(250),r=s(251),c=s(254),l=s(271),u=s(945),d=s(244),f=s(253),h=(s(248),s(273)),m=s(290),p=s(397),g=s(246),v=s(304),b=s(249),y=s(1040),S=(s(947),{label:"classification_default",key:u.b}),x={label:"listPage_sort_default",key:u.b},I=[x,{label:"listPage_sort_aToz",key:"a-z"},{label:"listPage_sort_zToa",key:"z-a"},{label:"listPage_sort_latestAdded",key:"latest-added"},{label:"listPage_sort_oldestAdded",key:"oldest-added"},{label:"listPage_sort_latestRelease",key:"latest-release"},{label:"listPage_sort_oldestRelease",key:"oldest-release"}],w=new d.a("cs-list"),P=g.a.itemMargin,F=function(t){function s(e){var s=t.call(this,e)||this;return s.classificationOptions=[],s.restoreSavedState=function(e){if(e){var t=s.props,i=t.itemsPerRow,o=t.isUserList,a=t.loadNextPage,n=t.restorePage,r=e.list,c=e.selectedClassification,l=e.selectedSort,u=e.selectedIndex,d=e.selectedItemId,f=e.isFocused,h=e.focusState,m=r.items&&r.items.length>0&&r.items[u];if(o){var p=s.state.list,g=p.items,v=p.paging,b=v.size,y=v.page;if(u>g.length-1&&a){var S=Math.ceil((u+1)/b),x=y+1,I=S-y,w=Array.from(Array(I)).map((function(){return a(x++)}));Promise.all(w).then((function(){n(!1),s.setState({selectedClassification:c,selectedSort:l,selectedIndex:u,selectedItemId:d,isFocused:f,focusState:h},s.trackedItemFocused)}))}else n(!1),s.setState({selectedClassification:c,selectedSort:l,selectedIndex:u,selectedItemId:d,isFocused:f,focusState:h},s.trackedItemFocused)}else s.calcRowHeight(s.props),s.mapRows(r,i),s.setState({list:r,selectedClassification:c,selectedSort:l,selectedIndex:u,selectedItemId:m?m.id:"",isFocused:f,focusState:h},s.trackedItemFocused)}},s.getLeftToViewport=function(){var e=s.props,t=e.imageWidth,i=e.itemsPerRow;return s.state.selectedIndex%i*(t+g.a.itemMargin)},s.calcFocusableIndex=function(e,t){var i=s.props,o=i.imageWidth,a=i.itemsPerRow,n=s.state.list.items.length,r=-1,c=99999;if("up"===t)for(var l=n-1;l>=0;--l){var u=l%a*o;if(!((d=Math.abs(u-e))<=c))break;c=d,r=l}else for(l=0;l<a;++l){var d;u=l%a*o;if(!((d=Math.abs(u-e))<=c))break;c=d,r=l}return r},s.setFocus=function(e,t,i){if(s.context.focusNav.isGoingBack)return s.setState({isFocused:e}),!0;var o,a,n,r=s.state,c=r.focusState,l=r.selectedIndex,u=r.list;if(i&&"down"===i&&(s.context.focusNav.blockScrollOnce=!0,c=u&&(u.size>0||-1===u.size)?"list":"clear"),e){var d=s.calcFocusableIndex(t||0,i);d>-1&&(l=d,o=!0)}else s.trackedItemFocused(!0);return n=(a=u.items&&u.items.length>0&&u.items[l])?a.id:"",o?s.setState({isFocused:e,focusState:c,selectedIndex:l,selectedItemId:n},s.trackedItemFocused):s.setState({isFocused:e,focusState:c,selectedIndex:l,selectedItemId:n}),!0},s.setFocusState=function(e){return!("filter"===e&&!s.displayFilter)&&(s.setState({focusState:e}),!0)},s.trackedItemFocused=function(e){var t=s.state,i=t.list,o=t.selectedIndex,a=t.focusState,n=i.items&&i.items.length>0&&i.items[o];"list"===a&&s.context.focusNav.analytics.triggerItemEvents(e?"MOUSELEAVE":"MOUSEENTER",n,s.props,o,s.props.imageType)},s.moveLeft=function(){var e=s.state,t=e.focusState,i=e.list;switch(t){case"list":var o=s.props.itemsPerRow,a=s.state.selectedIndex;if(a%o>0){a--;var n=i.items&&i.items.length>0&&i.items[a];s.setState({selectedIndex:a,selectedItemId:n?n.id:""},s.trackedItemFocused)}return!0;case"sort":return s.setState({focusState:"filter"}),!0;case"filter":return s.context.focusNav.focusPrevRow(s.focusableRow.index),!1}return!0},s.moveRight=function(){var e=s.state,t=e.focusState,i=e.list;switch(t){case"list":var o=s.props.itemsPerRow,a=s.state.selectedIndex;if(a%o<o-1){if(++a>=i.items.length)return!0;var n=i.items&&i.items.length>0&&i.items[a];s.setState({selectedIndex:a,selectedItemId:n?n.id:""},s.trackedItemFocused)}return!0;case"sort":return!1;case"filter":return s.setState({focusState:"sort"}),!0}return!0},s.moveUp=function(){var e=s.state,t=e.focusState,i=e.list,o=s.context.focusNav,a=o.getPrevFocusableRow(s.focusableRow.index,!0),n=a&&(a.template===c.Lh1Standard||a.template===c.Lh2Centered);switch(t){case"list":var r=s.props.itemsPerRow,l=s.state.selectedIndex;if((l-=r)<0&&(l=s.state.selectedIndex),l!==s.state.selectedIndex){var u=i.items&&i.items.length>0&&i.items[l];s.setState({selectedIndex:l,selectedItemId:u?u.id:""},s.trackedItemFocused),o.scrollY("up")}else{if(s.trackedItemFocused(!0),!s.displayFilter)return!1;if(0===l&&a&&0!==a.index&&n)return!1;s.setState({focusState:"filter"}),o.scrollY("up")}return!0;case"sort":case"filter":return!!n&&(o.moveToRow(0),!0);case"clear":return!!s.displayFilter&&(s.setState({focusState:"filter"}),o.scrollY("up"),!0)}return!1},s.moveDown=function(){var e=s.state,t=e.focusState,i=e.list;switch(t){case"list":var o=s.props,a=o.loadNextPage,n=o.itemsPerRow,r=s.state.selectedIndex,c=Math.ceil(i.items.length/n),l=Math.ceil((r+1)/n),u=!1;if((r+=n)>i.items.length-1&&(c===l?(r=s.state.selectedIndex,u=!0):r=i.items.length-1),r!==s.state.selectedIndex){var d=i.items&&i.items.length>0&&i.items[r];s.setState({selectedIndex:r,selectedItemId:d?d.id:""},s.trackedItemFocused),s.context.focusNav.scrollY("down")}if(i.items.length<i.size){if(a){var f=i.paging.page+1;f<=i.paging.total&&a(f)}else s.onScrollBottom();return!0}return u&&s.trackedItemFocused(!0),!u;case"sort":case"filter":return i.size>0||-1===i.size?s.setState({focusState:"list"},s.trackedItemFocused):s.setState({focusState:"clear"}),s.context.focusNav.scrollY("down"),!0;case"clear":return!1}return!1},s.exec=function(e,t){switch(e){case f.a.CLICK:switch(t||(t=s.state.focusState),t){case"list":return s.invokeItem(),!0;case"sort":return s.context.focusNav.showDialog(o.createElement(p.a,{title:"@{continuous_scroll_sort|SORT}",entries:I,selectedKey:s.state.selectedSort,ref:s.context.focusNav.requestFocus,onItemClicked:s.onItemClickedSort,needLocalization:!0})),!0;case"filter":return s.context.focusNav.showDialog(o.createElement(p.a,{title:"@{continuous_scroll_rating|RATING}",entries:s.classificationOptions,selectedKey:s.state.selectedClassification,ref:s.context.focusNav.requestFocus,onItemClicked:s.onItemClickedFilter,needLocalization:!0})),!0;case"clear":return s.resetFilters(void 0),!0}}return!1},s.onItemClickedSort=function(e){s.context.focusNav.hideDialog();var t=I[e].key;s.onSelectSort(t)},s.onItemClickedFilter=function(e){s.context.focusNav.hideDialog();var t=s.classificationOptions[e].key;s.onSelectClassification(t)},s.invokeItem=function(){var e=s.state,t=e.list,i=e.selectedIndex,o=s.props,a=o.isTrailersListPage,n=o.imageType,r=o.isEpisodesListPage,c=s.context.focusNav.analytics,l=t.items&&t.items.length>0&&t.items[i];l&&(c.triggerItemEvents("CLICK",l,s.props,i,n),t.id===v.c||t.id===v.b?Object(b.c)(l)?(s.context.detailHelper.isInChainingPlay=!1,c.triggerItemWatched(!0,l),s.context.router.push(l.watchPath)):s.context.detailHelper.showNoEntitlementMessage():a||r?s.context.detailHelper.onClickWatch(l,(function(e){e&&s.context.router.push(l.watchPath)}),!1):s.context.router.push(l.path))},s.onSelectSort=function(e){e!==s.state.selectedSort&&(s.setState({selectedSort:e,listPageLoading:!0,listLoaded:!1}),s.onSortFilter(e,s.state.selectedClassification))},s.onSelectClassification=function(e){e!==s.state.selectedClassification&&(s.setState({selectedClassification:e,listPageLoading:!0,listLoaded:!1}),s.onSortFilter(s.state.selectedSort,e))},s.resetFilters=function(e){s.setState({selectedSort:x.key,selectedClassification:S.key}),s.onSortFilter(x.key,S.key)},s.onScrollBottom=function(){var e=s.props.loadNextListPage,t=s.state.list;s.setState({listPageLoading:!0}),e&&e(t)},s.onSortFilter=function(e,t){e===x.key&&(e=void 0),t===S.key&&(t=void 0),s.props.queryParamsEnabled?s.updateQueryParams(e,t):s.loadListDirectly(e,t)},s.handleMouseEnter=function(){s.setState({isFocused:!0})},s.mouseEnterDropBtn=function(e){s.setState({focusState:e})},s.mouseEnterClearBtn=function(){s.setState({focusState:"clear"})},s.mouseEnterAsset=function(e){var t=s.state.list,i=t.items&&t.items.length>0&&t.items[e];s.setState({selectedIndex:e,selectedItemId:i?i.id:"",focusState:"list"},s.trackedItemFocused)},s.handleClick=function(e){s.state.focusState!==e&&s.setState({focusState:e}),s.exec(f.a.CLICK,e)},s.state={list:e.list,listPageLoading:!1,listLoaded:!1,selectedIndex:-1,selectedItemId:"",isFocused:!1,focusState:"list"},s.focusableRow={internalNavi:!0,focusable:!0,index:10*(e.index+1),height:0,maxHeight:0,innerTop:0,template:e.template,entryProps:e,restoreSavedState:s.restoreSavedState,setFocus:s.setFocus,moveLeft:s.moveLeft,moveRight:s.moveRight,moveUp:s.moveUp,moveDown:s.moveDown,exec:s.exec,getLeftToViewport:s.getLeftToViewport,setFocusState:s.setFocusState},s.calcFilter(e),s.calcRowHeight(e),s.mapRows(e.list,e.itemsPerRow),s}return Object(i.c)(s,t),s.prototype.componentDidMount=function(){var e=this,t=this.props,s=t.autoFocus,i=t.restorePage;t.isUserList&&this.context.focusNav.isGoingBack&&i(!0);var o=this.state.list;this.focusableRow.ref=this.ref,this.context.focusNav.registerRow(this.focusableRow),this.context.focusNav.blockScrollOnce=!0,s&&this.context.focusNav.moveToRow(this.focusableRow.index),this.classificationOptions=this.getClassificationOptions(this.context.detailHelper.classification),o.size<=0&&-1!==o.size&&this.setState({focusState:"clear"}),this.context.focusNav.addEventHandler(h.b.BACK_TO_TOP,"row"+this.props.index,(function(){var t=o.items&&o.items.length>0&&o.items[0];e.setState({selectedIndex:0,selectedItemId:t?t.id:"",focusState:"list"})}))},s.prototype.componentWillUnmount=function(){this.context.focusNav.unregisterRow(this.focusableRow),this.context.focusNav.removeEventHandler(h.b.BACK_TO_TOP,"row"+this.props.index)},s.prototype.componentWillReceiveProps=function(e){e.list&&e.list!==this.state.list&&(this.checkLoadedState(e.list),e.list.id!==this.state.list.id?(this.setState({selectedSort:x.key,selectedClassification:S.key}),this.context.focusNav.blockScrollOnce=!0):e.location&&e.location.query&&0===Object.keys(e.location.query).length&&this.state.selectedClassification!==S.key&&this.state.selectedSort!==x.key&&this.resetFilters(void 0),this.calcFilter(e),this.calcRowHeight(e),this.mapRows(e.list,e.itemsPerRow),e.autoFocus&&this.context.focusNav.moveToRow(this.focusableRow.index)),this.focusableRow.entryProps=e},s.prototype.componentDidUpdate=function(){var e=this.state,t=e.list,s=e.selectedIndex,i=e.selectedItemId,o=t.items&&t.items.length>0&&t.items[s];if(this.focusableRow.savedState=Object.assign({},this.state),this.props.isUserList&&t.items.length>0&&i&&(!o||o.id!==i)){var a=t.items.findIndex((function(e){return e.id===i}));if(-1===a)return this.setState({selectedIndex:0,selectedItemId:t.items[0].id}),this.context.focusNav.focusOnFirstRow(),void(this.context.focusNav.blockScrollOnce=!0);this.setState({selectedIndex:a})}this.state.isFocused&&(this.calcRowHeight(this.props),this.context.focusNav.scrollY())},s.prototype.mapRows=function(e,t){if(this.rows=[],e.items&&0!==e.items.length){(isNaN(t)||t<1)&&(t=1);for(var s=Math.ceil(e.items.length/t),i=0;i<s;i++){var o=e.items.slice(i*t,(i+1)*t);this.rows.push(o)}}},s.prototype.calcRowHeight=function(e){var t,s,i=e.customFields,o=e.imageType,a=e.itemsPerRow,n=e.showEpisodeMetadata,r=e.isAccountContinueWatchingPage,c=e.isAccountWatchedHistoryPage,l=e.isFromListPage,u=e.isTrailersListPage,d=e.isEpisodesListPage,f=e.isCollectionPage,h=e.hideItemBadge,m=this.state,p=m.isFocused,v=m.focusState,b=m.selectedIndex,y=m.list;switch(o){case"poster":t=g.a.assetPostHeight;break;case"tile":case"wallpaper":t=g.a.assetTileHeight;break;case"block":t=g.a.assetBlockHeight;break;case"square":case"logo":t=g.a.assetSquareHeight;break;case"tall":t=g.a.assetTallHeight;break;default:t=g.a.assetPostHeight}l&&(t=g.a.listPageAssetPostHeight),i&&"below"===i.assetTitlePosition&&(t+=g.a.assetBelowTitleTotalHeight),n&&(t+=g.a.assetBelowEpisodeMetadataHeight),(u||d)&&(t=g.a.assetTileHeightCrave),(c||r)&&(t=g.a.tileImageWidth),f&&(t=g.a.collectionItemHeight);var S=y.items.some((function(e){return!!e.badge}));!h&&S&&(t+=g.a.assetBadgeTitleHeight);var x=this.displayFilter?g.a.listFilterDropBtnHeight:0;y.size>0?s=x+Math.ceil(y.size/a)*t:s=x+g.a.listClearFilterBtnHeight;if(this.itemHeight=t,this.focusableRow.maxHeight=s,p)switch(v){case"list":var I=Math.floor(b/a)*t;this.focusableRow.height=t,this.focusableRow.innerTop=x+I;break;case"filter":case"sort":this.focusableRow.height=g.a.listFilterDropBtnHeight,this.focusableRow.innerTop=0;break;case"clear":this.focusableRow.height=g.a.listClearFilterBtnHeight,this.focusableRow.innerTop=x}else this.focusableRow.innerTop=0,this.focusableRow.height=s},s.prototype.checkLoadedState=function(e){e.size<=0&&-1!==e.size?this.setState({list:e,focusState:"clear"}):this.setState({list:e,focusState:"list",listPageLoading:-1===e.size,listLoaded:e.size===e.items.length})},s.prototype.updateQueryParams=function(e,t){var s=[];e&&s.push("order=".concat(encodeURIComponent(e))),t&&s.push("max_rating=".concat(encodeURIComponent(t)));var i=s.length?"?".concat(s.join("&")):"",o="".concat(this.props.location.pathname).concat(i);this.context.router.replace(o),this.props.refreshPage()},s.prototype.loadListDirectly=function(e,t){var s=this.props,i=s.loadListPage,o=s.savedState,a=this.state.list,n=l.c[e]||{};t&&(n=Object.assign({maxRating:t},n));var r=Object(l.j)(a,n);o&&(o.listKey=r),i&&i(a,1,n)},s.prototype.getClassificationOptions=function(e){var t=[];if(e)for(var s in t.push(S),e)if(e.hasOwnProperty(s)){var i=e[s];t.push({label:i.name,key:i.code})}return t},s.prototype.calcFilter=function(e){var t=e.customFields,s=e.queryParamsEnabled;this.displayFilter=t&&t.displayFilter&&s},s.prototype.render=function(){var e=this,t=this.state.list,s=t.size>0||-1===t.size,i=this.renderFilterSortDropDowns(),a=this.context.focusNav.getPrevFocusableRow(this.focusableRow.index),n=a&&a.template&&a.template.startsWith("LH"),r={minHeight:this.focusableRow.maxHeight+"px",marginTop:!i&&n&&t.description?g.a.csListMarginTop+"px":void 0};return o.createElement("div",{className:w.b(),ref:function(t){return e.ref=t},onMouseEnter:this.handleMouseEnter,style:r},-1!==t.size&&i,s?this.renderList():this.renderFilterMismatch())},s.prototype.renderFilterSortDropDowns=function(){return this.displayFilter,!1},s.prototype.renderList=function(){var t,s=this,i=this.props,a=i.list,n=i.rowType,r=i.profile,c=i.imageType,l=i.itemMargin,u=i.imageWidth,d=i.itemsPerRow,f=i.customFields,h=i.isTrailersListPage,m=i.isEpisodesListPage,p=i.showEpisodeMetadata,g=i.isAccountWatchedHistoryPage,v=i.isAccountContinueWatchingPage,b=this.state,S=b.isFocused,x=b.focusState,I=b.selectedIndex;"clear"===this.state.focusState&&e((function(){s.setState({focusState:"list"})}));var F=S&&"list"===x,R={imageType:c,imageOptions:{width:u},itemMargin:l||P,titlePosition:f&&f.assetTitlePosition,className:w.e("grid-item"),onClick:this.invokeItem,assetMouseEnter:this.mouseEnterAsset,displayPlayIcon:f&&f.displayPlayIcon,showEpisodeMetadata:p,rowType:n},k=null===(t=null==r?void 0:r.info)||void 0===t?void 0:t.watched;return o.createElement("div",{className:w.e("grid")},this.rows.map((function(e,t){return o.createElement(y.a,{list:a,items:e,enableItemGrid:!0,key:"row-"+t,itemProps:R,height:s.itemHeight,isFocused:F,itemsPerRow:d,watchedList:k,offset:t*d,selectedIndex:I,isEpisodesListPage:m,showTrailerMetadata:h,isAccountWatchedHistoryPage:g,additionalMetadata:h||m,isAccountContinueWatchingPage:v})})))},s.prototype.renderFilterMismatch=function(){var e=this.state,t=e.isFocused,s=e.focusState,i=t&&"clear"===s?"clear-list-filters-btn focused":"clear-list-filters-btn";return o.createElement("div",null,o.createElement(r.a,{tagName:"div",className:"page-entry page-entry--empty"},"@{listPage_filter_mismatch_msg|Sorry, no items match your selected filter.}"),o.createElement(r.a,{tagName:"button",className:i,onClick:this.resetFilters,onMouseEnter:this.mouseEnterClearBtn},"@{listPage_filter_reset_label|Clear Filters}"))},s.contextTypes={router:a.object.isRequired,focusNav:a.object.isRequired,detailHelper:a.object.isRequired},s.defaultProps={autoFocus:!0},s}(o.Component);t.a=Object(n.connect)(void 0,(function(e){if(!e.page||!e.page.history)return{refreshPage:function(){return e(Object(m.h)())},restorePage:function(t){return e(Object(m.i)(t))}};var t,s,i=e.page.history.location;return i&&i.query&&(t=i.query.order,s=i.query.max_rating),t||(t=x.key),s||(s=S.key),this.setState({selectedSort:t,selectedClassification:s}),{selectedSort:t,selectedClassification:s,refreshPage:function(){return e(Object(m.h)())},restorePage:function(t){return e(Object(m.i)(t))}}}))(F)}).call(this,s(294).setImmediate)},397:function(e,t,s){"use strict";var i=s(242),o=s(243),a=s(245),n=s(244),r=s(247),c=s.n(r),l=s(248),u=s(255),d=s(251),f=s(246),h=(s(398),new n.a("titled-list")),m=function(e){function t(t){var s=e.call(this,t)||this;s.setFocus=function(e){return!0},s.moveUp=function(){var e=Object(l.g)(s.state.curIndex-1,0,s.state.maxIndex),t=s.calcPortraitPosition(e);return s.setState({curIndex:e,portraitPosition:t}),!0},s.moveDown=function(){var e=Object(l.g)(s.state.curIndex+1,0,s.state.maxIndex),t=s.calcPortraitPosition(e);return s.setState({curIndex:e,portraitPosition:t}),!0},s.exec=function(e){switch(e){case"click":var t=s.props.onItemClicked,i=s.state.curIndex;return t&&t(i),!0}return!1},s.onItemsRef=function(e){s.itemsRef=e},s.calcPortraitPosition=function(e){var t="0%",i=s.props.entries.length,o=Math.ceil(i/6),a=Math.floor(e/6);return a>0&&(a<o-1?t=-100*a+"%":s.itemsRef&&(t=-(s.itemsRef.scrollHeight-s.itemsRef.clientHeight)/s.itemsRef.clientHeight*100+"%")),t};var i=t.selectedKey&&t.entries.findIndex((function(e){return e.key===t.selectedKey}));return s.state={curIndex:-1!==i&&void 0!==i?i:0,isVisible:!1,maxIndex:t.entries.length-1,portraitPosition:"0%"},s.focusableRow={focusable:!0,index:-1,height:0,ref:void 0,restoreSavedState:function(){},setFocus:s.setFocus,moveLeft:l.e,moveRight:l.e,moveUp:s.moveUp,moveDown:s.moveDown,exec:s.exec},s}return Object(i.c)(t,e),t.prototype.componentDidMount=function(){var e=this.calcPortraitPosition(this.state.curIndex);this.setState({portraitPosition:e})},t.prototype.componentWillReceiveProps=function(e){void 0!==e.isVisible&&this.state.isVisible!==e.isVisible&&(this.setState({isVisible:e.isVisible}),e.isVisible?this.context.focusNav.setFocus(this.focusableRow):this.context.focusNav.resetFocus()),e.entries&&this.setState({maxIndex:e.entries.length-1})},t.prototype.componentDidUpdate=function(){this.focusableRow.savedState=Object.assign({},this.state)},t.prototype.render=function(){var e=this.props,t=e.title,s=e.entries,i=e.onItemClicked,a=e.needLocalization,n=this.state,r=n.curIndex,c=n.portraitPosition,u={styleTransform:Object(l.f)("-50%, ".concat(c),f.a.transitionDuration,0,!1),entries:s,curIndex:r,onItemClicked:i,needLocalization:a};return o.createElement("div",{className:h.b()},o.createElement("div",{className:h.e("titleDiv")},o.createElement(d.a,{tagName:"div",className:h.e("title")},t)),this.renderSortFilterDialog(u),o.createElement("div",{className:h.e("cover")}))},t.prototype.renderSortFilterDialog=function(e){var t=this,s=e.styleTransform,i=e.entries,a=e.curIndex,n=e.onItemClicked;return e.needLocalization?o.createElement("div",{className:h.e("items"),style:s,ref:this.onItemsRef},i&&i.map((function(e,s){return o.createElement(u.a,{id:e.label,key:"item-".concat(s)},(function(e){return o.createElement("div",{className:c()(h.e("item"),a===s?l.a:""),onMouseEnter:function(){t.setState({curIndex:s})},onClick:function(){n(s)}},e)}))}))):o.createElement("div",{className:h.e("items"),style:s,ref:this.onItemsRef},i&&i.map((function(e,s){return o.createElement("div",{key:"item-".concat(s),className:c()(h.e("item"),a===s?l.a:""),onMouseEnter:function(){t.setState({curIndex:s})},onClick:function(){n(s)}},e.label)})))},t.contextTypes={focusNav:a.object.isRequired},t.defaultProps={isVisible:!1},t}(o.Component);t.a=m},398:function(e,t,s){},516:function(e,t,s){"use strict";var i=s(242),o=s(243),a=s(255),n=function(e){function t(t){var s=e.call(this,t)||this;return s.formatMessage=function(e){return e.replace(/@\{([^@]+)\}/g,s.getFormattedMessage)},s.getFormattedMessage=function(e,t){var i=s.props,o=i.intl,a=i.defaults,n=t.split("|"),r=n[0],c=n[1];return!c&&a&&(c=a[r]),o.formatMessage({id:r,defaultMessage:c},s.state.values)},s.formatChildren=function(e){return"string"==typeof e?s.formatMessage(e):"object"==typeof e&&Array.isArray(e)?e.map(s.formatChild):e},s.formatChild=function(e){return"string"==typeof e?s.formatMessage(e):s.props.nested&&"object"==typeof e?o.cloneElement(e,{children:s.formatChildren(e.props.children)}):e},s.state={values:s.formatValues(t.values,t.intl)},s}return Object(i.c)(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this.props,s=t.values,i=t.intl;e.values===s&&i.locale===e.intl.locale||this.setState({values:this.formatValues(e.values,e.intl)})},t.prototype.formatValues=function(e,t){if(e){var s={};for(var i in e){var o=e[i];!o||"object"!=typeof o||o instanceof Date?s[i]=o:s[i]=this.getFormattedValue(e[i],t)}return s}},t.prototype.getFormattedValue=function(e,t){var s=e.type,i=e.value,o=e.formatOptions;switch(s){case"date":return t.formatDate(i,o);case"time":return t.formatTime(i,o);case"relative":return t.formatRelative(i,o);case"number":return t.formatNumber(i,o);case"plural":return t.formatPlural(i,o);default:return i}},t.prototype.render=function(){var e=this.props,t=(e.intl,e.values,e.defaults,e.formattedProps),s=e.elementType,a=e.tagName,n=e.componentProps,r=e.children,c=(e.nested,Object(i.e)(e,["intl","values","defaults","formattedProps","elementType","tagName","componentProps","children","nested"]));if(r&&(c.children=this.formatChildren(r)),t)for(var l in t)void 0!==t[l]&&(c[l]=this.formatMessage(t[l]));if("string"==typeof s)return o.createElement(s,c);if(!s&&a)return o.createElement(a,c);var u=s,d=c.children;return delete c.children,o.createElement(u,Object(i.a)({},c,n),d)},t.defaultProps={tagName:"span"},t}(o.PureComponent);t.a=Object(a.d)(n)},945:function(e,t,s){"use strict";s.d(t,"b",(function(){return u})),s.d(t,"a",(function(){return d}));var i=s(242),o=s(243),a=s(247),n=s.n(a),r=s(244),c=s(516),l=(s(946),new r.a("drop-button")),u="__placeholder",d=function(e){function t(t){var s=e.call(this,t)||this;return s.handleMouseEnter=function(){var e=s.props,t=e.onMouseEnter,i=e.dropBtnState;t&&t(i)},s.handleMouseClick=function(){var e=s.props,t=e.onClick,i=e.dropBtnState;t&&t(i)},s}return Object(i.c)(t,e),t.prototype.getSelectedLabel=function(e){var t=e.options,s=e.selectedKey,i=e.defaultOption,o=s&&s!==i.key&&t.find((function(e){return e.key===s}));return o?o.label:e.label},t.prototype.render=function(){var e=this.props,t=e.className,s=e.curIndex,i=e.options,a="";return a=void 0!==s?i[s].label:this.getSelectedLabel(this.props),o.createElement("div",{className:n()(l.b(),t),onMouseEnter:this.handleMouseEnter,onClick:this.handleMouseClick},o.createElement("div",{className:l.e("btn")},o.createElement(c.a,{elementType:"span",className:l.e("title")},"@{".concat(a,"}")),o.createElement("i",{className:n()(l.e("icon"),"icon icon-drop-button")})),o.createElement("div",{className:l.e("bar")}))},t.defaultProps={useTranslations:!1},t}(o.Component)},946:function(e,t,s){},947:function(e,t,s){}}]);