function AppMeasurement_Module_AudienceManagement(d) {
	var a = this;
	a.s = d;
	var b = window;
	b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0));
	a._il = b.s_c_il;
	a._in = b.s_c_in;
	a._il[a._in] = a;
	b.s_c_in++;
	a._c = 's_m';
	a.setup = function(c) {
		b.DIL &&
			c &&
			((c.disableDefaultRequest = !0),
			(c.disableScriptAttachment = !0),
			(c.disableCORS = !0),
			(c.secureDataCollection = !1),
			(a.instance = b.DIL.create(c)),
			(a.tools = b.DIL.tools));
	};
	a.isReady = function() {
		return a.instance ? !0 : !1;
	};
	a.getEventCallConfigParams = function() {
		return a.instance && a.instance.api && a.instance.api.getEventCallConfigParams
			? a.instance.api.getEventCallConfigParams()
			: {};
	};
	a.passData = function(b) {
		a.instance && a.instance.api && a.instance.api.passData && a.instance.api.passData(b);
	};
}
!(function() {
	'use strict';
	var r, o, a;
	'function' != typeof window.DIL &&
		((window.DIL = function(n) {
			var c,
				e,
				I,
				r,
				u,
				h,
				t,
				o,
				s,
				i,
				a,
				d,
				y,
				l,
				f,
				g,
				p,
				m,
				b,
				v,
				D,
				O = [],
				C = {};
			function S(e) {
				return void 0 === e || !0 === e;
			}
			n !== Object(n) && (n = {}),
				(I = n.partner),
				(r = n.containerNSID),
				(u = n.mappings),
				(h = n.uuidCookie),
				(t = !0 === n.enableErrorReporting),
				(o = n.visitorService),
				(s = n.declaredId),
				(i = !0 === n.delayAllUntilWindowLoad),
				(a = S(n.secureDataCollection)),
				(d = 'boolean' == typeof n.isCoopSafe ? n.isCoopSafe : null),
				(y = S(n.enableHrefererParam)),
				(l = S(n.enableLogging)),
				(f = S(n.enableUrlDestinations)),
				(g = S(n.enableCookieDestinations)),
				(p = !0 === n.disableDefaultRequest),
				(m = n.afterResultForDefaultRequest),
				(b = n.visitorConstructor),
				(v = !0 === n.disableCORS),
				(D = !0 === n.ignoreHardDependencyOnVisitorAPI),
				t && DIL.errorModule.activate(),
				D &&
					O.push(
						'Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.'
					);
			var w = !0 === window._dil_unit_tests;
			if (((c = arguments[1]) && O.push(c + ''), !I || 'string' != typeof I)) {
				var _ = {
					name: 'error',
					message: c = 'DIL partner is invalid or not specified in initConfig',
					filename: 'dil.js'
				};
				return DIL.errorModule.handleError(_), new Error(c);
			}
			if (
				((c = 'DIL containerNSID is invalid or not specified in initConfig, setting to default of 0'),
				(r || 'number' == typeof r) && ((r = parseInt(r, 10)), !isNaN(r) && 0 <= r && (c = '')),
				c && ((r = 0), O.push(c), (c = '')),
				(e = DIL.getDil(I, r)) instanceof DIL && e.api.getPartner() === I && e.api.getContainerNSID() === r)
			)
				return e;
			if (!(this instanceof DIL))
				return new DIL(
					n,
					"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " +
						I +
						' and containerNSID = ' +
						r
				);
			DIL.registerDil(this, I, r);
			var R = {
					doesConsoleLogExist: window.console === Object(window.console) && 'function' == typeof window.console.log,
					logMemo: {},
					log: function(e) {
						(O.push(e), l && this.doesConsoleLogExist) &&
							Function.prototype.bind.call(window.console.log, window.console).apply(window.console, arguments);
					},
					logOnce: function(e) {
						this.logMemo[e] || ((this.logMemo[e] = !0), R.log(e));
					}
				},
				E = {
					IS_HTTPS: a || 'https:' === document.location.protocol,
					SIX_MONTHS_IN_MINUTES: 259200,
					IE_VERSION: (function() {
						if (document.documentMode) return document.documentMode;
						for (var e = 7; 4 < e; e--) {
							var t = document.createElement('div');
							if (
								((t.innerHTML = '\x3c!--[if IE ' + e + ']><span></span><![endif]--\x3e'),
								t.getElementsByTagName('span').length)
							)
								return (t = null), e;
						}
						return null;
					})()
				};
			E.IS_IE_LESS_THAN_10 = 'number' == typeof E.IE_VERSION && E.IE_VERSION < 10;
			var P = { stuffed: {} },
				L = {},
				A = {
					firingQueue: [],
					fired: [],
					firing: !1,
					sent: [],
					errored: [],
					reservedKeys: { sids: !0, pdata: !0, logdata: !0, callback: !0, postCallbackFn: !0, useImageRequest: !0 },
					firstRequestHasFired: !1,
					abortRequests: !1,
					num_of_cors_responses: 0,
					num_of_cors_errors: 0,
					corsErrorSources: [],
					num_of_img_responses: 0,
					num_of_img_errors: 0,
					platformParams: { d_nsid: r + '', d_rtbd: 'json', d_jsonv: DIL.jsonVersion + '', d_dst: '1' },
					nonModStatsParams: { d_rtbd: !0, d_dst: !0, d_cts: !0, d_rs: !0 },
					modStatsParams: null,
					adms: {
						TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 3e4,
						calledBack: !1,
						mid: null,
						noVisitorAPI: null,
						VisitorAPI: null,
						instance: null,
						releaseType: 'no VisitorAPI',
						isOptedOut: !0,
						isOptedOutCallbackCalled: !1,
						admsProcessingStarted: !1,
						process: function(e) {
							try {
								if (this.admsProcessingStarted) return;
								this.admsProcessingStarted = !0;
								var t,
									n,
									s,
									i = o;
								if ('function' != typeof e || 'function' != typeof e.getInstance)
									throw ((this.noVisitorAPI = !0), new Error('Visitor does not exist.'));
								if (i !== Object(i) || !(t = i.namespace) || 'string' != typeof t)
									throw ((this.releaseType = 'no namespace'),
									new Error(
										"DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}"
									));
								if (
									!(
										(n = e.getInstance(t, { idSyncContainerID: r })) === Object(n) &&
										n instanceof e &&
										'function' == typeof n.isAllowed &&
										'function' == typeof n.getMarketingCloudVisitorID &&
										'function' == typeof n.getCustomerIDs &&
										'function' == typeof n.isOptedOut &&
										'function' == typeof n.publishDestinations
									)
								)
									throw ((this.releaseType = 'invalid instance'),
									(s = 'Invalid Visitor instance.'),
									n === Object(n) &&
										'function' != typeof n.publishDestinations &&
										(s +=
											' In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ .'),
									new Error(s));
								if (((this.VisitorAPI = e), !n.isAllowed()))
									return (this.releaseType = 'VisitorAPI is not allowed to write cookies'), void this.releaseRequests();
								(this.instance = n), this.waitForMidToReleaseRequests();
							} catch (e) {
								if (!D)
									throw new Error(
										'Error in processing Visitor API, which is a hard dependency for DIL v8.0+: ' + e.message
									);
								this.releaseRequests();
							}
						},
						waitForMidToReleaseRequests: function() {
							var t = this;
							this.instance &&
								(this.instance.getMarketingCloudVisitorID(function(e) {
									(t.mid = e), (t.releaseType = 'VisitorAPI'), t.releaseRequests();
								}, !0),
								(!N.exists || (!N.isIabContext && N.isApproved()) || (N.isIabContext && B.hasGoSignal())) &&
									setTimeout(function() {
										'VisitorAPI' !== t.releaseType && ((t.releaseType = 'timeout'), t.releaseRequests());
									}, this.getLoadTimeout()));
						},
						releaseRequests: function() {
							(this.calledBack = !0), A.registerRequest();
						},
						getMarketingCloudVisitorID: function() {
							return this.instance ? this.instance.getMarketingCloudVisitorID() : null;
						},
						getMIDQueryString: function() {
							var e = k.isPopulatedString,
								t = this.getMarketingCloudVisitorID();
							return (e(this.mid) && this.mid === t) || (this.mid = t), e(this.mid) ? 'd_mid=' + this.mid + '&' : '';
						},
						getCustomerIDs: function() {
							return this.instance ? this.instance.getCustomerIDs() : null;
						},
						getCustomerIDsQueryString: function(e) {
							if (e !== Object(e)) return '';
							var t,
								n,
								s,
								i,
								r = '',
								o = [],
								a = [];
							for (t in e)
								e.hasOwnProperty(t) &&
									(n = e[(a[0] = t)]) === Object(n) &&
									((a[1] = n.id || ''), (a[2] = n.authState || 0), o.push(a), (a = []));
							if ((i = o.length)) for (s = 0; s < i; s++) r += '&d_cid_ic=' + x.encodeAndBuildRequest(o[s], '%01');
							return r;
						},
						getIsOptedOut: function() {
							this.instance
								? this.instance.isOptedOut([this, this.isOptedOutCallback], this.VisitorAPI.OptOut.GLOBAL, !0)
								: ((this.isOptedOut = !1), (this.isOptedOutCallbackCalled = !0));
						},
						isOptedOutCallback: function(e) {
							(this.isOptedOut = e),
								(this.isOptedOutCallbackCalled = !0),
								A.registerRequest(),
								N.isIabContext() && B.checkQueryStringObject();
						},
						getLoadTimeout: function() {
							var e = this.instance;
							if (e) {
								if ('function' == typeof e.getLoadTimeout) return e.getLoadTimeout();
								if (void 0 !== e.loadTimeout) return e.loadTimeout;
							}
							return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE;
						}
					},
					declaredId: {
						declaredId: { init: null, request: null },
						declaredIdCombos: {},
						setDeclaredId: function(e, t) {
							var n = k.isPopulatedString,
								s = encodeURIComponent;
							if (e === Object(e) && n(t)) {
								var i = e.dpid,
									r = e.dpuuid,
									o = null;
								if (n(i) && n(r))
									return (
										(o = s(i) + '$' + s(r)),
										!0 === this.declaredIdCombos[o]
											? "setDeclaredId: combo exists for type '" + t + "'"
											: ((this.declaredIdCombos[o] = !0),
											  (this.declaredId[t] = { dpid: i, dpuuid: r }),
											  "setDeclaredId: succeeded for type '" + t + "'")
									);
							}
							return "setDeclaredId: failed for type '" + t + "'";
						},
						getDeclaredIdQueryString: function() {
							var e = this.declaredId.request,
								t = this.declaredId.init,
								n = encodeURIComponent,
								s = '';
							return (
								null !== e
									? (s = '&d_dpid=' + n(e.dpid) + '&d_dpuuid=' + n(e.dpuuid))
									: null !== t && (s = '&d_dpid=' + n(t.dpid) + '&d_dpuuid=' + n(t.dpuuid)),
								s
							);
						}
					},
					registerRequest: function(e) {
						var t,
							n = this.firingQueue;
						e === Object(e) && (n.push(e), e.isDefaultRequest || (p = !0)),
							this.firing ||
								!n.length ||
								(i && !DIL.windowLoaded) ||
								(this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(),
								this.adms.calledBack &&
									!this.adms.isOptedOut &&
									this.adms.isOptedOutCallbackCalled &&
									(N.isApproved() || B.hasGoSignal()) &&
									((this.adms.isOptedOutCallbackCalled = !1),
									((t = n.shift()).src = t.src.replace(
										/&d_nsid=/,
										'&' + this.adms.getMIDQueryString() + B.getQueryString() + 'd_nsid='
									)),
									k.isPopulatedString(t.corsPostData) &&
										(t.corsPostData = t.corsPostData.replace(
											/^d_nsid=/,
											this.adms.getMIDQueryString() + B.getQueryString() + 'd_nsid='
										)),
									V.fireRequest(t),
									this.firstRequestHasFired ||
										('script' !== t.tag && 'cors' !== t.tag) ||
										(this.firstRequestHasFired = !0)));
					},
					processVisitorAPI: function() {
						this.adms.process(b || window.Visitor);
					},
					getCoopQueryString: function() {
						var e = '';
						return !0 === d ? (e = '&d_coop_safe=1') : !1 === d && (e = '&d_coop_unsafe=1'), e;
					}
				};
			C.requestController = A;
			var q,
				j,
				T = {
					sendingMessages: !1,
					messages: [],
					messagesPosted: [],
					destinations: [],
					destinationsPosted: [],
					jsonForComparison: [],
					jsonDuplicates: [],
					jsonWaiting: [],
					jsonProcessed: [],
					publishDestinationsVersion: null,
					requestToProcess: function(e, t) {
						var n,
							s = this;
						function i() {
							s.jsonForComparison.push(e), s.jsonWaiting.push([e, t]);
						}
						if (e && !k.isEmptyObject(e))
							if (((n = JSON.stringify(e.dests || [])), this.jsonForComparison.length)) {
								var r,
									o,
									a,
									d = !1;
								for (r = 0, o = this.jsonForComparison.length; r < o; r++)
									if (((a = this.jsonForComparison[r]), n === JSON.stringify(a.dests || []))) {
										d = !0;
										break;
									}
								d ? this.jsonDuplicates.push(e) : i();
							} else i();
						if (this.jsonWaiting.length) {
							var u = this.jsonWaiting.shift();
							this.process(u[0], u[1]), this.requestToProcess();
						}
						this.messages.length && !this.sendingMessages && this.sendMessages();
					},
					process: function(e) {
						if (f) {
							var t,
								n,
								s,
								i,
								r,
								o,
								a = encodeURIComponent,
								d = this.getPublishDestinationsVersion(),
								u = !1;
							if (-1 !== d) {
								if ((t = e.dests) && t instanceof Array && (n = t.length)) {
									for (s = 0; s < n; s++)
										(i = t[s]),
											(o = [a('dests'), a(i.id || ''), a(i.y || ''), a(i.c || '')].join('|')),
											this.addMessage(o),
											(r = { url: i.c, hideReferrer: void 0 === i.hr || !!i.hr, message: o }),
											this.addDestination(r),
											void 0 !== i.hr && (u = !0);
									1 === d &&
										u &&
										R.logOnce(
											'Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.'
										);
								}
								this.jsonProcessed.push(e);
							}
						}
					},
					addMessage: function(e) {
						this.messages.push(e);
					},
					addDestination: function(e) {
						this.destinations.push(e);
					},
					sendMessages: function() {
						this.sendingMessages ||
							((this.sendingMessages = !0), f && this.messages.length && this.publishDestinations());
					},
					publishDestinations: function() {
						var t = this,
							e = A.adms.instance,
							n = [],
							s = [],
							i = function(e) {
								R.log('visitor.publishDestinations() result: ' + (e.error || e.message)),
									(t.sendingMessages = !1),
									t.requestToProcess();
							},
							r = function() {
								(t.messages = []), (t.destinations = []);
							};
						return 1 === this.publishDestinationsVersion
							? (x.extendArray(n, this.messages),
							  x.extendArray(this.messagesPosted, this.messages),
							  r(),
							  e.publishDestinations(I, n, i),
							  'Called visitor.publishDestinations() version 1')
							: 1 < this.publishDestinationsVersion
							? (x.extendArray(s, this.destinations),
							  x.extendArray(this.destinationsPosted, this.destinations),
							  r(),
							  e.publishDestinations({ subdomain: I, callback: i, urlDestinations: s }),
							  'Called visitor.publishDestinations() version > 1')
							: void 0;
					},
					getPublishDestinationsVersion: function() {
						if (null !== this.publishDestinationsVersion) return this.publishDestinationsVersion;
						var e = A.adms.instance,
							n = -1;
						return (
							e.publishDestinations(null, null, function(e) {
								if (e === Object(e)) {
									var t = e.error;
									'subdomain is not a populated string.' === t
										? (n = 1)
										: 'Invalid parameters passed.' === t && (n = 2);
								}
							}),
							(this.publishDestinationsVersion = n)
						);
					}
				},
				M = {
					traits: function(e) {
						return k.isValidPdata(e) && (L.sids instanceof Array || (L.sids = []), x.extendArray(L.sids, e)), this;
					},
					pixels: function(e) {
						return k.isValidPdata(e) && (L.pdata instanceof Array || (L.pdata = []), x.extendArray(L.pdata, e)), this;
					},
					logs: function(e) {
						return (
							k.isValidLogdata(e) &&
								(L.logdata !== Object(L.logdata) && (L.logdata = {}), x.extendObject(L.logdata, e)),
							this
						);
					},
					customQueryParams: function(e) {
						return k.isEmptyObject(e) || x.extendObject(L, e, A.reservedKeys), this;
					},
					signals: function(e, t) {
						var n,
							s = e;
						if (!k.isEmptyObject(s)) {
							if (t && 'string' == typeof t) for (n in ((s = {}), e)) e.hasOwnProperty(n) && (s[t + n] = e[n]);
							x.extendObject(L, s, A.reservedKeys);
						}
						return this;
					},
					declaredId: function(e) {
						return A.declaredId.setDeclaredId(e, 'request'), this;
					},
					result: function(e) {
						return 'function' == typeof e && (L.callback = e), this;
					},
					afterResult: function(e) {
						return 'function' == typeof e && (L.postCallbackFn = e), this;
					},
					useImageRequest: function() {
						return (L.useImageRequest = !0), this;
					},
					clearData: function() {
						return (L = {}), this;
					},
					submit: function(e) {
						return (L.isDefaultRequest = !!e), V.submitRequest(L), (L = {}), this;
					},
					getPartner: function() {
						return I;
					},
					getContainerNSID: function() {
						return r;
					},
					getEventLog: function() {
						return O;
					},
					getState: function() {
						var e = {},
							t = {};
						return (
							x.extendObject(e, A, { registerRequest: !0 }),
							x.extendObject(t, T, { requestToProcess: !0, process: !0, sendMessages: !0 }),
							{ initConfig: n, pendingRequest: L, otherRequestInfo: e, destinationPublishingInfo: t, log: O }
						);
					},
					idSync: function() {
						throw new Error(
							'Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance'
						);
					},
					aamIdSync: function() {
						throw new Error(
							'Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance'
						);
					},
					passData: function(e) {
						return k.isEmptyObject(e) ? 'Error: json is empty or not an object' : (V.defaultCallback(e), e);
					},
					getPlatformParams: function() {
						return A.platformParams;
					},
					getEventCallConfigParams: function() {
						var e,
							t = A,
							n = t.modStatsParams,
							s = t.platformParams;
						if (!n) {
							for (e in ((n = {}), s))
								s.hasOwnProperty(e) && !t.nonModStatsParams[e] && (n[e.replace(/^d_/, '')] = s[e]);
							!0 === d ? (n.coop_safe = 1) : !1 === d && (n.coop_unsafe = 1), (t.modStatsParams = n);
						}
						return n;
					},
					setAsCoopSafe: function() {
						return (d = !0), this;
					},
					setAsCoopUnsafe: function() {
						return (d = !1), this;
					},
					getEventCallIabSignals: function(e) {
						var t;
						return e !== Object(e)
							? 'Error: config is not an object'
							: 'function' != typeof e.callback
							? 'Error: config.callback is not a function'
							: ((t = parseInt(e.timeout, 10)), isNaN(t) && (t = null), void B.getQueryStringObject(e.callback, t));
					}
				},
				V = {
					corsMetadata: ((q = 'none'),
					'undefined' != typeof XMLHttpRequest &&
						XMLHttpRequest === Object(XMLHttpRequest) &&
						'withCredentials' in new XMLHttpRequest() &&
						(q = 'XMLHttpRequest'),
					{ corsType: q }),
					getCORSInstance: function() {
						return 'none' === this.corsMetadata.corsType ? null : new window[this.corsMetadata.corsType]();
					},
					submitRequest: function(e) {
						return A.registerRequest(V.createQueuedRequest(e)), !0;
					},
					createQueuedRequest: function(e) {
						var t,
							n,
							s,
							i,
							r,
							o = e.callback,
							a = 'img',
							d = e.isDefaultRequest;
						if ((delete e.isDefaultRequest, !k.isEmptyObject(u)))
							for (s in u)
								if (u.hasOwnProperty(s)) {
									if (null == (i = u[s]) || '' === i) continue;
									if (s in e && !(i in e) && !(i in A.reservedKeys)) {
										if (null == (r = e[s]) || '' === r) continue;
										e[i] = r;
									}
								}
						return (
							k.isValidPdata(e.sids) || (e.sids = []),
							k.isValidPdata(e.pdata) || (e.pdata = []),
							k.isValidLogdata(e.logdata) || (e.logdata = {}),
							(e.logdataArray = x.convertObjectToKeyValuePairs(e.logdata, '=', !0)),
							e.logdataArray.push('_ts=' + new Date().getTime()),
							'function' != typeof o && (o = this.defaultCallback),
							(t = this.makeRequestSrcData(e)),
							(n = this.getCORSInstance()) && !0 !== e.useImageRequest && (a = 'cors'),
							{
								tag: a,
								src: t.src,
								corsSrc: t.corsSrc,
								callbackFn: o,
								postCallbackFn: e.postCallbackFn,
								useImageRequest: !!e.useImageRequest,
								requestData: e,
								corsInstance: n,
								corsPostData: t.corsPostData,
								isDefaultRequest: d
							}
						);
					},
					defaultCallback: function(e, t) {
						var n, s, i, r, o, a, d, u, c;
						if (g && (n = e.stuff) && n instanceof Array && (s = n.length))
							for (i = 0; i < s; i++)
								(r = n[i]) &&
									r === Object(r) &&
									((o = r.cn),
									(a = r.cv),
									(void 0 !== (d = r.ttl) && '' !== d) || (d = Math.floor(x.getMaxCookieExpiresInMinutes() / 60 / 24)),
									(u = r.dmn || '.' + document.domain.replace(/^www\./, '')),
									(c = r.type),
									o &&
										(a || 'number' == typeof a) &&
										('var' !== c && (d = parseInt(d, 10)) && !isNaN(d) && x.setCookie(o, a, 24 * d * 60, '/', u, !1),
										(P.stuffed[o] = a)));
						var l,
							f,
							p = e.uuid;
						k.isPopulatedString(p) &&
							(k.isEmptyObject(h) ||
								(('string' == typeof (l = h.path) && l.length) || (l = '/'),
								(f = parseInt(h.days, 10)),
								isNaN(f) && (f = 100),
								x.setCookie(
									h.name || 'aam_did',
									p,
									24 * f * 60,
									l,
									h.domain || '.' + document.domain.replace(/^www\./, ''),
									!0 === h.secure
								))),
							A.abortRequests || T.requestToProcess(e, t);
					},
					makeRequestSrcData: function(r) {
						(r.sids = k.removeEmptyArrayValues(r.sids || [])), (r.pdata = k.removeEmptyArrayValues(r.pdata || []));
						var o = A,
							e = o.platformParams,
							t = x.encodeAndBuildRequest(r.sids, ','),
							n = x.encodeAndBuildRequest(r.pdata, ','),
							s = (r.logdataArray || []).join('&');
						delete r.logdataArray;
						var i,
							a,
							d = encodeURIComponent,
							u = E.IS_HTTPS ? 'https://' : 'http://',
							c = o.declaredId.getDeclaredIdQueryString(),
							l = o.adms.instance ? o.adms.getCustomerIDsQueryString(o.adms.getCustomerIDs()) : '',
							f = (function() {
								var e,
									t,
									n,
									s,
									i = [];
								for (e in r)
									if (!(e in o.reservedKeys) && r.hasOwnProperty(e))
										if (((t = r[e]), (e = d(e)), t instanceof Array))
											for (n = 0, s = t.length; n < s; n++) i.push(e + '=' + d(t[n]));
										else i.push(e + '=' + d(t));
								return i.length ? '&' + i.join('&') : '';
							})(),
							p = 'd_dil_ver=' + d(DIL.version),
							h =
								'd_nsid=' +
								e.d_nsid +
								o.getCoopQueryString() +
								c +
								l +
								(t.length ? '&d_sid=' + t : '') +
								(n.length ? '&d_px=' + n : '') +
								(s.length ? '&d_ld=' + d(s) : ''),
							g = '&d_rtbd=' + e.d_rtbd + '&d_jsonv=' + e.d_jsonv + '&d_dst=' + e.d_dst,
							m = y ? '&h_referer=' + d(location.href) : '';
						return (
							(a = (i = u + I + '.demdex.net/event') + '?' + p + '&' + h + g + f + m),
							{
								corsSrc: i + '?' + p + '&_ts=' + new Date().getTime(),
								src: a,
								corsPostData: h + g + f + m,
								isDeclaredIdCall: '' !== c
							}
						);
					},
					fireRequest: function(e) {
						if ('img' === e.tag) this.fireImage(e);
						else {
							var t = A.declaredId,
								n = t.declaredId.request || t.declaredId.init || {},
								s = { dpid: n.dpid || '', dpuuid: n.dpuuid || '' };
							this.fireCORS(e, s);
						}
					},
					fireImage: function(t) {
						var e,
							n,
							s = A;
						s.abortRequests ||
							((s.firing = !0),
							(e = new Image(0, 0)),
							s.sent.push(t),
							(e.onload = function() {
								(s.firing = !1), s.fired.push(t), s.num_of_img_responses++, s.registerRequest();
							}),
							(n = function(e) {
								(c = 'imgAbortOrErrorHandler received the event of type ' + e.type),
									R.log(c),
									(s.abortRequests = !0),
									(s.firing = !1),
									s.errored.push(t),
									s.num_of_img_errors++,
									s.registerRequest();
							}),
							e.addEventListener('error', n),
							e.addEventListener('abort', n),
							(e.src = t.src));
					},
					fireCORS: function(s, i) {
						var r = this,
							o = A,
							e = this.corsMetadata.corsType,
							t = s.corsSrc,
							n = s.corsInstance,
							a = s.corsPostData,
							d = s.postCallbackFn,
							u = 'function' == typeof d;
						if (!o.abortRequests && !v) {
							o.firing = !0;
							try {
								n.open('post', t, !0),
									'XMLHttpRequest' === e &&
										((n.withCredentials = !0),
										n.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
										(n.onreadystatechange = function() {
											4 === this.readyState &&
												200 === this.status &&
												(function(e) {
													var t;
													try {
														if ((t = JSON.parse(e)) !== Object(t))
															return r.handleCORSError(s, i, 'Response is not JSON');
													} catch (e) {
														return r.handleCORSError(s, i, 'Error parsing response as JSON');
													}
													try {
														var n = s.callbackFn;
														(o.firing = !1), o.fired.push(s), o.num_of_cors_responses++, n(t, i), u && d(t, i);
													} catch (e) {
														(e.message = 'DIL handleCORSResponse caught error with message ' + e.message),
															(c = e.message),
															R.log(c),
															(e.filename = e.filename || 'dil.js'),
															(e.partner = I),
															DIL.errorModule.handleError(e);
														try {
															n({ error: e.name + '|' + e.message }, i), u && d({ error: e.name + '|' + e.message }, i);
														} catch (e) {}
													} finally {
														o.registerRequest();
													}
												})(this.responseText);
										})),
									(n.onerror = function() {
										r.handleCORSError(s, i, 'onerror');
									}),
									(n.ontimeout = function() {
										r.handleCORSError(s, i, 'ontimeout');
									}),
									n.send(a);
							} catch (e) {
								this.handleCORSError(s, i, 'try-catch');
							}
							o.sent.push(s), (o.declaredId.declaredId.request = null);
						}
					},
					handleCORSError: function(e, t, n) {
						A.num_of_cors_errors++, A.corsErrorSources.push(n);
					}
				},
				k = {
					isValidPdata: function(e) {
						return !!(e instanceof Array && this.removeEmptyArrayValues(e).length);
					},
					isValidLogdata: function(e) {
						return !this.isEmptyObject(e);
					},
					isEmptyObject: function(e) {
						if (e !== Object(e)) return !0;
						var t;
						for (t in e) if (e.hasOwnProperty(t)) return !1;
						return !0;
					},
					removeEmptyArrayValues: function(e) {
						var t,
							n = 0,
							s = e.length,
							i = [];
						for (n = 0; n < s; n++) null != (t = e[n]) && '' !== t && i.push(t);
						return i;
					},
					isPopulatedString: function(e) {
						return 'string' == typeof e && e.length;
					}
				},
				x = {
					convertObjectToKeyValuePairs: function(e, t, n) {
						var s,
							i,
							r = [];
						for (s in (t || (t = '='), e))
							e.hasOwnProperty(s) && null != (i = e[s]) && '' !== i && r.push(s + t + (n ? encodeURIComponent(i) : i));
						return r;
					},
					encodeAndBuildRequest: function(e, t) {
						return e
							.map(function(e) {
								return encodeURIComponent(e);
							})
							.join(t);
					},
					getCookie: function(e) {
						var t,
							n,
							s,
							i = e + '=',
							r = document.cookie.split(';');
						for (t = 0, n = r.length; t < n; t++) {
							for (s = r[t]; ' ' === s.charAt(0); ) s = s.substring(1, s.length);
							if (0 === s.indexOf(i)) return decodeURIComponent(s.substring(i.length, s.length));
						}
						return null;
					},
					setCookie: function(e, t, n, s, i, r) {
						var o = new Date();
						n && (n = 1e3 * n * 60),
							(document.cookie =
								e +
								'=' +
								encodeURIComponent(t) +
								(n ? ';expires=' + new Date(o.getTime() + n).toUTCString() : '') +
								(s ? ';path=' + s : '') +
								(i ? ';domain=' + i : '') +
								(r ? ';secure' : ''));
					},
					extendArray: function(e, t) {
						return e instanceof Array && t instanceof Array && (Array.prototype.push.apply(e, t), !0);
					},
					extendObject: function(e, t, n) {
						var s;
						if (e !== Object(e) || t !== Object(t)) return !1;
						for (s in t)
							if (t.hasOwnProperty(s)) {
								if (!k.isEmptyObject(n) && s in n) continue;
								e[s] = t[s];
							}
						return !0;
					},
					getMaxCookieExpiresInMinutes: function() {
						return E.SIX_MONTHS_IN_MINUTES;
					},
					replaceMethodsWithFunction: function(e, t) {
						var n;
						if (e === Object(e) && 'function' == typeof t)
							for (n in e) e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
					}
				},
				N = ((j = C.requestController),
				{
					exists: null,
					instance: null,
					aamIsApproved: null,
					init: function() {
						var e = this;
						this.checkIfExists()
							? ((this.exists = !0),
							  (this.instance = window.adobe.optIn),
							  this.instance.fetchPermissions(function() {
									e.callback();
							  }, !0))
							: (this.exists = !1);
					},
					checkIfExists: function() {
						return window.adobe === Object(window.adobe) && window.adobe.optIn === Object(window.adobe.optIn);
					},
					callback: function() {
						(this.aamIsApproved = this.instance.isApproved([this.instance.Categories.AAM])),
							j.adms.waitForMidToReleaseRequests(),
							j.adms.getIsOptedOut();
					},
					isApproved: function() {
						return !this.isIabContext() && !j.adms.isOptedOut && (!this.exists || this.aamIsApproved);
					},
					isIabContext: function() {
						return this.instance && this.instance.isIabContext;
					}
				});
			C.optIn = N;
			var F,
				Q,
				H,
				U,
				B = ((Q = (F = C).requestController),
				(H = F.optIn),
				(U = {
					isVendorConsented: null,
					doesGdprApply: null,
					consentString: null,
					queryStringObjectCallbacks: [],
					init: function() {
						this.fetchConsentData();
					},
					hasGoSignal: function() {
						return !(
							!(
								H.isIabContext() &&
								this.isVendorConsented &&
								this.doesGdprApply &&
								'string' == typeof this.consentString &&
								this.consentString.length
							) || Q.adms.isOptedOut
						);
					},
					fetchConsentData: function(n, e) {
						var s = this,
							t = {};
						'function' != typeof n && (n = function() {}),
							H.instance && H.isIabContext()
								? (e && (t.timeout = e),
								  H.instance.execute({
										command: 'iabPlugin.fetchConsentData',
										params: t,
										callback: function(e, t) {
											t === Object(t)
												? ((s.doesGdprApply = !!t.gdprApplies), (s.consentString = t.consentString || ''))
												: ((s.doesGdprApply = !1), (s.consentString = '')),
												(s.isVendorConsented = H.instance.isApproved(H.instance.Categories.AAM)),
												e ? n({}) : s.checkQueryStringObject(n),
												Q.adms.waitForMidToReleaseRequests();
										}
								  }))
								: n({});
					},
					getQueryString: function() {
						return H.isIabContext()
							? 'gdpr=' + (this.doesGdprApply ? 1 : 0) + '&gdpr_consent=' + this.consentString + '&'
							: '';
					},
					getQueryStringObject: function(e, t) {
						this.fetchConsentData(e, t);
					},
					checkQueryStringObject: function(e) {
						U.hasGoSignal() &&
							'function' == typeof e &&
							e({ gdpr: this.doesGdprApply ? 1 : 0, gdpr_consent: this.consentString });
					}
				}));
			(C.iab = B),
				'error' === I &&
					0 === r &&
					window.addEventListener('load', function() {
						DIL.windowLoaded = !0;
					});
			var G = !1,
				W = function() {
					G || ((G = !0), A.registerRequest(), X());
				},
				X = function() {
					setTimeout(function() {
						p || A.firstRequestHasFired || ('function' == typeof m ? M.afterResult(m).submit(!0) : M.submit(!0));
					}, DIL.constants.TIME_TO_DEFAULT_REQUEST);
				},
				K = document;
			'error' !== I &&
				(DIL.windowLoaded
					? W()
					: 'complete' !== K.readyState && 'loaded' !== K.readyState
					? window.addEventListener('load', function() {
							(DIL.windowLoaded = !0), W();
					  })
					: ((DIL.windowLoaded = !0), W())),
				A.declaredId.setDeclaredId(s, 'init'),
				N.init(),
				B.init(),
				A.processVisitorAPI();
			E.IS_IE_LESS_THAN_10 &&
				x.replaceMethodsWithFunction(M, function() {
					return this;
				}),
				(this.api = M),
				(this.getStuffedVariable = function(e) {
					var t = P.stuffed[e];
					return t || 'number' == typeof t || (t = x.getCookie(e)) || 'number' == typeof t || (t = ''), t;
				}),
				(this.validators = k),
				(this.helpers = x),
				(this.constants = E),
				(this.log = O),
				(this.pendingRequest = L),
				(this.requestController = A),
				(this.destinationPublishing = T),
				(this.requestProcs = V),
				(this.units = C),
				(this.initConfig = n),
				(this.logger = R),
				w && ((this.variables = P), (this.callWindowLoadFunctions = W));
		}),
		(DIL.extendStaticPropertiesAndMethods = function(e) {
			var t;
			if (e === Object(e)) for (t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
		}),
		DIL.extendStaticPropertiesAndMethods({
			version: '9.3',
			jsonVersion: 1,
			constants: { TIME_TO_DEFAULT_REQUEST: 500 },
			variables: { scriptNodeList: document.getElementsByTagName('script') },
			windowLoaded: !1,
			dils: {},
			isAddedPostWindowLoad: function() {
				var e = arguments[0];
				this.windowLoaded = 'function' == typeof e ? !!e() : 'boolean' != typeof e || e;
			},
			create: function(e) {
				try {
					return new DIL(e);
				} catch (e) {
					throw new Error('Error in attempt to create DIL instance with DIL.create(): ' + e.message);
				}
			},
			registerDil: function(e, t, n) {
				var s = t + '$' + n;
				s in this.dils || (this.dils[s] = e);
			},
			getDil: function(e, t) {
				var n;
				return (
					'string' != typeof e && (e = ''),
					t || (t = 0),
					(n = e + '$' + t) in this.dils
						? this.dils[n]
						: new Error('The DIL instance with partner = ' + e + ' and containerNSID = ' + t + ' was not found')
				);
			},
			dexGetQSVars: function(e, t, n) {
				var s = this.getDil(t, n);
				return s instanceof this ? s.getStuffedVariable(e) : '';
			}
		}),
		(DIL.errorModule = ((r = DIL.create({ partner: 'error', containerNSID: 0, ignoreHardDependencyOnVisitorAPI: !0 })),
		(a = !(o = {
			harvestererror: 14138,
			destpuberror: 14139,
			dpmerror: 14140,
			generalerror: 14137,
			error: 14137,
			noerrortypedefined: 15021,
			evalerror: 15016,
			rangeerror: 15017,
			referenceerror: 15018,
			typeerror: 15019,
			urierror: 15020
		})),
		{
			activate: function() {
				a = !0;
			},
			handleError: function(e) {
				if (!a) return 'DIL error module has not been activated';
				e !== Object(e) && (e = {});
				var t = e.name ? (e.name + '').toLowerCase() : '',
					n = t in o ? o[t] : o.noerrortypedefined,
					s = [],
					i = {
						name: t,
						filename: e.filename ? e.filename + '' : '',
						partner: e.partner ? e.partner + '' : 'no_partner',
						site: e.site ? e.site + '' : document.location.href,
						message: e.message ? e.message + '' : ''
					};
				return (
					s.push(n),
					r.api
						.pixels(s)
						.logs(i)
						.useImageRequest()
						.submit(),
					'DIL error report sent'
				);
			},
			pixelMap: o
		})),
		(DIL.tools = {}),
		(DIL.modules = { helpers: {} }));
})();
